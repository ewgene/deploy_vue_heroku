webpackJsonp([0],[,,function(t,e,n){"use strict";var i=n(1),s=n(40),o=n(25),r=n.n(o),a=n(26),c=n.n(a);i.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Hello",component:r.a},{path:"/resources",name:"Resources",component:c.a}]})},function(t,e,n){function i(t){n(19)}var s=n(0)(n(5),n(36),i,null,null);t.exports=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(3),o=n.n(s),r=n(2);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Controls",props:{active:{type:Boolean,default:!0}},data:function(){return{started:!1}},methods:{toggle:function(){this.started=!0,this.$emit("play-button-toggle")}},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DebugWindow",props:{show:{type:Boolean,default:!0}},data:function(){return{hide:!1,screenWidth:0,screenHeight:0}},methods:{setData:function(){this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight}},beforeCreate:function(){},mounted:function(){var t=this;this.hide=!this.show,this.setData(),window.addEventListener("resize",function(){t.setData()})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),s=n.n(i),o=n(24),r=n.n(o),a=n(27),c=n.n(a),u=n(28),l=n.n(u),d=n(29),f=n.n(d),v=n(30),p=n.n(v);e.default={name:"hello",components:{Controls:s.a,DebugWindow:r.a,SwingCounter:c.a,SwingIndicator:l.a,Timer:f.a,TotalCounter:p.a},data:function(){return{active:!1,speed:1500}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"resources",components:{},data:function(){return{resources:[{title:"(video) 平甩功 Ping Shuai Exercise demonstration in Chinese",url:"https://www.youtube.com/watch?v=Mf-hj9H95Co"},{title:"(video) Ping Shuai Exercise demonstration in English",url:"https://www.youtube.com/watch?v=YARCKKFAIzk&t=2s"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SwingCounter",props:{active:{type:Boolean,default:!0},speed:{type:Number,default:1e3}},data:function(){return{counter:0,maxSwings:5}},computed:{shouldSquat:function(){return this.counter===this.maxSwings}},methods:{setCounter:function(){this.active&&(this.counter=this.counter++%this.maxSwings+1)},toggle:function(){this.$emit("play-button-toggle")}},beforeCreate:function(){},mounted:function(){setInterval(this.setCounter,this.speed)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SwingIndicator",props:{active:{type:Boolean,default:!0},speed:{type:Number,default:1e3}},data:function(){return{maxSwings:5}},methods:{swing:function(){if(this.active){var t=this.$el.querySelector(".swing-indicator");t.style.transition="all "+this.speed/2e3+"s",t.style.transitionTimingFunction="ease-in-out",t.style.transform="translateY("+(window.innerHeight-170)+"px)",setTimeout(function(){t.style.transform="translateY(0)"},this.speed/2)}}},beforeCreate:function(){},mounted:function(){setInterval(this.swing,this.speed)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Timer",props:{active:{type:Boolean,default:!0}},data:function(){return{counter:"00 : 00 : 00",oneSecond:1e3,timeDifference:0}},methods:{setCounter:function(){if(this.active){this.timeDifference+=this.oneSecond;var t=new Date(this.timeDifference);this.counter=("00"+t.getUTCHours()).slice(-2)+" : "+("00"+t.getUTCMinutes()).slice(-2)+" : "+("00"+t.getUTCSeconds()).slice(-2)}}},mounted:function(){setInterval(this.setCounter,this.oneSecond)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TotalCounter",props:{active:{type:Boolean,default:!0},speed:{type:Number,default:1e3}},data:function(){return{counter:0}},methods:{setCounter:function(){this.active&&this.counter++}},beforeCreate:function(){},mounted:function(){setInterval(this.setCounter,this.speed)}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function i(t){n(17)}var s=n(0)(n(6),n(34),i,"data-v-69b63ad8",null);t.exports=s.exports},function(t,e,n){function i(t){n(22)}var s=n(0)(n(7),n(39),i,"data-v-f457c996",null);t.exports=s.exports},function(t,e,n){function i(t){n(15)}var s=n(0)(n(8),n(32),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(18)}var s=n(0)(n(9),n(35),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(21)}var s=n(0)(n(10),n(38),i,"data-v-f1e1ec08",null);t.exports=s.exports},function(t,e,n){function i(t){n(14)}var s=n(0)(n(11),n(31),i,"data-v-4684f68f",null);t.exports=s.exports},function(t,e,n){function i(t){n(20)}var s=n(0)(n(12),n(37),i,"data-v-dcc79e52",null);t.exports=s.exports},function(t,e,n){function i(t){n(16)}var s=n(0)(n(13),n(33),i,"data-v-581e25f6",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swing-indicator-wrapper"},[n("transition",{attrs:{name:"move"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"swing-indicator"})])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("timer",{attrs:{active:t.active}}),t._v(" "),n("total-counter",{attrs:{active:t.active,speed:t.speed}}),t._v(" "),n("controls",{attrs:{active:t.active},on:{"play-button-toggle":function(e){t.active=!t.active}}}),t._v(" "),n("swing-counter",{attrs:{active:t.active,speed:t.speed},on:{"play-button-toggle":function(e){t.active=!t.active}}}),t._v(" "),n("swing-indicator",{attrs:{active:t.active,speed:t.speed}}),t._v(" "),n("debug-window",{attrs:{show:!1}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"/resources"}},[t._v("Resources")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"total-counter",class:{pause:!t.active}},[t._v("\n  "+t._s(t.counter)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls",class:{started:t.started}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.active?n("button",{key:t.active,staticClass:"pause",attrs:{title:"Pause"},on:{click:t.toggle}}):n("button",{staticClass:"play",attrs:{title:"Start"},on:{click:t.toggle}})])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Resources")]),t._v(" "),n("ul",t._l(t.resources,function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])])})),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{attrs:{href:"/"}},[t._v("Home")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",[n("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"timer",class:{pause:!t.active}},[t._v("\n  "+t._s(t.counter)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.counter>0?n("div",{key:t.active,staticClass:"swing-counter-wrapper",on:{click:t.toggle}},[n("div",{staticClass:"swing-counter",class:{pause:!t.active,squat:t.shouldSquat}},[t._v("\n      "+t._s(t.counter)+"\n    ")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hide?t._e():n("div",{staticClass:"debug-window"},[n("button",{on:{click:function(e){t.hide=!0}}},[t._v("×")]),t._v("\n  Screen Width: "+t._s(t.screenWidth)+", Screen Height: "+t._s(t.screenHeight)+"\n")])},staticRenderFns:[]}}],[4]);
//# sourceMappingURL=app.2ced7180c3d283c1f7c0.js.map