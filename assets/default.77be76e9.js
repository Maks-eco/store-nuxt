import{_ as S}from"./nuxt-link.75ed1444.js";import{u as l}from"./counter.6205bad9.js";import{f as p,s as b,r as m,g as f,o as d,c as i,i as o,C as h,a,t as w,k as y,p as v,e as g,_ as C,G as k,h as $,b as r,w as u,j as N,H as L,I as P,F as R}from"./entry.5ca1cdd8.js";const T=""+globalThis.__publicAssetsURL("images/basket.svg"),j=t=>(v("data-v-83565fe1"),t=t(),g(),t),A={class:"cart__container"},B=j(()=>a("img",{class:"cart__img",alt:"cart",src:T},null,-1)),V={class:"cart-counter__text"},D=p({__name:"CartIcon",setup(t){const c=l(),{countCartProducts:e}=b(c),s=m(!1),_=()=>{s.value=!0,setTimeout(()=>{s.value=!1},1e3)};return f(()=>{e.value&&_()}),(I,n)=>(d(),i("div",A,[B,+o(e)>0?(d(),i("div",{key:0,class:h([{shake:o(s)},"cart-counter__contnr"])},[a("p",V,w(parseInt(o(e).toString(),10)<100?o(e):"99+"),1)],2)):y("",!0)]))}});const E=C(D,[["__scopeId","data-v-83565fe1"]]),F=""+globalThis.__publicAssetsURL("images/logo.svg"),U=t=>(v("data-v-7319e9d7"),t=t(),g(),t),z=U(()=>a("div",{class:"logo"},[a("img",{class:"logo_img",src:F,alt:"logo"})],-1)),G={class:"cart"},H={class:"page"},M=p({__name:"default",setup(t){const c=l(),e=k(),s=m(!0);return $(()=>{c.getsaveProductList()}),f(()=>{e!=null&&e.name&&(s.value=e.name!=="cart")}),(_,I)=>{const n=S,x=E;return d(),i(R,null,[a("div",{class:h(["header",{"header-justify-sb":o(s),"header-justify-c":!o(s)}])},[r(n,{to:"/"},{default:u(()=>[z]),_:1}),N(r(n,{to:"/cart"},{default:u(()=>[a("div",G,[r(x)])]),_:1},512),[[L,o(s)]])],2),a("div",H,[P(_.$slots,"default",{},void 0,!0)])],64)}}});const K=C(M,[["__scopeId","data-v-7319e9d7"]]);export{K as default};
