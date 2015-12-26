
var gulp = require("gulp"),
    gulpRiot = require("gulp-riot")
    gulpConcat =  require("gulp-concat")
    tagsDir = "./src/static/tags/"
    tagsSource = tagsDir + "*.tag"
    tagsDest = tagsDir + "allTags.js";

gulp.task("tags", ()=> {
   gulp.src(tagsSource)
       .pipe(gulpRiot())
       .pipe(gulpConcat("allTags.js"))
       .pipe(gulp.dest(tagsDir));

});

gulp.task("default",["tags"]);
