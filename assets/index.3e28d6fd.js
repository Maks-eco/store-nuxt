import{h as v,i as b,s as T,b as o,a1 as f,a2 as p,j as h,a3 as z,f as N,y as _,Y as I,W as F,o as d,c as m,w as g,a0 as K,F as P,$ as W,g as j,Z as Y,a4 as J,a5 as Z,_ as q}from"./entry.01ffe02f.js";import{m as y,b as k,u as H,s as Q,a as X}from"./ssrBoot.5534da5f.js";import{V as ee}from"./VMain.bdb9d789.js";const te=[{type:"simple",id:1,sku:"s1",title:"Product 1",regular_price:{currency:"USD",value:27.12},image:"/images/1.png",brand:9},{type:"configurable",id:2,sku:"c1",title:"Product 2",regular_price:{currency:"USD",value:54.21},image:"/images/conf/default.png",configurable_options:[{attribute_id:93,attribute_code:"color",label:"Color",values:[{label:"Red",value_index:931,value:"#ff0000"},{label:"Blue",value_index:932,value:"#0000ff"},{label:"Black",value_index:933,value:"#000"}]},{attribute_code:"size",attribute_id:144,position:0,id:2,label:"Size",values:[{label:"M",value_index:1441,value:1},{label:"L",value_index:1442,value:2}]}],variants:[{attributes:[{code:"color",value_index:931},{code:"size",value_index:1441}],product:{id:2001,sku:"c1-red-m",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:931},{code:"size",value_index:1442}],product:{id:2002,sku:"c1-red-l",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:932},{code:"size",value_index:1441}],product:{id:2003,sku:"c1-blue-m",image:"/image/conf/blue.png"}},{attributes:[{code:"color",value_index:933},{code:"size",value_index:1442}],product:{id:2004,sku:"c1-black-l",image:"/image/conf/black.png"}}],brand:1},{type:"simple",id:3,sku:"s2",title:"Product 3",regular_price:{currency:"USD",value:36.87},image:"/images/2.png",brand:8},{type:"simple",id:4,sku:"s3",title:"Product 4",regular_price:{currency:"USD",value:28.91},image:"/images/3.png",brand:2},{type:"simple",id:5,sku:"s4",title:"Product 5",regular_price:{currency:"USD",value:41.23},image:"/images/4.png",brand:7},{type:"simple",id:6,sku:"s5",title:"Product 6",regular_price:{currency:"USD",value:88},image:"/images/5.png",brand:3},{type:"simple",id:7,sku:"s6",title:"Product 7",regular_price:{currency:"USD",value:127.41},image:"/images/6.png",brand:6},{type:"configurable",id:8,sku:"c2",title:"Product 8",regular_price:{currency:"USD",value:63.27},image:"/images/conf/default.png",configurable_options:[{attribute_id:93,attribute_code:"color",label:"Color",values:[{label:"Red",value_index:931,value:"#ff0000"},{label:"Blue",value_index:932,value:"#0000ff"},{label:"Black",value_index:933,value:"#000"}]},{attribute_code:"size",attribute_id:144,position:0,id:2,label:"Size",values:[{label:"M",value_index:1441,value:1},{label:"L",value_index:1442,value:2}]}],variants:[{attributes:[{code:"color",value_index:931},{code:"size",value_index:1441}],product:{id:8001,sku:"c2-red-m",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:931},{code:"size",value_index:1442}],product:{id:8002,sku:"c2-red-l",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:932},{code:"size",value_index:1441}],product:{id:8003,sku:"c2-blue-m",image:"/image/conf/blue.png"}},{attributes:[{code:"color",value_index:933},{code:"size",value_index:1442}],product:{id:8004,sku:"c2-black-l",image:"/image/conf/black.png"}}],brand:4},{type:"simple",id:9,sku:"s7",title:"Product 9",regular_price:{currency:"USD",value:123.4},image:"/images/7.png",brand:5},{type:"configurable",id:10,sku:"c3",title:"Product 10",regular_price:{currency:"USD",value:68.273},image:"/images/conf/default.png",configurable_options:[{attribute_id:93,attribute_code:"color",label:"Color",values:[{label:"Red",value_index:931,value:"#ff0000"},{label:"Blue",value_index:932,value:"#0000ff"},{label:"Black",value_index:933,value:"#000"}]},{attribute_code:"size",attribute_id:144,position:0,id:2,label:"Size",values:[{label:"M",value_index:1441,value:1},{label:"L",value_index:1442,value:2}]}],variants:[{attributes:[{code:"color",value_index:931},{code:"size",value_index:1441}],product:{id:10001,sku:"c10-red-m",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:931},{code:"size",value_index:1442}],product:{id:10002,sku:"c10-red-l",image:"/image/conf/red.png"}},{attributes:[{code:"color",value_index:932},{code:"size",value_index:1441}],product:{id:10003,sku:"c10-blue-m",image:"/image/conf/blue.png"}},{attributes:[{code:"color",value_index:933},{code:"size",value_index:1442}],product:{id:10004,sku:"c10-black-l",image:"/image/conf/black.png"}}],brand:3},{type:"simple",id:11,sku:"s8",title:"Product 11",regular_price:{currency:"USD",value:92.32},image:"/images/8.png",brand:1},{type:"simple",id:12,sku:"s9",title:"Product 12",regular_price:{currency:"USD",value:53.4},image:"/images/9.png",brand:2}];const ae=v({fluid:{type:Boolean,default:!1},...y(),...k()},"VContainer"),le=b()({name:"VContainer",props:ae(),setup(e,a){let{slots:t}=a;const{rtlClasses:l}=T();return H(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},l.value,e.class],style:e.style},t)),{}}}),B=(()=>f.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),U=(()=>f.reduce((e,a)=>{const t="offset"+p(a);return e[t]={type:[String,Number],default:null},e},{}))(),w=(()=>f.reduce((e,a)=>{const t="order"+p(a);return e[t]={type:[String,Number],default:null},e},{}))(),V={col:Object.keys(B),offset:Object.keys(U),order:Object.keys(w)};function ne(e,a,t){let l=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const ie=["auto","start","end","center","baseline","stretch"],ue=v({cols:{type:[Boolean,String,Number],default:!1},...B,offset:{type:[String,Number],default:null},...U,order:{type:[String,Number],default:null},...w,alignSelf:{type:String,default:null,validator:e=>ie.includes(e)},...y(),...k()},"VCol"),re=b()({name:"VCol",props:ue(),setup(e,a){let{slots:t}=a;const l=h(()=>{const n=[];let i;for(i in V)V[i].forEach(r=>{const s=e[r],c=ne(i,r,s);c&&n.push(c)});const u=n.some(r=>r.startsWith("v-col-"));return n.push({"v-col":!u||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return z(e.tag,{class:[l.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),x=["start","end","center"],$=["space-between","space-around","space-evenly"];function S(e,a){return f.reduce((t,l)=>{const n=e+p(l);return t[n]=a(),t},{})}const se=[...x,"baseline","stretch"],D=e=>se.includes(e),E=S("align",()=>({type:String,default:null,validator:D})),oe=[...x,...$],R=e=>oe.includes(e),A=S("justify",()=>({type:String,default:null,validator:R})),ce=[...x,...$,"stretch"],G=e=>ce.includes(e),M=S("alignContent",()=>({type:String,default:null,validator:G})),L={align:Object.keys(E),justify:Object.keys(A),alignContent:Object.keys(M)},de={align:"align",justify:"justify",alignContent:"align-content"};function ge(e,a,t){let l=de[e];if(t!=null){if(a){const n=a.replace(e,"");l+=`-${n}`}return l+=`-${t}`,l.toLowerCase()}}const fe=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:D},...E,justify:{type:String,default:null,validator:R},...A,alignContent:{type:String,default:null,validator:G},...M,...y(),...k()},"VRow"),_e=b()({name:"VRow",props:fe(),setup(e,a){let{slots:t}=a;const l=h(()=>{const n=[];let i;for(i in L)L[i].forEach(u=>{const r=e[u],s=ge(i,u,r);s&&n.push(s)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return z(e.tag,{class:["v-row",l.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),me=J(()=>Z(()=>import("./Card.2d03cd6a.js"),["./Card.2d03cd6a.js","./entry.01ffe02f.js","./entry.459fb1e8.css","./VBtn.a6bd0e24.js","./index.f3843f26.js","./ssrBoot.5534da5f.js","./index.c6fcc96e.css","./VBtn.b14fdcb1.css","./delay.34f723e4.js","./delay.b793d59e.css","./Card.a2dee95c.css"],import.meta.url).then(e=>e.default||e)),ve={key:0,class:"empty-list"},be=N({__name:"List",setup(e){const a=_(null),t=_(te),l=_(Q),n=X(),{currentBrand:i}=I(n);return F(()=>{if(i.value){if(t.value&&i.value===-1){a.value=[...t.value];return}t.value&&(a.value=t.value.filter(u=>u.brand==i.value))}else t.value&&(a.value=[...t.value])}),(u,r)=>{var c;const s=me;return d(),m(P,null,[o(le,null,{default:g(()=>[o(_e,null,{default:g(()=>[o(K,{name:"list"},{default:g(()=>[(d(!0),m(P,null,W(a.value,(C,O)=>(d(),j(re,{class:"d-flex justify-start align-center flex-column",key:C.id,cols:"12",sm:"12",md:"6",lg:"3",xl:"2"},{default:g(()=>[o(s,{index:O,item:C,"brand-list":l.value?l.value:null},null,8,["index","item","brand-list"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),((c=a.value)==null?void 0:c.length)===0?(d(),m("h3",ve,"Товары отсутствуют")):Y("",!0)],64)}}});const pe=q(be,[["__scopeId","data-v-0e9a7c6c"]]),Se=N({__name:"index",setup(e){return(a,t)=>{const l=pe;return d(),j(ee,{class:"d-flex pl-sm-none pt-16"},{default:g(()=>[o(l)]),_:1})}}});export{Se as default};
