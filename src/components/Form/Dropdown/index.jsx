import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import TextInput from '../TextInput';

import { popupable } from '../../Helper';
import { getClsName } from '../../../utils';

export class Dropdown extends BaseComponent {
    get selectedItem() {
        return this.state.items.filter(item => item.id === this.state.selectedId)[0];
    }
    init() {
        // class
        this.baseClassName = `dropdown`;
        this.placeholderClass = this.getLibPrefixedClass('placeholder');
        // handlers
        this.close = this.close.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        // state
        this.initFilter = () => true;
        this.state = this.transformState({
            isOpen: false,
            selectedId: '-1',
            items: [],
            textInput: {
                inputValue: '',
                name: 'textInput'
            },
            filter: this.initFilter
        });
    }

    componentDidMount() {
        document.addEventListener('click', (this._clickOrFocusAnywhereHandler = e => this._clickOrFocusAnywhere(e)));
        const {items} = this.props;

        this.setState({items: items.map((item, i) => Object.assign(item, {id: 'item' + i}))});
    }

    componentWillReceiveProps(nextProps) {
        super.componentWillReceiveProps && super.componentWillReceiveProps(nextProps);
    }

    _clickOrFocusAnywhere(e) {
        // if the click was within self, ignore; otherwise, close self
        if (!this.domNode.contains(e.target)) {
            this.close();
        }
    }

    onClick(e) {
        this.setState({
            isOpen: !this.state.isOpen,
            filter: this.initFilter
        });

        const { id, selected, label} = e.target.dataset;

        if (selected === 'false') {
            this.setState({
                selectedId: id,
                textInput: {
                    inputValue: label
                }
            }, this.onChange.bind(this));
        }
    }

    onChange() {
        this.props.onChange(Object.assign({}, this.state, {target: this.domNode}));
    }

    onInputChange(e) {
        const inputValue = e.target.value;

        this.setState({
            isOpen: true,
            textInput: { inputValue },
            filter: this.getFilter(inputValue)
        });
    }

    getFilter(inputValue) {
        return item => {
            let chars = inputValue.split(''),
                regGrp = chars.map(c => `[${(c + '').toUpperCase()}${(c + '').toLowerCase()}]`);

            return (new RegExp(regGrp.join(''))).test(item.label)
        };
    }

    close() {
        this.setState({
            textInput: {
                inputValue: this.selectedItem ? this.selectedItem.label : ''
            },
            isOpen: false,
            filter: this.initFilter
        });
    }

    render() {
        const { placeholder } = this.props,
            {items, selectedId} = this.state,
            selectedItem = items.filter(item => item.id == selectedId)[0],
            [inputProps] = this.getStates(['textInput']),
            newInputProps = Object.assign({}, inputProps, {
                autocomplete: "off",
                onChange: this.onInputChange,
                placeholder: selectedItem ? selectedItem.label : placeholder
            });

        return (
            <div className={this.className} ref={this.processRef} onClick={this.handleEvent}>
                <DropdownItem selected={!!selectedItem} value={selectedItem ? selectedItem.value : ''} className={this.placeholderClass + ' none current'}>
                    <TextInput {...newInputProps} />
                </DropdownItem>
                <DropdownList isOpen={this.state.isOpen} filter={this.state.filter} close={this.close} items={items} selectedId={selectedId} />
            </div>
        );
    }
}

Dropdown.defaultProps = {
    placeholder: 'Please Select...',
    onChange: () => {}
};

Dropdown.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export class DropdownListView extends BaseComponent {
    static get type() {
        return 'Dropdown';
    }

    init() {
        this.baseClassName = `dropdownWrapper`;
    }

    render() {
        const {items, className, styleObj, selectedId, filter, noItemMessage} = this.props,
            cls = getClsName(this.className, (!this.props.isOpen ? 'hidden' : '')),
            newItems = items.filter(filter),
            hasItem = newItems.length > 0;

        return (
            <div className={cls} style={styleObj}>
                {hasItem ? newItems.map(item => <DropdownItem key={item.id} id={item.id} label={item.label} value={item.value} selected={selectedId === item.id} /> ) : <DropdownItem>{noItemMessage}</DropdownItem>}
            </div>
        );
    }
}

DropdownListView.defaultProps = {
    styleObj: {},
    close: () => {},
    filter: () => true,
    noItemMessage: 'No Item Found'
}

DropdownListView.propTypes = {
    styleObj: PropTypes.object,
    close: PropTypes.func.isRequired,
    filter: PropTypes.func,
    noItemMessage: PropTypes.string
}

export const DropdownList = popupable(DropdownListView);

export class DropdownItem extends BaseComponent {
    init() {
        this.baseClassName = `dropdownItem`;
    }

    render() {
        const {children, className, value, label, id, selected} = this.props;

        return (
            <div data-id={id} data-selected={selected} data-label={label} data-value={value} className={this.className}>{children || label}</div>
        );
    }
}

DropdownItem.defaultProps = {
    string: 'Please Select...',
    value: '',
    selected: false
};

DropdownItem.propTypes = {
    value: PropTypes.any,
    label: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool
};

export default Dropdown;