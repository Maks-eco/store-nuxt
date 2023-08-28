import{u as z}from"./counter.82ffbe28.js";import{f as U,r as $,s as D,h as H,o,c as u,a as r,F as S,l as B,n as L,m as q,t as V,p as T,e as j,_ as P,i as f,q as G,k as N,b as F,g as J}from"./entry.402c6c4f.js";import{v as d,b as K}from"./index.821a9878.js";const M=m=>(T("data-v-0d19daac"),m=m(),j(),m),O={class:"list"},Q=M(()=>r("h2",{class:"header"},"Категории:",-1)),W=["onClick"],X={class:"title"},Y=M(()=>r("hr",{class:"hr"},null,-1)),Z=U({__name:"CategoryList",setup(m){const i={id:-1,title:"Все бренды",code:"brand_all",sort:"0",active:!1},e=$(null),c=z(),{currentBrand:p}=D(c);$(!1);const l=$(!1),_=h=>{var a,n;l.value=!1,p.value=h;const t=(a=e.value)==null?void 0:a.findIndex(s=>s.id===h);(n=e.value)==null||n.forEach(s=>(s.active=!1,s)),typeof t<"u"&&e.value&&(e.value[t].active=!0)};return H(()=>{c.getCategories().then(h=>{e.value=[i,...h],e.value=e.value.map(t=>(t.active=p.value===t.id,t))})}),(h,t)=>(o(),u("div",{class:L([{backgrd:l.value}]),onClick:t[2]||(t[2]=a=>l.value=!1)},[r("div",{class:L([{"container-inactive":!l.value},"container"]),onClick:t[1]||(t[1]=q(()=>{},["stop"]))},[r("div",O,[Q,(o(!0),u(S,null,B(e.value,a=>(o(),u("div",{class:L([{"brand-active":a.active},"brand"]),key:a.id,onClick:n=>_(a.id)},[r("p",X,V(a.title),1)],10,W))),128))]),Y,r("button",{class:"hide-categories",onClick:t[0]||(t[0]=a=>l.value=!l.value)}," Категории ")],2)],2))}});const w=P(Z,[["__scopeId","data-v-0d19daac"]]),R={key:0,class:"attr-container"},ee={class:"variant-line"},te={class:"line-label"},ae=["onClick"],ne={key:1,class:"attr-container"},se=U({__name:"VariantsIcon",props:{item:{}},emits:["updateImage","variantSelected"],setup(m,{emit:i}){const e=m,c=$([]),p=()=>{var t,a,n,s;if(e.item.current_attributes&&((t=e.item)==null?void 0:t.current_attributes.length)===2){const v=(a=e.item)==null?void 0:a.current_attributes[0],y=(n=e.item)==null?void 0:n.current_attributes[1];(s=e.item.variants)==null||s.forEach(I=>{let C=0;if(I.attributes.forEach(b=>{(b.value_index===v.value_index||b.value_index===y.value_index)&&C++}),C===2){let b=[v.value_index,y.value_index];b.sort((x,g)=>x-g);const A={...I.product,attrIndexes:b};i("updateImage",A),i("variantSelected",!0)}})}},l=()=>{var t,a,n,s,v,y,I,C,b,A;if((t=e.item)!=null&&t.current_attributes){if(((a=e.item)==null?void 0:a.current_attributes.length)===0){(n=e.item.configurable_options)==null||n.forEach(x=>{x.values.forEach(g=>{g.state=d.Unchecked})}),i("variantSelected",!1);return}if(((s=e.item)==null?void 0:s.current_attributes.length)===1){const x=(v=e.item)==null?void 0:v.current_attributes[0];(y=e.item.configurable_options)==null||y.forEach(g=>{g.attribute_code===x.code&&g.values.forEach(k=>{if(k.value_index===x.value_index){k.state=d.Checked;return}k.state=d.Unchecked}),g.attribute_code!==x.code&&g.values.forEach(k=>{c.value.forEach(E=>{k.state=d.Inactive,E.value_index===k.value_index&&(k.state=d.Unchecked)})})}),i("variantSelected",!1);return}if(((I=e.item)==null?void 0:I.current_attributes.length)===2){const x=(C=e.item)==null?void 0:C.current_attributes[0].value_index,g=(b=e.item)==null?void 0:b.current_attributes[1].value_index;(A=e.item.configurable_options)==null||A.forEach(k=>{k.values.forEach(E=>{if(E.value_index===x||E.value_index===g){E.state=d.Checked;return}E.state=d.Hidden})}),p();return}}},_=()=>{var t,a,n,s;if((t=e.item)!=null&&t.current_attributes&&((a=e.item)==null?void 0:a.current_attributes.length)===1){const v=(n=e.item)==null?void 0:n.current_attributes[0],y=[];(s=e.item.variants)==null||s.forEach(I=>{const C=I.attributes.filter(b=>b.value_index!==v.value_index);C.length===1&&y.push(C[0])}),c.value=[...y]}else c.value=[];l()},h=(t,a)=>{var s;(s=e.item)!=null&&s.current_attributes||(e.item.current_attributes=[]);const n=e.item.current_attributes.findIndex(v=>v.code===t);if(n>=0){if(e.item.current_attributes[n].value_index===a){e.item.current_attributes=e.item.current_attributes.filter(v=>v.code!==t),_();return}e.item.current_attributes[n]={code:t,value_index:a}}else e.item.current_attributes.push({code:t,value_index:a});_()};return H(()=>{l()}),(t,a)=>(o(),u(S,null,[t.item.type==="configurable"?(o(),u("div",R,[(o(!0),u(S,null,B(t.item.configurable_options,n=>(o(),u("div",ee,[r("p",te,V(n.label),1),(o(!0),u(S,null,B(n.values,s=>(o(),u("div",null,[r("div",{class:L(["var",{"var-checked":s.state===f(d).Checked,"var-unchecked":s.state===f(d).Unchecked,"var-inactive":s.state===f(d).Inactive,"var-hidden":s.state===f(d).Hidden,"var-inactive-line":s.state===f(d).Inactive}]),style:G({backgroundColor:n.attribute_code==="color"?s.value:"gray"}),onClick:v=>{s.state!==f(d).Inactive&&s.state!==f(d).Hidden&&h(n.attribute_code,s.value_index)}},[r("p",null,V(n.attribute_code!=="color"?s.label:""),1)],14,ae)]))),256))]))),256))])):N("",!0),t.item.type!=="configurable"?(o(),u("div",ne)):N("",!0)],64))}});const ie=P(se,[["__scopeId","data-v-fe54b289"]]),re={class:"container-item"},ce=["src"],oe={class:"description"},ue={class:"title"},le={class:"brand-title"},de={class:"price"},_e={class:"btn-con"},ve=U({__name:"ProductCard",props:{item:{},brandList:{}},setup(m){const i=m,e=z(),c=$(i.item.type==="simple"),p=t=>K.slice(0,-1)+t,l=t=>{if(i.brandList){const a=i.brandList.find(n=>n.id===t);return a==null?void 0:a.title}return""},_=t=>{c.value=t},h=t=>{i.item.image=t.image.slice(0,6)+"s"+t.image.slice(6),i.item.productFeature={...t}};return H(()=>{}),(t,a)=>{const n=ie;return o(),u("div",re,[r("img",{class:"image",src:p(i.item.image),alt:""},null,8,ce),r("div",oe,[r("div",ue,V(i.item.title),1),r("div",le,V(l(i.item.brand)),1),r("div",de,"$"+V(i.item.regular_price.value.toFixed(2)),1)]),r("div",_e,[r("button",{class:L(["button",{"button-inactive":!f(c)}]),onClick:a[0]||(a[0]=s=>{f(c)&&f(e).saveProduct(i.item)})},V(f(c)?"Добавить в корзину":"Выберите опции"),3)]),F(n,{item:i.item,onUpdateImage:h,onVariantSelected:_},null,8,["item"])])}}});const fe=P(ve,[["__scopeId","data-v-a881ffce"]]),me={class:"container"},pe={key:0,class:"empty-list"},he=U({__name:"ProductList",setup(m){const i=$(null),e=$(null),c=$(null),p=z(),{currentBrand:l}=D(p);return J(()=>{if(l.value){if(e.value&&l.value===-1){i.value=[...e.value];return}e.value&&(i.value=e.value.filter(_=>_.brand==l.value))}else e.value&&(i.value=[...e.value])}),H(()=>{p.getProducts().then(_=>{e.value=[..._]}),p.getCategories().then(_=>{c.value=[..._]})}),(_,h)=>{var a;const t=fe;return o(),u(S,null,[r("div",me,[(o(!0),u(S,null,B(i.value,n=>(o(),u("div",{key:n.id},[r("div",null,[F(t,{item:n,"brand-list":c.value},null,8,["item","brand-list"])])]))),128))]),((a=i.value)==null?void 0:a.length)===0?(o(),u("h3",pe,"Товары отсутствуют")):N("",!0)],64)}}});const be=P(he,[["__scopeId","data-v-a204621c"]]);const ge={},xe={class:"container"},ke={class:"sidebar"},ye={class:"content"};function Ce(m,i){const e=w,c=be;return o(),u("div",xe,[r("div",ke,[F(e)]),r("div",ye,[F(c)])])}const Ee=P(ge,[["render",Ce],["__scopeId","data-v-7d9c1f5d"]]);export{Ee as default};
