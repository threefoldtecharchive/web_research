function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(){return p("")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return""===t?void 0:+t}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):f(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return p(e)}function E(t){return w(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){(null!=e||t.value)&&(t.value=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function j(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}function L(t){P().$$.on_mount.push(t)}function R(){const t=P();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const C=[],k=[],N=[],q=[],O=Promise.resolve();let U=!1;function I(t){N.push(t)}let D=!1;const H=new Set;function B(){if(!D){D=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];j(e),T(e.$$)}for(C.length=0;k.length;)k.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];H.has(e)||(H.add(e),e())}N.length=0}while(C.length);for(;q.length;)q.pop()();U=!1,D=!1,H.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const J=new Set;let V;function K(){V={r:0,c:[],p:V}}function M(){V.r||o(V.c),V=V.p}function W(t,e){t&&t.i&&(J.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),V.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const F="undefined"!=typeof window?window:global;function G(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(I)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(C.push(t),U||(U=!0,O.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,a,c,i,l=[-1]){const f=A;j(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&et(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&W(e.$$.fragment),Z(e,n.target,n.anchor),B()}j(f)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ot=[];function st(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const at={},ct=()=>({});function it(e){let n,r,o,s,a,c,h,m,g,v,_,S,x,A,j,P,L,R,C,k,N;return{c(){n=f("nav"),r=f("ul"),o=f("li"),s=f("a"),a=p("Home"),h=d(),m=f("li"),g=f("a"),v=p("About"),S=d(),x=f("li"),A=f("a"),j=p("Websockets"),L=d(),R=f("li"),C=f("a"),k=p("Plotly"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var c=y(r);o=b(c,"LI",{class:!0});var i=y(o);s=b(i,"A",{"aria-current":!0,href:!0,class:!0});var l=y(s);a=w(l,"Home"),l.forEach(u),i.forEach(u),h=E(c),m=b(c,"LI",{class:!0});var f=y(m);g=b(f,"A",{"aria-current":!0,href:!0,class:!0});var p=y(g);v=w(p,"About"),p.forEach(u),f.forEach(u),S=E(c),x=b(c,"LI",{class:!0});var d=y(x);A=b(d,"A",{"aria-current":!0,href:!0,class:!0});var $=y(A);j=w($,"Websockets"),$.forEach(u),d.forEach(u),L=E(c),R=b(c,"LI",{class:!0});var _=y(R);C=b(_,"A",{"aria-current":!0,href:!0,class:!0});var P=y(C);k=w(P,"Plotly"),P.forEach(u),_.forEach(u),c.forEach(u),e.forEach(u),this.h()},h(){$(s,"aria-current",c=void 0===e[0]?"page":void 0),$(s,"href","/"),$(s,"class","svelte-14jrcwg"),$(o,"class","svelte-14jrcwg"),$(g,"aria-current",_="about"===e[0]?"page":void 0),$(g,"href","about"),$(g,"class","svelte-14jrcwg"),$(m,"class","svelte-14jrcwg"),$(A,"aria-current",P=void 0===e[0]?"page":void 0),$(A,"href","websocket"),$(A,"class","svelte-14jrcwg"),$(x,"class","svelte-14jrcwg"),$(C,"aria-current",N=void 0===e[0]?"page":void 0),$(C,"href","plotly"),$(C,"class","svelte-14jrcwg"),$(R,"class","svelte-14jrcwg"),$(r,"class","svelte-14jrcwg"),$(n,"class","svelte-14jrcwg")},m(t,e){l(t,n,e),i(n,r),i(r,o),i(o,s),i(s,a),i(r,h),i(r,m),i(m,g),i(g,v),i(r,S),i(r,x),i(x,A),i(A,j),i(r,L),i(r,R),i(R,C),i(C,k)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&$(s,"aria-current",c),1&e&&_!==(_="about"===t[0]?"page":void 0)&&$(g,"aria-current",_),1&e&&P!==(P=void 0===t[0]?"page":void 0)&&$(A,"aria-current",P),1&e&&N!==(N=void 0===t[0]?"page":void 0)&&$(C,"aria-current",N)},i:t,o:t,d(t){t&&u(n)}}}function lt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ut extends rt{constructor(t){super(),nt(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r;const o=new ut({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(o.$$.fragment),e=d(),n=f("main"),a&&a.c(),this.h()},l(t){Q(o.$$.fragment,t),e=E(t),n=b(t,"MAIN",{class:!0});var r=y(n);a&&a.l(r),r.forEach(u),this.h()},h(){$(n,"class","svelte-1uhnsl8")},m(t,s){Z(o,t,s),l(t,e,s),l(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&a.p(c(s,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(s,t[1],e,null))},i(t){r||(W(o.$$.fragment,t),W(a,t),r=!0)},o(t){z(o.$$.fragment,t),z(a,t),r=!1},d(t){tt(o,t),t&&u(e),t&&u(n),a&&a.d(t)}}}function pt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class dt extends rt{constructor(t){super(),nt(this,t,pt,ft,a,{segment:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=f("pre"),n=p(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=w(o,r),o.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function mt(e){let n,r,o,s,a,c,m,g,v,S=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ht(e);return{c(){r=d(),o=f("h1"),s=p(e[0]),a=d(),c=f("p"),m=p(S),g=d(),A&&A.c(),v=h(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=E(t),o=b(t,"H1",{class:!0});var n=y(o);s=w(n,e[0]),n.forEach(u),a=E(t),c=b(t,"P",{class:!0});var i=y(c);m=w(i,S),i.forEach(u),g=E(t),A&&A.l(t),v=h(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){l(t,r,e),l(t,o,e),i(o,s),l(t,a,e),l(t,c,e),i(c,m),l(t,g,e),A&&A.m(t,e),l(t,v,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&S!==(S=t[1].message+"")&&_(m,S),t[2]&&t[1].stack?A?A.p(t,e):(A=ht(t),A.c(),A.m(v.parentNode,v)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(a),t&&u(c),t&&u(g),A&&A.d(t),t&&u(v)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends rt{constructor(t){super(),nt(this,t,gt,mt,a,{status:0,error:1})}}function vt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&Y(c.$$.fragment),n=h()},l(t){c&&Q(c.$$.fragment,t),n=h()},m(t,e){c&&Z(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?G(o,[X(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){K();const t=c;z(t.$$.fragment,1,0,()=>{tt(t,1)}),M()}s?(Y((c=new s(a())).$$.fragment),W(c.$$.fragment,1),Z(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&W(c.$$.fragment,t),r=!0)},o(t){c&&z(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&tt(c,t)}}}function yt(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,r){Z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(W(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function bt(t){let e,n,r,o;const s=[yt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=h()},l(t){n.l(t),r=h()},m(t,n){a[e].m(t,n),l(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(K(),z(a[i],1,1,()=>{a[i]=null}),M(),n=a[e],n||(n=a[e]=s[e](t),n.c()),W(n,1),n.m(r.parentNode,r))},i(t){o||(W(n),o=!0)},o(t){z(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function wt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new dt({props:o});return{c(){Y(s.$$.fragment)},l(t){Q(s.$$.fragment,t)},m(t,e){Z(s,t,e),n=!0},p(t,[e]){const n=12&e?G(r,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(W(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){tt(s,t)}}}function Et(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=at,u=r,P().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class _t extends rt{constructor(t){super(),nt(this,t,Et,wt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const St=[],xt=[{js:()=>import("./index.25f4e4ad.js"),css:["index.25f4e4ad.css","client.8c547aea.css"]},{js:()=>import("./index.f1695dbb.js"),css:["client.8c547aea.css"]},{js:()=>import("./index.69d77771.js"),css:["client.8c547aea.css"]},{js:()=>import("./about.821382e1.js"),css:["client.8c547aea.css"]}],At=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/websocket\/?$/,parts:[{i:1}]},{pattern:/^\/plotly\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}];const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,Lt,Rt,Ct=!1,kt=[],Nt="{}";const qt={page:st({}),preloading:st(null),session:st(jt&&jt.session)};let Ot,Ut;qt.session.subscribe(async t=>{if(Ot=t,!Ct)return;Ut=!0;const e=Kt(new URL(location.href)),n=Lt={},{redirect:r,props:o,branch:s}=await Ft(e);n===Lt&&await zt(r,s,o,e.page)});let It,Dt=null;let Ht,Bt=1;const Tt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Jt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!St.some(t=>t.test(e)))for(let n=0;n<At.length;n+=1){const r=At[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Mt(){return{x:pageXOffset,y:pageYOffset}}async function Wt(t,e,n,r){if(e)Ht=e;else{const t=Mt();Jt[Ht]=t,e=Ht=++Bt,Jt[Ht]=n?t:{x:0,y:0}}Ht=e,Pt&&qt.preloading.set(!0);const o=Dt&&Dt.href===t.href?Dt.promise:Ft(t);Dt=null;const s=Lt={},{redirect:a,props:c,branch:i}=await o;if(s===Lt&&(await zt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Jt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Jt[Ht]=t,t&&scrollTo(t.x,t.y)}}async function zt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),Wt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(qt.page.set(r),qt.preloading.set(!1),Pt)Pt.$set(n);else{n.stores={page:{subscribe:qt.page.subscribe},preloading:{subscribe:qt.preloading.subscribe},session:qt.session},n.level0={props:await Rt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Xt(t.nextSibling);Xt(t),Xt(e)}Pt=new _t({target:It,props:n,hydrate:!0})}kt=e,Nt=JSON.stringify(r.query),Ct=!0,Ut=!1}async function Ft(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Rt||(Rt=jt.preloaded[0]||ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ot));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Nt)return!0;const o=kt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ut&&!u&&kt[c]&&kt[c].part===e.i)return kt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Gt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(xt[e.i]);let m;return m=Ct||!jt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:jt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Gt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Xt(t){t.parentNode.removeChild(t)}function Yt(t){const e=Kt(new URL(t,document.baseURI));if(e)return Dt&&t===Dt.href||function(t,e){Dt={href:t,promise:e}}(t,Ft(e)),Dt.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Kt(o);if(s){Wt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Tt.pushState({id:Ht},"",o.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Jt[Ht]=Mt(),t.state){const e=Kt(new URL(location.href));e?Wt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Ht=t}(Bt),Tt.replaceState({id:Ht},"",location.href)}var oe;oe={target:document.querySelector("#sapper")},"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),function(t){It=t}(oe.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Tt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=jt;Rt||(Rt=s&&s[0]),zt(null,[],{error:c,status:a,session:o,level0:{props:Rt},level1:{props:{status:a,error:c},component:$t},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=Kt(n);return r?Wt(r,Bt,!0,t):void 0});export{g as A,R as B,L as C,F as D,rt as S,d as a,b,E as c,u as d,f as e,y as f,w as g,$ as h,nt as i,l as j,i as k,S as l,m,t as n,_ as o,v as p,x as q,o as r,a as s,p as t,Y as u,Q as v,Z as w,W as x,z as y,tt as z};