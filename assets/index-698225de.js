(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function k(){}function re(e){return e()}function W(){return Object.create(null)}function T(e){e.forEach(re)}function oe(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function A(){return v(" ")}function le(){return v("")}function F(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function ae(e){return function(t){return t.preventDefault(),e.call(this,t)}}function j(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e){return e===""?null:+e}function de(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function U(e,t){e.value=t??""}let I;function S(e){I=e}function pe(){if(!I)throw new Error("Function called outside component initialization");return I}function _e(e){pe().$$.on_mount.push(e)}const N=[],X=[];let D=[];const Z=[],me=Promise.resolve();let Q=!1;function he(){Q||(Q=!0,me.then(ue))}function B(e){D.push(e)}const z=new Set;let L=0;function ue(){if(L!==0)return;const e=I;do{try{for(;L<N.length;){const t=N[L];L++,S(t),ye(t.$$)}}catch(t){throw N.length=0,L=0,t}for(S(null),N.length=0,L=0;X.length;)X.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];z.has(n)||(z.add(n),n())}D.length=0}while(N.length);for(;Z.length;)Z.pop()();Q=!1,z.clear(),S(e)}function ye(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function be(e){const t=[],n=[];D.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),D=t}const R=new Set;let O;function $e(){O={r:0,c:[],p:O}}function ge(){O.r||T(O.c),O=O.p}function P(e,t){e&&e.i&&(R.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(R.has(e))return;R.add(e),O.c.push(()=>{R.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e){e&&e.c()}function q(e,t,n,r){const{fragment:o,after_update:u}=e.$$;o&&o.m(t,n),r||B(()=>{const s=e.$$.on_mount.map(re).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...s):T(s),e.$$.on_mount=[]}),u.forEach(B)}function G(e,t){const n=e.$$;n.fragment!==null&&(be(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(N.push(e),he(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,o,u,s,m=[-1]){const d=I;S(e);const c=e.$$={fragment:null,ctx:[],props:u,update:k,not_equal:o,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:W(),dirty:m,skip_bound:!1,root:t.target||d.$$.root};s&&s(c.root);let h=!1;if(c.ctx=n?n(e,t.props||{},(f,l,...i)=>{const _=i.length?i[0]:l;return c.ctx&&o(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),h&&ve(e,f)),l}):[],c.update(),h=!0,T(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const f=de(t.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&P(e.$$.fragment),q(e,t.target,t.anchor,t.customElement),ue()}S(d)}class H{$destroy(){G(this,1),this.$destroy=k}$on(t,n){if(!oe(n))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}async function je(){var o,u;const e="Oficial",r=(await fetch("https://www.dolarsi.com/api/api.php?type=dolar").then(s=>s.json())).find(s=>s.casa.nombre===e);return parseFloat((u=(o=r==null?void 0:r.casa)==null?void 0:o.venta)==null?void 0:u.replace(",","."))||0}async function Ae(){const t=await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/jpy.min.json").then(n=>n.json());return(t==null?void 0:t.jpy)||0}async function we(){const[e,t]=await Promise.all([Ae(),je()]);return{dolarAYen:e,dolarTarjeta:Oe(t),dolarQatar:Ce(t)}}const ke=1.75,Ee=2,Oe=e=>e*ke,Ce=e=>e*Ee;function Te(e){let t,n,r=e[1].dolarTarjeta.toFixed(2)+"",o,u,s,m,d=e[1].dolarAYen.toFixed(2)+"",c;return{c(){t=y("p"),n=v("Dolar tarjeta: $"),o=v(r),u=A(),s=y("p"),m=v("USD = ¥"),c=v(d)},m(h,f){g(h,t,f),p(t,n),p(t,o),g(h,u,f),g(h,s,f),p(s,m),p(s,c)},p(h,f){f&2&&r!==(r=h[1].dolarTarjeta.toFixed(2)+"")&&C(o,r),f&2&&d!==(d=h[1].dolarAYen.toFixed(2)+"")&&C(c,d)},d(h){h&&b(t),h&&b(u),h&&b(s)}}}function Le(e){let t;return{c(){t=y("button"),t.textContent="carganding",j(t,"aria-busy","true")},m(n,r){g(n,t,r)},p:k,d(n){n&&b(t)}}}function ee(e){let t,n,r,o,u,s,m,d,c,h,f;return{c(){t=y("p"),n=v("🇺🇸 $"),r=v(e[2]),o=A(),u=y("p"),s=v("🇦🇷 $"),m=v(e[4]),d=A(),c=y("p"),h=v("🇶🇦 $"),f=v(e[3]),j(t,"style","color: gray")},m(l,i){g(l,t,i),p(t,n),p(t,r),g(l,o,i),g(l,u,i),p(u,s),p(u,m),g(l,d,i),g(l,c,i),p(c,h),p(c,f)},p(l,i){i&4&&C(r,l[2]),i&16&&C(m,l[4]),i&8&&C(f,l[3])},d(l){l&&b(t),l&&b(o),l&&b(u),l&&b(d),l&&b(c)}}}function Ne(e){let t,n,r,o,u,s,m,d,c,h;function f(a,$){return a[1]?Te:Le}let l=f(e),i=l(e),_=e[4]&&ee(e);return{c(){i.c(),t=A(),n=y("form"),r=y("label"),o=v(`Yen
    `),u=y("input"),m=A(),_&&_.c(),d=le(),j(u,"type","number"),j(u,"name","yen-input"),j(u,"placeholder","Numerito va aquí"),u.disabled=s=!e[1],j(r,"for","yen-input")},m(a,$){i.m(a,$),g(a,t,$),g(a,n,$),p(n,r),p(r,o),p(r,u),U(u,e[0]),g(a,m,$),_&&_.m(a,$),g(a,d,$),c||(h=F(u,"input",e[5]),c=!0)},p(a,[$]){l===(l=f(a))&&i?i.p(a,$):(i.d(1),i=l(a),i&&(i.c(),i.m(t.parentNode,t))),$&2&&s!==(s=!a[1])&&(u.disabled=s),$&1&&ie(u.value)!==a[0]&&U(u,a[0]),a[4]?_?_.p(a,$):(_=ee(a),_.c(),_.m(d.parentNode,d)):_&&(_.d(1),_=null)},i:k,o:k,d(a){i.d(a),a&&b(t),a&&b(n),a&&b(m),_&&_.d(a),a&&b(d),c=!1,h()}}}function De(e,t,n){let r,o,u,s,m;_e(async()=>{n(1,s=await we())});function d(l){return s?l/s.dolarAYen*s.dolarTarjeta:null}function c(l){return s?l/s.dolarAYen*s.dolarQatar:null}function h(l){return s?l/s.dolarAYen:null}function f(){m=ie(this.value),n(0,m)}return e.$$.update=()=>{var l,i,_;e.$$.dirty&1&&n(4,r=(l=d(m))==null?void 0:l.toFixed(2)),e.$$.dirty&1&&n(3,o=(i=c(m))==null?void 0:i.toFixed(2)),e.$$.dirty&1&&n(2,u=(_=h(m))==null?void 0:_.toFixed(2))},[m,s,u,o,r,f]}class Se extends H{constructor(t){super(),K(this,t,De,Ne,J,{})}}function te(e,t,n){const r=e.slice();return r[5]=t[n],r}function ne(e){let t,n,r=e[5].nombre+"",o,u,s,m,d,c=e[5].montoConsumido+"",h,f;return{c(){t=y("article"),n=y("header"),o=v(r),u=A(),s=y("body"),m=v("Monto consumido: "),d=y("strong"),h=v(c),f=A()},m(l,i){g(l,t,i),p(t,n),p(n,o),p(t,u),p(t,s),p(s,m),p(s,d),p(d,h),p(t,f)},p(l,i){i&2&&r!==(r=l[5].nombre+"")&&C(o,r),i&2&&c!==(c=l[5].montoConsumido+"")&&C(h,c)},d(l){l&&b(t)}}}function Fe(e){let t,n,r,o,u,s,m,d,c,h,f=e[1],l=[];for(let i=0;i<f.length;i+=1)l[i]=ne(te(e,f,i));return{c(){t=y("form"),n=y("label"),r=v(`Nueva tarjeta
    `),o=y("input"),u=A(),s=y("button"),s.textContent="Agregar",m=A();for(let i=0;i<l.length;i+=1)l[i].c();d=le(),j(o,"type","text"),j(o,"name","nueva-tarjeta"),j(s,"type","submit"),j(n,"for","nueva-tarjeta")},m(i,_){g(i,t,_),p(t,n),p(n,r),p(n,o),U(o,e[0]),p(n,u),p(n,s),g(i,m,_);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(i,_);g(i,d,_),c||(h=[F(o,"input",e[3]),F(t,"submit",ae(e[2]))],c=!0)},p(i,[_]){if(_&1&&o.value!==i[0]&&U(o,i[0]),_&2){f=i[1];let a;for(a=0;a<f.length;a+=1){const $=te(i,f,a);l[a]?l[a].p($,_):(l[a]=ne($),l[a].c(),l[a].m(d.parentNode,d))}for(;a<l.length;a+=1)l[a].d(1);l.length=f.length}},i:k,o:k,d(i){i&&b(t),i&&b(m),fe(l,i),i&&b(d),c=!1,T(h)}}}function Ie(e,t,n){const r=()=>JSON.parse(localStorage.getItem("tarjetas"))||[];let o,u=r();const s=()=>{localStorage.setItem("tarjetas",JSON.stringify([...u,{nombre:o,montoConsumido:0}])),n(0,o=""),n(1,u=r())};function m(){o=this.value,n(0,o)}return[o,u,s,m]}class Pe extends H{constructor(t){super(),K(this,t,Ie,Fe,J,{})}}function Re(e){let t,n;return t=new Pe({}),{c(){se(t.$$.fragment)},m(r,o){q(t,r,o),n=!0},i(r){n||(P(t.$$.fragment,r),n=!0)},o(r){Y(t.$$.fragment,r),n=!1},d(r){G(t,r)}}}function Ue(e){let t,n;return t=new Se({}),{c(){se(t.$$.fragment)},m(r,o){q(t,r,o),n=!0},i(r){n||(P(t.$$.fragment,r),n=!0)},o(r){Y(t.$$.fragment,r),n=!1},d(r){G(t,r)}}}function Ye(e){let t,n,r,o,u,s,m,d,c,h,f,l,i,_,a;const $=[Ue,Re],E=[];function V(w,x){return w[0]==="convertidometro"?0:1}return f=V(e),l=E[f]=$[f](e),{c(){t=y("main"),n=y("aside"),r=y("nav"),o=y("ul"),u=y("li"),s=y("button"),s.textContent="Convertidometro",m=A(),d=y("li"),c=y("button"),c.textContent="Tarjetómetro",h=A(),l.c(),j(s,"class","outline"),j(c,"class","outline"),j(t,"class","container")},m(w,x){g(w,t,x),p(t,n),p(n,r),p(r,o),p(o,u),p(u,s),p(o,m),p(o,d),p(d,c),p(t,h),E[f].m(t,null),i=!0,_||(a=[F(s,"click",e[1]),F(c,"click",e[2])],_=!0)},p(w,[x]){let M=f;f=V(w),f!==M&&($e(),Y(E[M],1,1,()=>{E[M]=null}),ge(),l=E[f],l||(l=E[f]=$[f](w),l.c()),P(l,1),l.m(t,null))},i(w){i||(P(l),i=!0)},o(w){Y(l),i=!1},d(w){w&&b(t),E[f].d(),_=!1,T(a)}}}function xe(e,t,n){let r="convertidometro";return[r,()=>n(0,r="convertidometro"),()=>n(0,r="tarjetometro")]}class Me extends H{constructor(t){super(),K(this,t,xe,Ye,J,{})}}new Me({target:document.getElementById("app")});
