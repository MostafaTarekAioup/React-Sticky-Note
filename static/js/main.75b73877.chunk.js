(this["webpackJsonpreact-projects"]=this["webpackJsonpreact-projects"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(9),r=c.n(i),l=(c(16),c(17),c(10)),o=c(4),u=c(3);c(8);var j=function(e){var t=e.msg,c=e.type,a=e.setAlertComponent;return Object(s.useEffect)((function(){var e=setTimeout((function(){a(!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("h4",{className:"alertshow ".concat(c),children:t})})},b=c(2),d=c.p+"static/media/note.d2dff947.png";var O=function(e){var t=e.id,c=e.title,s=e.DeleteItem,a=e.editHandler;return Object(n.jsx)("div",{className:"itemcontainer",children:Object(n.jsxs)("div",{className:"todoitem",children:[Object(n.jsx)("img",{src:d,alt:""}),Object(n.jsx)("p",{id:t,children:c}),Object(n.jsxs)("div",{className:"btnContainer",children:[Object(n.jsx)("button",{className:"btn2",onClick:function(){return a(t)},children:Object(n.jsx)(b.e,{className:"edit"})}),Object(n.jsx)("button",{onClick:function(){return s(t)},className:"btn2",children:Object(n.jsx)(b.a,{className:"delet"})})]})]})},t)},m=function(){return localStorage.getItem("dolist")?JSON.parse(localStorage.getItem("dolist")):[]};var p=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(m),r=Object(u.a)(i,2),b=r[0],d=r[1],p=Object(s.useState)(!1),f=Object(u.a)(p,2),h=f[0],x=f[1],g=Object(s.useState)(null),v=Object(u.a)(g,2),S=v[0],N=v[1],k=Object(s.useState)({show:!1,msg:"",type:""}),C=Object(u.a)(k,2),y=C[0],I=C[1],w=function(e){var t=b.filter((function(t){return t.id!==e}));d(t),A(!0,"Item removed","danger")},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";I({show:e,msg:t,type:c})},D=function(e){var t=b.find((function(t){return t.id===e}));x(!0),N(e),a(t.title)};return Object(s.useEffect)((function(){localStorage.setItem("dolist",JSON.stringify(b))}),[b]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsx)("h4",{className:"header",children:"Sticky Note"}),Object(n.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),console.log("hellow"),c)if(c&&h)d(b.map((function(e){return e.id===S?Object(o.a)(Object(o.a)({},e),{},{title:c}):e}))),a(""),x(!1),N(null),A(!0,"Eddit successfully","success");else{var t={id:(new Date).getTime().toString(),title:c};d([].concat(Object(l.a)(b),[t])),A(!0,"Item added","success"),a("")}else A(!0,"Please Add Somthing","danger")},children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("input",{placeholder:"e.g.back a cake",type:"text",maxLength:"60",value:c,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("button",{type:"submit",className:"btn",children:h?"edit":"supmit"})]})}),Object(n.jsx)("div",{className:"clearAll",children:Object(n.jsx)("button",{onClick:function(){return d([])},className:"btn",children:"Clear All"})}),y.show&&Object(n.jsx)(j,Object(o.a)(Object(o.a)({},y),{},{setAlertComponent:A}))]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"todolist-container",children:b.map((function(e){return Object(n.jsx)(O,Object(o.a)(Object(o.a)({},e),{},{DeleteItem:w,editHandler:D}))}))})]})};var f=function(){return Object(n.jsx)("main",{children:Object(n.jsx)(p,{})})},h=[{page:"products",links:[{label:"payment",icon:Object(n.jsx)(b.d,{}),url:"/products"},{label:"terminal",icon:Object(n.jsx)(b.d,{}),url:"/products"},{label:"connect",icon:Object(n.jsx)(b.d,{}),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:Object(n.jsx)(b.b,{}),url:"/products"},{label:"libraries",icon:Object(n.jsx)(b.b,{}),url:"/products"},{label:"help",icon:Object(n.jsx)(b.b,{}),url:"/products"},{label:"billing",icon:Object(n.jsx)(b.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(n.jsx)(b.c,{}),url:"/products"},{label:"customers",icon:Object(n.jsx)(b.c,{}),url:"/products"}]}],x=a.a.createContext(),g=function(e){var t=e.children,c=Object(s.useState)(!1),a=Object(u.a)(c,2),i=a[0],r=a[1],l=Object(s.useState)(!1),o=Object(u.a)(l,2),j=o[0],b=o[1],d=Object(s.useState)({}),O=Object(u.a)(d,2),m=O[0],p=O[1],f=Object(s.useState)({page:"",links:[]}),g=Object(u.a)(f,2),v=g[0],S=g[1];return Object(n.jsx)(x.Provider,{value:{isSidebarOpen:i,setIsSidebarOpen:r,isSubmenuOpen:j,setIsSubmenuOpen:b,OpenFunction:function(e,t){var c=h.find((function(t){return t.page===e}));S(c),p(t),b(!0)},location:m,pages:v},children:t})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{children:Object(n.jsx)(f,{})})}),document.getElementById("root")),v()},8:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.75b73877.chunk.js.map