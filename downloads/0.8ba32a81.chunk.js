webpackJsonp([0],{200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n(1),a=(n.n(i),n(11)),r=(n.n(a),n(15)),o=n(8),l=n(40),s=n(19),p=n(38),u=n(12),d=n(10),f=n(27),m=n(41),h=n(193),_=n(2305),T=n(194),b=n(2317),v=n(5281),g=function(e){function t(t){var n=e.call(this,t)||this;return n.state={topicId:n.props.match.params.topicId?n.props.match.params.topicId:void 0},n}return c.c(t,e),t.prototype.render=function(){var e=this.props,t=e.match,n=e.t,c=[{children:n("help:citizens"),typeId:"5",to:"/help/themes/topics/5"},{children:n("help:business"),typeId:"6",to:"/help/themes/topics/6"}],r=t.params.type,o=t.params.topicId,l=t.params.questionId;return i.createElement("div",{className:"container help-page"},i.createElement(p.default,{titleLarge:!0,title:n("help:questionsByTopic")},i.createElement(T.a,null,i.createElement(h.a,{outlined:!0}))),i.createElement(p.default,null,i.createElement(m.default,{links:c,activeTabIndex:"5"===r?0:1},i.createElement(p.default,null,i.createElement(_.a,{parentTopic:5,topicId:o,questionId:l},i.createElement(v.a,{parentTopic:"5",topicId:o,questionId:l}))),i.createElement(p.default,null,i.createElement(_.a,{parentTopic:6,topicId:o,questionId:l},i.createElement(v.a,{parentTopic:"5",topicId:o,questionId:l}))))),i.createElement(p.default,{title:n("help:findAnAnswer"),className:"col-md-8 ml-0"},i.createElement(s.a,{className:"help-page__contacts fill_w",border:!0},i.createElement(u.a,{variant:"h3",className:"mb-4"},n("help:contactUs")),i.createElement("div",{className:"d-flex"},i.createElement("div",{className:"help-page__contacts__social pl-0"},i.createElement(u.a,{variant:"body",className:"help-page__contacts__social__text mb-3"},n("help:officialGroupsOnSocial")),i.createElement("div",{className:"help-page__contacts__social__icons"},b.c.map(function(e,t){return i.createElement(d.a,{key:t,flat:!0,flatter:!0,className:"help-page__contacts__social__icon",target:"_blank",href:e.href},i.createElement("i",{className:a(e.icon,"help-page__contacts__social__icon-i")}))}))),i.createElement(f.a,{vertical:!0}),i.createElement("div",{className:"help-page__contacts__tel"},i.createElement("div",{className:"help-page__contacts__col"},i.createElement(u.a,{variant:"body",className:"help-page__contacts__social__text mb-3"},n("help:callCenter")),i.createElement("div",{className:"d-flex justify-content-between"},b.a.map(function(e,t){return i.createElement(u.a,{key:t,variant:"h3"},e)})),i.createElement(u.a,{variant:"menuitem",className:"mt-3 help-page__contacts__call__text"},n("help:freeCall"))))))))},t}(i.Component);t.default=Object(r.c)(null,{fetchMetaStart:l.b})(Object(o.c)(["common","help"])(g))},2305:function(e,t,n){"use strict";var c=n(0),i=n(1),a=(n.n(i),n(8)),r=n(15),o=n(16),l=n(21),s=n(344),p=n(2601);t.a=Object(r.c)(function(e){return{helps:e.helps.data,loading:e.helps.loading,loadingQuestions:e.helps.loadingQuestions,loadingChildrenTopic:e.helps.loadingChildrenTopic}},{fetchGetTopicsStart:s.c,fetchGetClientsStart:s.a,fetchQuestionsByTopicIdStart:s.j,fetchGetTopicsByParentStart:s.b,fetchQuestionsByIdStart:s.h,fetchHasChildrenTopicStart:s.d,fetchTopicByClientStart:s.k})(Object(a.c)()(function(e){i.useEffect(function(){e.topicId&&n(e.topicId),e.isClient&&e.fetchGetClientsStart&&e.fetchGetClientsStart({},null,!0),e.parentTopic&&e.fetchGetTopicsByParentStart&&e.fetchGetTopicsByParentStart({id:e.parentTopic},null,!0),e.questionId&&e.fetchQuestionsByIdStart&&e.fetchQuestionsByIdStart({id:e.parentTopic},null,!0),e.childrenTopic&&e.fetchHasChildrenTopicStart&&e.fetchHasChildrenTopicStart({id:e.childrenTopic},null,!0),e.clientTopic&&e.fetchTopicByClientStart&&e.fetchTopicByClientStart({id:e.clientTopic},null,!0)},[e.i18n.language]);var t=Object(o.c)(c.a({},e),"children"),n=function(t){t&&e.fetchQuestionsByTopicIdStart&&e.fetchQuestionsByTopicIdStart({id:parseInt(t,10)},null,!0)};if(e.topicId&&(t.questions=Object(p.c)(e.topicId)(e.helps)),e.isClient&&(t.client=Object(p.b)(e.helps)),e.parentTopic||e.childrenTopic){var a=e.parentTopic||e.childrenTopic;t.topic=Object(p.d)(a)(e.helps)}e.clientTopic&&(a=e.clientTopic,t.topic=Object(p.e)(a)(e.helps));return e.questionId&&(t.answer=Object(p.a)(e.questionId)(e.helps)),Object(l.a)(e.children,c.a({},t,{onGetTopic:n,onGetTopicByClient:function(t){t&&e.fetchTopicByClientStart&&e.fetchTopicByClientStart({id:parseInt(t,10)},null,!0)}}))}))},2317:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a});var c=[{title:"\u041a\u0430\u043a \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"},{title:"\u041a\u0430\u043a \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435"},{title:"\u041a\u0430\u043a \u0438 \u0433\u0434\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"},{title:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0441\u0443\u0434\u0435\u0431\u043d\u0443\u044e \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},{title:"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0441\u043d\u044f\u0442 \u043b\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0441 \u0443\u0447\u0451\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0434\u0430\u0436\u0438"}],i=[{icon:"fab fa-facebook",href:"https://www.facebook.com/egovkz"},{icon:"fab fa-twitter",href:"http://twitter.com/egovkz"},{icon:"fab fa-vk",href:"https://vk.com/egovkz"}],a=["1411","8 800 080 7777"]},2601:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return o});var c=function(e){return function(t){return Object.keys(t).filter(function(n){var c=t[n].topic;return t[n].isQuestions&&c&&""+c.id==""+e}).map(function(e){return t[e]})}},i=function(e){return function(t){return Object.keys(t).filter(function(n){return t[n].isQuestions&&""+t[n].id==""+e}).map(function(e){return t[e]})}},a=function(e){return Object.keys(e).filter(function(t){return e[t].isClient}).map(function(t){return e[t]})},r=function(e){return function(t){return Object.keys(t).filter(function(n){var c=t[n].clients;return t[n].isTopic&&c&&""+c.id==""+e}).map(function(e){return t[e]})}},o=function(e){return function(t){return Object.keys(t).filter(function(n){var c=t[n].parent;return t[n].isTopic&&c&&""+c.id==""+e}).map(function(e){return t[e]})}}},2613:function(e,t,n){"use strict";var c=n(0),i=n(1),a=(n.n(i),n(12)),r=n(44),o=n(106),l=n(11),s=(n.n(l),n(2317)),p=n(19);t.a=function(e){var t=e.questions||{},n=e.selectedTopic||{},u=e.parentTopic?e.parentTopic.parent||{}:n.parent||{};return i.createElement(p.a,c.a({loading:e.loadingQuestions,padding:0},e),i.createElement(a.a,{variant:e.variant||"h2",className:"mb-4"},n.title),Object.keys(t).length>0&&i.createElement(p.a,{padding:0,className:"fill_w"},i.createElement(r.a,{divider:!0,classNames:"fill_w"},Object.keys(t).map(function(e,n){return i.createElement(o.a,{key:n,color:"blue",variant:"linksub",title:t[e].title,to:"/help/themes/topics/"+u.id+"/"+(t[e].topic?t[e].topic.id:"")+"/"+t[e].id,className:l("help-page__question",n===s.b.length-1&&"help-page__question--last")})}))))}},3061:function(e,t,n){"use strict";var c=n(1),i=(n.n(c),n(38)),a=n(12),r=n(19),o=n(2305),l=n(2613);t.a=function(e){var t=e.topic||e.client||{},n=e.selectedTopic||{};return c.createElement(i.default,{loading:e.loadingChildrenTopic},c.createElement(a.a,{variant:"h2",className:"mb-4"},n.title),c.createElement(r.a,{padding:3,className:"fill",border:!0},Object.keys(t).map(function(e,i){return c.createElement(o.a,{key:i,topicId:t[e].id},c.createElement(l.a,{classNames:"mb-2",variant:"bodyhl",parentTopic:n,selectedTopic:t[e]}))})))}},5281:function(e,t,n){"use strict";var c=n(0),i=n(1),a=(n.n(i),n(5282)),r=(n.n(a),n(41)),o=n(38),l=n(2613),s=n(3061),p=n(19),u=n(12),d=n(2305),f=function(e){function t(t){var n=e.call(this,t)||this;return n.getTabs=function(e){if(!e)return[];var t=[];return Object.keys(e).filter(function(e){return"type"!==e}).map(function(n,c){t.push({children:""+e[n].title||"",typeId:""+e[n].id,id:c,to:"/help/themes/topics/"+e[n].parent.id+"/"+e[n].id,icon:e[n].icon})}),t},n.getSelectedTopic=function(e){if(n.props.topicId){var t=Object.keys(e).find(function(t){if(e[t].id===n.props.topicId)return e[t]});t&&n.setState({selectTopic:e[t]})}},n.getTabLink=function(e){var t=n.props.topic;if(t){var c=Object.keys(t).find(function(n){if(t[n].id===e)return t[n]});c&&n.setState({selectTopic:t[c]})}n.props.onGetTopic&&n.props.onGetTopic(e)},n.state={active:!1,selectTopic:n.props.topic&&n.props.topicId&&Object.keys(n.props.topic).length>0?n.props.topic[n.props.topicId]:void 0},n}return c.c(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){e.topic&&e.topic!==this.props.topic&&this.getSelectedTopic(e.topic)},t.prototype.render=function(){var e=this.props,t=e.topic,n=e.topicId,c=e.questions,a=e.questionId,f=e.answer,m=e.loading,h=e.loadingQuestions,_=this.state.selectTopic,T=this.getTabs(t),b=T.find(function(e){return e.typeId===n});return i.createElement(o.default,{loading:!!m},i.createElement(r.default,{vertical:!0,links:T,onItemClick:this.getTabLink,activeTabIndex:n&&b?b.id:0},_&&_.hasChildren?i.createElement(d.a,{childrenTopic:_.id},i.createElement(s.a,{selectedTopic:_})):a?i.createElement(p.a,{padding:3,classNames:"fill_w"},f&&f[0]?i.createElement(i.Fragment,null,i.createElement(u.a,{variant:"linkbold",className:"mb-4"},f[0].title),i.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:f[0].answer||""}})):i.createElement(i.Fragment,null)):i.createElement(l.a,{loading:h,selectedTopic:_,questions:c})))},t}(i.Component);t.a=f},5282:function(e,t,n){var c=n(5283);"string"==typeof c&&(c=[[e.i,c,""]]);var i={hmr:!1,transform:void 0};n(1053)(c,i);c.locals&&(e.exports=c.locals)},5283:function(e,t,n){(e.exports=n(1052)(!1)).push([e.i,".faq-category__button-text {\n  color: #616161; }\n  .faq-category__button-text:hover {\n    color: #1565C0; }\n\n.faq-category__button-text--active {\n  color: #1565C0; }\n",""])}});