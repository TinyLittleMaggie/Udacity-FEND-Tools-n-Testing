function defaultTask(cb) {
  console.log('Hello from inside gulpfile.js !!!');
  cb();
}

exports.default = defaultTask
