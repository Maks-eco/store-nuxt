import{V as D}from"./VBtn.1f51424d.js";import{e as M,m as T,u as z,d as j,b as U,f as q,a as Z}from"./delay.2a8bb321.js";import{f as F,o as f,g as N,w as y,b as v,d as O,t as I,y as $,O as G,c as h,F as B,$ as L,a as S,a7 as J,L as i,au as K,Z as P,_ as w,h as Q,i as W,q as X,C as Y}from"./entry.cc7ccac7.js";import{a as R}from"./ssrBoot.9573e10a.js";import{l as ee}from"./index.1315f7be.js";const te=F({__name:"AcceptButton",props:{productVariantSelected:{}},emits:["onClickAct"],setup(s,{emit:l}){const e=s;return(_,c)=>(f(),N(M,{class:"py-1"},{default:y(()=>[v(D,{class:"font-weight-bold",color:e.productVariantSelected?"orange":"grey-lighten-1",variant:"text",onClick:c[0]||(c[0]=C=>{e.productVariantSelected&&l("onClickAct",!0)})},{default:y(()=>[O(I(e.productVariantSelected?"Добавить в корзину":"Выберите опции"),1)]),_:1},8,["color"])]),_:1}))}});var u=(s=>(s.Checked="Checked",s.Unchecked="Unchecked",s.Inactive="Inactive",s.Hidden="Hidden",s))(u||{});const ae={key:0,class:"attr-container"},re={class:"variant-line"},ne={class:"line-label"},se=["onClick"],ie={key:1,class:"attr-container"},ce=F({__name:"VariantsIcon",props:{item:{}},emits:["updateImage","variantSelected"],setup(s,{emit:l}){const e=s,_=$([]),c=()=>{var a,o,r,t;if(e.item.current_attributes&&((a=e.item)==null?void 0:a.current_attributes.length)===2){const n=(o=e.item)==null?void 0:o.current_attributes[0],d=(r=e.item)==null?void 0:r.current_attributes[1];(t=e.item.variants)==null||t.forEach(V=>{let p=0;if(V.attributes.forEach(m=>{(m.value_index===n.value_index||m.value_index===d.value_index)&&p++}),p===2){let m=[n.value_index,d.value_index];m.sort((x,b)=>x-b);const E={...V.product,attrIndexes:m};l("updateImage",E),l("variantSelected",!0)}})}},C=()=>{var a,o,r,t,n,d,V,p,m,E;if((a=e.item)!=null&&a.current_attributes){if(((o=e.item)==null?void 0:o.current_attributes.length)===0){(r=e.item.configurable_options)==null||r.forEach(x=>{x.values.forEach(b=>{b.state=u.Unchecked})}),l("variantSelected",!1);return}if(((t=e.item)==null?void 0:t.current_attributes.length)===1){const x=(n=e.item)==null?void 0:n.current_attributes[0];(d=e.item.configurable_options)==null||d.forEach(b=>{b.attribute_code===x.code&&b.values.forEach(k=>{if(k.value_index===x.value_index){k.state=u.Checked;return}k.state=u.Unchecked}),b.attribute_code!==x.code&&b.values.forEach(k=>{_.value.forEach(A=>{k.state=u.Inactive,A.value_index===k.value_index&&(k.state=u.Unchecked)})})}),l("variantSelected",!1);return}if(((V=e.item)==null?void 0:V.current_attributes.length)===2){const x=(p=e.item)==null?void 0:p.current_attributes[0].value_index,b=(m=e.item)==null?void 0:m.current_attributes[1].value_index;(E=e.item.configurable_options)==null||E.forEach(k=>{k.values.forEach(A=>{if(A.value_index===x||A.value_index===b){A.state=u.Checked;return}A.state=u.Hidden})}),c();return}}},g=()=>{var a,o,r,t;if((a=e.item)!=null&&a.current_attributes&&((o=e.item)==null?void 0:o.current_attributes.length)===1){const n=(r=e.item)==null?void 0:r.current_attributes[0],d=[];(t=e.item.variants)==null||t.forEach(V=>{const p=V.attributes.filter(m=>m.value_index!==n.value_index);p.length===1&&d.push(p[0])}),_.value=[...d]}else _.value=[];C()},H=(a,o)=>{var t;(t=e.item)!=null&&t.current_attributes||(e.item.current_attributes=[]);const r=e.item.current_attributes.findIndex(n=>n.code===a);if(r>=0){if(e.item.current_attributes[r].value_index===o){e.item.current_attributes=e.item.current_attributes.filter(n=>n.code!==a),g();return}e.item.current_attributes[r]={code:a,value_index:o}}else e.item.current_attributes.push({code:a,value_index:o});g()};return G(()=>{C()}),(a,o)=>(f(),h(B,null,[a.item.type==="configurable"?(f(),h("div",ae,[(f(!0),h(B,null,L(a.item.configurable_options,r=>(f(),h("div",re,[S("p",ne,I(r.label),1),(f(!0),h(B,null,L(r.values,t=>(f(),h("div",null,[S("div",{class:J(["var",{"var-checked":t.state===i(u).Checked,"var-unchecked":t.state===i(u).Unchecked,"var-inactive":t.state===i(u).Inactive,"var-hidden":t.state===i(u).Hidden,"var-inactive-line":t.state===i(u).Inactive}]),style:K({backgroundColor:r.attribute_code==="color"?t.value:"gray"}),onClick:n=>{t.state!==i(u).Inactive&&t.state!==i(u).Hidden&&H(r.attribute_code,t.value_index)}},[S("p",null,I(r.attribute_code!=="color"?t.label:""),1)],14,se)]))),256))]))),256))])):P("",!0),a.item.type!=="configurable"?(f(),h("div",ie)):P("",!0)],64))}});const oe=w(ce,[["__scopeId","data-v-4697048c"]]),ue=Q({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...T()},"VHover"),le=W()({name:"VHover",props:ue(),emits:{"update:modelValue":s=>!0},setup(s,l){let{slots:e}=l;const _=X(s,"modelValue"),{runOpenDelay:c,runCloseDelay:C}=z(s,g=>!s.disabled&&(_.value=g));return()=>{var g;return(g=e.default)==null?void 0:g.call(e,{isHovering:_.value,props:{onMouseenter:c,onMouseleave:C}})}}}),de={class:"global-font-classic font-weight-bold text-h6 ms-1 mb-2"},_e={class:"ms-1"},me={class:"ms-1"},ve={key:0},fe={key:0},pe=F({__name:"Card",props:{item:{},brandList:{}},setup(s){const l=s,e=R(),_=$(!1),c=$(l.item),C=$(l.item.type==="simple"),g=t=>(t=`https://raw.githubusercontent.com/fe-side/vue-test/master/assets${t}`,t),H=t=>{if(l.brandList){const n=l.brandList.find(d=>d.id===t);return n==null?void 0:n.title}return""},a=()=>{e.saveProduct(c.value)},o=t=>{C.value=t},r=t=>{c.value.image=t.image.slice(0,6)+"s"+t.image.slice(6),c.value.productFeature={...t}};return(t,n)=>{const d=te,V=oe;return f(),h("div",null,[v(le,{"close-delay":"150"},{default:y(({isHovering:p,props:m})=>[v(j,Y({width:"230",class:["mx-5 trans-it",p?" mt-5 mb-7":" mt-7 mb-5"],elevation:"3"},m),{default:y(()=>[v(U,{height:"230",src:"images/autumn-pumpkin-watercolor62.jpg",cover:""},{default:y(()=>[v(U,{src:g(i(c).image),style:{}},null,8,["src"])]),_:1}),v(q,{class:"pb-1"},{default:y(()=>[S("div",de,I(i(c).title),1),S("div",_e,I(H(i(c).brand)),1),S("div",me,"$"+I(i(c).regular_price.value.toFixed(2)),1)]),_:1}),l.item.type!=="simple"?(f(),h("div",ve,[v(ee,null,{default:y(()=>[i(_)?(f(),h("div",fe,[v(d,{onOnClickAct:a,productVariantSelected:i(C)},null,8,["productVariantSelected"]),v(V,{item:i(c),onUpdateImage:r,onVariantSelected:o},null,8,["item"])])):P("",!0)]),_:1}),v(Z),v(M,{class:"py-1"},{default:y(()=>[v(D,{onClick:n[0]||(n[0]=E=>_.value=!i(_))},{default:y(()=>[O(I(i(_)?"Свернуть":"Выберите опции"),1)]),_:1})]),_:1})])):(f(),N(d,{key:1,onOnClickAct:a,productVariantSelected:!0}))]),_:2},1040,["class"])]),_:1})])}}});const ke=w(pe,[["__scopeId","data-v-f665aecf"]]);export{ke as default};
