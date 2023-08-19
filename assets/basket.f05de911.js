import{u as x}from"./counter.c57ff0c3.js";import{f as y,s as v,r as m,g as k,h as w,i as o,o as r,c as _,F as P,j as $,t as a,k as p,a as t,l as V,v as L,d as N,p as S,e as U,_ as g,b as F}from"./entry.c9ebe03f.js";import{b as I}from"./index.00dd2f7f.js";const f=""+globalThis.__publicAssetsURL("images/trash.png"),l=d=>(S("data-v-7e35c439"),d=d(),U(),d),T={key:0},q={class:"one-product"},B={class:"product__img-contnr"},D=["src"],E={style:{width:"100%"}},M={class:"product__descr-name"},R={class:"active-min"},j={style:{"text-align":"right"},class:"active-min"},A=["onClick"],z=l(()=>t("img",{class:"trash-img",src:f,alt:"product preview"},null,-1)),G=[z],H={class:"product__descr"},J={class:"active-max"},K=l(()=>t("label",{for:"qty",class:"active-min"},"Кол-во: ",-1)),O=["onUpdate:modelValue","onChange"],Q=l(()=>t("span",{class:"active-min"},"Всего:",-1)),W=["onClick"],X=l(()=>t("img",{class:"trash-img",src:f,alt:"product preview"},null,-1)),Y=[X],Z=l(()=>t("hr",{class:"under-product"},null,-1)),tt={key:0,class:"total-cost"},et={key:1,class:"empty-cart-msg"},st=y({__name:"CartProductList",setup(d){const s=x(),{storageProduct:i}=v(s);m(null);const h=m(null);v(s);const C=c=>{var e;const u=(e=h.value)==null?void 0:e.find(n=>n.id===c);return u?u.title:""};k(()=>{}),w(()=>{s.getCategories().then(c=>{h.value=[...c]})});const b=c=>I.slice(0,-1)+c;return(c,u)=>o(i)?(r(),_("div",T,[(r(!0),_(P,null,$(o(i),e=>(r(),_("div",{class:"product-contnr",key:e.id},[t("div",q,[t("div",B,[t("img",{class:"product__one-img",src:b(e.image),alt:"product preview"},null,8,D),t("div",E,[t("p",M,a(C(e.brand))+" / "+a(e.title),1),t("p",R,"$"+a(e.regular_price.value),1),t("div",j,[t("button",{class:"cart-button cart-button--delete-product",onClick:n=>o(s).deleteCartProduct(e)},G,8,A)])])]),t("div",H,[t("p",J,"$"+a(e.regular_price.value),1),t("div",null,[K,V(t("input",{type:"number",class:"quantity",name:"qty",min:"1",max:"999","onUpdate:modelValue":n=>e.count=n,onChange:n=>o(s).updateProductCount(e)},null,40,O),[[L,e.count]])]),t("p",null,[Q,N(" $"+a((e.regular_price.value*e.count).toFixed(2)),1)]),t("button",{class:"cart-button cart-button--delete-product active-max",onClick:n=>o(s).deleteCartProduct(e)},Y,8,W)])]),Z]))),128)),o(s).finalCost>0?(r(),_("h2",tt," Итог: "+a(o(s).finalCost.toFixed(2)),1)):p("",!0),o(s).finalCost===0?(r(),_("h2",et,"Корзина пуста")):p("",!0)])):p("",!0)}});const ot=g(st,[["__scopeId","data-v-7e35c439"]]),ct={};function nt(d,s){const i=ot;return r(),_("div",null,[F(i)])}const dt=g(ct,[["render",nt]]);export{dt as default};
