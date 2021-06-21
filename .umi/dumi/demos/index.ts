// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/dom/full-screen/index.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/dom/full-screen/useFullScreen.ts?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/html/video-react/index.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/react/react-custom-scrollbars/index.tsx?dumi-raw-code';

export default {
  'dom-full-screen': {
    component: (require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/dom/full-screen/index.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"useFullScreen.ts":{"import":"./useFullScreen","content":rawCode2}},"dependencies":{"antd":{"version":"4.15.6","css":"antd/dist/antd.css"},"react":{"version":"16.14.0"},"react-dom":{"version":">=16.9.0"}},"identifier":"dom-full-screen"},
  },
  'html-video-react': {
    component: (require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/html/video-react/index.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"^15.0.0 || ^16.0.0"},"video-react":{"version":"0.14.1","css":"video-react/dist/video-react.css"},"react-dom":{"version":"^15.0.0 || ^16.0.0"}},"identifier":"html-video-react"},
  },
  'react-react-custom-scrollbars': {
    component: (require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/react/react-custom-scrollbars/index.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"^0.14.0 || ^15.0.0 || ^16.0.0"},"react-custom-scrollbars":{"version":"4.2.1"},"react-dom":{"version":"^0.14.0 || ^15.0.0 || ^16.0.0"}},"identifier":"react-react-custom-scrollbars"},
  },
};
