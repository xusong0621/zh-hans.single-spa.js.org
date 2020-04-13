(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{230:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(9),p=(t(0),t(300)),i={id:"ecosystem-ember",title:"single-spa-ember",sidebar_label:"Ember"},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"API",id:"api",children:[{value:"\u52a0\u8f7dEmber\u5e94\u7528\u7a0b\u5e8f",id:"\u52a0\u8f7dember\u5e94\u7528\u7a0b\u5e8f",children:[]},{value:"singleSpaEmber",id:"singlespaember",children:[]}]},{value:"\u4f7f\u7528ember cli",id:"\u4f7f\u7528ember-cli",children:[]}],l={rightToc:s},o="wrapper";function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)(o,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"single-spa-ember \u662f\u4e00\u4e2a\u5b83\u53ef\u4ee5\u5e2e\u52a9Ember\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa \u5e94\u7528"),"\u9700\u8981\u7684",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"\u751f\u547d\u5468\u671f\u51fd\u6570")," \uff08bootstrap\u3001mount\u548cunmount\uff09\u7684\u8f85\u52a9\u5e93\uff0c\u4ee5\u4fbf\u4e0e","[ember.js]","\u4e00\u8d77\u4f7f\u7528\uff08",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.emberjs.com/%EF%BC%89%E3%80%82%E8%AF%B7%E6%9F%A5%E7%9C%8B%5Bsingle"}),"https://www.emberjs.com/\uff09\u3002\u8bf7\u67e5\u770b[single")," spa ember github](",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-ember"}),"https://github.com/single-spa/single-spa-ember"),")"),Object(p.b)("p",null,"\u4e3a\u4e86\u65b9\u4fbfbower\u548cember cli\u4e00\u8d77\u4f7f\u7528\u7684\u573a\u666f\u3002\u5b83\u5728npm\u548cbower\u4e0a\u90fd\u4ee5",Object(p.b)("inlineCode",{parentName:"p"},"single-spa-ember"),"\u7684\u5f62\u5f0f\u63d0\u4f9b\u3002"),Object(p.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(p.b)("p",null,"\u6784\u5efaember\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa\u5e94\u7528\u7a0b\u5e8f"),"\u5de5\u4f5c\u65f6\uff0c\u9700\u8981\u5b9e\u73b0\u4e94\u4ef6\u4e8b\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"}),"\u52a0\u8f7d\u51fd\u6570")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#activity-function"}),"\u6d3b\u52a8\u51fd\u6570")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#bootstrap"}),"\u5f15\u5bfc\u51fd\u6570")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#mount"}),"\u88c5\u8f7d\u51fd\u6570")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#unmount"}),"\u5378\u8f7d\u51fd\u6570"))),Object(p.b)("p",null,"\u9664\u6d3b\u52a8\u51fd\u6570\u4ee5\u5916\uff0cSingle-spa-ember\u4f1a\u5e2e\u52a9\u60a8\u5b9e\u73b0\u6240\u6709\u529f\u80fd\u3002"),Object(p.b)("p",null,"\u6ce8\u610f\uff0c\u52a0\u8f7d\u548c\u6d3b\u52a8\u51fd\u6570\u662f",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md"}),"single spa root application"),"\u7684\u4e00\u90e8\u5206\uff0c\u800c\u5f15\u5bfc\u3001\u88c5\u8f7d\u548c\u5378\u8f7d\u51fd\u6570\u662f",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md"}),"single spa application"),"\u7684\u4e00\u90e8\u5206\u3002"),Object(p.b)("h2",{id:"api"},"API"),Object(p.b)("h3",{id:"\u52a0\u8f7dember\u5e94\u7528\u7a0b\u5e8f"},"\u52a0\u8f7dEmber\u5e94\u7528\u7a0b\u5e8f"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"loadEmberApp\uff08appName\uff0cappUrl\uff0cvendorUrl\uff09"),"\u662f\u4e00\u4e2a\u4e3aember\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/root-application.md#loading-function"}),"\u52a0\u8f7d\u51fd\u6570"),"\u7684\u65b9\u6cd5\u3002",Object(p.b)("inlineCode",{parentName:"p"},"appName")," and ",Object(p.b)("inlineCode",{parentName:"p"},"appUrl"),"\u90fd\u662f\u5fc5\u586b\u7684\u5b57\u7b26\u4e32\uff0c\u800c",Object(p.b)("inlineCode",{parentName:"p"},"vendorUrl"),"\u662f\u53ef\u9009\u7684\u5b57\u7b26\u4e32\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In the single-spa root application\n\nimport {registerApplication} from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nconst name = 'ember-app';\nconst app = () => loadEmberApp(name, '/dist/ember-app/assets/ember-app.js', '/dist/ember-app/assets/vendor.js');\nconst activeWhen = location => location.hash.startsWith('ember');\n\nregisterApplication({ name, app, activeWhen });\n")),Object(p.b)("h3",{id:"singlespaember"},"singleSpaEmber"),Object(p.b)("p",null,"\u8981\u4f7f\u7528Single-spa-ember\u7684",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#application-lifecycle"}),"single-spa\u751f\u547d\u5468\u671f\u51fd\u6570"),"\uff0c\u8981\u8c03\u7528\u4e00\u4e2a\u5e26\u6709\u914d\u7f6e\u5bf9\u8c61\u7684\u5bfc\u51fa\u51fd\u6570\uff0c\u8be5\u5bf9\u8c61\u662f\u5177\u6709",Object(p.b)("inlineCode",{parentName:"p"},"bootstrap"),"\u3001",Object(p.b)("inlineCode",{parentName:"p"},"mount"),"\u548c",Object(p.b)("inlineCode",{parentName:"p"},"unmount"),"\u751f\u547d\u5468\u671f\u51fd\u6570\u3002\u5177\u6709\u4ee5\u4e0b\u9009\u9879\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"App"),"(\u5fc5\u586b)\uff1a",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"ember \u5e94\u7528\u7a0b\u5e8f")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"createOpts")," (\u9009\u586b)\uff1a\u8c03\u7528",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"App.create(options)"),"\u65f6\u8981\u7528\u7684\u5c5e\u6027\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application"}),"ember\u6587\u6863"),"\u3002")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In the ember application\nimport singleSpaEmber from 'single-spa-ember/src/single-spa-ember';\n\nconst emberLifecycles = singleSpaEmber({\n  appName: 'ember-app', // required\n  createOpts: { // See https://www.emberjs.com/api/ember/2.14.1/classes/Ember.Application\n    rootElement: '#ember-app',\n  },\n});\n\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")),Object(p.b)("h2",{id:"\u4f7f\u7528ember-cli"},"\u4f7f\u7528ember cli"),Object(p.b)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://ember-cli.com/"}),"ember cli"),"\u7684\u5e94\u7528\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u4e0esingle-spa\u5f88\u597d\u7684\u5de5\u4f5c\u3002\u6709\u4e00\u4e2a\u4e0d\u540c\u7684\u662f\uff0cember cli\u4f1a\u63a7\u5236\u6574\u4e2ahtml\u9875\u9762\uff0c\u4f46\u4e00\u4e2asingle-spa\u5e94\u7528\u7a0b\u5e8f\u4e0d\u662f\u8fd9\u6837\u3002\u6240\u4ee5\uff0c\u901a\u5e38\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u52a8\u6001\u5730\u5c06\u4f9b\u5e94\u5546\u548c\u5e94\u7528\u7a0b\u5e8f\u6346\u7ed1\u5305\u52a0\u8f7d\u5230html\u9875\u9762\u4e2d\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5c06\u5b83\u4eec\u70d8\u7119\u5230html\u9875\u9762\u4e2d\u6765\u5b9e\u73b0\u76f8\u540c\u7684\u884c\u4e3a\u3002\u4ee5\u4e0b\u662f\u5728\u4f7f\u7528single-spa\u8bbe\u7f6eember cli\u5e94\u7528\u7a0b\u5e8f\u65f6\u5e94\u6267\u884c\u7684\u5df2\u77e5\u64cd\u4f5c\uff1a"),Object(p.b)("p",null,"\u56e0\u4e3aember cli\u53ea\u652f\u6301\u6765\u81eabower\u7684\u4f9d\u8d56\u9879\uff0c\u6240\u4ee5\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"bower init")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"bower install single-spa-ember --save"))),Object(p.b)("p",null,"\u5c06\u4ee5\u4e0b\u9009\u9879\u6dfb\u52a0\u5230ember-cli-build.js\u6587\u4ef6\u4e2d\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* eslint-env node */\n'use strict';\n\nconst EmberApp = require('ember-cli/lib/broccoli/ember-app');\n\nmodule.exports = function(defaults) {\n  let app = new EmberApp(defaults, {\n    autoRun: false, // Set autoRun to false, because we only want the ember app to render to the DOM when single-spa tells it to.\n    storeConfigInMeta: false, // We're making a single-spa application, which doesn't exclusively own the html file. So we don't want to have to have a `<meta>` tag for the ember environment to be initialized.\n        fingerprint: {\n            customHash: null, // This is optional, just will make it easier for you to have the same url every time you do an ember build.\n        },\n    // Add options here\n  });\n\n  // Tell ember how to use the single-spa-ember library\n  app.import('bower_components/single-spa-ember/amd/single-spa-ember.js', {\n        using: [\n            {transformation: 'amd', as: 'single-spa-ember'},\n        ],\n    });\n\n  return app.toTree();\n};\n")),Object(p.b)("p",null,"\u5728single-spa\u6839\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff08\u72ec\u7acb\u4e8e\u7531ember cli\u751f\u6210\u7684\u4efb\u4f55\u5185\u5bb9\uff09\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// root-application.js\nimport * as singleSpa from 'single-spa';\nimport {loadEmberApp} from 'single-spa-ember';\n\nsingleSpa.registerApplication('ember-app', loadingFunction, activityFunction);\n\nfunction activityFunction(location) {\n  // Only render the ember app when the url hash starts with ember\n  return location.hash.startsWith('ember');\n}\n\n// single-spa-ember helps us load the script tags and give the ember app module to single-spa.\nfunction loadingFunction() {\n  const appName = 'ember-app';\n  const appUrl = '/dist/ember-app/assets/ember-app.js';\n  const vendorUrl = '/dist/ember-app/assets/vendor.js'; // Optional if you have one vendor bundle used for many different ember apps\n  return loadEmberApp(appName, appUrl, vendorUrl);\n}\n")),Object(p.b)("p",null,"\u5728app.js\u6587\u4ef6\u4e2d\uff08ember cli\u751f\u6210\uff09"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// app.js (the ember application)\nimport Ember from 'ember';\nimport Resolver from './resolver';\nimport loadInitializers from 'ember-load-initializers';\nimport config from './config/environment';\nimport singleSpaEmber from 'single-spa-ember';\n\n// This part is generated by the ember cli\nconst App = Ember.Application.extend({\n  modulePrefix: config.modulePrefix,\n  podModulePrefix: config.podModulePrefix,\n  Resolver\n});\n\nloadInitializers(App, config.modulePrefix);\n\nexport default App;\n\n// This is the single-spa part\nconst emberLifecycles = singleSpaEmber({\n    App, // required\n    appName: 'ember-app', // required\n    createOpts: { // optional\n        rootElement: '#ember-app',\n    },\n})\n\n// Single-spa lifecycles.\nexport const bootstrap = emberLifecycles.bootstrap;\nexport const mount = emberLifecycles.mount;\nexport const unmount = emberLifecycles.unmount;\n")))}b.isMDXComponent=!0},300:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var a=t(0),r=t.n(a),p=r.a.createContext({}),i=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},s=function(e){var n=i(e.components);return r.a.createElement(p.Provider,{value:n},e.children)};var l="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),b=i(t),c=a,m=b[s+"."+c]||b[c]||o[c]||p;return t?r.a.createElement(m,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(m,Object.assign({},{ref:n},l))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<p;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);