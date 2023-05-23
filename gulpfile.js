const gulp = require('gulp'); //importando o Gulp
const sass = require('gulp-sass')(require('sass')); //importando o Gulp-Sass e o Sass
const imagemin = require('gulp-imagemin'); //importando o Compressor de Imagens

function styles(){ //função de compressão do arquivo SASS para CSS
    return gulp.src('./src/styles/*.scss') //acessando arquivos SASS
        .pipe(sass({ outputStyle: 'compressed' })) //comprimindo arquivo e convertendo
        .pipe(gulp.dest('./dist/css')); //direcionando para pasta de destido
}

function images(){ //função de compressão de Imagens
    return gulp.src('./src/images/**/*') //acessando a pasta de imagens
        .pipe(imagemin()) //comprimindo imagens
        .pipe(gulp.dest('./dist/images')); //direcionando imagens comprimidas para destido
}

exports.default = gulp.parallel(styles, images);
exports.watch = function(){ //função de monitoramento do Gulp
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}