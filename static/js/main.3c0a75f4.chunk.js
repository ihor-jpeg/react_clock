(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),u=n.n(r),p=(n(12),n(13),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e.interval=setInterval((function(){e.setState({date:new Date})}),1e3),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){return this.interval}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&console.log(this.props.name)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return console.log(this.state.date.toLocaleTimeString()),Object(p.jsxs)(p.Fragment,{children:[this.props.name&&Object(p.jsx)("h2",{children:'"'.concat(this.props.name,'"')}),Object(p.jsxs)("div",{className:"clock",children:[Object(p.jsx)("p",{children:"Current time:"}),this.state.date.toLocaleTimeString()]})]})}}]),n}(u.a.Component),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={clockName:null,isClockVisible:!0},e.getRandomName=function(e){return e[Math.floor(Math.random()*e.length)]},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.clockName,a=t.isClockVisible;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"App__wrapper",children:[Object(p.jsx)("h1",{children:"React clock"}),a&&Object(p.jsx)(m,{name:n}),Object(p.jsxs)("div",{className:"App__buttons",children:[Object(p.jsx)("button",{className:"App__button",type:"button",onClick:function(){e.setState({isClockVisible:!0})},children:"Show clock"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:function(){e.setState({clockName:e.getRandomName(e.props.listOfNames)})},children:"Set random name"}),Object(p.jsx)("button",{className:"App__button",type:"button",onClick:function(){e.setState({isClockVisible:!1})},children:"Hide clock"})]})]})})}}]),n}(u.a.Component);c.a.render(Object(p.jsx)(h,{listOfNames:["Liam","Olivia","Noah","Emma","Oliver","Ava","Elijah","Charlotte","William","Sophia","James","Amelia","Benjamin","Isabella","Lucas","Mia","Henry","Evelyn","Alexander","Harper"]}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3c0a75f4.chunk.js.map