import{_ as R}from"./nuxt-link.5938657d.js";import{u as b,s as U}from"./brands.e6c00158.js";import{f as x,s as w,r as d,i as B,o as f,c as y,m as u,z as $,a as i,t as N,q as P,p as C,e as V,_ as I,b as s,w as a,F as S,v as D,g as T,M as z,N as E,d as F,O,P as M,Q as j,l as q,V as Q,R as W,S as X,U as Y,A as Z,W as G,X as L,Y as H,B as J,Z as K,$ as ee,a0 as te}from"./entry.5e56b12a.js";const se=""+globalThis.__publicAssetsURL("images/basket.svg"),ae=t=>(C("data-v-07b839fb"),t=t(),V(),t),oe={class:"cart__container"},le=ae(()=>i("img",{class:"cart__img",alt:"cart",src:se},null,-1)),ne={class:"cart-counter__text"},ce=x({__name:"Icon",setup(t){const g=b(),{countCartProducts:e}=w(g),o=d(!1),c=()=>{o.value=!0,setTimeout(()=>{o.value=!1},1e3)};return B(()=>{e.value&&c()}),(l,p)=>(f(),y("div",oe,[le,+u(e)>0?(f(),y("div",{key:0,class:$([{shake:u(o)},"cart-counter__contnr"])},[i("p",ne,N(parseInt(u(e).toString(),10)<100?u(e):"99+"),1)],2)):P("",!0)]))}});const re=I(ce,[["__scopeId","data-v-07b839fb"]]),_e=t=>(C("data-v-f404ce6b"),t=t(),V(),t),ue=_e(()=>i("h3",{class:"header"},"Категории:",-1)),de=x({__name:"CategoryList",setup(t){const e=d([{id:-1,title:"Все бренды",code:"brand_all",sort:"0",active:!1},...U]),o=b(),{currentBrand:c}=w(o);d(!1);const l=d(!1),p=m=>{var r,n;l.value=!1,c.value=m;const v=(r=e.value)==null?void 0:r.findIndex(_=>_.id===m);(n=e.value)==null||n.forEach(_=>(_.active=!1,_)),typeof v<"u"&&e.value&&(e.value[v].active=!0)};return(m,v)=>(f(),y(S,null,[ue,s(O,{class:"pa-0 mx-2",mandatory:""},{default:a(()=>[(f(!0),y(S,null,D(e.value,(r,n)=>(f(),T(z,{density:"compact",class:"rounded-lg",key:n,value:r,color:"orange",onClick:_=>p(r.id)},{default:a(()=>[s(E,{class:"text-subtitle-2 global-font-classic"},{default:a(()=>[F(N(r.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})],64))}});const ie=I(de,[["__scopeId","data-v-f404ce6b"]]),fe=""+globalThis.__publicAssetsURL("images/logo.svg"),pe=t=>(C("data-v-874e1f71"),t=t(),V(),t),me=pe(()=>i("div",{class:"logo"},[i("img",{class:"logo_img overflow-hidden",src:fe,alt:"logo"})],-1)),ve={class:"cart"},ge=x({__name:"default",setup(t){const g=b(),e=M(),o=d(!0),c=d(!0),l=d(!1),{smAndUp:p}=j(),m=()=>{l.value=!l.value},v=()=>{setTimeout(()=>{l.value=!1},500)};return q(()=>{g.getsaveProductList()}),B(()=>{e!=null&&e.name&&(o.value=e.name!=="cart"),p&&(c.value=p.value&&o.value)}),(r,n)=>{const _=R,A=re,k=ie;return f(),T(te,null,{default:a(()=>[s(G,{elevation:"2",blur:"1px",color:"#ffffffdd",style:Z({backdropFilter:"blur(5px) grayscale(1)"})},{prepend:a(()=>[s(Q,{icon:"mdi-menu",onClick:m,class:$(u(o)?"d-flex d-sm-none":"d-none")},null,8,["class"])]),default:a(()=>[s(_,{to:"/"},{default:a(()=>[me]),_:1}),s(W),X(s(_,{to:"/cart"},{default:a(()=>[i("div",ve,[s(A)])]),_:1},512),[[Y,u(o)]])]),_:1},8,["style"]),s(H,{modelValue:u(c),"onUpdate:modelValue":n[0]||(n[0]=h=>L(c)?c.value=h:null),location:"left",permanent:"",class:"d-none d-sm-flex"},{default:a(()=>[s(k)]),_:1},8,["modelValue"]),s(K,{modelValue:u(l),"onUpdate:modelValue":n[1]||(n[1]=h=>L(l)?l.value=h:null),class:"align-center justify-center",onClick:v,"scroll-strategy":"close","location-strategy":"static"},{default:a(()=>[i("div",null,[s(J,null,{default:a(()=>[s(k)]),_:1})])]),_:1},8,["modelValue"]),ee(r.$slots,"default",{},void 0,!0)]),_:3})}}});const xe=I(ge,[["__scopeId","data-v-874e1f71"]]);export{xe as default};
