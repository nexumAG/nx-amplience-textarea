_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var o=t("nKUr"),r=t("YFqc"),c=t.n(r);function a(){return Object(o.jsxs)("div",{children:["Hello World."," ",Object(o.jsx)(c.a,{href:"/about",as:"/nx-amplience-dropdown/about",children:Object(o.jsx)("a",{children:"About"})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("J4zp"),r=t("284h");n.__esModule=!0,n.default=void 0;var c,a=r(t("q1tI")),u=t("elyg"),i=t("nOHt"),l=new Map,f=window.IntersectionObserver,s={};var d=function(e,n){var t=c||(f?c=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var n=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}l.delete(e)}):function(){}};function p(e,n,t,o){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,o).catch((function(e){0})),s[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),r=t&&t.pathname||"/",c=a.default.useMemo((function(){var n=(0,u.resolveHref)(r,e.href,!0),t=o(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,u.resolveHref)(r,e.as):a||c}}),[r,e.href,e.as]),l=c.href,h=c.as,v=e.children,w=e.replace,y=e.shallow,b=e.scroll,E=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=a.Children.only(v),g=_&&"object"===typeof _&&_.ref,j=a.default.useRef(),L={ref:a.default.useCallback((function(e){(j.current&&(j.current(),j.current=void 0),n&&f&&e&&e.tagName&&(0,u.isLocalURL)(l))&&(s[l+"%"+h]||(j.current=d(e,(function(){p(t,l,h,{locale:"undefined"!==typeof E?E:t&&t.locale})}))));g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[n,g,l,h,t,E]),onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:c,locale:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,l,h,w,y,b,E)}};return n&&(L.onMouseEnter=function(e){(0,u.isLocalURL)(l)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(t,l,h,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(L.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof E?E:t&&t.locale,t&&t.defaultLocale))),a.default.cloneElement(_,L)};n.default=h}},[["/EDR",0,2,1]]]);