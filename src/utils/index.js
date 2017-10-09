// isObj: check if the given obj is an Object
export function isObj(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}

// clone: clone the given object
export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// flatten state object
// grid:{layout:{menu:{expand:true}}}} => gridLayoutMenuExpand:true
export function e(stateObject) {
    function _f(stateObject, root, result) {
        for (const [key, value] of Object.entries(stateObject)) {
            let valueIsObj = isObj(value),
                r = `${root}${root === '' ? key : key.charAt(0).toUpperCase() + key.slice(1)}`;

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
