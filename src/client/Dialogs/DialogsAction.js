export function toggleDialogOpen(dialogName, openState) {
    let hasStateSet = typeof openState !== 'undefined';

    return function(state, props) {
        return {[dialogName + 'Opened']: hasStateSet ? openState : !state[dialogName + 'Opened']};
    }
}