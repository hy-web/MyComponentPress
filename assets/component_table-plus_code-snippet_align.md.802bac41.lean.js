import{a as p}from"./chunks/axios.bff3f665.js";import{o,c as e,a as s,e as t,b as a,d as c,T as r}from"./app.0a512f5c.js";const D=s("h1",{id:"演练场",tabindex:"-1"},[a("演练场 "),s("a",{class:"header-anchor",href:"#演练场","aria-hidden":"true"},"#")],-1),F=s("p",null,[a("当前演示的组件： "),s("code",null,"table-plus")],-1),y=s("p",null,[a("当前演示的属性： "),s("code",null,"align")],-1),i=s("h2",{id:"组件演示",tabindex:"-1"},[a("组件演示 "),s("a",{class:"header-anchor",href:"#组件演示","aria-hidden":"true"},"#")],-1),C={class:"vp-raw"},A=c("",2),_=JSON.parse('{"title":"演练场","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件演示","slug":"组件演示","link":"#组件演示","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}],"relativePath":"component/table-plus/code-snippet/align.md","lastUpdated":null}'),u={name:"component/table-plus/code-snippet/align.md"},g=Object.assign(u,{setup(b){const n={api:async()=>{const{data:l}=await p.get("https://hy-web.github.io/MyComponentPress/json/table-plus/table-plus1.json");return l},columns:[{title:"表头、内容居左测试",dataKey:"a",align:"left"},{title:"表头、内容居中测试",dataKey:"b",align:"center"},{title:"表头、内容居右测试",dataKey:"c",align:"right"}]};return(l,d)=>(o(),e("div",null,[D,F,y,i,s("div",C,[t(r,{api:n.api,columns:n.columns},null,8,["api","columns"])]),A]))}});export{_ as __pageData,g as default};
