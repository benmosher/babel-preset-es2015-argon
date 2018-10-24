
module.exports = function(api) {
  api.assertVersion(7);
  
  return {
    plugins: [
      require("@babel/plugin-transform-sticky-regex"),
      require("@babel/plugin-transform-unicode-regex"),
      require("@babel/plugin-transform-spread"),
      require("@babel/plugin-transform-parameters"),
      require("@babel/plugin-transform-destructuring"),
      require("@babel/plugin-transform-modules-commonjs"),
    ]
  };
};