export default {
  outputPath: 'docs',
  mode: 'site',
  base: '/learn',
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : 
    'http://xzfyu.com/learn/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ]
  ],
  resolve: {
    includes: ['mds'],
  }
};
