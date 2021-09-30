(this["webpackJsonpcovid-tracker-react-capstone"]=this["webpackJsonpcovid-tracker-react-capstone"]||[]).push([[0],{20:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(14),s=c.n(r),i=c(9),o=c(15),d=c(22),l=c(18),j=c.n(l),h=c(23),b={getStatsByDate:function(){return Object(h.a)(j.a.mark((function e(){var t,c,n,a,r,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,c=t.getFullYear(),n=t.getMonth(),a=t.getDate(),r="".concat(c,"-").concat(n,"-").concat(a),e.next=7,fetch("".concat("https://api.covid19tracking.narrativa.com/api","/").concat(r));case 7:return s=e.sent,e.next=10,s.json();case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})))()}},u="GET_COVID_STAT",x=[],O=function(){return function(e){b.getStatsByDate().then((function(t){var c;e((c=Object.entries(t.dates[t.total.date].countries),{type:u,payload:c}))}))}},f="FILTER_STATS_BY_LOCATION",m={value:"all",data:[],filtered:[]},y=function(e,t){return"all"===t?e:"0"===t?e.filter((function(e){return e[1].today_new_confirmed>=0&&e[1].today_new_confirmed<=100})):"101"===t?e.filter((function(e){return e[1].today_new_confirmed>=101&&e[1].today_new_confirmed<=500})):"501"===t?e.filter((function(e){return e[1].today_new_confirmed>=501&&e[1].today_new_confirmed<=1e3})):e.filter((function(e){return e[1].today_new_confirmed>=1001}))},p="FILTER_COVID_STATS",v=[],_=Object(o.b)({covidData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type===u?t.payload.filter((function(e){return 0!==e[1].today_new_confirmed})):e},filteredData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===p?t.payload:e},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return t.type===f?{value:t.payload.value,data:t.payload.data,filtered:y(t.payload.data,t.payload.value)}:e}}),w=Object(o.c)(_,Object(o.a)(d.a)),N=(c(20),c(10)),g=c(4),S=c(1),T=function(){var e=Object(g.g)(),t=Object(g.f)();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("nav",{className:"nav d-flex justify-content-between align-items-center",children:["/details"===e.pathname?Object(S.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){return t.goBack()},children:"Home"}):Object(S.jsx)("div",{}),Object(S.jsx)("h3",{className:"text-white",children:"COVID19 STATS"}),Object(S.jsx)("div",{})]})})},E=c(25),C=c(26),D=function(e){var t=e.country,c=e.newConfirmed;return Object(S.jsxs)("div",{className:"covid-comp px-2 pt-2",children:[Object(S.jsx)("div",{className:"more-icon",children:Object(S.jsx)(N.b,{to:{pathname:"/details",search:"country=".concat(t)},className:"text-white",children:Object(S.jsx)(E.a,{icon:C.a})})}),Object(S.jsxs)("div",{className:"covid-comp-p pt-4 text-center",children:[Object(S.jsx)(N.b,{to:{pathname:"/details",search:"country=".concat(t)},children:t}),Object(S.jsx)("p",{children:c})]})]},t)},A=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.covidData})),c=Object(i.c)((function(e){return e.countries}));Object(n.useEffect)((function(){0===t.length&&e(O())}),[]);var a=function(c){var n;e((n={value:c.target.value,data:t},{type:f,payload:n}))},r=0===c.filtered.length?t:c.filtered,s=Math.round(Math.random()*r.length);return Object(S.jsx)("main",{children:Object(S.jsxs)("div",{className:"",children:[0===r.length?null:Object(S.jsxs)("div",{className:"hero",children:[Object(S.jsx)("div",{className:"align--items-center"}),Object(S.jsxs)("div",{className:"hero-section text-white text-center",children:[Object(S.jsx)(N.b,{to:{pathname:"/details",search:"country=".concat(r[s][0])},className:"text-white text-uppercase text-decoration-none text-center",children:r[s][0]}),Object(S.jsx)("p",{className:"font-weight-bolder text-center mt-2",children:"".concat(r[s][1].today_new_confirmed," Recently confirmed")})]})]}),0===r.length?null:Object(S.jsxs)("div",{className:"search-page my-background d-flex justify-content-between align-content-center",children:[Object(S.jsx)("p",{className:"text-white font-weight-bolder",children:"Search Filter"}),Object(S.jsxs)("select",{value:c.value,onChange:function(e){return a(e)},className:"border select-box my-background text-white",children:[Object(S.jsx)("option",{value:"all",className:"text-info",children:"filter by no_of_cases"}),Object(S.jsx)("option",{value:"0",children:"0 - 100"}),Object(S.jsx)("option",{value:"101",children:"101 - 500"}),Object(S.jsx)("option",{value:"501",children:"501 - 1000"}),Object(S.jsx)("option",{value:"1000",children:"1000+"})]})]}),Object(S.jsx)("div",{className:"d-flex flex-wrap",children:r.map((function(e){return Object(S.jsx)(D,{country:e[0],newConfirmed:e[1].today_new_confirmed},e[0])}))})]})})},k=function(){var e,t=Object(i.b)(),c=new URLSearchParams(Object(g.g)().search).get("country"),n=Object(i.c)((function(e){return e.covidData})).filter((function(e){return e[0]===c}));0!==n.length&&t((e={country:n[0][1].name,today_vs_yesterday:n[0][1].today_vs_yesterday_confirmed,today_confirmed:n[0][1].today_confirmed,today_recovered:n[0][1].today_recovered,today_deaths:n[0][1].today_deaths,today_open_cases:n[0][1].today_open_cases,today_new_cases:n[0][1].today_new_confirmed,today_new_recovered:n[0][1].today_new_recovered,today_new_deaths:n[0][1].today_new_deaths,today_new_open_cases:n[0][1].today_new_open_cases},{type:p,payload:e}));var a=Object(i.c)((function(e){return e.filteredData}));return Object(S.jsxs)("main",{children:[Object(S.jsx)("div",{className:"details-hero",children:Object(S.jsx)("div",{className:"",children:Object(S.jsx)("h2",{className:"text-white ps-3 font-xlg text-uppercase mt-3",children:c})})}),0===Object.keys(a).length?Object(S.jsx)("div",{className:"no-result text-center",children:"No Result"}):Object(S.jsxs)("div",{className:"details-stat",children:[Object(S.jsx)("div",{className:"",children:Object(S.jsx)("p",{className:"font-lg ps-3 mb-2 text-white text-info",children:"Today in ".concat(c)})}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:"country-item d-flex justify-content-between",children:[Object(S.jsx)("p",{className:"",children:"TODAY".concat(String.fromCharCode(39),"S NEW CONFIRMED")}),Object(S.jsx)("p",{children:a.today_new_cases})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TODAY".concat(String.fromCharCode(39),"S NEW RECOVERED")}),Object(S.jsx)("p",{children:a.today_new_recovered})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TODAY".concat(String.fromCharCode(39),"S NEW DEATHS")}),Object(S.jsx)("p",{children:a.today_new_deaths})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TODAY".concat(String.fromCharCode(39),"S NEW OPEN CASES")}),Object(S.jsx)("p",{children:a.today_new_deaths})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TOTAL CASES"}),Object(S.jsx)("p",{children:a.today_confirmed})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TOTAL RECOVERED"}),Object(S.jsx)("p",{children:a.today_recovered})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TOTAL DEATHS"}),Object(S.jsx)("p",{children:a.today_deaths})]}),Object(S.jsxs)("div",{className:"country-item  d-flex justify-content-between",children:[Object(S.jsx)("p",{children:"TOTAL OPEN CASES"}),Object(S.jsx)("p",{children:a.today_open_cases})]})]})]})]})};var R=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(N.a,{children:[Object(S.jsx)(T,{}),Object(S.jsxs)(g.c,{children:[Object(S.jsx)(g.a,{exact:!0,path:"/",children:Object(S.jsx)(A,{})}),Object(S.jsx)(g.a,{path:"/details",children:Object(S.jsx)(k,{})})]})]})})};c(44);s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(i.a,{store:w,children:Object(S.jsx)(R,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.aa8b12d6.chunk.js.map