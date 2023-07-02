"use strict";(self.webpackChunksamplepage=self.webpackChunksamplepage||[]).push([[82],{9082:(m,l,r)=>{r.r(l),r.d(l,{ChartsModule:()=>c});var u=r(6895),t=r(6602),h=r(7834),i=r(8419),a=r(1571),g=r(2362);class s{constructor(){this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.chartBarData={labels:[...this.months].slice(0,7),datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,17,42,79]}]},this.chartLineData={labels:[...this.months].slice(0,7),datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]}]},this.chartLineOptions={maintainAspectRatio:!1},this.chartDoughnutData={labels:["VueJs","EmberJs","ReactJs","Angular"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},this.chartPieData={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},this.chartPolarAreaData={labels:["Red","Green","Yellow","Grey","Blue"],datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"]}]},this.chartRadarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"2020",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2021",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData,this.randomData]}]}}get randomData(){return Math.round(100*Math.random())}}s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-charts"]],decls:43,vars:6,consts:[["xs","12"],["href","charts"],["xs","12","lg","6"],[1,"mb-4"],["type","bar",3,"data"],["type","line",3,"data"],["type","doughnut",3,"data"],["type","pie",3,"data"],["type","polarArea",3,"data"],["type","radar",3,"data"]],template:function(o,n){1&o&&(a.TgZ(0,"c-row")(1,"c-col",0)(2,"app-docs-callout",1),a._uU(3," Angular wrapper component for Chart.js 3.6, the most popular charting library. "),a._UZ(4,"br"),a.qZA()(),a.TgZ(5,"c-col",2)(6,"c-card",3)(7,"c-card-header"),a._uU(8," Bar Chart "),a.qZA(),a.TgZ(9,"c-card-body"),a._UZ(10,"c-chart",4),a.qZA()()(),a.TgZ(11,"c-col",2)(12,"c-card",3)(13,"c-card-header"),a._uU(14," Line Chart "),a.qZA(),a.TgZ(15,"c-card-body"),a._UZ(16,"c-chart",5),a.qZA()()()(),a.TgZ(17,"c-row")(18,"c-col",2)(19,"c-card",3)(20,"c-card-header"),a._uU(21," Doughnut Chart "),a.qZA(),a.TgZ(22,"c-card-body"),a._UZ(23,"c-chart",6),a.qZA()()(),a.TgZ(24,"c-col",2)(25,"c-card",3)(26,"c-card-header"),a._uU(27," Pie Chart "),a.qZA(),a.TgZ(28,"c-card-body"),a._UZ(29,"c-chart",7),a.qZA()()()(),a.TgZ(30,"c-row")(31,"c-col",2)(32,"c-card",3)(33,"c-card-header"),a._uU(34," Polar Area Chart "),a.qZA(),a.TgZ(35,"c-card-body"),a._UZ(36,"c-chart",8),a.qZA()()(),a.TgZ(37,"c-col",2)(38,"c-card",3)(39,"c-card-header"),a._uU(40," Radar Chart "),a.qZA(),a.TgZ(41,"c-card-body"),a._UZ(42,"c-chart",9),a.qZA()()()()),2&o&&(a.xp6(10),a.Q6J("data",n.chartBarData),a.xp6(6),a.Q6J("data",n.chartLineData),a.xp6(7),a.Q6J("data",n.chartDoughnutData),a.xp6(6),a.Q6J("data",n.chartPieData),a.xp6(7),a.Q6J("data",n.chartPolarAreaData),a.xp6(6),a.Q6J("data",n.chartRadarData))},dependencies:[h.d,t.AkF,t.yue,t.nkx,t.iok,t.Yp0,g.G]});const p=[{path:"",component:s,data:{title:"Charts"}}];class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[i.Bz.forChild(p),i.Bz]});var C=r(7642);class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=a.oAB({type:c}),c.\u0275inj=a.cJS({imports:[u.ez,d,h.N,t.dTQ,t.zE6,t.TXv,C.E]})}}]);