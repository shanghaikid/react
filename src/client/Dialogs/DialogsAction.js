export function toggleDialogOpen(dialogName, openState) {
    let hasStateSet = typeof openState !== 'undefined',
        openStateName = 'IsOpen';

    return function(state, props) {
        return {[dialogName + openStateName]: hasStateSet ? openState : !state[dialogName + openStateName]};
    }
}