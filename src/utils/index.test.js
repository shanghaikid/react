import {isObj, e, clone} from './';

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

    test('clone obj', () => {
        let n = {a: 1, b:2};

        let b = clone(n);
        expect(isObj(b)).toBe(true);
        expect(b.a).toEqual(n.a);
        expect(b.b).toEqual(n.b);
        expect(b).not.toBe(n);
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
