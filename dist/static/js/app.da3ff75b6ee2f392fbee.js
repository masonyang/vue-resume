webpackJsonp([1],{100:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},101:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlModel:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},102:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("EditorStyleContent"),n._v(" "),t("StyleEditor",{ref:"styleEditor",attrs:{codeContent:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{currentResumeContent:n.currentResumeMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},38:function(n,e,t){function r(n){t(86)}var o=t(8)(t(40),t(102),r,"data-v-ad5b3abc",null);n.exports=o.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(24),o=t.n(r),i=t(47),s=t.n(i),a=t(46),u=t.n(a),c=t(97),l=t.n(c),d=t(96),m=t.n(d),f=t(94),p=t.n(f),h=t(95),v=t.n(h),g=t(83);t.n(g);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a,EditorStyleContent:p.a,ResumeContent:v.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,currentResumeMarkdown:"",resumeContent:""}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){var e,t,r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.a.data().first,t=p.a.data().second,r=p.a.data().third,n.next=5,this.progressivelyShowStyle(e);case 5:return n.next=7,this.progressivelyShowResume();case 7:return n.next=9,this.progressivelyShowStyle(t);case 9:return n.next=11,this.showHtml();case 11:return n.next=13,this.progressivelyShowStyle(r);case 13:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=0,a=u()(s.a.mark(function e(){var r,u,c=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:r=n.length,i<=r?(u=n.substring(i,i+1)||" ",i++,this.currentStyle+=u,"\n"===n.substring(i-1,i)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.scrollTop()}),setTimeout(a,o)):t();case 4:case"end":return e.stop()}},e,this)})).bind(e);a()})},progressivelyShowResume:function(){var n=this,e=v.a.data().content;return new o.a(function(t,r){var o=e.length,i=n.interval;!function r(){if(n.currentResumeMarkdown.length<o){n.currentResumeMarkdown=e.substring(0,n.currentResumeMarkdown.length+1);var s=n.currentResumeMarkdown[n.currentResumeMarkdown.length-1];console.log("lastChar:",s),"\n"===s&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.scrollTop()}),setTimeout(r,i)}else t()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"EditorStyleContent",template:"",data:function(){return{first:"\n/*\n* Hi 我是王永庆 PHP工程师\n* 下面，我来来写一份个人简历！\n*/\n\n/* 首先给所有元素加上过渡效果,让所有的变化都以动画的效果来显示 */\n{\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/**\n* 看起来似乎没什么变化，不要着急\n* 先来改变下背景\n*/\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(60, 80, 90);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  background: rgb(48, 48, 48);\n  padding: 1em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;\n  height: 95vh;\n}\n/* 代码高亮 */\n.token.comment {color: #857F6B;font-style: italic;}\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n  transform: rotateY(10deg) translateZ(-100px) ;\n}\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 95vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 下面开始写简历正文 */\n        ",second:"\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，需要变成对 HR 更友好的格式\n */\n        ",third:'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 1em 1em 3em 1em;\n}\n.resumeEditor h1{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size: 1.5em;\n}\n.resumeEditor h2{\n  font-size: 1.2em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n        '}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{content:"\n# 自我介绍\n\n> 我叫王永庆，是一名PHP开发工程师\n\n> 参与过多个项目开发，有比较丰富的项目经验（包括手机WEB、后台管理、API接口、服务器运维）\n\n> 作为核心的程序员，在项目中进行 需求分析、数据库设计、接口设计、后台管理升级、业务代码开发 等工作\n\n> 涉及技术点比较丰富，使用缓存、RPC服务、消息队列服务等技术，不仅提高了程序的性能而且进行业务的解耦\n\n> 喜欢新技术的尝试和挑战，并且有较强的专业技术，能够与同事和谐相处\n\n---\n\n# 联系方式\n\n- 手机：15150420620\n- Email：1045643440@qq.com\n\n---\n\n# 个人信息\n\n - 男/1989\n - 本科/数学与应用数学专业\n - 工作年限：7年（2012-09 - 2018-08）\n - 技术博客：http://itman.su520.com/\n - Github：https://github.com/jasonyqwang\n\n - 期望职位：高级PHP开发工程师、前端开发工程师\n - 期望薪资：面谈\n - 期望城市：苏州 | 上海\n\n---\n\n# 工作经历\n### 1.梦嘉传媒有限公司 （ 2017年12月 ~ 2018-08 ）\n\n- 超级头条项目（PHP主管）\n- 1.团队管理与沟通工作\n- 2.负责团队成员的任务分配，需求评估工作\n- 3.超级头条项目的整体架构设计\n- 4.广告系统、采集系统、接口系统、以及裂变系统的设计，以及开发\n- 5.兼顾一部分运维工作\n\n### 2.微邦财务咨询有限公司（ 2014年2月 ~ 2017-12 ）\n\n- 掌知识项目（组长）\n- 1.后台以及接口架构设计，协作分配团队任务\n- 2.需求分析，数据库设计\n- 3.编写核心业务代码，实现功能\n- 4.发布代码，承担一部分运维工作\n\n### 3.功夫网络科技有限公司（ 2012年9月 ~ 2014-01 ）\n\n- 功夫信项目\n- 1.功夫信是关于校园招聘的项目\n- 2.集成 求职者、公司管理员、公司HR、系统管理、网站首页，投票等功能模块\n- 3.项目引入Redis、推送、搜索引擎、JqueryMobile 等技术\n\n# 技能清单\n\n以下均为我熟练使用的技能\n\n- Web开发：PHP/Javascript/Nodejs\n- Web框架：Yii/Laravel/ThinkPHP/Yaf\n- 前端框架：Bootstrap/HTML5/Vue\n- 前端工具：Webpack/SaSS\n- 数据库相关：MySQL/Redis/MongoDB/Memcache\n- 版本管理、文档和自动化部署工具：Svn/Git/Composer/Docker/Jenkins\n- 云平台：Aliyun/SAE/AWS\n\n---\n\n# 致谢\n感谢您花时间阅读我的简历，期待能有机会和您共事。\n\n\n        "}}}},43:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(87),o=t.n(r);e.default={props:["currentResumeContent","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.currentResumeContent):this.currentResumeContent}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+100}}}},44:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(88),o=t.n(r);e.default={name:"Editor",props:["codeContent"],computed:{highlightedCode:function(){return o.a.highlight(this.codeContent,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.codeContent+"</style>"}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+10}}}},45:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),o=t(38),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},83:function(n,e){},84:function(n,e){},85:function(n,e){},86:function(n,e){},94:function(n,e,t){var r=t(8)(t(41),t(98),null,null,null);n.exports=r.exports},95:function(n,e,t){var r=t(8)(t(42),t(99),null,null,null);n.exports=r.exports},96:function(n,e,t){function r(n){t(85)}var o=t(8)(t(43),t(101),r,"data-v-7416a0d8",null);n.exports=o.exports},97:function(n,e,t){function r(n){t(84)}var o=t(8)(t(44),t(100),r,"data-v-30a313d4",null);n.exports=o.exports},98:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}},99:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}}},[45]);
//# sourceMappingURL=app.da3ff75b6ee2f392fbee.js.map