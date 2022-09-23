"use strict";(self.webpackChunkkinopoisk_git=self.webpackChunkkinopoisk_git||[]).push([[186],{1186:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,c,o,s=t(5861),p=t(885),u=t(7757),f=t.n(u),l=t(2791),h=t(1087),d=t(168),v=t(6444),x=v.ZP.div(r||(r=(0,d.Z)(["\n  position: relative;\n  border-radius: 5px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),m=v.ZP.div(a||(a=(0,d.Z)(["\n  height: 100%;\n\n  @media screen and (min-width: 370px) and (max-width: 767px) {\n    height: 100%;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1169px) {\n    height: 100%;\n  }\n\n  @media screen and (min-width: 1170px) {\n    height: 100%;\n  }\n"]))),g=v.ZP.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n  object-position: 0%;\n"]))),w=v.ZP.p(c||(c=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n\n  font-size: 18px;\n"]))),b=v.ZP.span(o||(o=(0,d.Z)(["\n  font-family: Georgia, serif;\n  font-size: 22px;\n  letter-spacing: 0.8px;\n  word-spacing: 3.2px;\n  color: #000000;\n  font-weight: 700;\n  text-decoration: none solid rgb(68, 68, 68);\n  font-style: italic;\n  font-variant: normal;\n  text-transform: capitalize;\n\n  &:hover,\n  &:focus {\n    color: #003333;\n\n    opacity: 0.8;\n\n    transition: all $transition-duration $transition-timing;\n  }\n"]))),y=t(5353),Z=t(184),k=function(n){var e=n.title,t=n.poster,r=t?"https://image.tmdb.org/t/p/w500".concat(t):y;return(0,Z.jsxs)(x,{children:[(0,Z.jsx)(m,{children:(0,Z.jsx)(g,{src:r,alt:e,title:e})}),(0,Z.jsx)(w,{children:(0,Z.jsx)(b,{children:e})})]})};k.defaultProps={poster:"",vote:null};var j,S,P=k,_=v.ZP.ul(j||(j=(0,d.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  grid-gap: 40px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),U=v.ZP.li(S||(S=(0,d.Z)(["\n  flex-basis: calc(100% / 2 - 20px);\n  margin-left: 20px;\n  margin-top: 20px;\n\n  opacity: 1;\n\n  transition: 0.5s;\n\n  &:hover,\n  &:focus {\n    color: #33ffff;\n    box-shadow: 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff,\n      0 0 25px #33ffff, 0 0 35px #33ffff;\n\n    opacity: 0.8;\n\n    transition: 0.3s;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1169px) {\n    flex-basis: calc(100% / 3 - 20px);\n  }\n\n  @media screen and (min-width: 1170px) {\n    flex-basis: calc(100% / 4 - 20px);\n  }\n\n  .link {\n    color: inherit;\n\n    text-decoration: none;\n  }\n"]))),z=function(n){var e=n.movies,t=n.location;return(0,Z.jsx)(_,{children:e.map((function(n){var r=n.id,a=n.title,i=n.poster_path,c=n.vote_average;return(0,Z.jsx)(U,{children:(0,Z.jsx)(h.rU,{to:{pathname:"".concat(e,"/").concat(r),state:{from:t}},children:(0,Z.jsx)(P,{title:a,poster:i,vote:c})})},r)}))})},C=function(n){var e=n.children;return(0,Z.jsx)("div",{children:e})};C.defaultProps={children:[]};var T=C,B=t(5243);function I(){return(0,Z.jsx)(B.p2,{height:"150",width:"150",color:" orange",ariaLabel:"circles-loading",wrapperStyle:{position:"fixed",bottom:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"100"},visible:!0})}var L=t(4569),M=t.n(L);M().defaults.baseURL="https://api.themoviedb.org/3/";var R="8b9b90eab4f34348a4bd4775afa7ecfd";M().defaults.params={api_key:R,language:"en-US"};var $=function(){var n=(0,s.Z)(f().mark((function n(){var e,t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M().get("trending/movie/day?api_key=".concat(R));case 3:return e=n.sent,t=e.data,r=t.results,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(0),console.error("Smth wrong with fetch trends in api",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),q=function(){var n=(0,s.Z)(f().mark((function n(e,t){var r,a,i;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M().get("search/movie?api_key=".concat(R,"&query=").concat(e,"&page=").concat(t,"&language={en-US}"));case 3:return r=n.sent,a=r.data,i=a.results,n.abrupt("return",i);case 9:n.prev=9,n.t0=n.catch(0),console.error("Smth wrong with fetch movie search in api",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}(),E=function(){var n=(0,s.Z)(f().mark((function n(e){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M().get("/movie/".concat(e,"?api_key=").concat(R,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Smth wrong with fetch movie id in api",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),G=function(){var n=(0,s.Z)(f().mark((function n(e){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M().get("/movie/".concat(e,"/credits?api_key=").concat(R,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Smth wrong with fetch cast in api",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),A=function(){var n=(0,s.Z)(f().mark((function n(e){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M().get("/movie/".concat(e,"/reviews?api_key=").concat(R,"&language=en-US&page=1"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error("Smth wrong with fetch reviews in api",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),D={fetchTrends:$,fetchMoviesBySearch:q,fetchMovieById:E,fetchCast:G,fetchReviews:A},F=function(){var n=(0,l.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(!1),i=(0,p.Z)(a,2),c=i[0],o=i[1],u=(0,l.useState)(""),h=(0,p.Z)(u,2),d=(h[0],h[1]);(0,l.useEffect)((function(){v()}),[]);var v=function(){var n=(0,s.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,D.fetchTrends();case 4:e=n.sent,r(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.error("Smth wrong with homepage trends fetch",n.t0),d(n.t0.message);case 12:return n.prev=12,o(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,8,12,15]])})));return function(){return n.apply(this,arguments)}}();return(0,Z.jsxs)("main",{children:[t?(0,Z.jsx)(z,{movies:t}):(0,Z.jsx)(T,{children:(0,Z.jsx)("h2",{children:"The service is temporarily unavailable. Please try again later."})}),c&&(0,Z.jsx)(I,{})]})}},5353:function(n,e,t){n.exports=t.p+"static/media/placeholder.74f5b4f58f10eebe24ec.png"}}]);
//# sourceMappingURL=186.6f63400d.chunk.js.map