export const test = function(condition, message, onEnd) {
    try {
        console.assert.apply(console, arguments);

        /* istanbul ignore if  */
        if (typeof message === 'string' && condition) {
            console.log('✔ ' + message);
            typeof onEnd === 'function' && onEnd();
        }
    } catch(error) {
        test.exitCode = 1;
        console.error('✖ ' + error);
        typeof onEnd === 'function' && onEnd();
    }
}

export const assert = function(condition, message, onEnd) {
    /* istanbul ignore if  */
    if (typeof condition === 'boolean') {
        return test.apply(null, arguments);
    }

    /* istanbul ignore if  */
    if (typeof condition === 'function') {
        return condition.call(null, test);
    }
}
