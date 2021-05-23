export default {
  outputPath: 'site',
  mode: 'site',
  base: '/learn',
  history: { type: 'hash' },
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
    includes: ['docs'],
  }
};
