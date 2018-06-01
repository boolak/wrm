# webpack4 + react + mobx
说明：
1. wepack4与前版本一些变化，参考：https://blog.csdn.net/qq_26733915/article/details/79446460
2. webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
3. Since webpack v4 the extract-text-webpack-plugin should not be used for css. Use mini-css-extract-plugin instead.
#
tips：
安装node-sass若是出错，按以下操作：
  1. 先运行： npm install -g node-gyp 
  2. 然后运行：运行 npm install –global –production windows-build-tools 可以自动安装跨平台的编译器：gym
