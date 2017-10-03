import {isObj, e} from './';

describe('Utils', () => {
    test('isObj', () => {
        let n = 1,
            b = true,
            a = [],
            obj = {},
            nan = NaN;

        expect(isObj(n)).toBe(false);
        expect(isObj(b)).toBe(false);
        expect(isObj(a)).toBe(false);
        expect(isObj(nan)).toBe(false);
        expect(isObj(obj)).toBe(true);
    });

    test('state object flatten', () => {
        let stateObj = {
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

        let result = e(stateObj);
        expect(result['dialogDialogOpened']).toBe(false);
        expect(result['gridButtonHidden']).toBe(true);
        expect(result['gridLayoutMenuExpand']).toBe(true);
        expect(result['gridHidden']).toBe(false);
        expect(result['hidden']).toBe(false);

    });
});
