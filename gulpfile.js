const {
    src,
    dest,
    series
} = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const minify = require('gulp-minify');

const tsProject = ts.createProject('tsconfig.json');

const toClean = () => {
    return src(
            'dist', {
                allowEmpty: true
            }
        )
        .pipe(
            clean({
                force: true
            })
        );
}

const static = () => {
    return src(
            ['src/**/*', '!src/**/*.ts', 'package.json', '.env']
        )
        .pipe(
            dest('dist')
        );
}

const scripts = () => {
    const tsResult = tsProject
        .src()
        .pipe(tsProject());
    
    return tsResult.js
    // .pipe(
    //     minify({
    //         noSource: true,
    //         ext: {
    //             min: '.js'
    //         }
    //     })
    // )
    .pipe(
        dest('dist')
    );
}

exports.default = series(toClean, static, scripts);