(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[4,9],{719:function(e,t,n){"use strict";var c=n(1);t.a=function(e,t){var n=Object(c.useRef)(!1);Object(c.useEffect)((function(){n.current?e():n.current=!0}),t)}},720:function(e,t,n){"use strict";var c,r,a=n(4),i=n.n(a),o=n(6),s=n(15),u=n(1),f=n(8),l=n(16),d=n(21),h=n(3),j=n(2),v=j.default.div(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0 11rem 4rem 11rem;\n\n  background: var(--secondary-color);\n"]))),b=j.default.button(r||(r=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  cursor: pointer;\n  font-size: 1.5rem;\n  background: var(--secondary-color-light);\n  color: var(--text-white);\n\n  padding: 3px 8px;\n  border: 1px solid var(--secondary-color-lightest);\n  transition: all 0.3s;\n  &:hover {\n    background: var(--secondary-color-lightest);\n    color: var(--text-dark);\n  }\n  &:focus {\n    outline: 0 !important;\n  }\n"]))),O=n(719),p=n(5),x=n(24),g=n(0);t.a=Object(l.compose)(d.g,Object(f.b)((function(e){return{currentPage:e.currentPage}}),{isFetching:function(e){return Object(p.isFetching)(e)},setCurrentPage:function(e){return Object(p.currentPage)(e)}}))((function(e){var t=e.api,n=e.data,c=e.actor,r=e.history,a=e.location,f=e.isFetching,l=e.currentPage,d=e.setCurrentPage,h=Object(u.useState)(null),j=Object(s.a)(h,2),p=j[0],m=j[1],y=Object(u.useState)(1),M=Object(s.a)(y,2),k=M[0],w=M[1],A=Object(u.useState)(20),S=Object(s.a)(A,2),C=S[0],P=S[1],D=n?n.total_pages:null,F=Object(x.a)().width,R=function(){var e=a.pathname,t=e.split("/");return e.replace(t[t.length-1],l)};Object(u.useEffect)((function(){d(1),r.push(R()),F<=500?P(5):F<=700&&P(10)}),[]),Object(O.a)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return f(!0),e.next=4,t(c,l);case 4:f(!1),e.next=11;break;case 7:return f(!0),e.next=10,t(l);case 10:f(!1);case 11:r.push(R());case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(u.useEffect)((function(){for(var e=[],t=k;t<=D;t++)e.push(t);m(e)}),[l,D]);var B=function(e){l-C/2>0&&D-l>=C/2&&w("next"===e?function(e){return++e}:function(e){return--e})},E=function(e){var t=Math.max(1,e);d(Math.min(t,D))},I=function(e){return e==l?{fontWeight:"700",background:"var(--secondary-color-lightest)"}:null};return Object(g.jsxs)(v,{children:[Object(g.jsxs)(b,{onClick:function(){return B("prev"),void d(Math.max(l-1,1))},children:[Object(g.jsx)("div",{children:"\u2190"})," Prev"]}),Object(g.jsx)(b,{onClick:function(){return function(e){d(1),e(1)}(w)},children:"First"}),p&&p.length>C?p.slice(0,C).map((function(e){return Object(g.jsx)("div",{className:"hiiii",style:{ovderflow:"hidden"},children:Object(g.jsx)(b,{style:I(e),onClick:function(){E(e),function(e){var t=e-C/2;w(t>=0&&D-e>=10?t+1:D-e<10&&e>C/2?D-10-10:1)}(e)},children:e})},e)})):p&&p.map((function(e){return Object(g.jsx)("div",{className:"hiiii",style:{ovderflow:"hidden"},children:Object(g.jsx)(b,{style:I(e),onClick:function(){return E(e,B())},children:e})})})),Object(g.jsx)(b,{onClick:function(){return function(e){d(D),e(5===D?D-4:D-19)}(w)},children:"Last"}),Object(g.jsx)(b,{onClick:function(){return B("next"),void d(Math.min(l+1,D))},children:"Next"})]})}))},724:function(e,t,n){"use strict";n.r(t);n(1);var c=n(21),r=n(8),a=n(5),i=n(720),o=n(186),s=n(0);t.default=Object(r.b)((function(e){return{fetchMoviesData:e.fetchMovies,advancedSearchMoviesData:e.fetchAdvancedSearch,actorsMoviesData:e.fetchActorMovies,fetchPopularActorsData:e.fetchPopularActors,showSearchResults:e.showSearchResults}}),{selectedMovie:a.selectedMovie,fetchMovies:function(e){return Object(a.fetchMovies)(e)},fetchAdvancedSearch:function(e){return Object(a.fetchAdvancedSearch)(e)},fetchActorMovies:function(e,t){return Object(a.fetchActorMovies)(e,t)},fetchPopularActors:function(e){return Object(a.fetchPopularActors)(e)},fetchMovieByIds:function(e,t){return Object(a.fetchMovieByIds)(e,t)}})((function(e){var t=Object(c.f)().query,n={display:"flex",flexdirection:"column",flexWrap:"wrap",justifyContent:"center",alignContent:"center",background:"var(--secondary-color)"};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",background:"var(--secondary-color)"}}),function(){var c=function(e,t,c){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{api:e,data:t,actor:c}),Object(s.jsx)("div",{style:n,children:t&&t.results.map((function(e){if(null!==e)return Object(s.jsx)("div",{children:Object(s.jsx)(o.a,{movie:e})},e.id)}))}),Object(s.jsx)(i.a,{api:e,data:t,actor:c})]})};switch(e.showSearchResults){case"search":return c(e.fetchMovies,e.fetchMoviesData);case"advanced-search":return c(e.fetchAdvancedSearch,e.advancedSearchMoviesData);case"actor":return c(e.fetchActorMovies,e.actorsMoviesData,t);case"saved movies":return c(e.fetchMovieByIds);default:return null}}()]})}))},731:function(e,t,n){"use strict";n.r(t);n(1);var c=n(21),r=n(724),a=n(0);t.default=function(){var e=Object(c.f)().name;return Object(a.jsx)("div",{children:Object(a.jsx)(r.default,{name:e})})}}}]);
//# sourceMappingURL=4.ad1ef55c.chunk.js.map