export function toggleDisable(inputName, disabled) {
    let hasStateSet = typeof disabled !== 'undefined',
        disabledState = 'Disabled';

    return function(state, props) {
        return {[inputName + disabledState]: hasStateSet ? disabled : !state[inputName + disabledState]};
    }
}