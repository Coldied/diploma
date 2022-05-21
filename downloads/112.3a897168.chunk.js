webpackJsonp([112],{1096:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=(t.n(a),t(2304)),i=t(3334);n.default=function(e){return a.createElement(r.a,{isManagement:!0,slug:e.match.params.slug},a.createElement(i.a,{slug:e.match.params.slug}))}},2123:function(e,n,t){"use strict";var a=t(0),r=t(1),i=(t.n(r),t(11)),c=(t.n(i),t(12)),s=t(19),l=t(2124),o=(t.n(l),function(e){function n(n){var t=e.call(this,n)||this;return t.onClickExpand=function(){var e=t.props,n=e.id,a=e.stepId;!t.state.active&&n&&a&&window.history.pushState("","","/situations/"+n+"/"+a),t.setState({active:!t.state.active})},t.state={active:t.props.active||!1},t}return a.c(n,e),n.prototype.render=function(){var e=this.props,n=e.title,t=e.children,l=e.mobile,o=this.state.active;return r.createElement(s.a,a.a({},this.props,{padding:0}),r.createElement("div",{className:"expand-btn"},r.createElement("div",{onClick:this.onClickExpand,className:i(["expand-btn__header",{"expand-btn__header--active":o},{mobile:l}])},r.createElement(c.a,{variant:"bodyhl",className:"expand-btn__header__title"},n),r.createElement(c.a,{variant:"bodyhl",className:"expand-btn__header__title"},o?r.createElement("i",{className:"far fa-chevron-up"}):r.createElement("i",{className:"far fa-chevron-down"}))),o&&t&&r.createElement(s.a,{padding:0,className:"expand-btn__content color_white__bg fill_w"},t)))},n}(r.Component));n.a=o},2124:function(e,n,t){var a=t(2217);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};t(1053)(a,r);a.locals&&(e.exports=a.locals)},2217:function(e,n,t){(e.exports=t(1052)(!1)).push([e.i,".expand-btn {\n  width: 100%; }\n  .expand-btn .expand-btn__header {\n    width: 100%;\n    border-radius: 4px;\n    padding: 24px;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    background-color: #ffffff;\n    color: #151515; }\n    .expand-btn .expand-btn__header .expand-btn__header__title {\n      color: inherit; }\n  .expand-btn .expand-btn__header--active {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    background-color: #1565C0;\n    color: #ffffff; }\n    .expand-btn .expand-btn__header--active.mobile {\n      padding-right: 15px !important;\n      padding-left: 15px !important;\n      margin-left: -15px;\n      margin-right: -15px;\n      width: 100vw; }\n  .expand-btn .expand-btn__content {\n    -webkit-transition: .2s all;\n    -o-transition: .2s all;\n    transition: .2s all; }\n",""])},2304:function(e,n,t){"use strict";var a=t(0),r=t(1),i=(t.n(r),t(15)),c=t(330),s=t(21),l=t(16);n.a=Object(i.c)(function(e){return{directs:e.governmentAgency.data.directs||[],head:e.governmentAgency.data.head,headVice:e.governmentAgency.data.headVice,vices:e.governmentAgency.data.vices||[],departments:e.governmentAgency.data.departments,loading:e.governmentAgency.loading}},{fetchGovernmentAgencySchemeStart:c.n,fetchGovernmentAgencyResponsibleSchemeStart:c.k,fetchGovernmentAgencyDirectionsSchemeStart:c.e,fetchGovernmentAgencyManagementSchemeStart:c.h,fetchGovernmentAgencyDepartmentsSchemeStart:c.b})(function(e){return r.useEffect(function(){e.slug&&e.isManagement?e.fetchGovernmentAgencyManagementSchemeStart({slug:e.slug},null,!0):e.slug&&e.projectDetailType?e.fetchGovernmentAgencyDepartmentsSchemeStart({slug:e.slug,typeId:e.projectDetailType},null,!0):e.slug?e.fetchGovernmentAgencySchemeStart({slug:e.slug},null,!0):e.responsibleSlug&&e.responsibleId?e.fetchGovernmentAgencyDirectionsSchemeStart({slug:e.responsibleSlug,id:e.responsibleId},null,!0):e.responsibleSlug&&e.fetchGovernmentAgencyResponsibleSchemeStart({slug:e.responsibleSlug},null,!0)},[e.slug,e.responsibleSlug,e.responsibleId]),Object(s.a)(e.children,Object(l.c)(a.a({},e),"children"))})},3010:function(e,n,t){var a=t(3011);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1,transform:void 0};t(1053)(a,r);a.locals&&(e.exports=a.locals)},3011:function(e,n,t){(e.exports=t(1052)(!1)).push([e.i,".scheme-directions .scheme-directions__expand .expand-btn__header {\n  padding: 16px;\n  border: 1px solid rgba(0, 0, 0, 0.12); }\n  .scheme-directions .scheme-directions__expand .expand-btn__header .expand-btn__header__title {\n    margin-right: 24px; }\n\n.scheme-directions .scheme-directions__expand .expand-btn__header--active {\n  color: #1565C0;\n  background: #F2F4F8;\n  border: none; }\n\n.scheme-directions .scheme-directions__expand .expand-btn__content {\n  padding: 24px 16px 16px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-top: none; }\n",""])},3334:function(e,n,t){"use strict";var a=t(1),r=(t.n(a),t(8)),i=t(38),c=t(187),s=t(24),l=t(3010),o=(t.n(l),t(12)),d=t(2123);n.a=Object(r.c)("ministry")(function(e){var n=e.loading,t=e.directs,r=e.slug;return a.createElement("div",{className:"container scheme-directions"},a.createElement(i.default,{titleLarge:!0,title:e.t("structure.management"),loading:n},a.createElement(i.default,{className:"mb-4"},a.createElement(c.a,{label:e.t("backToMinistryStructure"),link:s.ministryRoutesBaseUrl+"/"+r+"/about/structure/scheme"})),a.createElement("div",null,t&&t.length>0&&t.map(function(e,n){return a.createElement(d.a,{key:n,title:e.managing_organization.longName,className:"fill_w scheme-directions__expand mb-4"},a.createElement(o.a,{variant:"bodysb",className:"d-block"},e.lastnameInitials),a.createElement(o.a,{variant:"bodysubreg"},e.level&&e.level.position),e.phoneNumber&&a.createElement("div",{className:"d-flex align-items-center"},a.createElement(o.a,{variant:"bodysub",className:"mt-2"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"),a.createElement("a",{href:"tel:"+e.phoneNumber,className:"ml-2"},a.createElement(o.a,{variant:"bodysubreg"},e.phoneNumber))),e.email&&a.createElement("div",{className:"d-flex align-items-center"},a.createElement(o.a,{variant:"bodysub",className:"mt-2"},"E-mail:"),a.createElement("a",{href:"mailto:"+e.email,className:"ml-2"},a.createElement(o.a,{variant:"bodysubreg"},e.email))))}))))})}});