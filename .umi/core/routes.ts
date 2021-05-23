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
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "mds/index.md",
          "updatedTime": 1621770306000,
          "title": "learn",
          "order": 1,
          "hero": {
            "title": "learn",
            "desc": "<div class=\"markdown\"><p>html5</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/html/medio"
              }
            ]
          },
          "slugs": [
            {
              "depth": 2,
              "value": "✨ Features",
              "heading": "-features"
            },
            {
              "depth": 3,
              "value": "html",
              "heading": "html"
            },
            {
              "depth": 3,
              "value": "dom",
              "heading": "dom"
            }
          ]
        },
        "title": "learn"
      },
      {
        "path": "/dom/rect",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/dom/rect.md').default,
        "exact": true,
        "meta": {
          "filePath": "mds/dom/rect.md",
          "updatedTime": 1621779615655,
          "title": "rect",
          "order": 1,
          "slugs": [
            {
              "depth": 2,
              "value": "getBoundingClientRect",
              "heading": "getboundingclientrect"
            },
            {
              "depth": 2,
              "value": "clientWidth、offsetWidth、scrollWidth",
              "heading": "clientwidth、offsetwidth、scrollwidth"
            },
            {
              "depth": 2,
              "value": "getComputedStyle",
              "heading": "getcomputedstyle"
            },
            {
              "depth": 2,
              "value": "屏幕宽高、滚动偏移量等",
              "heading": "屏幕宽高、滚动偏移量等"
            },
            {
              "depth": 2,
              "value": "dom-align",
              "heading": "dom-align"
            }
          ],
          "nav": {
            "path": "/dom",
            "title": "Dom"
          }
        },
        "title": "rect"
      },
      {
        "path": "/dom/scrollbars",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/dom/scrollbars.md').default,
        "exact": true,
        "meta": {
          "filePath": "mds/dom/scrollbars.md",
          "updatedTime": 1621779263065,
          "title": "scrollbars",
          "order": 2,
          "slugs": [
            {
              "depth": 2,
              "value": "react-custom-scrollbars",
              "heading": "react-custom-scrollbars"
            }
          ],
          "nav": {
            "path": "/dom",
            "title": "Dom"
          }
        },
        "title": "scrollbars"
      },
      {
        "path": "/html/media",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/html/media.md').default,
        "exact": true,
        "meta": {
          "filePath": "mds/html/media.md",
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
            "path": "/html",
            "title": "Html"
          }
        },
        "title": "video & audio"
      },
      {
        "path": "/html/storage",
        "component": require('/Users/alfred/Desktop/dvp/react-demos-use-dumi/mds/html/storage.md').default,
        "exact": true,
        "meta": {
          "filePath": "mds/html/storage.md",
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
            "path": "/html",
            "title": "Html"
          }
        },
        "title": "storage & IndexedDB"
      },
      {
        "path": "/dom",
        "meta": {},
        "exact": true,
        "redirect": "/dom/rect"
      },
      {
        "path": "/html",
        "meta": {},
        "exact": true,
        "redirect": "/html/media"
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
