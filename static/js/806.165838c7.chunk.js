"use strict";(self.webpackChunkkinopoisk_git=self.webpackChunkkinopoisk_git||[]).push([[806],{6197:function(n,e,t){t.d(e,{Z:function(){return _}});var a,r,i,o,c,s,u,p=t(168),f=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],d=t(6444),m=t(184),l=function(n){var e=Object.values(n),t=[];return f.forEach((function(n){e[0].includes(n.id)&&t.push(n.name)})),(0,m.jsx)(x,{children:t.slice(0,2).join(", ")+", Other"})},x=d.ZP.span(a||(a=(0,p.Z)(["\n  padding: 6px 0;\n  color: #ff6b01;\n\n  @media screen and (max-width: 770px) {\n    font-size: 13px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n"]))),h=t(6731),g=(0,d.ZP)(h.rU)(r||(r=(0,p.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),v=d.ZP.li(i||(i=(0,p.Z)(["\n  overflow: hidden;\n  border-radius: 16px;\n  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);\n  background-color: #00151a;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 20px 10px;\n  &:hover,\n  :focus {\n    color: #33ffff;\n    box-shadow: 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff,\n      0 0 25px #33ffff, 0 0 35px #33ffff;\n    opacity: 0.8;\n    transition: 0.5s;\n    transform: scale(1.02);\n  }\n\n  @media screen and (max-width: 480px) {\n    width: 400px;\n  }\n\n  @media screen and (max-width: 420px) {\n    width: 280px;\n  }\n"]))),w=d.ZP.p(o||(o=(0,p.Z)(["\n  color: white;\n  font-family: Georgia, serif;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  word-spacing: 1.2px;\n  font-weight: 500;\n  text-decoration: none solid rgb(68, 68, 68);\n  font-style: italic;\n  font-variant: normal;\n  text-transform: capitalize;\n  padding: 10px 0;\n\n  @media screen and (max-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n\n  &:hover,\n  &:focus {\n    color: #003333;\n    opacity: 0.8;\n    transition: 0.3s;\n  }\n"]))),y=d.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 90px;\n"]))),b=d.ZP.img(s||(s=(0,p.Z)(["\n  display: block;\n  max-width: 100%;\n"]))),Z=function(n){var e=n.itemData,t=e.poster_path,a=e.title,r=e.genre_ids;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(v,{children:[(0,m.jsx)(b,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png",alt:""}),(0,m.jsxs)(y,{children:[(0,m.jsx)(w,{children:a}),(0,m.jsx)(l,{genresId:r})]})]})})},k=d.ZP.ul(u||(u=(0,p.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1em;\n  list-style: none;\n  @media screen and (max-width: 480px) {\n    grid-template-columns: repeat(1, 1fr);\n    justify-items: center;\n  }\n"]))),j=t(470),_=function(n){var e=n.data,t=(0,j.TH)();return(0,m.jsx)(k,{children:e.map((function(n){return(0,m.jsx)(g,{to:"/movies/".concat(n.id),state:{from:t},children:(0,m.jsx)(Z,{itemData:n})},n.id)}))})}},3806:function(n,e,t){t.r(e);var a=t(885),r=t(2791),i=t(6197),o=t(1933),c=t(3742),s=t(184);e.default=function(){var n=(0,r.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1];return(0,r.useEffect)((function(){o.Zn().then((function(n){c.Loading.circle({svgColor:"#33ffff",cssAnimationDuration:800,height:"200",width:"200"}),u(n)})).finally((function(){c.Loading.remove()}))}),[]),(0,s.jsx)(i.Z,{data:t})}},1933:function(n,e,t){t.d(e,{Hx:function(){return x},Li:function(){return f},Zn:function(){return u},lu:function(){return m},uV:function(){return g}});var a=t(5861),r=t(7757),i=t.n(r),o=t(4569),c=t.n(o),s="8b9b90eab4f34348a4bd4775afa7ecfd";function u(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/popular?api_key=".concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=8b9b90eab4f34348a4bd4775afa7ecfd&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=806.165838c7.chunk.js.map