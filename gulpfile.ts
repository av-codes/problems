import * as gulp from "gulp";
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const log = require('fancy-log');
gulp.task("default", () => {
  return new Promise((resolve, reject) => {
    console.log("default");
    resolve(0);
  });
});
let prob:string ="", i:number = process.argv.indexOf("--prob"), prob_num:number = 0;
if(i>-1) {
    prob = process.argv[i+1];
    prob_num=parseInt(prob.split('.')[0]);
}

gulp.task("new_ts",()=>{
    return gulp.src(['new.x'])
    .pipe(replace("FUNC","new_func"))
    .pipe(replace("000",`${prob_num}`))
    .pipe(rename(`${prob_num}.ts`))
    .on("data",()=>{log(`writing ${prob_num}.ts`)})
    .pipe(gulp.dest('src/'));
})
gulp.task("new_test_js",()=>{
    return gulp.src(['new.test.x'])
    .pipe(replace("000",`${prob_num}`))
    .pipe(replace("XXX",`${prob}`))
    .pipe(rename(`${prob_num}.test.js`))
    .on("data",()=>{log(`writing ${prob_num}.test.js`)})
    .pipe(gulp.dest('src/'));
})
gulp.task("new_debug_ts",()=>{
    return gulp.src(['debug.x'])
    .pipe(replace("000",`${prob_num}`))
    .pipe(rename(`debug.ts`))
    .on("data",()=>{log(`writing debug.ts`)})
    .pipe(gulp.dest('src/'));
})


gulp.task("prob",gulp.parallel("new_ts", "new_test_js" ,"new_debug_ts"));