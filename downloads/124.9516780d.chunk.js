webpackJsonp([124],{1088:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=a(1),n=(a.n(r),a(8)),c=a(15),o=a(40),i=a(43),s=a(38),u=a(3286);t.default=Object(c.c)(null,{fetchMetaStart:o.b})(Object(n.c)("poll")(function(e){return r.useEffect(function(){e.fetchMetaStart(l.a({},i.d,{title:e.t("polls"),url:e.location.pathname}),null,!0)},[e.location.pathname]),r.createElement("div",{className:"container"},r.createElement(s.default,{titleLarge:!0,title:e.t("polls")},r.createElement(u.a,{participantCount:22546,averageTime:"2\u043c 23\u0441"})))}))},3286:function(e,t,a){"use strict";var l=a(1),r=(a.n(l),a(8)),n=a(107),c=(a.n(n),a(72)),o=a(12),i=a(19),s=a(67),u=a(10),m=a(3287);a.n(m);t.a=Object(r.c)(["poll","subscription"])(function(e){var t=Object(c.g)(""),a=t.email,r=t.setEmail,m=t.error,b=function(e,t){return l.createElement(l.Fragment,null,l.createElement(o.a,{variant:"h1",className:"color_blue d-block"},e),l.createElement(o.a,{variant:"bodysubreg",className:"card-poll__stats__label mt-3"},t))};return l.createElement(i.a,{padding:4,className:"color_highlight__bg d-flex card-poll align-items-center"},l.createElement("div",{className:"col-md-4 card-poll__stats"},b(e.participantCount.toLocaleString(),e.t("manCount"))),l.createElement("div",{className:"col-md-4 card-poll__stats"},b(e.averageTime,e.t("averageTime"))),l.createElement("div",{className:"col-md-4"},l.createElement(o.a,{variant:"h2sub",className:"mb-3"},e.t("subscribeToNewPolls")),l.createElement(s.a,{outlined:!0,variant:"bodysub",value:a,placeholder:e.t("subscription:yourEmailHere"),onChange:function(e){r(e.target.value)},error:m}),l.createElement(u.a,{ripple:!0,to:a.length>0?"/subscribe?"+Object(n.stringify)({slug:"epirgo",email:a}):void 0,color:"dark_blue",variant:"bodysubbold",className:"fill_w card-poll__subscribe-btn"},e.t("subscribe"))))})},3287:function(e,t,a){var l=a(3288);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!1,transform:void 0};a(1053)(l,r);l.locals&&(e.exports=l.locals)},3288:function(e,t,a){(e.exports=a(1052)(!1)).push([e.i,".card-poll .card-poll__subscribe-btn {\n  margin-top: 20px; }\n\n.card-poll .card-poll__stats {\n  text-align: center; }\n",""])}});