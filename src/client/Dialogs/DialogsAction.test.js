import { toggleDialogOpen } from './DialogsAction';

describe('DialogAction state generator', () => {
    test('toggleDialogOpen', () => {
        let dialogName = 'myDialog';
        let state1 = toggleDialogOpen(dialogName)({[dialogName + 'IsOpen']: false});
        let state2 = toggleDialogOpen(dialogName)(state1);
        let state = true;
        let state3 = toggleDialogOpen(dialogName, state)(state2);

        console.log(state3)
        expect(state1[dialogName + 'IsOpen']).toBe(true);
        expect(state2[dialogName + 'IsOpen']).toBe(false);
        expect(state3[dialogName + 'IsOpen']).toBe(true);
    });
});