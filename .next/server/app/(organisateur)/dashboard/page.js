(()=>{var e={};e.id=344,e.ids=[344],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6364:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>l}),t(773),t(1067),t(1951),t(6560);var r=t(3191),s=t(8716),o=t(7922),n=t.n(o),i=t(5231),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(a,d);let l=["",{children:["(organisateur)",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,773)),"E:\\Bakeli\\Projet\\JeemaCoder\\app\\jeemacoder-app\\jeemacoder-web\\app\\(organisateur)\\dashboard\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,1067)),"E:\\Bakeli\\Projet\\JeemaCoder\\app\\jeemacoder-app\\jeemacoder-web\\app\\(organisateur)\\dashboard\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1951)),"E:\\Bakeli\\Projet\\JeemaCoder\\app\\jeemacoder-app\\jeemacoder-web\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,6560)),"E:\\Bakeli\\Projet\\JeemaCoder\\app\\jeemacoder-app\\jeemacoder-web\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\Bakeli\\Projet\\JeemaCoder\\app\\jeemacoder-app\\jeemacoder-web\\app\\(organisateur)\\dashboard\\page.tsx"],x="/(organisateur)/dashboard/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(organisateur)/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4889:(e,a,t)=>{Promise.resolve().then(t.bind(t,8051))},8051:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>j});var r=t(326),s=t(2941),o=t(7577);let n=[{id:1,nom:"Jemacoder",organisateur:"Volkeno",responsable:"Moussa Alkaly",lieu:"en ligne",date_debut:"12-07-2024",date_fin:"15-07-2024",etat:"inscription en cours"},{id:2,nom:"Jemacoder",organisateur:"Volkeno",responsable:"Ibn Fadilou",lieu:"Bambey",date_debut:"12-07-2024",date_fin:"15-07-2024",etat:"inscription en cours"}],i=["ID","Nom","Organisateur","Responsable","Lieu","Date d\xe9but","Date fin","Etat"],d=()=>(0,r.jsxs)("div",{className:"container px-4 my-4 flex flex-col",children:[r.jsx("h1",{className:"text-xl my-4 ",children:"Liste des hackathons"}),r.jsx(l,{data:n,headers:i})]}),l=({data:e,headers:a})=>r.jsx("div",{className:"overflow-x-auto flex justify-center w-full max-w-4xl",children:(0,r.jsxs)("table",{className:"min-w-full bg-white max-md:flex ",children:[r.jsx("thead",{children:r.jsx("tr",{className:"bg-gray-foreground text-xs leading-tight max-md:flex max-md:flex-col",children:a.map((e,a)=>r.jsx("th",{className:"py-3 max-md:py-4 px-4 text-left",children:e},a))})}),r.jsx("tbody",{className:"text-gray-600 text-xs font-light max-md:flex",children:e.map((e,a)=>r.jsx("tr",{className:"border-b border-gray-200 hover:bg-gray-100 max-md:flex max-md:flex-col",children:Object.values(e).map((e,a)=>r.jsx("td",{className:"py-4 px-4 text-left max-sm:py-3",children:e},a))},a))})]})});var c=t(8217),x=t(5834),p=t(6812),m=t(8993),u=t(4412),h=t(1241),g=t(9338);function j(){let e=(0,g.K)(),[a,t]=(0,o.useState)(!1),{data:n,isLoading:i,isError:l}=(0,u.a)({queryFn:async()=>{if(e&&e.id)return await (0,m.JP)(e.id);throw Error("User ID is undefined or user is undefined")},queryKey:["hackathons"],enabled:!!e?.id});return(0,r.jsxs)("div",{className:"min-w-full h-full overflow-y-auto rounded-lg border-muted-foreground bg-white max-sm:border-none",children:[(0,r.jsxs)("div",{className:"w-full h-5 px-5 py-8 flex justify-between items-center max-sm:flex-col max-sm:py-1 max-md:px-1",children:[(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-sm",children:"Dashboard"}),r.jsx("p",{className:"text-xs text-[#636364]",children:" Ici vous avez une vue g\xe9n\xe9rale de vos Hackathons "})]}),r.jsx(s.z,{href:"/createNewHackathon",types:"link",size:"small",className:"border bg-[#F47E11] text-white text-sm",children:"Nouveau hackathon"})]}),(0,r.jsxs)("div",{className:"flex gap-6 px-5 py-10 max-xl:grid max-xl:grid-cols-1",children:[(0,r.jsxs)("div",{className:"w-80 b-0 pt-5",children:[r.jsx("h1",{className:"text-sm",children:"Ajouter"}),r.jsx("p",{className:"text-xs text-[#636364]",children:"Ajoutez un nouveau hackathon, personnalisez-le et offrez \xe0 vos participants une exp\xe9rience unique."}),r.jsx("div",{className:"pt-5 flex items-center gap-2 font-semibold",children:(0,r.jsxs)(s.z,{types:"button",size:"small",href:"",className:"text-sm text-foreground-green",children:[r.jsx(p.SPS,{}),"Ajouter"]})})]}),(0,r.jsxs)("div",{children:[i?r.jsx(h.c,{}):r.jsx(x.H,{items:n?n.slice(0,2):[],resourcename:"hackathonCard",component:c.u,className:"flex gap-3 max-md:grid max-md:grid-cols-1"}),l&&r.jsx("div",{children:"Fetching data failed"})]})]}),r.jsx(d,{})]})}},773:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var r=t(8570);let s=(0,r.createProxy)(String.raw`E:\Bakeli\Projet\JeemaCoder\app\jeemacoder-app\jeemacoder-web\app\(organisateur)\dashboard\page.tsx`),{__esModule:o,$$typeof:n}=s;s.default;let i=(0,r.createProxy)(String.raw`E:\Bakeli\Projet\JeemaCoder\app\jeemacoder-app\jeemacoder-web\app\(organisateur)\dashboard\page.tsx#default`)}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[948,151,48,224,412,812,736],()=>t(6364));module.exports=r})();