import BaseComponent from './BaseComponent';
import renderer from 'react-test-renderer';
// const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
describe('BaseComponent', () => {
    
    const stateObj = {
        dialog: {
            dialogOpened: false
        },
        grid: {
            button: {
                hidden: true
            },
            layout: {
                menu: {
                    expand: true
                }
            },
            hidden: false
        },
        hidden: false,
    };

    test('transformState', () => {
        let instance = new BaseComponent();
        let result = instance.transformState(stateObj);
        expect(result['dialog$dialogOpened']).toBe(false);
        expect(result['grid$button$hidden']).toBe(true);
        expect(result['grid$layout$menu$expand']).toBe(true);
        expect(result['grid$hidden']).toBe(false);
        expect(result['hidden']).toBe(false);

    });

    test('getState', () => {
        let instance2 = new BaseComponent();
        instance2.state = instance2.transformState(stateObj);
        let dialogState = instance2.getState('dialog');
        expect(dialogState['dialogOpened']).toBe(false);

        let gridButtonState = instance2.getState('grid$button');
        expect(gridButtonState['hidden']).toBe(true);

        let rootState = instance2.getState('hidden');
        expect(rootState).toBe(false);
    });

    test('getStates', () => {
        let instance3 = new BaseComponent();
        instance3.state = instance3.transformState(stateObj);

        let [gridButton, gridLayoutMenu, grid] = instance3.getStates(['grid$button', 'grid$layout$menu','grid']);

        expect(gridButton.hidden).toBe(true);
        expect(gridLayoutMenu.expand).toBe(true);
        expect(grid.hidden).toBe(false);
    });

    test('getLibPrefixedClass', () => {
        let instance4 = new BaseComponent();
        instance4.libClassPrefix = 'f';

        expect(instance4.getLibPrefixedClass('any')).toBe('f-any');

    });

    test('setState', () => {
        let instance5 = new BaseComponent();
        instance5.state = instance5.transformState(stateObj);
        var oldConsole = console;
        try { // avoid error which we test it on unmounted component
            console = {};
            instance5.setState({
                dialog: {
                    dialog$dialogOpened: true
                },
                grid: {
                    button: {
                        hidden: false
                    }
                },
                hidden: true
            }, () => {
                let [gridButton] = instance5.getStates(['grid$button']);
                let dialogState = instance2.getState('dialog');
                expect(dialogState.dialogOpened).toBe(true);
                console = oldConsole;
            });
          } catch (e) {}
    });
});