webpackJsonp([145],{1738:function(e,t,a){"use strict";var n=a(0),r=a(1),l=(a.n(r),a(10)),i=a(45),o=a(12),c=a(19),s=a(1873),d=(a.n(s),a(20));a.n(d);t.a=function(e){var t;return r.createElement(c.a,n.a({},e,{loading:!1,classNames:"card-flatter fill_w",color:e.color}),!e.loading&&r.createElement("div",{className:"card-flatter__header d-flex justify-content-between mb-2"},e.leftCategory&&r.createElement("div",{className:"d-flex align-items-center"},e.leftIcon&&r.createElement("i",{className:e.leftIcon+" mr-2"}),r.createElement(i.a,{color:"grey",divider:!0,items:e.leftCategory,variant:"caption"})),e.rightCategory&&!d.isMobile&&r.createElement("div",{className:"d-flex align-items-center"},r.createElement(i.a,{isRight:!0,divider:!0,items:e.rightCategory,variant:"caption"}),e.externalLinkIcon&&r.createElement("i",{className:"far fa-long-arrow-alt-right card-flatter__header__external-i ml-1"}))),r.createElement(l.a,{flat:!0,flatter:!0,cropped:!0,color:e.color,covered:e.loading,to:e.link,href:e.href,hint:e.hint,classNames:"card-flatter__label-button p-0"},r.createElement(o.a,{covered:e.loading,element:"div",variant:"body",classNames:["card-flatter__label",(t={},t["max-rows-"+e.maxTitleRows]=e.maxTitleRows,t)]},r.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:e.label||""}}))),e.content&&r.createElement(o.a,{covered:e.loading,element:"div",variant:"body",className:"card-flatter__content"},r.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:e.content||""}})),e.rightCategory&&e.rightCategory.length>0&&d.isMobile&&r.createElement("div",{className:"d-flex align-items-center mt-2"},r.createElement(i.a,{isRight:!0,divider:!0,items:e.rightCategory,variant:"caption"}),e.externalLinkIcon&&r.createElement("i",{className:"far fa-long-arrow-alt-right card-flatter__header__external-i ml-1"})),e.actions&&e.actions.map(function(t,a){return r.createElement(l.a,{flat:!0,flatter:!0,cropped:!0,color:"blue",key:a,to:t.to,hint:e.hint,covered:e.loading,classNames:"card-flatter__action-button p-0 mr-1 mt-2 mb-2"},t.label)}))}},1873:function(e,t,a){var n=a(1893);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};a(1053)(n,r);n.locals&&(e.exports=n.locals)},1893:function(e,t,a){(e.exports=a(1052)(!1)).push([e.i,".card-flatter .card-flatter__label * {\n  font-weight: 500; }\n\n.card-flatter .card-flatter__label-button {\n  line-height: 1.75rem;\n  font-weight: 500;\n  text-align: left;\n  white-space: normal;\n  display: block; }\n\n.card-flatter .card-flatter__action-button {\n  line-height: 1.75rem;\n  font-weight: 500;\n  text-align: left;\n  white-space: normal; }\n\n.card-flatter .card-flatter__label.max-rows-1 {\n  line-height: 1.75rem;\n  max-height: 1.75rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__label.max-rows-2 {\n  line-height: 1.75rem;\n  max-height: 3.5rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__label.max-rows-3 {\n  line-height: 1.75rem;\n  max-height: 5.25rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__content {\n  margin-top: 8px;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  max-height: 4.3125rem; }\n\n.card-flatter .card-flatter__header .card-flatter__header__external-i {\n  font-size: 12px;\n  margin-top: 3px;\n  color: #1565C0;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.card-faq-list-wrap .card-faq-list .card-faq-list__item {\n  margin: 16px 0; }\n",""])},1931:function(e,t,a){"use strict";var n;a.d(t,"a",function(){return n}),function(e){e.dateLayout="DD MMMM YYYY"}(n||(n={}))},1939:function(e,t,a){"use strict";var n=a(0),r=a(1),l=(a.n(r),a(8)),i=a(15),o=a(16),c=a(21),s=a(321);t.a=Object(i.c)(function(e){return{legalActs:e.legalActs.data,loading:e.legalActs.loading}},{fetchLegalActByIdStart:s.a})(Object(l.c)()(function(e){return r.useEffect(function(){if(e.ngr&&e.fetchLegalActByIdStart){var t=e.i18n.language||e.i18n.options.fallbackLng&&e.i18n.options.fallbackLng[0];e.fetchLegalActByIdStart({id:e.ngr,lang:t},null,!0)}},[e.i18n.language,e.ngr]),Object(c.a)(e.children,Object(o.c)(n.a({},e),"children"))}))},1953:function(e,t,a){"use strict";var n=a(0),r=a(1),l=(a.n(r),a(1738)),i=a(1957),o=a(1737),c=(a.n(o),a(20));a.n(c);t.a=function(e){var t=function(e,t,a){return e?{label:e,to:t,highlight:a}:void 0},a=[t(e.categoryLabel),t(e.number),t(e.typeLabel,e.typeLink),t(e.date)],o=[t(e.organizationLabel,e.organizationLink,!0)];return r.createElement(l.a,n.a({},e,{className:"card-document-list__item",leftIcon:e.docIcon?"far fa-file-alt":"",leftCategory:a.filter(Boolean),rightCategory:o.filter(Boolean),actions:e.textCover?i.a:[],label:e.label,hint:e.hint,content:e.content,link:e.link,href:e.href,padding:c.isMobileOnly?3:0,color:e.color,externalLinkIcon:e.externalLinkIcon}))}},1957:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=[{label:"cover",to:""}]},2087:function(e,t,a){"use strict";var n=a(0),r=a(1),l=(a.n(r),a(1738)),i=a(2097),o=(a.n(i),a(24)),c=a(20);a.n(c);t.a=function(e){var t=function(e,t,a,n){return e?{label:e,href:t,to:a,highlight:n}:void 0},a=e.legalActs&&e.ngr&&e.legalActs[e.ngr]||{},i=e.showRightCategory,s=void 0===i||i,d=[t(a.ngr),t(e.typeLabel,void 0,e.typeLink),t(e.date)],m=[t("adilet.zan.kz","http://adilet.zan.kz/"+a.lg+"/docs/"+a.ngr,void 0,!0)];return r.createElement(l.a,n.a({},e,{className:"card-document-list__item",leftIcon:"far fa-file-alt",leftCategory:d.filter(Boolean),rightCategory:s?m.filter(Boolean):[],padding:c.isMobileOnly?3:0,link:o.ministryRoutesBaseUrl+"/"+e.slug+"/documents/details/adilet/"+a.ngr,label:a.title,color:e.color}))}},2097:function(e,t,a){var n=a(2098);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};a(1053)(n,r);n.locals&&(e.exports=n.locals)},2098:function(e,t,a){(e.exports=a(1052)(!1)).push([e.i,".card-document-loading--center {\n  display: block;\n  margin: 0 auto; }\n",""])},2120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a(1),l=(a.n(r),a(2)),i=(a.n(l),a(24)),o=a(44),c=a(19),s=a(1953),d=a(1931),m=a(1737),f=(a.n(m),a(16)),g=a(1939),u=a(2087),h=a(20);a.n(h);t.default=function(e){var t=e.documents||e.article||e.data||{},a=e.directionId,m=a?"?directionId="+a:"";return r.createElement(c.a,n.a({},e,{border:!h.isMobileOnly,padding:h.isMobileOnly?0:3,classNames:"card-document-list-wrap fill_w",loading:e.loading}),r.createElement(o.a,{className:"card-document-list"},Object.keys(t).slice(0,e.countOfDocument).map(function(a,n){var o=t[a],c=o&&o.type&&o.type.id||"";return o.adilet?r.createElement(g.a,{ngr:o.adilet,key:n},r.createElement(u.a,{border:h.isMobileOnly,typeLabel:o.type&&o.type.name||"",typeLink:i.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?type="+c,date:o.date&&l.utc(o.date).format(d.a.dateLayout),color:e.color,slug:e.slug})):r.createElement(s.a,{key:n,border:h.isMobileOnly,docIcon:!0,color:e.color,className:"card-document-list__item",number:o.number?"\u2116"+o.number:"",date:o.date&&l.utc(o.date).format(d.a.dateLayout),label:o.title,hint:o.hint,organizationLabel:o.organization&&o.organization.name||"",organizationLink:i.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?gosorgan="+(o.organization&&o.organization.id||""),typeLabel:o.type&&o.type.name||"",slug:e.slug,typeLink:i.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?type="+c,link:i.ministryRoutesBaseUrl+"/"+e.slug+"/documents/details/"+(e.isArray?o.id:Object(f.j)(a,"_"))+m})})))}}});