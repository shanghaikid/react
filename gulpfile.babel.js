import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import gulpUtil from 'gulp-util';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import postcssSVG from 'postcss-svg';
import sourcemaps from 'gulp-sourcemaps';
import notifierCreator from './utils/notifier';

// folder definitions
const files = {
        client: [ 'src/app/**/*.js', '!src/app/**/*.test.js'],
        server: [ 'src/server/**/*.js',  '!src/server/**/*.test.js'],
        css: ['src/public/css/**/*.scss'],
        copy: ['src/server/**/*.html'],
        script: ['src/public/js/**/*.js']
    },
    destination = 'dev',
    browsers = ['last 2 versions', 'ff esr', 'not ie < 11', 'not ie_mob < 11'],
    notifier = notifierCreator({ messagePrefix: '' });

function notify({ title, message, incrementalBuild, turnAroundTime, error }) {
    if (error) {
        gulpUtil.log(gulpUtil.colors.red(message), error.toString());
        gulpUtil.beep();
        message += ' See console for details.';
    } else if (incrementalBuild) {
        message += `\n${turnAroundTime} seconds after save.`;
    }
    notifier.notifyDesktop({ title, message });
}

function sassTask(
    sassFiles,
    destinationDir,
    {
        sassOptions = { },
        iconDirs = [],
        messagePrefix = ''
    } = {}) {
    return gulp.src(sassFiles)
        .pipe(plumber(function(error) {
            notify({
                title: 'ERROR',
                message: `${messagePrefix} Sass compile error.`,
                error
            });
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions))
        .pipe(postcss([
            postcssSVG({ paths: [...iconDirs] }),
            autoprefixer({ browsers })
        ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destinationDir))
        .on('end', () => notify({
            title: messagePrefix,
            message: `Finished compiling ${messagePrefix} CSS resources.`
        }));
}


// sass
gulp.task('sass', () => sassTask(files.css, `${destination}/public/css`, { messagePrefix: 'base'}));
gulp.task('sass:watch', ['sass'], () => gulp.watch(files.css, ['sass']));

// client
gulp.task('client', () => {
    gulp.src(files.client)
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins:['transform-es2015-modules-amd']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(`${destination}/public`))
});
gulp.task('client:watch', ['client'], () => gulp.watch(files.client, ['client']));
// server
gulp.task('server', () => {
    gulp.src(files.server)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(`${destination}`))
});
gulp.task('server:watch', ['server'], () => gulp.watch(files.server, ['server']));

// script
gulp.task('script', () => {
    gulp.src(files.script)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(`${destination}/public/js`))
});

// server html
gulp.task('copy', function () {
    gulp.src(files.copy)
        .pipe(gulp.dest(`${destination}`));
});
gulp.task('copy:watch', ['copy'], () => gulp.watch(files.copy, ['copy']));


gulp.task('default', ['sass', 'server', 'client', 'copy', 'script']);
gulp.task('watch', ['sass:watch', 'server:watch', 'client:watch', 'copy:watch']);