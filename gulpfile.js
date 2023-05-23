const gulp = require('gulp'); //importando o Gulp
const sass = require('gulp-sass')(require('sass')); //importando o Gulp-Sass e o Sass

function styles(){ //função de compressão do arquivo SASS para CSS
    return gulp.src('./src/styles/*.scss') //recuperando os arquivos SASS
        .pipe(sass({ outputStyle: 'compressed' })) //encadeamento de compressão
        .pipe(gulp.dest('./dist/css')); //pasta de destido
}

exports.default = styles;
exports.watch = function(){ //função de monitoramento do Gulp
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}