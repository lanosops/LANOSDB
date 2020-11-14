(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),o=c.n(n),r=c(13),l=c.n(r),i=(c(45),c(31)),s=c(32),j=c(14),d=c(39),b=c(38),h=(c(46),c(76)),p=c(77),O=c(74),x=c(75),u=c(35),m=c(78),y=c(33),v=c.n(y),f=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).state={apiResponse:"",isOpen:!1},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleClose=a.handleClose.bind(Object(j.a)(a)),a.handleOpen=a.handleOpen.bind(Object(j.a)(a)),a}return Object(s.a)(c,[{key:"handleOpen",value:function(){this.setState({isOpen:!0})}},{key:"handleClose",value:function(){this.setState({isOpen:!1})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var c=e.target.elements;console.log(c);var a=c.formOpportunityName.value,n=c.formOrgName.value,o=c.formOrgEmail.value;var r=function(){for(var e=[],t=0;t<c.length;t++)"checkbox"===c[t].type&&c[t].checked&&e.push(c[t].value);return e}(),l=c.formLocType.value,i=c.formLocation.value,s=c.formLink.value,j=c.formStartDate.value,d=c.formEndDate.value,b=c.formDesc.value,h=c.formMinAge.value,p=new Object;p.opp_name=a,p.org_name=n,p.opp_type=r,p.email=o,p.location_type=l.toLowerCase(),p.location=i,p.link=s,p.start_date=j,p.end_date=d,p.description=b,p.min_age=h,console.log(p),v.a.post("http://34.201.174.195:9000/opportunity",p).then((function(e){console.log(e)})).catch((function(e){201==e.response.status&&(console.log("headass"),t.handleOpen())}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(h.a.Dialog,{children:[Object(a.jsx)(h.a.Header,{children:Object(a.jsx)(h.a.Title,{children:"Organization Database Form"})}),Object(a.jsxs)(p.a,{onSubmit:this.handleSubmit,children:[Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(O.a,{style:{textAlign:"left"},children:[Object(a.jsxs)(p.a.Group,{controlId:"formOpportunityName",children:[Object(a.jsx)(p.a.Label,{children:"Opportunity Name"}),Object(a.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Enter name"})]}),Object(a.jsxs)(p.a.Group,{controlId:"formOrgName",children:[Object(a.jsx)(p.a.Label,{children:"Organziation Name"}),Object(a.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Enter organization"})]}),Object(a.jsxs)(p.a.Group,{controlId:"formOrgEmail",children:[Object(a.jsx)(p.a.Label,{children:"Contact Email"}),Object(a.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"email@example.com"})]}),Object(a.jsxs)(p.a.Group,{controlId:"formOppType",children:[Object(a.jsx)(p.a.Label,{children:"Type of Opportunity/Opportunities"}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Poverty Support",value:"Poverty Support"})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Religious-Based Service",value:"Religious-Based Service"})})]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Environmental Advocacy",value:"Environmental Advocacy"})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Animal Shelters",value:"Animal Shelters"})})]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Support Groups",value:"Support Groups"})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"LGBTQ+ Outreach",value:"LGBTQ+ Outreach"})})]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Disaster Relief",value:"Disaster Relief"})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Political/Social Advocacy",value:"Political/Social Advocacy"})})]}),Object(a.jsx)(x.a,{children:Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Minority Groups",value:"Minority Groups"})})})]}),Object(a.jsxs)(p.a.Group,{controlId:"formLocType",children:[Object(a.jsx)(p.a.Label,{children:"Location Type"}),Object(a.jsxs)(p.a.Control,{required:!0,as:"select",children:[Object(a.jsx)("option",{children:"Virtual"}),Object(a.jsx)("option",{children:"In-Person"}),Object(a.jsx)("option",{children:"Both"})]})]}),Object(a.jsxs)(p.a.Group,{controlId:"formLocation",children:[Object(a.jsx)(p.a.Label,{children:"Location"}),Object(a.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Atlanta, GA"})]}),Object(a.jsxs)(p.a.Group,{controlId:"formLink",children:[Object(a.jsx)(p.a.Label,{children:"Link"}),Object(a.jsx)(p.a.Control,{required:!0,type:"link",placeholder:"https://www.example.com"})]}),Object(a.jsx)(p.a.Label,{children:"Select Date Range"}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(u.a,{children:Object(a.jsxs)(p.a.Group,{controlId:"formStartDate",children:[Object(a.jsx)(p.a.Text,{muted:!0,children:"Start"}),Object(a.jsx)(p.a.Control,{required:!0,type:"date",placeholder:"MM/DD/YYYY"})]})}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(p.a.Group,{controlId:"formEndDate",children:[Object(a.jsx)(p.a.Text,{muted:!0,children:"End"}),Object(a.jsx)(p.a.Control,{required:!0,type:"date",placeholder:"MM/DD/YYYY"})]})})]}),Object(a.jsxs)(p.a.Group,{controlId:"formDesc",children:[Object(a.jsx)(p.a.Label,{children:"Description"}),Object(a.jsx)(p.a.Control,{required:!0,as:"textarea",placeholder:"Description"})]}),Object(a.jsxs)(p.a.Group,{controlId:"formMinAge",children:[Object(a.jsx)(p.a.Label,{children:"Minimum Age"}),Object(a.jsxs)(p.a.Control,{required:!0,as:"select",children:[Object(a.jsx)("option",{children:"13"}),Object(a.jsx)("option",{children:"14"}),Object(a.jsx)("option",{children:"16"}),Object(a.jsx)("option",{children:"17"}),Object(a.jsx)("option",{children:"18"})]})]})]})}),Object(a.jsx)(h.a.Footer,{children:Object(a.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})})]})]}),Object(a.jsxs)(h.a,{show:this.state.isOpen,onHide:this.handleClose,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Opportunity already exists!"})}),Object(a.jsx)(h.a.Body,{children:"Find another one"}),Object(a.jsx)(h.a.Footer,{children:Object(a.jsx)(m.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})})]})]})}}]),c}(o.a.Component),k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),o(e),r(e)}))},C=(c(67),c(36)),g=c(7);l.a.render(Object(a.jsxs)(o.a.StrictMode,{children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),Object(a.jsx)(C.a,{basename:"".concat("/LANOSDB","/"),children:Object(a.jsx)(g.a,{exact:!0,path:"/",component:f})})]}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.768c2920.chunk.js.map