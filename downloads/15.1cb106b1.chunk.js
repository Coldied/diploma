webpackJsonp([15],{1733:function(e,a,t){"use strict";var n=t(0),i=t(1),r=(t.n(i),t(1740)),l=t.n(r),s=t(14),o=t(12),u=t(10),c=t(1744),d=(t.n(c),t(31)),p=t(8),g=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.getButton=function(e,a){return i.createElement(u.a,{ariaLabel:a,ripple:!0,flat:!0,rounded:!0,color:"blue"},i.createElement("i",{className:"far fa-angle-"+e}))},a.onPageChange=function(e,t){var n=e.selected,i=void 0===n?1:n,r=void 0===t?a.props:t,l=r.history,s=r.linkParser,o=r.onChangePage;o&&o(i+1),s&&l.push(s&&s(i+1))},a}return n.c(a,e),a.prototype.render=function(){var e=this.props,a=e.page,t=e.size,r=void 0===t?10:t,u=e.totalCount,c=void 0===u?0:u,d=e.linkParser,p=e.loading,g=e.t,f=(a||1)-1,m=Math.abs(c/r),b=Object(s.a)(this.props,"pagination-wrap","pos_relative","fill_w","color_blue");return i.createElement("div",n.a({},b),i.createElement("div",{className:"center"},p||0==f&&r>=c?i.createElement(o.a,{covered:!0,variant:"h3"}):i.createElement(l.a,{forcePage:f,pageCount:m,hrefBuilder:d,pageRangeDisplayed:3,marginPagesDisplayed:1,containerClassName:"pagination d-flex",breakClassName:"pagination__button",pageLinkClassName:"pagination__button color_blue typography__variant-bodyhl",activeLinkClassName:"pagination__button--active color_black",previousLabel:this.getButton("left",g("ariaLabel15")),nextLabel:this.getButton("right",g("ariaLabel16")),onPageChange:this.onPageChange})))},a}(i.Component);a.a=Object(p.c)("egov")(Object(d.withRouter)(g))},1740:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,i=t(1741),r=(n=i)&&n.__esModule?n:{default:n};a.default=r.default},1741:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),i=t(1),r=u(i),l=u(t(17)),s=u(t(1742)),o=u(t(1743));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,i=a.pageCount,l=a.marginPagesDisplayed,s=a.breakLabel,u=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(i<=n)for(var p=0;p<i;p++)e.push(t.getPageElement(p));else{var g=n/2,f=n-g;d>i-n/2?g=n-(f=i-d):d<n/2&&(f=n-(g=d));var m=void 0,b=void 0,v=void 0,h=function(e){return t.getPageElement(e)};for(m=0;m<i;m++)(b=m+1)<=l?e.push(h(m)):b>i-l?e.push(h(m)):m>=d-g&&m<=d+f?e.push(h(m)):s&&e[e.length-1]!==v&&(v=r.default.createElement(o.default,{key:m,breakLabel:s,breakClassName:u,breakLinkClassName:c,onClick:t.handleBreakClick.bind(null,m)}),e.push(v))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,i.Component),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,i=t.pageLinkClassName,l=t.activeClassName,o=t.activeLinkClassName,u=t.extraAriaContext;return r.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:i,activeClassName:l,activeLinkClassName:o,extraAriaContext:u,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,i=e.pageCount,l=e.containerClassName,s=e.previousLinkClassName,o=e.previousLabel,u=e.nextLinkClassName,c=e.nextLabel,d=this.state.selected,p=t+(0===d?" "+a:""),g=n+(d===i-1?" "+a:""),f=0===d?"true":"false",m=d===i-1?"true":"false";return r.default.createElement("ul",{className:l},r.default.createElement("li",{className:p},r.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":f},o)),this.pagination(),r.default.createElement("li",{className:g},r.default.createElement("a",{onClick:this.handleNextPage,className:u,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":m},c)))}}]),a}();c.propTypes={pageCount:l.default.number.isRequired,pageRangeDisplayed:l.default.number.isRequired,marginPagesDisplayed:l.default.number.isRequired,previousLabel:l.default.node,nextLabel:l.default.node,breakLabel:l.default.oneOfType([l.default.string,l.default.node]),hrefBuilder:l.default.func,onPageChange:l.default.func,initialPage:l.default.number,forcePage:l.default.number,disableInitialCallback:l.default.bool,containerClassName:l.default.string,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,previousClassName:l.default.string,nextClassName:l.default.string,previousLinkClassName:l.default.string,nextLinkClassName:l.default.string,disabledClassName:l.default.string,breakClassName:l.default.string,breakLinkClassName:l.default.string,extraAriaContext:l.default.string,ariaLabelBuilder:l.default.func},c.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=c},1742:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(1)),i=r(t(17));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var a=e.pageClassName,t=e.pageLinkClassName,i=e.onClick,r=e.href,l=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",l=e.ariaLabel||"Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:i,role:"button",className:t,href:r,tabIndex:"0","aria-label":l,"aria-current":s,onKeyPress:i},e.page))};l.propTypes={onClick:i.default.func.isRequired,selected:i.default.bool.isRequired,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,extraAriaContext:i.default.string,href:i.default.string,ariaLabel:i.default.string,page:i.default.number.isRequired},a.default=l},1743:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(1)),i=r(t(17));function r(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var a=e.breakLabel,t=e.breakClassName,i=e.breakLinkClassName,r=e.onClick,l=t||"break";return n.default.createElement("li",{className:l},n.default.createElement("a",{className:i,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};l.propTypes={breakLabel:i.default.oneOfType([i.default.string,i.default.node]),breakClassName:i.default.string,breakLinkClassName:i.default.string,onClick:i.default.func.isRequired},a.default=l},1744:function(e,a,t){var n=t(1745);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!1,transform:void 0};t(1053)(n,i);n.locals&&(e.exports=n.locals)},1745:function(e,a,t){(e.exports=t(1052)(!1)).push([e.i,".pagination-wrap {\n  height: 46px; }\n  .pagination-wrap .pagination__cover {\n    height: 50px;\n    width: 220px; }\n  .pagination-wrap .pagination {\n    height: 46px; }\n    .pagination-wrap .pagination .pagination__button {\n      padding: 0 8px;\n      cursor: pointer;\n      height: 46px;\n      line-height: 46px; }\n",""])},3206:function(e,a,t){"use strict";t.d(a,"a",function(){return s}),t.d(a,"b",function(){return o});var n,i,r=t(0),l=t(42),s=Object(l.c)(n||(n=r.e(["\n  query Organizations($projectSlug: String!, $size: Int, $page: Int) {\n    projectdetails(projects: $projectSlug, _size: $size, _page: $page) {\n      id\n      slug\n      project_name\n      type {\n        id\n      }\n    }\n    totalCount: _total_count {\n      projectdetails\n    }\n  }\n"],["\n  query Organizations($projectSlug: String!, $size: Int, $page: Int) {\n    projectdetails(projects: $projectSlug, _size: $size, _page: $page) {\n      id\n      slug\n      project_name\n      type {\n        id\n      }\n    }\n    totalCount: _total_count {\n      projectdetails\n    }\n  }\n"]))),o=Object(l.c)(i||(i=r.e(["\n  query Organizations($directionId: String, $size: Int, $page: Int) {\n    projectdetails(directions: { id: $directionId }, _size: $size, _page: $page) {\n      id\n      slug\n      project_name\n      type {\n        id\n      }\n    }\n    totalCount: _total_count {\n      projectdetails\n    }\n  }\n"],["\n  query Organizations($directionId: String, $size: Int, $page: Int) {\n    projectdetails(directions: { id: $directionId }, _size: $size, _page: $page) {\n      id\n      slug\n      project_name\n      type {\n        id\n      }\n    }\n    totalCount: _total_count {\n      projectdetails\n    }\n  }\n"])))},3207:function(e,a,t){"use strict";var n=t(0),i=t(1),r=(t.n(i),t(3208)),l=t(1733),s=t(24);a.a=function(e){var a=e.directionId,t=e.slug,o=e.data,u=e.size,c=e.page,d=e.loading,p=(o||{}).totalCount,g=void 0===p?{projectdetails:0}:p,f=s.ministryRoutesBaseUrl+"/"+t;return i.createElement(i.Fragment,null,i.createElement(r.a,{slug:t,data:o}),i.createElement("div",{className:"fill_w"},i.createElement(l.a,n.a({},{page:c,size:u},{loading:d,totalCount:g.projectdetails,linkParser:function(e){return f+"/organizations/"+a+"/"+e}}))))}},3208:function(e,a,t){"use strict";var n=t(1),i=(t.n(n),t(12)),r=t(69),l=t(318);a.a=function(e){var a=e.slug,t=void 0===a?"mdai":a,s=(e.data||{}).projectdetails||{},o=Object.values(s);return n.createElement(n.Fragment,null,o&&o.length>0&&o.map(function(e,a){return n.createElement(r.b,{key:a,to:Object(l.c)(e,t),className:"d-block my-3"},n.createElement(i.a,{variant:"bodyhl",className:"color_blue--hover"},e.project_name))}))}},372:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,i=t(0),r=t(1),l=(t.n(r),t(97)),s=t(38),o=t(42),u=t(35),c=t(3206),d=t(8),p=t(3207),g=t(13),f=t(18);a.default=function(e){var a,t=e.match.params||{slug:null,directionId:null,page:1},m=t.slug,b=t.directionId,v=t.page,h=void 0===v?1:v,C=Object(d.b)(["ministry","akimat","common"]).t,k=Object(l.useQueryWithLang)(Object(o.c)(n||(n=i.e(['{\n        directions(id: "eq:','") {\n            title\n        }\n    }'],['{\n        directions(id: "eq:','") {\n            title\n        }\n    }'])),b)),y=k.loading,N=k.data,_=!y&&N&&N.directions[0];return r.createElement(u.default,{loading:y},r.createElement("div",{className:"container"},r.createElement(s.default,{titleLarge:!0,title:(a=_,a?C("organizations.titleByDirection")+" "+a.title:C("organizations"))},r.createElement(l.OptimizedFilterContainer,{withTemplate:!1,query:b?c.b:c.a,variables:{projectSlug:"eq:"+m,directionId:"eq:"+b,size:10,page:h,"sort-by":g.a.getConfigParamSortBy("order",f.a.Asc)}},r.createElement(p.a,{slug:m,directionId:+b,size:10,page:h})))))}}});