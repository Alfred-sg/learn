// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/alfred/Desktop/dvp/react-demos-use-dumi/node_modules/_@umijs_runtime@3.4.22@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/node_modules/_@umijs_preset-dumi@1.1.18@@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/node_modules/_@umijs_preset-dumi@1.1.18@@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/node_modules/_@umijs_preset-dumi@1.1.18@@umijs/preset-dumi/lib/theme/layout').default, require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/node_modules/_@umijs_preset-dumi@1.1.18@@umijs/preset-dumi/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1621749254406,
          "title": "learn",
          "order": 1,
          "hero": {
            "title": "learn",
            "desc": "<div class=\"markdown\"><p>html5</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/h5/medio"
              }
            ]
          },
          "slugs": [
            {
              "depth": 2,
              "value": "✨ Features",
              "heading": "-features"
            }
          ]
        },
        "title": "learn"
      },
      {
        "path": "/h5/media",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/docs/h5/media.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/h5/media.md",
          "updatedTime": 1621750256113,
          "title": "video & audio",
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "video",
              "heading": "video"
            },
            {
              "depth": 3,
              "value": "smaple",
              "heading": "smaple"
            },
            {
              "depth": 3,
              "value": "attribute",
              "heading": "attribute"
            },
            {
              "depth": 3,
              "value": "property",
              "heading": "property"
            },
            {
              "depth": 3,
              "value": "event",
              "heading": "event"
            },
            {
              "depth": 3,
              "value": "source",
              "heading": "source"
            },
            {
              "depth": 3,
              "value": "library",
              "heading": "library"
            },
            {
              "depth": 2,
              "value": "audio",
              "heading": "audio"
            },
            {
              "depth": 2,
              "value": "video-react",
              "heading": "video-react"
            }
          ],
          "nav": {
            "path": "/h5",
            "title": "H5"
          }
        },
        "title": "video & audio"
      },
      {
        "path": "/h5/storage",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/docs/h5/storage.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/h5/storage.md",
          "updatedTime": 1621766802321,
          "title": "storage & IndexedDB",
          "order": 2,
          "slugs": [
            {
              "depth": 2,
              "value": "localStorage & sessionStorage",
              "heading": "localstorage--sessionstorage"
            },
            {
              "depth": 2,
              "value": "IndexedDB",
              "heading": "indexeddb"
            }
          ],
          "nav": {
            "path": "/h5",
            "title": "H5"
          }
        },
        "title": "storage & IndexedDB"
      },
      {
        "path": "/h5",
        "meta": {},
        "exact": true,
        "redirect": "/h5/media"
      }
    ],
    "title": "learn-html5",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
