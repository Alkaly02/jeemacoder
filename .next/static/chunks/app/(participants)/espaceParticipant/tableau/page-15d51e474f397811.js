(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{6503:function(e,r,n){Promise.resolve().then(n.bind(n,146))},146:function(e,r,n){"use strict";n.d(r,{default:function(){return c}});var o=n(7437),d=n(2265),t=n(5426),l=e=>{let{content:r,provided:n,snapshot:d}=e;return(0,o.jsx)("div",{ref:n.innerRef,...n.draggableProps,...n.dragHandleProps,className:"bg-white p-4 mb-2 rounded-lg shadow-md border ".concat(d.isDragging?"border-orange bg-blue-50":"border-gray-200"," transition-all duration-300 ease-in-out"),children:(0,o.jsx)("p",{className:"text-gray-800 font-medium",children:r})})},a=n(7476),i=e=>{let{columnId:r,name:n,tasks:d,color:i}=e;return(0,o.jsx)(t.bK,{droppableId:r,children:e=>(0,o.jsxs)("div",{...e.droppableProps,ref:e.innerRef,className:"flex flex-col min-w-[300px] h-full bg-white rounded-lg shadow-lg border border-gray-200",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between p-4 ".concat(i," text-white rounded-t-lg border-b border-opacity-20"),children:[(0,o.jsx)("h2",{className:"font-bold text-xl",children:n}),(0,o.jsx)("button",{className:"p-2 hover:bg-opacity-80 transition duration-300 ease-in-out",children:(0,o.jsx)(a.Ihx,{size:20})})]}),(0,o.jsxs)("div",{className:"flex-1 p-4 overflow-y-auto",children:[d.map((e,r)=>(0,o.jsx)(t._l,{draggableId:e.id,index:r,children:(r,n)=>(0,o.jsx)(l,{content:e.content,provided:r,snapshot:n})},e.id)),e.placeholder]})]})})};let s={todo:{id:"1",name:"Faire",colore:"bg-red-600",items:[{id:"1",content:"T\xe2che 1"},{id:"2",content:"T\xe2che 2"}]},inProgress:{id:"2",name:"En cours",colore:"bg-yellow-600",items:[]},testing:{id:"3",name:"Tester",colore:"bg-blue-600",items:[]},done:{id:"4",name:"Terminer",colore:"bg-green-600",items:[]}};var c=()=>{let[e,r]=(0,d.useState)(s);return(0,o.jsx)(t.Z5,{onDragStart:e=>{let{source:r}=e;console.log("D\xe9placement commenc\xe9 depuis la colonne ".concat(r.droppableId))},onDragEnd:n=>{let{source:o,destination:d}=n;if(!d||o.droppableId===d.droppableId&&o.index===d.index)return;console.log("D\xe9placement termin\xe9. Source: ".concat(o.droppableId," \xe0 Destination: ").concat(d.droppableId));let t=e[o.droppableId],l=e[d.droppableId],a=[...t.items],i=[...l.items],[s]=a.splice(o.index,1);o.droppableId===d.droppableId?(a.splice(d.index,0,s),r({...e,[o.droppableId]:{...t,items:a}})):(i.splice(d.index,0,s),r({...e,[o.droppableId]:{...t,items:a},[d.droppableId]:{...l,items:i}})),console.log("T\xe2che d\xe9plac\xe9e : ".concat(s.id))},children:(0,o.jsx)("div",{className:"flex overflow-x-auto space-x-4 p-6 bg-gray-100 min-h-screen",children:Object.entries(e).map(e=>{let[r,n]=e;return(0,o.jsx)(i,{columnId:r,name:n.name,tasks:n.items,color:n.colore},r)})})})}}},function(e){e.O(0,[956,216,170,971,23,744],function(){return e(e.s=6503)}),_N_E=e.O()}]);