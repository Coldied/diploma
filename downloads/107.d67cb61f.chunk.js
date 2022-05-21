webpackJsonp([107],{1059:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=(n.n(a),n(8)),o=n(3145),c=n(2629),r=n(2627),l=(n.n(r),n(2251)),m=n(15),s=n(40);e.default=Object(m.c)(null,{fetchMetaStart:s.b})(Object(i.c)("common")(function(t){return a.createElement("div",{className:"document-details"},a.createElement(c.a,{slug:t.match.params.slug,id:t.match.params.id},a.createElement(l.a,{contentTypeSlug:"documents",sourceId:t.match.params.id},a.createElement(o.a,{slug:t.match.params.slug,fetchMetaStart:t.fetchMetaStart}))))}))},1986:function(t,e,n){"use strict";var a=n(0),i=n(1),o=(n.n(i),n(11)),c=n.n(o),r=n(19),l=n(12),m=n(10),s=n(45),d=n(1987),u=(n.n(d),n(27)),f=n(8);e.a=function(t){var e=Object(f.b)("common").t,n=!t.hasOwnProperty("border")||t.border;return i.createElement(r.a,a.a({border:n},t,{classNames:"card-information d-flex flex-column"}),i.createElement("div",{className:"card-information__description"},t.description&&t.description.map(function(n,a){return n.categories&&n.categories.length>0&&n.categories[0].label&&i.createElement("div",{key:a,className:"card-information__description-item"},i.createElement(l.a,{variant:"small"},n.label),i.createElement(s.a,{variant:"linkbold",withoutDot:t.withoutDot,items:n.categories,color:n.label===e("common:publicationDate")?"black":"blue",classNames:"card-information__description-item__categories"}))})),t.actions&&i.createElement(u.a,{horizontal:!0}),t.actions&&i.createElement("div",{className:"card-information__actions"},t.actions.map(function(t,e){return i.createElement("div",{key:e,className:"card-information__actions-item d-flex align-items-center"},i.createElement(m.a,{flat:!0,flatter:!0,cropped:!0,to:t.to,color:"blue",className:"p-0 d-flex align-items-center card-information__actions-item__button text-wrap text-left"},i.createElement("i",{className:c()(t.icon,"card-information__actions-item__icon")}),t.label))}),t.shareLabel&&i.createElement("div",{className:"card-information__actions-item d-flex align-items-center"},i.createElement(m.a,{flat:!0,flatter:!0,cropped:!0,onClick:t.shareOnClick,color:"blue",className:"p-0 d-flex align-items-center card-information__actions-item__button text-wrap text-left"},i.createElement("i",{className:c()("far fa-share-alt","card-information__actions-item__icon")}),t.shareLabel))))}},1987:function(t,e,n){var a=n(1988);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(1053)(a,i);a.locals&&(t.exports=a.locals)},1988:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".card-information .card-information__description .card-information__description-item {\n  margin-bottom: 24px; }\n  .card-information .card-information__description .card-information__description-item .card-information__description-item__categories {\n    margin-top: 8px; }\n\n.card-information .card-information__actions {\n  margin-top: 24px; }\n  .card-information .card-information__actions .card-information__actions-item {\n    font-size: 0.875rem;\n    margin-bottom: 12px; }\n    .card-information .card-information__actions .card-information__actions-item .card-information__actions-item__icon {\n      font-size: 20px;\n      margin-right: 8px;\n      visibility: middle; }\n    .card-information .card-information__actions .card-information__actions-item .card-information__actions-item__label {\n      margin-left: 8px; }\n    .card-information .card-information__actions .card-information__actions-item .card-information__actions-item__button {\n      font-size: 0.875rem; }\n    .card-information .card-information__actions .card-information__actions-item:last-child {\n      margin-bottom: 0; }\n",""])},2251:function(t,e,n){"use strict";var a=n(0),i=n(1),o=(n.n(i),n(8)),c=n(15),r=n(16),l=n(21),m=n(105),s=n(103),d=n(56),u=n(55);n.n(u);e.a=Object(d.d)(Object(c.c)(function(t){return{directionInfo:t.article.directionInfo,loading:t.article.loading}},{fetchDirectionByIdStart:m.q,incViewCountStart:s.d}))(function(t){var e=Object(o.b)().i18n,n=u.parse(location.search).directionId,c=void 0===n?null:n;Object(i.useEffect)(function(){t.fetchDirectionByIdStart&&c&&t.fetchDirectionByIdStart({id:c},null,!0)},[e.language,c]);var m=t.contentTypeSlug,s=t.sourceId;return Object(i.useEffect)(function(){var e="v-"+m+"-id",n=localStorage.getItem(e);Object(r.h)(s)&&t.incViewCountStart&&s&&s!=n&&(t.incViewCountStart({contentTypeSlug:m,sourceId:s},null,!0),localStorage.setItem(e,s))},[s]),Object(l.a)(t.children,Object(r.c)(a.a({},t),"children"))})},2337:function(t,e,n){"use strict";var a;n.d(e,"a",function(){return a}),function(t){t.dateLayout="DD MMMM YYYY",t.DATETIME_FORMAT="DD MMMM YYYY - HH:mm"}(a||(a={}))},2423:function(t,e,n){var a=n(2424);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(1053)(a,i);a.locals&&(t.exports=a.locals)},2424:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".with-max-height {\n  max-height: 600px;\n  overflow: auto; }\n\n.card-information__description-item__categories .categories__item {\n  margin-bottom: 7px;\n  line-height: 1.2em; }\n\n.detail-similar-document {\n  background: #F2F4F8;\n  padding: 56px 0 160px 0; }\n\n@media screen and (max-width: 576px) {\n  .detail-similar-document {\n    padding: 24px 0 64px 0; }\n  .with-max-height {\n    max-height: 400px; } }\n",""])},2627:function(t,e,n){var a=n(2628);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(1053)(a,i);a.locals&&(t.exports=a.locals)},2628:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".document-details + .footer {\n  margin-top: 0; }\n\n.document-details > .section:first-child .section__header {\n  margin-bottom: 8px; }\n",""])},2629:function(t,e,n){"use strict";var a=n(0),i=n(1),o=(n.n(i),n(8)),c=n(15),r=n(16),l=n(21),m=n(108),s=n(198);e.a=Object(c.c)(function(t){return{documents:t.documents.data,loading:t.documents.loading,count:t.documents.count,files:t.files.data,documentFilesLoading:t.files.loading}},{fetchDocumentsStart:s.j,fetchDocumentByIdStart:s.c,fetchFilesByIdsStart:m.b,fetchDocumentsByTypeIdStart:s.h})(Object(o.c)()(function(t){return i.useEffect(function(){t.id&&t.fetchDocumentByIdStart&&t.fetchDocumentByIdStart({id:t.id},null,!0)},[t.i18n.language,t.id]),i.useEffect(function(){var e=t.documents;if(t.id&&e&&e[t.id]&&t.fetchFilesByIdsStart){var n=e[t.id],a=(n.files||[]).concat(n.mainFile);t.fetchFilesByIdsStart({files:a,documentId:t.id,mainFileId:""+(n.mainFile[0]&&n.mainFile[0].id)})}},[t.i18n.language,t.documents,t.id]),Object(l.a)(t.children,Object(r.c)(a.a({},t),"children"))}))},3145:function(t,e,n){"use strict";var a=n(0),i=n(2),o=(n.n(i),n(1)),c=n.n(o),r=n(8),l=n(38),m=n(41),s=n(19),d=n(1986),u=n(2337),f=n(24),p=n(340),g=n(31),_=n(2423),h=(n.n(_),n(187)),b=n(20),E=(n.n(b),n(101)),v=n(43),x=n(12),y=Object(o.lazy)(function(){return n.e(146).then(n.bind(null,3146))});e.a=Object(r.c)(["documents","common"])(Object(g.withRouter)(function(t){var e=Object(r.b)().t,n=[{children:e("documents:shortSummary")},{children:e("documents:fullTextDocument")},{children:e("documents:downloadFiles")}],g=(t.documents||t.data||{})[""+t.id]||{},_=t.slug,S=void 0===_?"":_,w=t.directionInfo,N=void 0===w?{}:w,O=g.projects,j=void 0===O?"":O,F=N.projects,I=void 0===F?"":F,D=(t.files||{})[""+t.id]||{},M=function(t,e,n){return{label:e?t:void 0,categories:[{label:e,to:n}]}},k=f.ministryRoutesBaseUrl+"/"+t.slug+"/documents";c.a.useEffect(function(){scrollTo(0,0)},[t.location.pathname]);var T,L=g.mainFile&&g.mainFile[0]&&g.mainFile[0].id||"",B=(T=D[""+L])?a.a({},T,{categories:[{label:T.extension||""},{label:T.size||""},{label:T.isMainFile?t.t("main"):t.t("application")}]}):{},z=Object.keys(D).map(function(e){return{downloadLink:""+D[e].downloadLink,categories:[{label:D[e].extension||""},{label:D[e].size||""},{label:D[e].isMainFile?t.t("main"):t.t("application")}],title:D[e].title}});return Object(o.useEffect)(function(){t.fetchMetaStart(a.a({},v.d,{title:g.title,url:t.location.pathname}),null,!0)},[g]),g&&g.title&&(I.includes(S)||j.includes(S))?c.a.createElement(c.a.Fragment,null,c.a.createElement(l.default,{coverTitle:t.loading,title:g.title,className:"container"},c.a.createElement(h.a,{label:e("common:backToList"),link:f.ministryRoutesBaseUrl+"/"+t.slug+"/documents"})),c.a.createElement(l.default,{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(m.default,{activeTabIndex:0,loading:t.loading,links:n},c.a.createElement(s.a,{padding:0,classNames:["my-2","with-max-height"]},c.a.createElement("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:g.content}}),c.a.createElement("div",null,g.viewCount&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"far fa-eye mr-1 my-4"}),c.a.createElement(x.a,{variant:"linkbold"},g.viewCount)))),c.a.createElement(o.Suspense,{fallback:c.a.createElement(E.a,null)},c.a.createElement(s.a,{loading:t.documentFilesLoading,padding:0,classNames:["my-2","with-max-height","fill_w"]},B.downloadLink?"doc"===B.extension?c.a.createElement(p.a,{files:[B]}):c.a.createElement(y,{source:B.downloadLink,type:B.extension}):c.a.createElement("div",{className:"p-4"},t.t("mainFileNotExist")))),c.a.createElement(s.a,{loading:t.documentFilesLoading,padding:0,className:"my-2 fill_w "+(b.isMobileOnly&&"color_highlight__bg")},0===z.length?t.t("filesNotExist"):c.a.createElement(p.a,{files:z,padding:0})))),c.a.createElement("div",{className:"col-md-3 mt-4 mt-sm-0"},c.a.createElement(d.a,{padding:0,withoutDot:!0,className:"px-3 py-4",description:[M(t.t("common:docNumber"),g.number),M(t.t("common:publicationDate"),g.date&&i.utc(g.date).format(u.a.DATETIME_FORMAT).toString()),M(t.t("common:updateDate"),g.updatedDate&&i.utc(g.updatedDate).format(u.a.dateLayout).toString()),M(t.t("common:type"),g.type&&g.type.name,g.type?k+"/1?type="+g.type.id:""),M(t.t("common:responsibleAuthority"),g.organization&&g.organization.name,g.organization?k+"/1?gosorgan="+g.organization.id:""),g.directionArray&&g.directionArray.length>0?{label:t.t("common:directions"),categories:g.directionArray.map(function(t){return{label:t.name,to:k+"/1?directions="+t.id}})}:{}]}))))):c.a.createElement(c.a.Fragment,null)}))}});