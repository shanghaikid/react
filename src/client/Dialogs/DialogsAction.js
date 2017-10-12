export function toggleDialogOpen(dialogName, openState) {
    let hasStateSet = typeof openState !== 'undefined',
        openStateName = '$isOpen';

    return function(state, props) {
        return {[dialogName + openStateName]: hasStateSet ? openState : !state[dialogName + openStateName]};
    }
}