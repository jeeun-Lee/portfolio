(function(){"use strict";var n={6243:function(n,t,e){var o=e(9242),r=e(3396);const i=n=>((0,r.dD)("data-v-4d374ce7"),n=n(),(0,r.Cn)(),n),a=i((()=>(0,r._)("h6",null,"Movie Todo",-1)));function u(n,t,e,o,i,u){const l=(0,r.up)("MovieData");return(0,r.wg)(),(0,r.iD)("div",null,[a,(0,r.Wm)(l)])}var l=e(7139);const c={key:0,class:"loading"},s={class:"d-flex flex-wrap Movies"},f=["id"],d=["href"],v=["src","alt"],g={class:"genres"};function p(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[i.loading?((0,r.wg)(),(0,r.iD)("div",c,"로딩 중...")):(0,r.kq)("",!0),(0,r._)("ul",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.Movies,(n=>((0,r.wg)(),(0,r.iD)("li",{key:n,id:n.id},[(0,r._)("a",{href:n.url,target:"_blank"},[(0,r._)("h6",null,(0,l.zw)(n.title),1),(0,r._)("img",{src:n.medium_cover_image,alt:n.title},null,8,v),(0,r._)("ul",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.genres,(n=>((0,r.wg)(),(0,r.iD)("li",{key:n},(0,l.zw)(n),1)))),128))])],8,d)],8,f)))),128))])])}var h=e(1076),m={name:"MovieData",data(){return{loading:!1,Movies:null}},created(){this.fetchData()},mounted(){},methods:{fetchData(){this.loading=!0,h.Z.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then((n=>{this.loading=!1,this.Movies=n.data.data.movies,console.log(n.data.data.movies)})).catch((n=>{console.log(n)}))}}},b=e(89);const y=(0,b.Z)(m,[["render",p]]);var w=y,_={name:"App",data(){return{number:0,price:60,color:"color : red",product:["1","2","3"]}},components:{MovieData:w},methods:{counter(){this.number++}}};const D=(0,b.Z)(_,[["render",u],["__scopeId","data-v-4d374ce7"]]);var O=D;(0,o.ri)(O).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],i=n[s][2];for(var u=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(u=!1,i<a&&(a=i));if(u){n.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==n[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(l)var s=l(e)}for(t&&t(o);c<a.length;c++)i=a[c],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},o=self["webpackChunklist"]=self["webpackChunklist"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(6243)}));o=e.O(o)})();
//# sourceMappingURL=app.6a0d598a.js.map