const gulpDebug = require('gulp-debug');
const notifier = require('node-notifier');

module.exports = function createNotifier({ messagePrefix }) {
    return {
        notifyConsoleStream(gulpDebugArgs) {
            const { title } = gulpDebugArgs;
            const augmentedArgs = Object.assign({}, gulpDebugArgs, {
                title: `${messagePrefix}${title}`
            });
            return gulpDebug(augmentedArgs);
        },

        notifyDesktop(notifierArgs) {
            const { title } = notifierArgs;
            const augmentedArgs = Object.assign({}, notifierArgs, {
                title: `${messagePrefix}${title}`
            });
            notifier.notify(augmentedArgs);
        }
    };
};
