import{C as e}from"./index-97831974.js";import{G as C}from"./tool-4bde39df.js";const d={ECB:e.mode.ECB,CBC:e.mode.CBC,CTR:e.mode.CTR,OFB:e.mode.OFB,CFB:e.mode.CFB},E=Object.keys(d),o={Pkcs7:e.pad.Pkcs7,Iso97971:e.pad.Iso97971,AnsiX923:e.pad.AnsiX923,Iso10126:e.pad.Iso10126,ZeroPadding:e.pad.ZeroPadding,NoPadding:e.pad.NoPadding},m=Object.keys(o),y={128:128,192:192,256:256},u=Object.keys(y),i=(t,r="",s=0,n=!0)=>{if(!n&&r.length===0)throw new Error(`[${t}] required`);if(s===0||r.length===s)return e.enc.Utf8.parse(r);if(r.length>s)return e.enc.Utf8.parse(r.substring(0,s));if(!n)throw new Error(`[${t}] length !== ${s}`);return e.enc.Utf8.parse(C.padEnd(r,s,"\0"))},l={encrypt:(t,{key:r,iv:s="",mode:n="CBC",key_size:p="128",padding:a="Pkcs7",type:c="simple",fill:B=!0})=>c==="simple"?e.AES.encrypt(e.enc.Base64.parse(t),r).toString():e.AES.encrypt(e.enc.Base64.parse(t),i("key",r,y[p]/8),{mode:d[n],padding:o[a],...n==="ECB"?{}:{iv:i("iv",s,16,B)}}).toString(),decrypt:(t,{key:r,iv:s="",mode:n="CBC",key_size:p="128",padding:a="Pkcs7",type:c="simple",fill:B=!0})=>c==="simple"?e.AES.decrypt(t,r).toString(e.enc.Base64):e.AES.decrypt(t,i("key",r,y[p]/8),{mode:d[n],padding:o[a],...n==="ECB"?{}:{iv:i("iv",s,16,B)}}).toString(e.enc.Base64)},f={encrypt:(t,{key:r,iv:s="",mode:n="CBC",padding:p="Pkcs7",type:a="simple",fill:c=!0})=>a==="simple"?e.DES.encrypt(e.enc.Base64.parse(t),r).toString():e.DES.encrypt(e.enc.Base64.parse(t),i("key",r,8),{mode:d[n],padding:o[p],...n==="ECB"?{}:{iv:i("iv",s,8,c)}}).toString(),decrypt:(t,{key:r,iv:s="",mode:n="CBC",padding:p="Pkcs7",type:a="simple",fill:c=!0})=>a==="simple"?e.DES.decrypt(t,r).toString(e.enc.Base64):e.DES.decrypt(t,i("key",r,8),{mode:d[n],padding:o[p],...n==="ECB"?{}:{iv:i("iv",s,8,c)}}).toString(e.enc.Base64)},k={encrypt:(t,{key:r,iv:s="",mode:n="CBC",padding:p="Pkcs7",type:a="simple",fill:c=!0})=>a==="simple"?e.TripleDES.encrypt(e.enc.Base64.parse(t),r).toString():e.TripleDES.encrypt(e.enc.Base64.parse(t),i("key",r),{mode:d[n],padding:o[p],...n==="ECB"?{}:{iv:i("iv",s,8,c)}}).toString(),decrypt:(t,{key:r,iv:s="",mode:n="CBC",padding:p="Pkcs7",type:a="simple",fill:c=!0})=>a==="simple"?e.TripleDES.decrypt(t,r).toString(e.enc.Base64):e.TripleDES.decrypt(t,i("key",r),{mode:d[n],padding:o[p],...n==="ECB"?{}:{iv:i("iv",s,8,c)}}).toString(e.enc.Base64)},v={encrypt:(t,{key:r})=>e.RC4.encrypt(e.enc.Base64.parse(t),r).toString(),decrypt:(t,{key:r})=>e.RC4.decrypt(t,r).toString(e.enc.Base64)},P={encrypt:(t,{key:r})=>e.Rabbit.encrypt(e.enc.Base64.parse(t),r).toString(),decrypt:(t,{key:r})=>e.Rabbit.decrypt(t,r).toString(e.enc.Base64)};export{l as a,P as b,f as d,u as k,E as m,m as p,v as r,k as t};
