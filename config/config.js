var path = require('path');

var config = {};      // 创建配置对象

// 开发环境
config.env = process.env.NODE_ENV || 'development';
config.cache = config.env === 'production';
config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  }
};


// webpack
// 服务器设置
config.webpack_host = 'localhost';
config.webpack_port = process.env.PORT || 8888;

// 第三方依赖
config.vendor_dependencies = [
  'jquery',
  // 'react',
  // 'react-redux',
  //...
];

// 项目根目录
config.path_project = path.resolve(__dirname, '../');
config.dir_src = 'src';       // 源码目录
config.dir_dist = 'dist';     // 打包输出目录

// 设置常用目录
var paths = (() => {
  var base = [config.path_project];
  var resolve = path.resolve;

  var project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.dir_src),
    dist    : project.bind(null, config.dir_dist)
  };
})();

config.utils_paths = paths;

// 设置别名，简化import引用
config.utils_aliases = [
  'components',
  'assets',
  // ...
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {});

module.exports = config;