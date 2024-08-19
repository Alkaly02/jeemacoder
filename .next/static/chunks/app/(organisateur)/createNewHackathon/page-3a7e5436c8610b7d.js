(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{4741:function(e,a,t){Promise.resolve().then(t.bind(t,3416))},3416:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var r=t(7437),l=t(5942),n=t(5524),s=t(2265),d=t(4839),o=t(6463),i=t(7690),u=t(8184),c=t(9704);let p=null;function h(){let e=new Date(Date.now()),a=JSON.stringify("".concat(e.getDate(),"-0").concat(e.getMonth(),"-").concat(e.getFullYear())),[t,d]=(0,s.useState)({name:"",date_debut:a,heure_debut:"08:00",heure_fin:"20:00",date_fin:a,date_limite:"2024-07-02",slogan:"",lieu:"",prix:"",structure_organisateur:"",logo_url:"",theme:"",description:""}),[h,m]=(0,s.useState)("une description de votre hackathon"),[f,g]=(0,s.useState)("vert"),[b,j]=(0,s.useState)(null),[v,N]=(0,s.useState)(null),_=(0,o.useRouter)(),y=(0,n.D)({mutationFn:async e=>{let a=await fetch("https://api.jeemacoder.fewnu.app/api/hackathons/create",{method:"POST",headers:{Authorization:"Bearer ".concat(p)},body:e});if(!a.ok)throw Error("Failed to create hackathon");return a.ok&&_.replace("dashboard"),a.json()}}),w=e=>{let a=e.currentTarget;d({...t,[a.id]:a.value})},[k,C]=(0,s.useState)(!1),z=()=>{C(!k)};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"max-w-4xl m-auto my-1 p-10 rounded-md border",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{onClick:z,className:"border cursor-pointer flex items-center gap-2 max-w-32 py-1 rounded-md justify-center",children:[(0,r.jsx)(i.Z,{className:"stroke-1 size-3"})," ",(0,r.jsx)("span",{children:"Retour"})]}),(0,r.jsx)("p",{className:"py-5 text-4xl text-dark font-normal",children:"Commencez \xe0 cr\xe9er votre hackathon"}),v&&(0,r.jsx)("div",{className:"text-red-500 mb-4",children:v}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),N(null);let a=new FormData;a.append("name",t.name),a.append("date_debut",t.date_debut),a.append("date_fin",t.date_fin),a.append("date_limite",t.date_limite),a.append("heure_debut",t.heure_debut),a.append("heure_fin",t.heure_fin),a.append("lieu",t.lieu),a.append("structure_organisateur",t.structure_organisateur),a.append("prix",t.prix),a.append("description",h),a.append("slogan",t.slogan),a.append("theme",f),a.append("status","ouvert"),b&&a.append("logo_url",b),y.mutate(a)},className:"flex flex-col gap-5 pb-20",children:[(0,r.jsxs)("label",{htmlFor:"logo_url",className:"mb-2 text-sm font-semibold flex flex-col gap-2 items-center border rounded-md max-w-xs py-5 border-white",children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)("p",{children:["Ajouter votre logo ",null==b?void 0:b.name]})]}),(0,r.jsx)("input",{placeholder:"nom",type:"file",accept:".jpg,.png,.svg",id:"logo_url",onChange:e=>{e.target.files&&e.target.files.length>0&&j(e.target.files[0])},className:"hidden"}),(0,r.jsxs)("div",{className:"space-y-4 w-full",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(x,{id:"name",value:t.name,onChange:w,placeholder:"ex : Jeemacoder 2024",label:"Entrez le nom de votre hackathon",className:"px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"}),(0,r.jsx)(x,{id:"slogan",value:t.slogan,onChange:w,placeholder:"Entrez votre slogan",label:"Entrez votre slogan"}),(0,r.jsx)(x,{id:"structure_organisateur",value:t.structure_organisateur,onChange:w,placeholder:"ex: le defi a relever",label:"Nom de l'organisateur",className:"w-full"}),(0,r.jsx)(x,{id:"lieu",value:t.lieu,onChange:w,placeholder:"Entrez le lieu",label:"Lieu"})]}),(0,r.jsx)("p",{className:"py-3 text-dark",children:"Information sur les dates et les horaires du d\xe9roulement de l'hackathon"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsx)(x,{type:"date",id:"date_debut",value:t.date_debut,onChange:w,placeholder:"ex: 2024-05-22",label:"Date de d\xe9marrage"}),(0,r.jsx)(x,{type:"time",id:"heure_debut",value:t.heure_debut,onChange:w,placeholder:"ex: 2024-05-22",label:"Heure de d\xe9marrage"}),(0,r.jsx)(x,{type:"date",id:"date_fin",value:t.date_fin,onChange:w,placeholder:"ex: 2024-05-22",label:"Date de fin"}),(0,r.jsx)(x,{type:"time",id:"heure_fin",value:t.heure_fin,onChange:w,placeholder:"ex: 2024-05-22",label:"Heure de fin"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"py-3 text-[#F47E11]",children:"Description : mettez une description d\xe9taill\xe9e de ce que sera votre hackathon"}),(0,r.jsx)("textarea",{placeholder:"Description",id:"description",value:h,onChange:e=>m(e.target.value),rows:5,className:"w-full text-dark outline-none border rounded-lg p-3 bg-transparent focus:border-[#F47E11]"})]}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(x,{type:"date",id:"date_limite",value:t.date_limite,onChange:w,placeholder:"ex: 2024-05-22",label:"Date limite des inscriptions - apr\xe8s cette date toute inscription sera interdite",className:"max-w-[300px]"})}),(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)(x,{id:"prix",value:t.prix,onChange:w,label:"Prix",placeholder:"ex : finance"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{children:"Th\xe8me"}),(0,r.jsxs)("select",{title:"theme",className:"w-40 px-4 py-2 outline-none",value:f,onChange:e=>g(e.target.value),children:[(0,r.jsx)("option",{value:"orange",children:"orange"}),(0,r.jsx)("option",{value:"vert",children:"vert"}),(0,r.jsx)("option",{value:"neutre",children:"neutre"})]})]})]})]}),(0,r.jsx)("div",{className:"w-32 float-left mt-10",children:(0,r.jsx)(l.z,{type:"submit",className:"",children:"Create"})})]})]}),(0,r.jsx)("div",{})]}),(0,r.jsx)(c.u,{onClose:z,showModal:k,className:"pt-10",children:(0,r.jsx)(c.H,{onClose:z,href:"/dashboard"})})]})}p=localStorage.getItem("authToken");let x=e=>{let{id:a,type:t="text",value:l,placeholder:n,className:s,label:o,required:i,onChange:u}=e;return(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,r.jsx)("label",{className:"translate-x-3 text-sm",children:o}),(0,r.jsx)("input",{type:t,id:a,value:l,required:i,placeholder:n,onChange:u,className:(0,d.Z)("outline-none px-3 py-2 text-dark rounded-md w-60 text-xs border bg-transparent focus:border-dark",{className:s})})]})}},9893:function(e,a,t){"use strict";t.d(a,{z:function(){return s}});var r=t(7437),l=t(4839),n=t(7138);t(2265);let s=e=>{let{className:a,variant:t="default",size:s,types:d,href:o,...i}=e;return"button"===d?(0,r.jsx)("button",{className:(0,l.Z)({"border rounded-md":"default"===t,"m-auto border rounded-full":"rounded"===t,"px-3 py-1 bg-red-500":"danger"===t,"px-8 py-3":"large"===s,"px-3 py-1 flex gap-3 items-center":"small"===s},a),...i,children:i.children}):o&&(0,r.jsx)(n.default,{href:o,className:(0,l.Z)({"border rounded-md":"default"===t,"border rounded-full":"rounded"===t,"":"grounded"===t,"":"danger"===t,"px-8 py-3":"large"===s,"px-3 py-1 flex gap-3 items-center text-sm max-w-80":"small"===s},a),children:i.children})}},5942:function(e,a,t){"use strict";t.d(a,{z:function(){return n}});var r=t(7437),l=t(4839);t(2265);let n=e=>{let{className:a,variant:t="default",...n}=e;return(0,r.jsx)("button",{className:(0,l.Z)({"m-auto rounded-md py-2 w-full bg-dark text-white text-sm hover:bg-dark-green-hover":"default"===t,"":"rounded"===t},a),...n,children:n.children})}},9704:function(e,a,t){"use strict";t.d(a,{H:function(){return d},u:function(){return s}});var r=t(7437),l=t(4839),n=t(9893);let s=e=>{let{showModal:a,onClose:t,children:n,className:s}=e;return a?(0,r.jsx)("div",{className:(0,l.Z)(" absolute z-10 w-full h-screen flex justify-center overflow-auto backdrop-blur-sm left-0 right-0 top-0",s),onClick:t,children:(0,r.jsx)("div",{className:"",onClick:e=>e.stopPropagation(),children:n})}):null},d=e=>{let{onClose:a,href:t}=e;return(0,r.jsxs)("div",{className:"max-w-xl rounded-md px-9 py-3 flex flex-col gap-5 bg-white transition-all shadow-md",children:[(0,r.jsx)("p",{children:" voulez voulez quitter cette page ? "}),(0,r.jsxs)("div",{className:"flex gap-2 justify-around",children:[(0,r.jsx)(n.z,{href:t,types:"link",size:"small",className:"text-dark border",children:" continuer "}),(0,r.jsx)(n.z,{onClick:a,types:"button",size:"small",className:"text-dark border",children:" annuler "})]})]})}}},function(e){e.O(0,[138,735,971,23,744],function(){return e(e.s=4741)}),_N_E=e.O()}]);