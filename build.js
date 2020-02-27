var stealTools = require("steal-tools");

var promise = stealTools.build({
  config: __dirname+"/package.json!npm"
},{
  minify: false,
  debug: false,
  bundlePromisePolyfill: false,
  treeShaking: true,
  forceES5: false
});
