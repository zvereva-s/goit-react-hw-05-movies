"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[161,697],{3447:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(1413),a=n(5861),s=n(885),i=n(7757),c=n.n(i),u=n(2791),o=n(6871),l=n(501),d={info_box:"singleMovieItem_info_box__EUEQ-",img:"singleMovieItem_img__4dGsd"},f=n(184);function v(e){var r=e.item,n=r.title,t=r.overview,a=r.genres,s=r.vote_average,i=r.poster_path,c=r.release_date,u=a.map((function(e){return e.name})).join(", "),v=10*s,p=c.slice(0,4);return(0,f.jsxs)("div",{className:d.box,children:[(0,f.jsxs)("div",{className:d.info_box,children:[(0,f.jsx)("img",{className:d.img,src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(i),alt:n}),(0,f.jsxs)("div",{className:d.wrapper,children:[(0,f.jsx)("h3",{children:"".concat(n," (").concat(p,")")}),(0,f.jsx)("table",{children:(0,f.jsxs)("tbody",{className:d.tbody,children:[(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"User Score: "}),(0,f.jsxs)("td",{children:[v,"%"]})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Overview: "}),(0,f.jsx)("td",{children:t})]}),(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"Genres"}),(0,f.jsx)("td",{children:u})]})]})})]})]}),(0,f.jsxs)("div",{className:d.additional_box,children:[(0,f.jsxs)("ul",{className:d.list,children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(o.j3,{})]})]})}var p=(0,u.memo)(v);v.defaultProps={item:{}};var h=n(8220),x="singleMovie_wrapper__kyPx3",m="singleMovie_button__BZMkn",_="singleMovie_p__Rg4lu",j=n(6304);var g=function(){var e,r=(0,o.UO)().id,n=(0,u.useState)({item:[],loading:!1,error:null}),i=(0,s.Z)(n,2),l=i[0],d=i[1];(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,h.TP)(r);case 4:n=e.sent,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{item:n})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d((function(r){return(0,t.Z)((0,t.Z)({},r),{},{error:e.t0})}));case 11:return e.prev=11,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var v=(0,o.s0)(),g=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",b=l.item,w=l.loading,Z=l.error,k=Object.keys(b).length>0;return console.log(b),(0,f.jsxs)("div",{className:x,children:[w&&(0,f.jsx)(j.default,{}),Z&&(0,f.jsx)("p",{className:_,children:"Movie not found"}),k&&(0,f.jsx)("button",{className:m,type:"button",onClick:function(){return v(g)},children:"Go back"}),k&&(0,f.jsx)(p,{item:b})]})},b=n(6119);var w=function(){return(0,f.jsx)("main",{children:(0,f.jsx)(b.Z,{children:(0,f.jsx)(g,{})})})}},6119:function(e,r,n){n.d(r,{Z:function(){return s}});var t="container_container__7D7mb",a=n(184);var s=function(e){var r=e.children;return(0,a.jsx)("div",{className:t,children:r})}},6304:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});n(3158);var t=n(6373),a="loader_box__6R4dw",s=n(184);var i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(t.g4,{color:"grey",ariaLabel:"loading"})})}},8220:function(e,r,n){n.d(r,{Df:function(){return u},M1:function(){return l},NV:function(){return f},TP:function(){return o},tx:function(){return d}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"de419034fa7ae645a6c15de713b25b76"}}),u=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day",{params:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=161.577a793e.chunk.js.map