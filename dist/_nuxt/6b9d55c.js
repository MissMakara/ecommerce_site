(window.webpackJsonp=window.webpackJsonp||[]).push([[32,19],{459:function(t,n,e){e(10)({target:"Math",stat:!0},{trunc:e(257)})},460:function(t,n,e){"use strict";e.r(n);e(37),e(459);var o={name:"Timer",mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3)},props:["date"],data:function(){return{timerdate:Math.trunc(new Date(this.date).getTime()/1e3),now:Math.trunc((new Date).getTime()/1e3)}},computed:{seconds:function(){return(this.timerdate-this.now)%60},minutes:function(){return Math.trunc((this.timerdate-this.now)/60)%60},hours:function(){return Math.trunc((this.timerdate-this.now)/60/60)%24},days:function(){return Math.trunc((this.timerdate-this.now)/60/60/24)}}},r=e(44),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"timer"},[n("ul",{attrs:{id:"demo"}},[n("li",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.days))]),t._v("Days\n      ")]),t._v(" "),n("li",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.hours))]),t._v("Hours\n      ")]),t._v(" "),n("li",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.minutes))]),t._v("Minutes\n      ")]),t._v(" "),n("li",[n("span",{staticClass:"timer-num"},[t._v(t._s(t.seconds))]),t._v("Seconds\n      ")])])])])}),[],!1,null,null,null);n.default=component.exports},592:function(t,n,e){"use strict";e.r(n);var o={layout:"headless-layout",name:"coming-soon",components:{Timer:e(460).default},data:function(){return{title:"Coming Soon"}},mounted:function(){window.scrollTo(0,0)},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Coming Soon page - AndShop Ecommerce Vue js, Nuxt js Template"}]}}},r=e(44),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"ptb-100",attrs:{id:"coming_soon_area"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 offset-lg-2"},[n("div",{staticClass:"coming_soon_content"},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{attrs:{src:e(266),alt:"coming-soon"}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"coming_soon_time"},[n("div",{attrs:{id:"countdown_soon"}},[n("Timer",{attrs:{date:"October 15, 2025"}})],1)]),t._v(" "),t._m(1)],1)])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"coming_soon_title"},[n("h2",[t._v("We Are Coming Soon")]),t._v(" "),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n                           Lorem Ipsum has been the industry's standard dummy text.")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"coming_soon_newsletter"},[n("h3",[t._v("Subscribe for our next update")]),t._v(" "),n("form",[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Your Email"}}),t._v(" "),n("button",{staticClass:"theme-btn-one btn-black-overlay btn_md",attrs:{type:"button"}},[t._v("Subscribe")])])])])}],!1,null,null,null);n.default=component.exports}}]);