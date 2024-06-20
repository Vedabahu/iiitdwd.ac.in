(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8424],{8931:function(e,t,a){Promise.resolve().then(a.bind(a,1655)),Promise.resolve().then(a.bind(a,912)),Promise.resolve().then(a.bind(a,1481))},1655:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var i=a(7437),n=a(3575);a(2265);var r=a(7138);function s(){return(0,i.jsx)("div",{className:"flex flex-col w-full h-full items-center justify-center grow",children:(0,i.jsxs)("div",{className:"border border-dwd-primary rounded-md flex flex-col items-center justify-center p-8 gap-4",children:[(0,i.jsx)("div",{className:"font-bold text-lg",children:"This page doesn't exist"}),(0,i.jsx)(r.default,{href:"/",className:"bg-accent hover:bg-dwd-secondary2 font-bold px-4 py-2 rounded-md",children:"Home"})]})})}var o=a(6648);function d(e){let{eventId:t}=e,a=n.U.find(e=>e.id==t);return a?(0,i.jsx)(l,{id:a.id,text:a.text,details:a.details,venue:a.venue,organiser:a.organiser,aboutEvent:a.aboutEvent,allImage:a.allImage,href:a.href,timestamp:a.timestamp}):(0,i.jsx)("div",{children:(0,i.jsx)(s,{})})}function l(e){let t=0,a=e=>{let a=document.querySelectorAll(".slide");e>=a.length&&(t=0),e<0&&(t=a.length-1),a.forEach((e,a)=>{e.style.display="none",a===t&&(e.style.display="block")})},n=e=>{a(t+=e)};return setInterval(()=>{a(t+=1)},3e3),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-3xl font-bold text-dwd-primary mx-9 text-center mt-12 mb-0 font-roboto",children:e.text}),(0,i.jsx)("div",{className:"relative max-w-full mx-auto overflow-hidden rounded-lg shadow-lg mt-12",children:(0,i.jsxs)("div",{className:"flex transition-transform duration-500 ease-in-out justify-center items-center",children:[e.allImage.map(e=>(0,i.jsx)(o.default,{width:0,height:0,sizes:"100%",className:"slide w-auto max-w-full h-[50vh] lg:h-[60vh] block box-border",src:e,alt:"Event 1"},e)),(0,i.jsx)("button",{className:"absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 left-2 hover:bg-opacity-80",onClick:()=>n(-1),children:"❮"}),(0,i.jsx)("button",{className:"absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 right-2 hover:bg-opacity-80",onClick:()=>n(1),children:"❯"})]})}),(0,i.jsxs)("div",{className:"px-4 py-4",children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,i.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Details"}),(0,i.jsxs)("p",{children:[" ",e.details.startDate]}),(0,i.jsx)("p",{children:e.details.endDate}),(0,i.jsxs)("p",{children:[" ",e.details.ticketPrice," "]})]}),(0,i.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Organiser"}),(0,i.jsx)("p",{children:e.organiser.name}),(0,i.jsx)("p",{children:e.organiser.designation}),(0,i.jsx)("p",{children:e.organiser.contact})]}),(0,i.jsxs)("div",{className:"bg-gray-200 p-4 rounded-lg shadow-md",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Venue"}),(0,i.jsxs)("p",{children:["Place : ",e.venue.place]}),(0,i.jsxs)("p",{children:[" ",e.venue.street]}),(0,i.jsxs)("p",{children:["City : ",e.venue.city]})]})]}),e.aboutEvent&&(0,i.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md mt-6",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Event Description"}),(0,i.jsx)("p",{children:e.aboutEvent})]})]})]})}},3575:function(e,t,a){"use strict";a.d(t,{U:function(){return i}});let i=[{id:"iiit-sport-event",href:"/images/iiitevent.png",text:"Inter IIIT Sport meet at IIIT Allahabad",timestamp:"06-03-2024",allImage:["/images/iiitevent.png","/images/iiitevent1.png","/images/iiitevent2.png","/images/iiitevent3.png","/images/iiitevent4.png","/images/iiitevent5.png"],details:{startDate:"Start date : 06-03-2024",endDate:"End date : 16-03-2024",ticketPrice:""},venue:{place:"IIIT Allahabad",street:"",city:"Prayagraj"},organiser:{name:"IIIT Allahabad",designation:"",contact:""},aboutEvent:"Inter IIIT, held every four years by IIIT Allahabad, unites athletes from 25 government-funded IIITs in a premier sports competition. Celebrating sportsmanship and fostering lasting bonds, it is a key event in the IIIT community."},{id:"yoga-day",href:"/images/yoga1.jpg",text:"9th International Day of Yoga",timestamp:"21-06-2023",allImage:["/images/yoga1.jpg","/images/yoga2.jpg"],details:{startDate:" Date : 21-06-2023",endDate:"",ticketPrice:""},venue:{place:"IIIT Dharwad",street:"",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"inaugration-of-iiitdwd",href:"/images/inaug.jpg",text:"Inauguration of IIIT Dharwad",timestamp:"26-09-2022",allImage:["/images/inaug.jpg","/images/inaug1.jpg"],details:{startDate:"Date : 26-09-2022",endDate:"",ticketPrice:""},venue:{place:"M Block",street:"Street : IIIT Dharwad Campus",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:"Inaugration of IIIT Dharwad on 26-09-2022"},{id:"blood-donor-day",href:"/images/blooddonor.jpg",text:"World Blood Donor Day 2022",timestamp:"14-06-2022",allImage:["/images/blooddonor.jpg","/images/blooddonor2.jpg"],details:{startDate:" Date : 14-06-2022",endDate:"",ticketPrice:""},venue:{place:"h-block",street:"Street : IIIT Campus",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:"Sir Karl Landsteiners Birthday celebrated as World Blood Donors Day in cordination with Karnataka Cancer Therapy and Research Institute, Navanagar."},{id:"world-environment-day",href:"/images/E1.jpg",text:"World Environment Day 2022",timestamp:"05-06-2022",allImage:["/images/E1.jpg","/images/E2.jpg"],details:{startDate:" Date : 05-06-2022",endDate:"",ticketPrice:""},venue:{place:"IIIT Dharwad",street:"",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"sports-day-2022",href:"/images/sports2022.png",text:"Sports Day 2022",timestamp:"29-04-2022",allImage:["/images/sports2022.png","/images/sports2022-1.png"],details:{startDate:"Start Date : 29-04-2022",endDate:"End Date : 30-04-2022",ticketPrice:""},venue:{place:"M-block",street:"IIIT Campus",city:"Dharwad"},organiser:{name:"Sports Committee",designation:"",contact:""},aboutEvent:" The annual sports event organised by IIIT Dharwad."},{id:"woman-day",href:"/images/W1.jpeg",text:"International Women's Day 2022",timestamp:"08-03-2022",allImage:["/images/W1.jpeg","/images/W2.jpeg"],details:{startDate:" Date : 08-03-2022",endDate:"",ticketPrice:""},venue:{place:"Kanavi Honnapur Hiriya Prathamika Shale",street:"Street : Kanavi Honnapur",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"orientation-program-2022",href:"/images/orientation0.png",text:"Orientation Program 2021-22",timestamp:"22-12-2021",allImage:["/images/orientation0.png","/images/orientation1.jpg"],details:{startDate:"Start Date : 22-12-2021",endDate:"End Date : 24-12-2021",ticketPrice:""},venue:{place:"e-block",street:"IIIT Campus",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"faculty-development-program",href:"/images/fdp.jpg",text:"Faculty Development Program on Smart Cities 2021",timestamp:"08-11-2021",allImage:["/images/fdp.jpg"],details:{startDate:"Start Date : 08-11-2021",endDate:"End Date : 12/11/2021",ticketPrice:""},venue:{place:"e Block, IIIT Dharwad",street:"Street : IIIT Campus",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"fit-india-freedom-run-2.0",href:"/images/fit01.jpg",text:"Fit Indian Freedom Run 2.0",timestamp:"24-09-2021",allImage:["/images/fit01.jpg","/images/fit02.jpg"],details:{startDate:" Date : 24-09-2021",endDate:"",ticketPrice:""},venue:{place:"IIIT Dharwad",street:"",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"Prof-Vittal-Rao",href:"/images/vittalrao.jpg",text:"Special Lecture Series by Prof R Vittal Rao",timestamp:"13-08-2021",allImage:["/images/vittalrao.jpg"],details:{startDate:"Start Date : 13-08-2021",endDate:"End Date : 27-08-2021",ticketPrice:""},venue:{place:"M Block",street:"Street : IIIT Dharwad Campus",city:"Dharwad"},organiser:{name:"",designation:"",contact:""},aboutEvent:'IIIT Dharwad, in association with BITES, hosted two virtual lectures on "The Ultimate Challenge - Some Unsolved Problems in Mathematics" by Prof. R Vittal Rao from IISc, Bengaluru. These lectures were conducted on August 13 and 27, 2021.'},{id:"matribhasha-diwas",href:"/images/diwas.jpg",text:"Matribhasha Diwas",timestamp:"23-02-2021",allImage:["/images/diwas.jpg"],details:{startDate:"Date : 23-02-2021",endDate:"",ticketPrice:""},venue:{place:"e Block, IIIT Dharwad",street:"Street : IIIT Campus",city:"Dharwad"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:""},{id:"HiroyaFujisaki-visit",href:"/images/Prof._HiroyaFujisaki_Visit.jpg",text:"Prof. HiroyaFujisaki visit",timestamp:"17-03-2021",allImage:["/images/Prof._HiroyaFujisaki_Visit.jpg"],details:{startDate:"Date : 17-03-2021",endDate:"",ticketPrice:""},venue:{place:"Conference Room, IIIT Dharwad",street:"Street : IT Park",city:"Hubli"},organiser:{name:"Dr. K T Deepak",designation:"Assistant Professor",contact:"9900456936"},aboutEvent:"Prof. Hiroya Fujisaki, Professor Emeritus at the University of Tokyo visited IIIT Dharwad, 17th March 2018. He had interaction session with faculty members and he gave suggestions on research directions."},{id:"chairperson-visit",href:"/images/Chairperson_Visit.jpg",text:"Chairperson Visit",timestamp:"22-03-2018",allImage:["/images/Chairperson_Visit.jpg"],details:{startDate:"Date : 22-03-2018",endDate:"",ticketPrice:""},venue:{place:"Seminar Hall, IIIT Dharwad",street:"Street : IT Park",city:"Hubli"},organiser:{name:"Prof. Kavi Mahesh",designation:"Director",contact:"8362250879"},aboutEvent:""},{id:"nr-murthy-visit",href:"/images/NR_murthy.jpg",text:"N R Narayana Murthy Visit",timestamp:"03-02-2018",allImage:["/images/NR_murthy.jpg"],details:{startDate:"Date : 03-02-2018",endDate:"",ticketPrice:""},venue:{place:"Seminar Hall, IIIT Dharwad",street:"Street : IT Park",city:"Hubli"},organiser:{name:"IIIT Dharwad",designation:"",contact:""},aboutEvent:"Shri. N R Narayana Murthy, Founder Infosys India Pvt Ltd visited IIIT Dharwad at 11:00 AM, 3rd February 2019. He had discussions with faculty, staff and students. He shared his experience during his Infosys day’s and also gave suggestion on career."}]},6648:function(e,t,a){"use strict";a.d(t,{default:function(){return n.a}});var i=a(5601),n=a.n(i)},7138:function(e,t,a){"use strict";a.d(t,{default:function(){return n.a}});var i=a(231),n=a.n(i)},5601:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return d},getImageProps:function(){return o}});let i=a(9920),n=a(497),r=a(8173),s=i._(a(1241));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let d=r.Image},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let i=a(5592);function n(e){let{reason:t,children:a}=e;if("undefined"==typeof window)throw new i.BailoutToCSRError(t);return a}},1481:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return r}});let i=a(7437),n=a(8512);function r(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let a=(0,n.getExpectedRequestStore)("next/dynamic css"),r=[];if(a.reactLoadableManifest&&t){let e=a.reactLoadableManifest;for(let a of t){if(!e[a])continue;let t=e[a].files.filter(e=>e.endsWith(".css"));r.push(...t)}}return 0===r.length?null:(0,i.jsx)(i.Fragment,{children:r.map(e=>(0,i.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:a.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[8173,231,2971,7023,1744],function(){return e(e.s=8931)}),_N_E=e.O()}]);