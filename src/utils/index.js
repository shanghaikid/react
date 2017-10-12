// isObj: check if the given obj is an Object
export function isObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

// clone: simple clone the given object
// not support function and circular reference
export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// flatten state object
// grid:{layout:{menu:{expand:true}}}} => grid-layout-menu-expand:true
export function e(stateObject, delmiter = '-') {
    function _f(stateObject, root, result) {
        for (const [key, value] of Object.entries(stateObject)) {
            let valueIsObj = isObj(value),
                r = `${root ? root + delmiter + key : key}`;

            if (valueIsObj) {
                _f(value, r, result);
            } else {
                result[r] = value;
            }
        }
    }

    var result = {};
    _f(stateObject, '', result);
    return result;
}

// getCenterPosition: get child position when it is at center of the parent
export function getCenterPosition({innerWidth = 1000, innerHeight=800}, {width = 400, height = 400}) {
    return {
        left: (innerWidth - width) / 2,
        top: (innerHeight - height) / 2
    }
}

// getClsName: concate aruments with space
export function getClsName() {
    return Array.from(arguments).filter(s => s !=='' && typeof s !== 'undefined').join(' ');
}

// isEmpty: check if the string is empty
export function isEmpty(value, trim=true) {
    return (trim ? /^\s*$/ : /^$/).test(value); // Boolean
}
