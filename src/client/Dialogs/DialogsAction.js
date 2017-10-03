export function toggleDialogOpen(dialogName) {
    return function(state, props) {
        return {[dialogName + 'Opened']: !state[dialogName + 'Opened']};
    }
}