(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{532:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单文件组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件"}},[t._v("#")]),t._v(" 单文件组件")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("在很多 Vue 项目中，我们使用 "),a("code",[t._v("vue.component")]),t._v(" 来定义全局组件，紧接着用 "),a("code",[t._v("app.mount('#app')")]),t._v(" 在每个页面内指定一个容器元素。")]),t._v(" "),a("p",[t._v("这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("全局定义 (Global definitions)")]),t._v(" 强制要求每个 component 中的命名不得重复")]),t._v(" "),a("li",[a("strong",[t._v("字符串模板 (String templates)")]),t._v(" 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 "),a("code",[t._v("\\")])]),t._v(" "),a("li",[a("strong",[t._v("不支持 CSS (No CSS support)")]),t._v(" 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏")]),t._v(" "),a("li",[a("strong",[t._v("没有构建步骤 (No build step)")]),t._v(" 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Pug (formerly Jade) 和 Babel")])]),t._v(" "),a("p",[t._v("文件扩展名为 "),a("code",[t._v(".vue")]),t._v(" 的 "),a("code",[t._v("single-file components (单文件组件)")]),t._v(" 为以上所有问题提供了解决方法，并且还可以使用 webpack 或 Browserify 等构建工具。")]),t._v(" "),a("p",[t._v("这是一个文件名为 "),a("code",[t._v("Hello.vue")]),t._v(" 的简单实例：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/team/Vue/pen/3de13b5cd0133df4ecf307b6cf2c5f94",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticStyle:{display:"block",margin:"15px auto","max-width":"100%"},attrs:{src:"/images/sfc.png",width:"403",alt:"Single-file component example (click for code as text)"}})])]),t._v(" "),a("p",[t._v("现在我们获得：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#source-code-editing",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整语法高亮"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/concepts/modules/#what-is-a-webpack-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS 模块"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件作用域的 CSS"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("正如我们说过的，我们可以使用预处理器来构建简洁和功能更丰富的组件，比如 Pug，Babel (with ES2015 modules)，和 Stylus。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/vue-single-file-component-with-pre-processors-mr3ik?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticStyle:{display:"block",margin:"15px auto","max-width":"100%"},attrs:{src:"/images/sfc-with-preprocessors.png",width:"563",alt:"Single-file component with pre-processors example (click for code as text)"}})])]),t._v(" "),a("p",[t._v("这些特定的语言只是例子，你可以只是简单地使用 Babel，TypeScript，SCSS，PostCSS - 或者其他任何能够帮助你提高生产力的预处理器。如果搭配 "),a("code",[t._v("vue-loader")]),t._v(" 使用 webpack，它也能为 CSS Modules 提供头等支持。")]),t._v(" "),a("h3",{attrs:{id:"怎么看待关注点分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么看待关注点分离"}},[t._v("#")]),t._v(" 怎么看待关注点分离？")]),t._v(" "),a("p",[t._v("一个重要的事情值得注意，"),a("strong",[t._v("关注点分离不等于文件类型分离")]),t._v("。在现代 UI 开发中，我们已经发现相比于把代码库分离成三个大的层次并将其相互交织起来，把它们划分为松散耦合的组件再将其组合起来更合理一些。在一个组件里，其模板、逻辑和样式是内部耦合的，并且把他们搭配在一起实际上使得组件更加内聚且更可维护。")]),t._v(" "),a("p",[t._v("即便你不喜欢单文件组件，你仍然可以把 JavaScript、CSS 分离成独立的文件然后做到热重载和预编译。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- my-component.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This will be pre-compiled"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./my-component.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./my-component.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),a("h3",{attrs:{id:"例子沙箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子沙箱"}},[t._v("#")]),t._v(" 例子沙箱")]),t._v(" "),a("p",[t._v("如果你希望深入了解并开始使用单文件组件，请来 CodeSandbox "),a("a",{attrs:{href:"https://codesandbox.io/s/vue-todo-list-app-with-single-file-component-vzkl3?file=/src/App.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看这个简单的 todo 应用"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"针对刚接触-javascript-模块开发系统的用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对刚接触-javascript-模块开发系统的用户"}},[t._v("#")]),t._v(" 针对刚接触 JavaScript 模块开发系统的用户")]),t._v(" "),a("p",[t._v("有了 "),a("code",[t._v(".vue")]),t._v(" 组件，我们就进入了高级 JavaScript 应用领域。如果你没有准备好的话，意味着还需要学会使用一些附加的工具：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Node Package Manager (NPM)")]),t._v("： 阅读 "),a("a",{attrs:{href:"https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started guide"),a("OutboundLink")],1),t._v(" 中关于如何从注册地 (registry) 获取包的章节。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Modern JavaScript with ES2015/16")]),t._v("：阅读 Babel 的 "),a("a",{attrs:{href:"https://babeljs.io/docs/en/learn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn ES2015 guide"),a("OutboundLink")],1),t._v("。你不需要立刻记住每一个方法，但是你可以保留这个页面以便后期参考。")])])]),t._v(" "),a("p",[t._v("在你花一天时间了解这些资源之后，我们建议你参考 "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),a("OutboundLink")],1),t._v("。只要遵循指示，你就能很快地运行一个带有 "),a("code",[t._v(".vue")]),t._v(" 组件、ES2015、webpack 和热重载 (hot-reloading) 的 Vue 项目！")]),t._v(" "),a("h3",{attrs:{id:"针对高级用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对高级用户"}},[t._v("#")]),t._v(" 针对高级用户")]),t._v(" "),a("p",[t._v("CLI 会为你搞定大多数工具的配置问题，同时也支持细粒度自定义"),a("a",{attrs:{href:"https://cli.vuejs.org/config/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置项"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("有时你会想从零搭建你自己的构建工具，这时你需要通过 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Loader"),a("OutboundLink")],1),t._v(" 手动配置 webpack。关于学习更多 webpack 的内容，请查阅"),a("a",{attrs:{href:"https://webpack.js.org/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("其官方文档"),a("OutboundLink")],1),t._v("和 "),a("a",{attrs:{href:"https://webpack.academy/p/the-core-concepts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Academy"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);