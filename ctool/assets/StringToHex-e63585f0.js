import{u as _,i as f}from"./action-cd384d03.js";import{d as g,y as h,r as a,c as T,w as r,f as V,v as i,j as n,C as w,E as v}from"./tool-4bde39df.js";import"./modulepreload-polyfill-3cfb730f.js";const I=g({__name:"StringToHex",async setup(C){let o,l;const t=_(([o,l]=h(()=>f({input:w("text"),output:v("hex")})),o=await o,l(),o));return(A,e)=>{const s=a("TextInput"),p=a("TextOutput"),c=a("Align"),m=a("HeightResize");return V(),T(m,{reduce:5},{default:r(({small:d,large:x})=>[i(c,{direction:"vertical"},{default:r(()=>[i(s,{allow:["text","base64","url","upload"],modelValue:n(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=u=>n(t).current.input=u),height:d,upload:"file",encoding:""},null,8,["modelValue","height"]),i(p,{modelValue:n(t).current.output,"onUpdate:modelValue":e[1]||(e[1]=u=>n(t).current.output=u),allow:["hex"],content:n(t).current.input.text,height:x,onSuccess:e[2]||(e[2]=u=>n(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1})}}});export{I as default};
