webpackJsonp([98,145],{1082:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(1),i=(t.n(r),t(24)),d=t(3255),c=t(2557),o=t(2120),l=t(27),m=t(38),s=t(41),u=t(3004),f=t(326),g=t(1782),p=t(328),_=t(341),h=t(3257),b=t(356),v=t(100),x=t(35),w=t(43),y=t(15),E=t(40),k=t(8),N=t(190);a.default=Object(y.c)(null,{fetchMetaStart:E.b})(Object(v.b)(N.a)(function(e){var a=Object(k.b)("common").t;r.useEffect(function(){e.fetchMetaStart(n.a({},w.d,{title:a("stateProcurements"),url:e.location.pathname}),null,!0)},[e.location.pathname]);var t=i.ministryRoutesBaseUrl+"/"+e.match.params.slug,v=e.organizations?e.organizations[e.match.params.slug]:{};return r.createElement("div",{className:"container"},r.createElement(m.default,{titleLarge:!0,title:a("stateProcurements")},r.createElement(m.default,null,r.createElement(s.default,{links:h.a},r.createElement(m.default,null,r.createElement(g.a,{withoutDefaultFilter:!0,moduleName:"news",parser:p.b,customFilters:{type:"30"}},r.createElement(d.a,{countOfMedia:3}))),r.createElement(m.default,null,r.createElement(g.a,{withoutDefaultFilter:!0,moduleName:"documents",parser:_.b,customFilters:{type:"51"}},r.createElement(o.default,{countOfDocument:3}))))),r.createElement(m.default,null,r.createElement(l.a,{horizontal:!0})),r.createElement(m.default,{title:a("documents"),externalLabel:a("seeAll"),externalLink:t+"/documents"},r.createElement(f.a,{slug:e.match.params.slug},r.createElement(u.a,{types:h.c,tabs:h.b,slug:e.match.params.slug}))),r.createElement(m.default,null,r.createElement(l.a,{horizontal:!0})),r.createElement(m.default,{title:a("servicesAndPayments"),externalLabel:a("seeAll"),externalLink:t+"/activities/services"},r.createElement(x.default,{loading:Boolean(e.loading)},r.createElement(g.a,{withoutDefaultFilter:!0,size:50,moduleName:"categories",parser:b.b,customFilters:{supervising_organizations:v&&v.id}},r.createElement(c.a,null))))))}))},1737:function(e,a,t){var n=t(1898);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};t(1053)(n,r);n.locals&&(e.exports=n.locals)},1738:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(10)),d=t(45),c=t(12),o=t(19),l=t(1873),m=(t.n(l),t(20));t.n(m);a.a=function(e){var a;return r.createElement(o.a,n.a({},e,{loading:!1,classNames:"card-flatter fill_w",color:e.color}),!e.loading&&r.createElement("div",{className:"card-flatter__header d-flex justify-content-between mb-2"},e.leftCategory&&r.createElement("div",{className:"d-flex align-items-center"},e.leftIcon&&r.createElement("i",{className:e.leftIcon+" mr-2"}),r.createElement(d.a,{color:"grey",divider:!0,items:e.leftCategory,variant:"caption"})),e.rightCategory&&!m.isMobile&&r.createElement("div",{className:"d-flex align-items-center"},r.createElement(d.a,{isRight:!0,divider:!0,items:e.rightCategory,variant:"caption"}),e.externalLinkIcon&&r.createElement("i",{className:"far fa-long-arrow-alt-right card-flatter__header__external-i ml-1"}))),r.createElement(i.a,{flat:!0,flatter:!0,cropped:!0,color:e.color,covered:e.loading,to:e.link,href:e.href,hint:e.hint,classNames:"card-flatter__label-button p-0"},r.createElement(c.a,{covered:e.loading,element:"div",variant:"body",classNames:["card-flatter__label",(a={},a["max-rows-"+e.maxTitleRows]=e.maxTitleRows,a)]},r.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:e.label||""}}))),e.content&&r.createElement(c.a,{covered:e.loading,element:"div",variant:"body",className:"card-flatter__content"},r.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:e.content||""}})),e.rightCategory&&e.rightCategory.length>0&&m.isMobile&&r.createElement("div",{className:"d-flex align-items-center mt-2"},r.createElement(d.a,{isRight:!0,divider:!0,items:e.rightCategory,variant:"caption"}),e.externalLinkIcon&&r.createElement("i",{className:"far fa-long-arrow-alt-right card-flatter__header__external-i ml-1"})),e.actions&&e.actions.map(function(a,t){return r.createElement(i.a,{flat:!0,flatter:!0,cropped:!0,color:"blue",key:t,to:a.to,hint:e.hint,covered:e.loading,classNames:"card-flatter__action-button p-0 mr-1 mt-2 mb-2"},a.label)}))}},1782:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(55)),d=(t.n(i),t(15)),c=t(8),o=t(99),l=t.n(o),m=t(98),s=t(16),u=t(21),f=t(13),g=t(314),p={fetchFiltersByCTStart:g.d,fetchFilteredDataStart:g.b};a.a=Object(d.c)(function(e,a){var t=e.filters.contentTypes[a.moduleName||""],r={filtersLoading:e.filters.loading,filters:e.filters.data[a.contentType||""]};return t?n.a({},r,{data:t.data,dataCount:t.count,dataLoading:t.loading,dataCached:t.cached}):r},p)(function(e){var a=n.f(Object(c.b)(),2)[1],t=l()(),d=t.location,o=t.match,g=n.f(r.useState(d.search),2),p=g[0],_=g[1],h=n.f(r.useState(Object(m.b)()),1)[0],b=Object(s.c)(i.parse(d.search),"lang"),v=e.disablesQueryString?{}:b,x=o.params.slug||e.slug||"",w=function(e,a){return new f.a(n.a({},e.customFilters,{page:Number(a)||e.page||1,size:e.size||10}))}(e,o.params.page),y=function(a){var t=w.getConfig,n=a.getConfig;Object.keys(n).forEach(function(e){var a=n[e];n[e]=Object(s.j)(a,"_")}),("directions"in n||"activities"in n)&&(t.projects=void 0,w.setFilterConfig=t),function(a){void 0===a&&(a=new f.a),e.moduleName&&e.fetchFilteredDataStart&&!e.dataCached&&e.fetchFilteredDataStart({parser:e.parser,sorter:e.sorter,moduleName:e.moduleName,contentType:e.contentType,externalUrl:e.externalUrl,filters:a,slug:x},{withoutDefaultFilter:e.withoutDefaultFilter,cacheResults:e.withCaching},!0)}(w.merge(a))};Object(r.useEffect)(function(){y(new f.a(v)),d.search!==p&&(Object(u.c)(h),_(d.search))},[a.language,Number(o.params.page)||e.page,d.pathname,d.search]),Object(r.useEffect)(function(){e.isSearch&&y(new f.a(v))},[e.customFilters]),Object(r.useEffect)(function(){e.contentType&&e.fetchFiltersByCTStart&&e.fetchFiltersByCTStart({contentType:e.contentType,slug:x,filters:v},null,!0)},[a.language]);var E=n.a({},Object(s.c)(e,"children","render"),{formedFilters:w,id:h,slug:x});return e.render?e.render(E):Object(u.a)(e.children,E)})},1873:function(e,a,t){var n=t(1893);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};t(1053)(n,r);n.locals&&(e.exports=n.locals)},1893:function(e,a,t){(e.exports=t(1052)(!1)).push([e.i,".card-flatter .card-flatter__label * {\n  font-weight: 500; }\n\n.card-flatter .card-flatter__label-button {\n  line-height: 1.75rem;\n  font-weight: 500;\n  text-align: left;\n  white-space: normal;\n  display: block; }\n\n.card-flatter .card-flatter__action-button {\n  line-height: 1.75rem;\n  font-weight: 500;\n  text-align: left;\n  white-space: normal; }\n\n.card-flatter .card-flatter__label.max-rows-1 {\n  line-height: 1.75rem;\n  max-height: 1.75rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__label.max-rows-2 {\n  line-height: 1.75rem;\n  max-height: 3.5rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__label.max-rows-3 {\n  line-height: 1.75rem;\n  max-height: 5.25rem;\n  overflow: hidden; }\n\n.card-flatter .card-flatter__content {\n  margin-top: 8px;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  max-height: 4.3125rem; }\n\n.card-flatter .card-flatter__header .card-flatter__header__external-i {\n  font-size: 12px;\n  margin-top: 3px;\n  color: #1565C0;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.card-faq-list-wrap .card-faq-list .card-faq-list__item {\n  margin: 16px 0; }\n",""])},1898:function(e,a,t){(e.exports=t(1052)(!1)).push([e.i,".card-document-list-wrap .card-document-list .card-document-list__item {\n  margin: 16px 0; }\n\n.card-document-list-wrap .card-document-list .card-article {\n  margin-top: 24px;\n  margin-bottom: 8px; }\n\n.card-document-list-wrap .card-document-list .card-article:first-child {\n  margin-top: 0; }\n\n.card-document-list-wrap .card-document-list .card-article:last-child {\n  margin-bottom: 0; }\n\n.card-document-group-wrap {\n  display: block !important; }\n  .card-document-group-wrap .card-document-group .card-document-group__item {\n    margin-top: 24px; }\n    .card-document-group-wrap .card-document-group .card-document-group__item .card-flatter {\n      padding: 16px !important;\n      height: 100%; }\n    .card-document-group-wrap .card-document-group .card-document-group__item .card-flatter__label-button {\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-height: 19px;\n      height: 60px;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n         text-overflow: ellipsis; }\n    .card-document-group-wrap .card-document-group .card-document-group__item .card-flatter__header {\n      margin-bottom: 18px !important; }\n    .card-document-group-wrap .card-document-group .card-document-group__item .card-flatter__label {\n      font-size: 0.875rem; }\n  .card-document-group-wrap .card-document-group .card-document-group__item:nth-child(-n + 3) {\n    margin-top: 0; }\n\n.card-document-group-wrap .card-flatter .card-flatter__label * {\n  height: 60px !important; }\n\n@media screen and (max-width: 576px) {\n  .card-document-list-wrap .card-document-list .card-document-list__item {\n    margin: 0 0 16px 0; } }\n",""])},1931:function(e,a,t){"use strict";var n;t.d(a,"a",function(){return n}),function(e){e.dateLayout="DD MMMM YYYY"}(n||(n={}))},1939:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(8)),d=t(15),c=t(16),o=t(21),l=t(321);a.a=Object(d.c)(function(e){return{legalActs:e.legalActs.data,loading:e.legalActs.loading}},{fetchLegalActByIdStart:l.a})(Object(i.c)()(function(e){return r.useEffect(function(){if(e.ngr&&e.fetchLegalActByIdStart){var a=e.i18n.language||e.i18n.options.fallbackLng&&e.i18n.options.fallbackLng[0];e.fetchLegalActByIdStart({id:e.ngr,lang:a},null,!0)}},[e.i18n.language,e.ngr]),Object(o.a)(e.children,Object(c.c)(n.a({},e),"children"))}))},1953:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(1738)),d=t(1957),c=t(1737),o=(t.n(c),t(20));t.n(o);a.a=function(e){var a=function(e,a,t){return e?{label:e,to:a,highlight:t}:void 0},t=[a(e.categoryLabel),a(e.number),a(e.typeLabel,e.typeLink),a(e.date)],c=[a(e.organizationLabel,e.organizationLink,!0)];return r.createElement(i.a,n.a({},e,{className:"card-document-list__item",leftIcon:e.docIcon?"far fa-file-alt":"",leftCategory:t.filter(Boolean),rightCategory:c.filter(Boolean),actions:e.textCover?d.a:[],label:e.label,hint:e.hint,content:e.content,link:e.link,href:e.href,padding:o.isMobileOnly?3:0,color:e.color,externalLinkIcon:e.externalLinkIcon}))}},1957:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n=[{label:"cover",to:""}]},1962:function(e,a,t){"use strict";var n;t.d(a,"a",function(){return n}),function(e){e.dateLayout="DD MMMM YYYY"}(n||(n={}))},2087:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(1738)),d=t(2097),c=(t.n(d),t(24)),o=t(20);t.n(o);a.a=function(e){var a=function(e,a,t,n){return e?{label:e,href:a,to:t,highlight:n}:void 0},t=e.legalActs&&e.ngr&&e.legalActs[e.ngr]||{},d=e.showRightCategory,l=void 0===d||d,m=[a(t.ngr),a(e.typeLabel,void 0,e.typeLink),a(e.date)],s=[a("adilet.zan.kz","http://adilet.zan.kz/"+t.lg+"/docs/"+t.ngr,void 0,!0)];return r.createElement(i.a,n.a({},e,{className:"card-document-list__item",leftIcon:"far fa-file-alt",leftCategory:m.filter(Boolean),rightCategory:l?s.filter(Boolean):[],padding:o.isMobileOnly?3:0,link:c.ministryRoutesBaseUrl+"/"+e.slug+"/documents/details/adilet/"+t.ngr,label:t.title,color:e.color}))}},2097:function(e,a,t){var n=t(2098);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};t(1053)(n,r);n.locals&&(e.exports=n.locals)},2098:function(e,a,t){(e.exports=t(1052)(!1)).push([e.i,".card-document-loading--center {\n  display: block;\n  margin: 0 auto; }\n",""])},2119:function(e,a,t){var n=t(2231);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!1,transform:void 0};t(1053)(n,r);n.locals&&(e.exports=n.locals)},2120:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(1),i=(t.n(r),t(2)),d=(t.n(i),t(24)),c=t(44),o=t(19),l=t(1953),m=t(1931),s=t(1737),u=(t.n(s),t(16)),f=t(1939),g=t(2087),p=t(20);t.n(p);a.default=function(e){var a=e.documents||e.article||e.data||{},t=e.directionId,s=t?"?directionId="+t:"";return r.createElement(o.a,n.a({},e,{border:!p.isMobileOnly,padding:p.isMobileOnly?0:3,classNames:"card-document-list-wrap fill_w",loading:e.loading}),r.createElement(c.a,{className:"card-document-list"},Object.keys(a).slice(0,e.countOfDocument).map(function(t,n){var c=a[t],o=c&&c.type&&c.type.id||"";return c.adilet?r.createElement(f.a,{ngr:c.adilet,key:n},r.createElement(g.a,{border:p.isMobileOnly,typeLabel:c.type&&c.type.name||"",typeLink:d.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?type="+o,date:c.date&&i.utc(c.date).format(m.a.dateLayout),color:e.color,slug:e.slug})):r.createElement(l.a,{key:n,border:p.isMobileOnly,docIcon:!0,color:e.color,className:"card-document-list__item",number:c.number?"\u2116"+c.number:"",date:c.date&&i.utc(c.date).format(m.a.dateLayout),label:c.title,hint:c.hint,organizationLabel:c.organization&&c.organization.name||"",organizationLink:d.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?gosorgan="+(c.organization&&c.organization.id||""),typeLabel:c.type&&c.type.name||"",slug:e.slug,typeLink:d.ministryRoutesBaseUrl+"/"+e.slug+"/documents/1?type="+o,link:d.ministryRoutesBaseUrl+"/"+e.slug+"/documents/details/"+(e.isArray?c.id:Object(u.j)(t,"_"))+s})})))}},2231:function(e,a,t){(e.exports=t(1052)(!1)).push([e.i,".card-media {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background: white;\n  border-radius: 4px; }\n  .card-media .card-media__btn-link {\n    text-align: left;\n    white-space: normal; }\n  .card-media .card-media__img-wrap {\n    width: 100%;\n    height: 198px;\n    min-height: 198px;\n    overflow: hidden;\n    position: relative; }\n    .card-media .card-media__img-wrap .card-media__img {\n      position: relative;\n      z-index: 2;\n      -o-object-fit: contain;\n         object-fit: contain;\n      height: 100%;\n      width: 100%;\n      border-top-left-radius: 4px;\n      border-top-right-radius: 4px; }\n      .card-media .card-media__img-wrap .card-media__img.blurred {\n        filter: blur(8px);\n        -webkit-filter: blur(8px);\n        position: absolute;\n        left: -25%;\n        z-index: 1;\n        width: 150%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover; }\n  .card-media .card-media__content {\n    width: 100%;\n    height: 100%;\n    padding: 0 16px;\n    padding-bottom: 16px; }\n    .card-media .card-media__content .card-media__header {\n      white-space: normal;\n      text-align: left;\n      margin-top: 16px;\n      height: 3.6rem;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n         text-overflow: ellipsis; }\n      .card-media .card-media__content .card-media__header .card-media__header-title {\n        -webkit-transition: .3s all;\n        -o-transition: .3s all;\n        transition: .3s all;\n        line-height: 1.2rem; }\n      .card-media .card-media__content .card-media__header:hover, .card-media .card-media__content .card-media__header:focus {\n        opacity: 1;\n        color: #1565C0;\n        -webkit-transition: none;\n        -o-transition: none;\n        transition: none;\n        cursor: pointer; }\n        .card-media .card-media__content .card-media__header:hover .card-media__header-title, .card-media .card-media__content .card-media__header:focus .card-media__header-title {\n          color: inherit; }\n    .card-media .card-media__content .card-media__body {\n      margin-top: 8px;\n      overflow: hidden;\n      height: 6.25rem; }\n      .card-media .card-media__content .card-media__body .card-media__body-description * {\n        font-size: 0.875rem;\n        font-weight: normal;\n        line-height: 1.5625rem; }\n    .card-media .card-media__content .card-media__footer-icon {\n      color: #616161; }\n    .card-media .card-media__content .card-media__footer {\n      margin-top: 16px; }\n      .card-media .card-media__content .card-media__footer .pinned {\n        color: #1565C0; }\n        .card-media .card-media__content .card-media__footer .pinned .fa-thumbtack {\n          -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n          font-size: 1rem; }\n      .card-media .card-media__content .card-media__footer .card-media__footer-tag {\n        color: #1565C0; }\n      .card-media .card-media__content .card-media__footer .card-media__footer-caption {\n        color: #616161;\n        font-weight: normal; }\n        .card-media .card-media__content .card-media__footer .card-media__footer-caption .card-media__footer-icon {\n          margin-right: 12px; }\n\n.card-media--large {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row; }\n  .card-media--large .card-media__img-wrap {\n    width: 50%;\n    height: 100%;\n    position: relative; }\n    .card-media--large .card-media__img-wrap .card-media__img {\n      -o-object-fit: cover;\n         object-fit: cover;\n      height: 420px;\n      width: 100%;\n      border-top-right-radius: 0;\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n  .card-media--large .card-media__content {\n    width: 50%;\n    height: 100%;\n    padding: 0 24px; }\n    .card-media--large .card-media__content .card-media__header {\n      height: 3.6rem; }\n    .card-media--large .card-media__content .card-media__body {\n      margin-top: 16px;\n      height: 13.5rem; }\n    .card-media--large .card-media__content .card-media__footer {\n      margin-top: 36px; }\n\n.card-media-group-wrap {\n  background: transparent !important;\n  display: block; }\n  .card-media-group-wrap .card-media-item-wrap .card-media-item {\n    margin-top: 32px; }\n    .card-media-group-wrap .card-media-item-wrap .card-media-item:first-child {\n      margin-top: 0; }\n    .card-media-group-wrap .card-media-item-wrap .card-media-item:nth-child(2) {\n      margin-top: 0; }\n    .card-media-group-wrap .card-media-item-wrap .card-media-item:nth-child(3) {\n      margin-top: 0; }\n  .card-media-group-wrap .card-media-item-wrap .card-media-item-mobile {\n    margin-top: 16px; }\n  .card-media-group-wrap .card-media-item-wrap .card-media-item-mobile:first-child {\n    margin-top: 0; }\n  .card-media-group-wrap .card-media-item-wrap--large .card-media-item:nth-child(3) {\n    margin-top: 32px; }\n\n.card-media-big .card-media .card-media__content {\n  padding-left: 16px; }\n  .card-media-big .card-media .card-media__content .card-media__header {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    height: 3.6rem;\n    overflow: hidden;\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis; }\n  .card-media-big .card-media .card-media__content .card-media__footer {\n    margin-top: 15px; }\n\n.card-media__footer__direction {\n  font-size: 0.875rem;\n  font-weight: 400;\n  white-space: normal;\n  text-align: left; }\n\n@media screen and (max-width: 768px) {\n  .card-media .card-media__content {\n    padding: 0; }\n  .card-media-big .card-media .card-media__content .card-media__header {\n    height: auto; } }\n\n.card-media-mobile .card-media-mobile__img-wrap .card-media-mobile__img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: auto;\n  width: 100%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.card-media-mobile .card-media-mobile__btn-link-wrap {\n  height: 3.5625rem;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis; }\n  .card-media-mobile .card-media-mobile__btn-link-wrap .card-media-mobile__btn-link {\n    white-space: normal;\n    text-align: left; }\n\n.card-media-mobile .card-media-mobile__footer {\n  -ms-flex-align: end;\n      align-items: flex-end; }\n  .card-media-mobile .card-media-mobile__footer .card-media-mobile__footer__direction {\n    white-space: normal;\n    text-align: left;\n    -ms-flex: 1 1;\n        flex: 1 1; }\n\n@media screen and (max-width: 576px) {\n  .card-media-big .card-media {\n    margin-bottom: 5px; }\n    .card-media-big .card-media .card-media__content {\n      padding-bottom: 8px;\n      border-radius: 4px; }\n      .card-media-big .card-media .card-media__content .card-media__header {\n        margin-top: 4px; }\n        .card-media-big .card-media .card-media__content .card-media__header .button {\n          line-height: 19px;\n          padding-bottom: 5px !important; } }\n",""])},2232:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(2)),d=(t.n(i),t(69)),c=t(19),o=t(32),l=t(12),m=t(10),s=t(1962),u=t(2119),f=(t.n(u),t(20)),g=(t.n(f),t(11)),p=(t.n(g),t(8)),_=t(16);a.a=function(e){var a=Object(p.b)("common").t,t=e.blurred;return r.createElement(c.a,n.a({},e,{shadowHover:3,padding:e.loading?5:0,classNames:["card-media fill",{"card-media--large":e.large}]}),r.createElement(d.b,{tabIndex:-1,to:e.link,className:"card-media__img-wrap"},r.createElement(o.default,{className:"card-media__img",src:Object(_.e)(e.img,"1280x720"),mediumSrc:Object(_.e)(e.img,"640x480"),alt:e.altImg||""}),t&&r.createElement(o.default,{className:"card-media__img blurred",src:Object(_.e)(e.img,"1280x720"),mediumSrc:Object(_.e)(e.img,"640x480"),alt:e.altImg||""})),r.createElement("div",{className:g("card-media__content",{"p-2 pt-0":f.isMobile})},r.createElement("div",{className:"card-media__header"},r.createElement(m.a,{to:e.link,hint:e.hint,flat:!0,flatter:!0,cropped:!0,classNames:"m-0 p-0 card-media__btn-link"},e.title)),e.description&&r.createElement("div",{className:"card-media__body"},r.createElement(l.a,{element:"div",variant:"bodysubreg",className:"card-media__body-description"},r.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:e.description}}))),r.createElement("div",{className:g("card-media__footer",{"mt-0":f.isMobile})},!e.isMediaTypeHidden&&r.createElement(l.a,{variant:"linksub",className:"card-media__footer-tag"},e.mediaType||a("news")),e.directionTitle&&r.createElement(m.a,{to:e.directionLink,className:"p-0 card-media__footer__direction",flat:!0,flatter:!0,cropped:!0,color:"blue"},e.directionTitle||""),r.createElement("div",{className:"d-flex align-items-center justify-content-between pt-2"},r.createElement(l.a,{variant:"caption",className:"card-media__footer-caption mr-3"},i.utc(e.date).format(s.a.dateLayout)),e.imagesCount&&r.createElement(r.Fragment,null,r.createElement("i",{className:"typography__variant-dot card-media__footer-icon fas fa-circle mr-3"}),r.createElement(l.a,{variant:"caption",className:"d-flex align-items-center card-media__footer-caption"},r.createElement("i",{className:"card-media__footer-icon fas fa-sm fa-images"}),e.imagesCount)),r.createElement("div",{className:"d-flex"},e.isPinned&&r.createElement(l.a,{variant:"caption",className:"pinned"},r.createElement("i",{className:"fas fa-thumbtack"})))))))}},2557:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(191)),d=t(315),c=t(322),o=(t.n(c),t(8));a.a=Object(o.c)()(function(e){var a=e.data||{};return r.createElement(d.a,n.a({slidesToShow:Object.keys(a).length>3?3:Object.keys(a).length,classNames:"mx-n3 card-situations-slider",loading:e.dataLoading},e),Object.keys(a).map(function(e,t){return r.createElement("div",{key:t,className:"px-3"},r.createElement(i.a,{border:!0,padding:3,variant:"body",deleteFlex:!0,icon:a[e].iconImage,title:{label:a[e].title,link:""+a[e].link}}))}))})},3004:function(e,a,t){"use strict";var n=t(1),r=(t.n(n),t(2120)),i=t(41),d=t(8);a.a=Object(d.c)()(function(e){return n.createElement(i.default,{vertical:!0,links:e.tabs,onItemClick:e.onItemClick},e.types.map(function(a,t){return n.createElement(r.default,{documents:e.documents,key:t})}))})},3255:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(11)),d=t.n(i),c=t(19),o=t(2232),l=t(24),m=t(20),s=(t.n(m),t(3256));a.a=function(e){var a=e.news||e.data||{};return r.createElement(c.a,n.a({},e,{padding:e.loading?5:0,className:"card-media-group-wrap"}),r.createElement("div",{className:d()("row","card-media-item-wrap",{"card-media-item-wrap--large":e.firstLarge})},Object.keys(a).slice(0,e.countOfMedia).map(function(t,n){return r.createElement("div",{className:d()(0===n&&e.firstLarge?"col-md-8":"col-md-4",m.isMobileOnly?"card-media-item-mobile":"card-media-item"),key:n},r.createElement(m.isMobileOnly?s.a:o.a,{border:!0,isMediaTypeHidden:!0,img:""+a[t].imageSource||"",title:a[t].title,link:l.ministryRoutesBaseUrl+"/"+e.slug+"/press/news/details/"+a[t].newsId,mediaType:e.type||"\u041d\u043e\u0432\u043e\u0441\u0442\u044c",date:a[t].createdDate,large:0===n&&e.firstLarge,padding:0,directionTitle:a[t].directions&&a[t].directions.length?a[t].directions[0].title:"",directionLink:l.ministryRoutesBaseUrl+"/"+e.slug+"/activities/"+(i=a[t],i&&i.directions&&i.directions[0]&&i.directions[0].id||0),hint:a[t].hint},null));var i})))}},3256:function(e,a,t){"use strict";var n=t(0),r=t(1),i=(t.n(r),t(2)),d=(t.n(i),t(69)),c=t(19),o=t(32),l=t(12),m=t(10),s=t(1962),u=t(2119),f=(t.n(u),t(16));a.a=function(e){return r.createElement(c.a,n.a({},e,{shadowHover:3,padding:e.loading?5:3,classNames:"card-media-mobile fill"}),r.createElement("div",{className:"card-media-mobile__header d-flex flex-column"},r.createElement(d.b,{to:e.link,className:"card-media-mobile__img-wrap mb-2"},r.createElement(o.default,{className:"card-media-mobile__img",src:Object(f.e)(e.img,"1280x720"),mediumSrc:Object(f.e)(e.img,"640x480"),alt:e.title})),r.createElement("div",{className:"card-media-mobile__btn-link-wrap"},r.createElement(m.a,{to:e.link,hint:e.hint,flat:!0,flatter:!0,cropped:!0,variant:"bodysubbold",classNames:"m-0 p-0 card-media-mobile__btn-link"},e.title))),r.createElement("div",{className:"card-media-mobile__footer d-flex"},e.directionLink&&e.directionTitle&&r.createElement(m.a,{to:e.directionLink,className:"p-0 card-media-mobile__footer__direction mr-auto",flat:!0,flatter:!0,cropped:!0,variant:"bodysubreg",color:"blue"},e.directionTitle||""),r.createElement(l.a,{variant:"caption",className:"card-media-mobile__footer-caption"},i.utc(e.date).format(s.a.dateLayout))))}},3257:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r}),t.d(a,"c",function(){return i});(new Date).toString();var n=[{children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"},{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u043e\u0432"}],r=[{children:"\u041f\u043b\u0430\u043d\u044b \u0437\u0430\u043a\u0443\u043f\u043e\u043a",typeId:"52"},{children:"\u041d\u041f\u0410",typeId:""},{children:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u0438 \u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u044b"}],i=[{id:"50"},{id:"16"},{id:"47"}]}});