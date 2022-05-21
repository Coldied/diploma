webpackJsonp([100],{1091:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(1),a=(n.n(r),n(8)),o=n(2303),s=n(15),c=n(40),l=n(43),d=n(3316);e.default=Object(s.c)(null,{fetchMetaStart:c.b})(Object(a.c)("ministry")(function(t){var e=t.match.params.slug;return r.useEffect(function(){scrollTo(0,0),t.fetchMetaStart(i.a({},l.d,{title:t.t("ministry:cardAboutMinistry.generalInformation"),url:t.location.pathname}),null,!0)},[t.location.pathname]),r.createElement(o.a,{slug:e},r.createElement(d.a,{slug:e}))}))},1666:function(t,e,n){"use strict";var i=n(0),r=n(1),a=(n.n(r),n(10)),o=n(1716),s=(n.n(o),n(1786)),c=(n.n(s),n(31)),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onDeleteClick=function(t,n){var i=(void 0===n?e.props:n).onDeleteClick;return function(){return i&&i(t)}},e.onClick=function(t){var n=e.props,i=n.onDeleteClick,r=n.onClick,a=n.value;i||(r?r(t):a&&e.props.history.push(a))},e}return i.c(e,t),e.prototype.render=function(){var t=this.props,e=t.label,n=t.value,o=t.color,s=t.small,c=t.to,l=t.href,d=t.loading,m=t.disableEvents,u=t.onDeleteClick,b=t.classNames;return r.createElement(a.a,i.a({},this.props,{covered:d,variant:"captionsb",color:o||"blue",to:c,href:l,onClick:this.onClick,classNames:["chip align-items-center d-flex",{"chip--small":s,"chip--removable":u,"chip--no-events":m},b]}),e,u&&r.createElement(a.a,{flat:!0,flatter:!0,cropped:!0,color:"white",className:"chip__button p-0",onClick:this.onDeleteClick(n||e)},r.createElement("i",{className:"fas fa-times"})))},e}(r.Component);e.a=Object(c.withRouter)(l)},1716:function(t,e,n){var i=n(1785);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},1785:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".chip {\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  border-radius: 8px; }\n  .chip .chip__button {\n    margin-left: 16px;\n    font-size: 0.875rem;\n    line-height: 1; }\n\n.chip--no-events {\n  pointer-events: none !important; }\n\n.chip--small {\n  padding: 4px 12px;\n  font-size: 0.625rem;\n  border-radius: 32px; }\n\n.chip--removable {\n  padding-right: 8px; }\n",""])},1786:function(t,e,n){var i=n(1787);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},1787:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,"@media (max-width: 767px) {\n  .chip {\n    white-space: pre-line;\n    text-align: left; } }\n",""])},2272:function(t,e,n){var i=n(2273);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},2273:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".card-supervised-direction {\n  max-height: 222px;\n  border: 1px solid rgba(0, 0, 0, 0.12); }\n  .card-supervised-direction .card-supervised-direction__body {\n    height: 4.875rem;\n    line-height: 1.625rem;\n    overflow: hidden; }\n  .card-supervised-direction .card-supervised-direction__info {\n    margin-top: 24px; }\n    .card-supervised-direction .card-supervised-direction__info .card-supervised-direction__info__link {\n      font-size: 0.875rem;\n      font-weight: 500; }\n    .card-supervised-direction .card-supervised-direction__info .card-supervised-direction__info__i {\n      padding: 0 1.125rem;\n      vertical-align: middle;\n      color: #C7C7C7; }\n  .card-supervised-direction .card-supervised-direction__detail-btn {\n    font-size: 0.875rem;\n    font-weight: normal; }\n\n.card-supervised-direction-group .card-supervised-direction-group__item {\n  min-height: 58px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-align: center; }\n\n.card-supervised-direction-group .card-supervised-direction-group__item-wrap {\n  margin-bottom: 12px; }\n  .card-supervised-direction-group .card-supervised-direction-group__item-wrap .direction-title {\n    font-size: 16px; }\n\n.card-supervised-direction-group .card-supervised-direction-group__item-wrap__link:hover .card-supervised-direction-group__item {\n  color: #1565C0;\n  border-color: #1565C0; }\n",""])},2303:function(t,e,n){"use strict";var i=n(0),r=n(1),a=(n.n(r),n(8)),o=n(15),s=n(16),c=n(21),l=n(329);e.a=Object(o.c)(function(t){return{organizations:t.organizations.data,loading:t.organizations.loading,error:t.organizations.error,logo:t.header.data}},{fetchOrganizationsStart:l.f,fetchMinimalOrgDataStart:l.a,fetchOrganizationsByIdStart:l.c,fetchOrganizationsByParent:l.d})(Object(a.c)()(function(t){return r.useEffect(function(){t.id&&t.fetchOrganizationsByIdStart?t.fetchOrganizationsByIdStart({id:t.id,slug:t.slug}):t.loadMininalData&&t.slug&&t.fetchMinimalOrgDataStart?t.fetchMinimalOrgDataStart({slug:t.slug},null,!0):t.slug&&t.fetchOrganizationsStart?t.fetchOrganizationsStart({slug:t.slug},null,!0):t.parentId&&t.fetchOrganizationsByParent&&t.fetchOrganizationsByParent({id:t.parentId,slug:t.slug})},[t.i18n.language,t.slug]),Object(c.a)(t.children,Object(s.c)(i.a({},t),"children"))}))},2307:function(t,e,n){"use strict";var i=n(1),r=(n.n(i),n(38)),a=n(2272),o=(n.n(a),n(69)),s=n(24),c=n(12),l=n(32),d=n(19),m=n(20),u=(n.n(m),n(11)),b=n.n(u),p=n(16);e.a=function(t){var e=(t.data&&(Array.isArray(t.data)?t.data:Object.values(t.data))||[]).filter(function(t){return t.parent_direction&&!t.parent_direction.id||t.icon&&t.title&&t.id}).filter(function(t){return!t.display_separately})||[],n=t.size?Object.keys(e).slice(0,t.size):Object.keys(e),a=t.showDescription;return i.createElement(r.default,{loading:t.dataLoading},i.createElement("div",{className:"row card-supervised-direction-group"},n.map(function(n,r){return i.createElement("div",{key:r,className:"col-md-6 col-lg-4 col-xl-"+(t.col||"3")+" card-supervised-direction-group__item-wrap "+(m.isMobile&&"mb-3")},i.createElement(d.a,{border:m.isMobile,padding:0,className:b()("fill_w d-flex",{"py-2":!m.isMobile},{"p-3":m.isMobile})},i.createElement(o.b,{to:s.ministryRoutesBaseUrl+"/"+t.slug+"/activities/"+e[n].id,className:"card-supervised-direction-group__item-wrap__link"},i.createElement("div",{className:"d-flex align-items-center"},e[n].icon&&i.createElement(l.default,{tabIndex:-1,src:Object(p.e)(e[n].icon,"64x64"),alt:e[n].alt_image||"",className:"card-service__header-icon"}),i.createElement(c.a,{variant:"bodysub",className:"color_blue direction-title"},e[n].title))),a&&i.createElement(c.a,{variant:"caption",element:"div",className:"color_grey mt-1"+(e[n].icon?" card-service__description-ml":"")},e[n].description)))})))}},3316:function(t,e,n){"use strict";var i,r,a=n(0),o=n(1),s=(n.n(o),n(24)),c=n(8),l=n(3317),d=n(38),m=n(12),u=n(2307),b=n(97),p=n(42),_=n(318),f=n(35);e.a=Object(c.c)(["common","ministry"])(function(t){var e=t.slug,n=s.ministryRoutesBaseUrl+"/"+e,c=t.organizations?t.organizations[e]:{},g=c&&c.type&&c.type.id||_.b.Ministry,y=Object(_.e)(g,e),v=Object(b.useQueryWithLang)(Object(p.c)(i||(i=a.e(['\n    query {\n      projectdetails(slug: "eq:','") {\n        about_title\n      }\n    }\n  '],['\n    query {\n      projectdetails(slug: "eq:','") {\n        about_title\n      }\n    }\n  '])),e)),h=v.data,x=v.loading,w=h&&h.projectdetails&&h.projectdetails[0],E=Object(b.useQueryWithLang)(Object(p.c)(r||(r=a.e(['{\n        directions (projects: "eq:','", _size: 200, _sort: "order:asc") {\n            id,\n            icon,\n            slug,\n            title,\n            parent_direction {\n              id\n            },\n            display_separately\n        }\n        feedback: feedback_button_settings(projects: "eq:','", _size: 1) {\n          showApplication: show_application\n          applicationUrl: application_url\n          showVirtualReception: show_virtual_reception\n          showBlogUrl: show_blog_url\n          blogUrl: blog_url\n          curator {\n            id\n          }\n        }\n    }'],['{\n        directions (projects: "eq:','", _size: 200, _sort: "order:asc") {\n            id,\n            icon,\n            slug,\n            title,\n            parent_direction {\n              id\n            },\n            display_separately\n        }\n        feedback: feedback_button_settings(projects: "eq:','", _size: 1) {\n          showApplication: show_application\n          applicationUrl: application_url\n          showVirtualReception: show_virtual_reception\n          showBlogUrl: show_blog_url\n          blogUrl: blog_url\n          curator {\n            id\n          }\n        }\n    }'])),e,e)),k=E.data,j=void 0===k?{directions:[],activity_page_blocks:[],feedback:[]}:k,O=E.loading,z=void 0!==O&&O,C=j.directions.filter(function(t){return t.parent_direction&&!t.parent_direction.id}).filter(function(t){return!t.display_separately});return o.createElement(f.default,{loading:t.loding},o.createElement("div",{className:"container"},o.createElement(d.default,{titleLarge:!0,title:t.t("ministry:cardAboutMinistry.generalInformation")},o.createElement(l.a,{moreLink:n+"/about/structure",structLink:n+"/about/structure",organization:c,curator:c&&c.curator,curatorsLoading:t.loading&&x,slug:e,title:w&&w.about_title,data:j.feedback})),C.length>0&&o.createElement(d.default,{titleLarge:!0,sectionSmall:!0},o.createElement(m.a,{variant:"h2"},y?t.t("ministry:mainPage.bilateralCooperation"):t.t("ministry:mainPage.activities")),o.createElement(u.a,{dataLoading:z,data:C,slug:e,col:"4"}))))})},3317:function(t,e,n){"use strict";var i=n(0),r=n(1),a=(n.n(r),n(8)),o=n(19),s=n(12),c=n(10),l=n(32),d=n(27),m=n(3318),u=n(3319),b=(n.n(u),n(3321)),p=(n.n(b),n(3323)),_=n(11),f=n.n(_),g=n(24),y=n(318),v=n(196),h=n(16),x=m.a.organizationTypes;e.a=Object(a.c)(["ministry","common","virtualReception"])(function(t){var e,n=t.organization,a=t.curator||{},m=n&&n.type&&n.type.id||1,u=t.data&&t.data[0]||null,b=Object(y.e)(m,t.slug),_=t.t("ministry:cardAboutMinistry.ministryStructure"),w=t.t("ministry:structure.embassy"),E=Object(y.d)(a);return r.createElement(o.a,i.a({},t,{border:!0,shadowHover:3,padding:16,classNames:f()({"card-about-ministry d-flex":!0,"flex-md-row justify-content-md-between":"medium screen","flex-sm-column justify-content-sm-start":"small screen","flex-column":"very small screen"})}),r.createElement("div",{className:f()({"card-about-ministry__minister-info card-about-ministry__block-border--adaptive":!0,"col-xl-3":"large screen","col-md-4 p-md-0":"medium screen","col-sm-12 mb-sm-3 p-sm-4 flex-sm-row":"small screen","mb-3 p-3":"very small"})},Object.keys(a).length>0&&r.createElement(r.Fragment,null,r.createElement("div",{className:f()({"card-about-ministry__minister-info__image-wrap d-flex":!0,"flex-md-column":"medium screen","flex-sm-row justify-content-sm-between":"small screen","justify-content-between":"very small"})},E&&r.createElement(l.default,{src:Object(h.e)(a&&E,"1280x720"),mediumSrc:Object(h.e)(a&&E,"640x480"),alt:a&&a.photoHint||"",className:f()({"card-about-ministry__minister-info__image w-100 px-0":!0,"col-md-12":"medium screen","col-sm-5":"small screen","col-4":"very small"})}),r.createElement("div",{className:f()({"d-flex flex-column px-0":!0,"col-md-12":"medium screen","col-sm-6":"small screen","col-7":"very small"})},r.createElement(c.a,{flat:!0,flatter:!0,cropped:!0,variant:"h1sub",className:"card-about-ministry__minister-info__name p-0 pt-md-2 pt-sm-0 text-wrap text-left",to:g.ministryRoutesBaseUrl+"/"+t.slug+"/about/structure/people/"+a.id},a&&r.createElement(r.Fragment,null,r.createElement(s.a,{variant:"h1sub",className:"d-block"},a.lastname||""),r.createElement(s.a,{variant:"h1sub",className:"d-block"},(a.name||"")+" "+(a.middlename||"")))),r.createElement(s.a,{variant:"small",covered:t.curatorsLoading,className:"card-about-ministry__minister-info__job"},a.position))),r.createElement("div",{className:"d-flex flex-column"},u&&u.showBlogUrl&&u.curator&&a.id===u.curator.id&&r.createElement(c.a,{ripple:!0,outlined:!0,color:"blue",target:"_blank",classNames:"card-about-ministry__ministry-info__button mt-2",href:u.blogUrl},t.t("ministry:writeToBlog"))))),r.createElement(d.a,{vertical:!0,className:"card-about-ministry__divider"}),r.createElement("div",{className:f()({"card-about-ministry__block-border--adaptive d-flex flex-column justify-content-between":!0,"col-xl-8":"large screen","col-md-7 p-md-0":"medium screen","col-sm-12 mb-sm-3  p-sm-4":"small screen","p-3":"very small"})},r.createElement("div",{className:"card-about-ministry__ministry-info d-flex flex-column align-items-start"},r.createElement(s.a,{variant:"h3"},t.title||t.t("ministry:cardAboutMinistry."+(void 0===(e=m)&&(e=y.b.Ministry),x[e]||x[y.b.Ministry]))),n&&r.createElement("div",{dangerouslySetInnerHTML:{__html:n.activitiesDescription},className:"card-about-ministry__ministry-info__body inner-html"}),n&&n.regulatoryDocument&&n.regulatoryDocument.link&&r.createElement(c.a,{downloadable:!0,href:Object(v.b)(n.regulatoryDocument.link||"","/uploads","/api/v1/public/assets"),className:"p-0 mt-4 card-about-ministry__ministry-info__download-button"},t.t("ministry:cardAboutMinistry.downloadPosition"),r.createElement("i",{className:"fas fa-download card-about-ministry__ministry-info__download-icon"})),r.createElement(p.a,{slug:t.slug})),r.createElement("div",{className:"card-about-ministry__footer-buttons d-md-flex justify-content-end flex-lg-row flex-md-column"},t.structLink&&r.createElement(c.a,{outlined:!0,ripple:!0,color:"blue",target:"_blank",className:"card-about-ministry__to-structure-button col-lg-6 col-md-12 mb-lg-0 mb-md-3 mb-sm-3 mb-3",covered:t.loading,to:t.structLink},b?w:_),u&&u.showApplication&&r.createElement(c.a,{ripple:!0,color:"blue",target:"_blank",className:"card-about-ministry__to-structure-button col-lg-5 col-md-12 ml-lg-4 ml-md-0",covered:t.loading,href:u.applicationUrl},t.t("ministry:cardAboutMinistry.WriteAppeal")))))})},3318:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i,r=n(318);!function(t){var e;t.organizationTypes=((e={})[r.b.NationalHumanRightsCommission]="aboutOmbudsman",e[r.b.TerritorialDepartments]="aboutRegionalDepartment",e[r.b.BorderService]="aboutService",e[r.b.Guard]="aboutGuard",e[r.b.Prosecutor]="aboutProsecutor",e[r.b.Commission]="aboutCommission",e[r.b.Court]="aboutCourt",e[r.b.Counsel]="aboutCounsel",e[r.b.Agency]="aboutAgency",e[r.b.Center]="aboutCenter",e[r.b.TerritorialDivision]="aboutSubdivision",e[r.b.Ministry]="aboutMinistry",e[r.b.Committee]="aboutCommittee",e[r.b.Department]="aboutDepartment",e[r.b.AdvisoryBody]="aboutAdvisory",e[r.b.SubOrganization]="aboutSubordinate",e[r.b.Akimat]="aboutAkimat",e[r.b.FinOrganization]="aboutFinance",e[r.b.Service]="aboutService",e[r.b.Management]="aboutDirection",e[r.b.Detachment]="aboutSquad",e[r.b.Branch]="aboutDivision",e[r.b.MaslikhatApparatus]="aboutAkimatApparatus",e[r.b.AkimatOffice]="aboutAkimatDivision",e[r.b.Embassy]="aboutEmbassy",e[r.b.LocalAkimat]="aboutLocalAkimat",e[r.b.CentralStateAuthority]="aboutCentralStateAuthority",e[r.b.CommitteeGP]="aboutCommittee",e[r.b.ProsecutionAuthorities]="aboutProsecutor",e[r.b.PermanentMission]="aboutEmbassy",e[r.b.Consulates]="aboutEmbassy",e)}(i||(i={}))},3319:function(t,e,n){var i=n(3320);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},3320:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".card-about-ministry {\n  padding: 24px !important; }\n  @media (max-width: 767px) {\n    .card-about-ministry__block-border--adaptive {\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      border-radius: 4px; } }\n  .card-about-ministry .card-about-ministry__minister-info {\n    padding-left: 0; }\n    .card-about-ministry .card-about-ministry__minister-info .card-about-ministry__minister-info__job {\n      padding-top: 4px;\n      color: rgba(59, 66, 86, 0.8);\n      font-size: 14px; }\n    .card-about-ministry .card-about-ministry__minister-info .card-about-ministry__ministry-info__button {\n      padding-left: 0;\n      padding-right: 0;\n      text-align: center; }\n    .card-about-ministry .card-about-ministry__minister-info .card-about-ministry__minister-info__image-wrap {\n      margin: 0 auto; }\n      .card-about-ministry .card-about-ministry__minister-info .card-about-ministry__minister-info__image-wrap .card-about-ministry__minister-info__image {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        border-radius: 4px; }\n  .card-about-ministry .card-about-ministry__ministry-info {\n    padding-right: 0; }\n    .card-about-ministry .card-about-ministry__ministry-info__link {\n      margin: 16px 0; }\n    .card-about-ministry .card-about-ministry__ministry-info__body {\n      padding-top: 16px; }\n    .card-about-ministry .card-about-ministry__ministry-info__download-title {\n      font-size: 0.875rem;\n      font-weight: 500;\n      color: #1565C0; }\n    .card-about-ministry .card-about-ministry__ministry-info__download-button {\n      background-color: #ffffff;\n      color: #1565C0; }\n    .card-about-ministry .card-about-ministry__ministry-info__download-icon {\n      margin-left: 18px;\n      font-size: 20px;\n      color: #949494; }\n    .card-about-ministry .card-about-ministry__ministry-info .department-button {\n      color: #1565C0;\n      font-size: 0.875rem;\n      background: white;\n      font-weight: 400; }\n",""])},3321:function(t,e,n){var i=n(3322);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},3322:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,"@media (max-width: 767px) {\n  .card-about-ministry {\n    border: none;\n    padding: 0 !important;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .card-about-ministry:hover {\n      -webkit-box-shadow: none !important;\n              box-shadow: none !important; }\n    .card-about-ministry__block-border--adaptive {\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      border-radius: 4px; }\n    .card-about-ministry__minister-info {\n      padding-left: 15px;\n      width: 100%; }\n      .card-about-ministry__minister-info__download-button {\n        font-size: 0.75rem; }\n      .card-about-ministry__minister-info__image-wrap .card-about-ministry__minister-info__image {\n        width: 160px;\n        height: 160px; } }\n",""])},3323:function(t,e,n){"use strict";var i,r=n(0),a=n(1),o=(n.n(a),n(8)),s=n(12),c=n(1666),l=n(3324),d=(n.n(l),n(97)),m=n(42),u=n(35),b=n(196);e.a=Object(o.c)("ministry")(function(t){var e=Object(d.useQueryWithLang)(Object(m.c)(i||(i=r.e(['{\n        projectdetails (slug: "eq:','") {\n            main_depts {\n                shortname\n                id\n                fullymigrated\n                slug\n                type {\n                    id\n                    behaviour {\n                        code\n                    }\n                }\n            }\n        }\n    }'],['{\n        projectdetails (slug: "eq:','") {\n            main_depts {\n                shortname\n                id\n                fullymigrated\n                slug\n                type {\n                    id\n                    behaviour {\n                        code\n                    }\n                }\n            }\n        }\n    }'])),t.slug)),n=e.loading,o=e.data;return a.createElement(u.default,{loading:n},a.createElement("div",{className:"list-department"},o&&0!==o.projectdetails[0].main_depts.length?a.createElement(a.Fragment,null,a.createElement(s.a,{variant:"caption",className:"mb-2 mt-4"},"knb"===t.slug?t.t("cardAboutMinistry.services"):t.t("cardAboutMinistry.committees")," "),a.createElement("div",{className:"d-flex flex-wrap mb-4"},o.projectdetails[0].main_depts.map(function(e,n){return a.createElement(c.a,{key:n,label:e.shortname,to:e.type.behaviour&&Object(b.a)(e.id,e.slug||t.slug,e.fullymigrated,e.type.id,e.type.behaviour.code),color:"white",className:"list-department__chip mr-3 mb-3"})}))):a.createElement(a.Fragment,null)))})},3324:function(t,e,n){var i=n(3325);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!1,transform:void 0};n(1053)(i,r);i.locals&&(t.exports=i.locals)},3325:function(t,e,n){(t.exports=n(1052)(!1)).push([t.i,".list-department .list-department__chip {\n  color: #1565C0;\n  border: 1px solid #1565C0;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 2px 12px; }\n",""])}});