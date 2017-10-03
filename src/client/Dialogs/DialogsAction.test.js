import { toggleDialogOpen } from './DialogsAction';

describe('DialogAction state generator', () => {
    test('toggleDialogOpen', () => {
        let dialogName = 'myDialog';
        let state1 = toggleDialogOpen(dialogName)({[dialogName + 'Opened']: false});
        let state2 = toggleDialogOpen(dialogName)({[dialogName + 'Opened']: true});

        expect(state1[dialogName + 'Opened']).toBe(true);
        expect(state2[dialogName + 'Opened']).toBe(false);
    });
});