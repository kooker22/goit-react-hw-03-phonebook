(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={form:"Form_form__2IWGP",label:"Form_label__1qAJ_",inputWrapper:"Form_inputWrapper__1Rl4Y",buttonForm:"Form_buttonForm__2ncVh",input:"Form_input__25gW4"}},13:function(e,t,n){e.exports={input:"Filter_input__kro7p"}},16:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=n(14),i=n(2),u=n(3),s=n(5),m=n(4),f=n(11),h=(n(23),n(12)),p=n(1),v=n.n(p),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:v.a.form},r.a.createElement("div",{className:v.a.inputWrapper},r.a.createElement("label",{className:v.a.label},"Name",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:v.a.input})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:v.a.input}))),r.a.createElement("button",{type:"submit",className:v.a.buttonForm},"add contact"))}}]),n}(a.Component),d=n(6),g=n.n(d),E=n(15),y=function(e){var t=e.children,n=e.onClick,a=Object(E.a)(e,["children","onClick"]);return r.a.createElement("button",Object.assign({type:"button",onClick:n},a),t)};y.defaultProps={onClick:function(){return null},children:null};var C=y;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.a.createElement("g",{id:"trash"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001 c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17 c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10 c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002 c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9 c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"})),j=function(e){var t=e.svgRef,n=e.title,a=_(e,["svgRef","title"]);return r.a.createElement("svg",O({id:"Layer_1",x:"0px",y:"0px",width:"13px",height:"13px",viewBox:"0 0 32 32",ref:t},a),n?r.a.createElement("title",null,n):null,S)},w=r.a.forwardRef((function(e,t){return r.a.createElement(j,O({svgRef:t},e))})),N=(n.p,function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{className:g.a.item,key:t},a,": ",c,r.a.createElement(C,{className:g.a.button,type:"button",onClick:function(){return n(t)}},r.a.createElement(w,null)))})))}),k=function(e){var t=e.contacts,n=e.onDeleteContact;return r.a.createElement("ul",null,r.a.createElement(N,{contacts:t,onDeleteContact:n}))},x=n(13),F=n.n(x),R=function(e){var t=e.value,n=e.contacts,a=e.onChange;return n.length>2&&r.a.createElement("label",null,"Contact Filter",r.a.createElement("input",{className:F.a.input,type:"text",value:t,onChange:a}))},M=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},H=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.formSubmitHandler=function(t){e.notifyExistingName(t)},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.notifyExistingName=function(t){var n={id:Object(f.v4)(),name:t.name,number:t.number};e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):e.setState({contacts:[].concat(Object(o.a)(e.state.contacts),[n])})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){this.state.contacts!==t.contacts&&function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}("contacts",this.state.contacts)}},{key:"componentDidMount",value:function(){this.setState({contacts:M("contacts")})}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLowerCase(),c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"contents"},"Phonebook"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,{onSubmit:this.formSubmitHandler}),r.a.createElement(R,{contacts:t,value:n,onChange:this.changeFilter})),t.length>0&&r.a.createElement("h2",{className:"contents"},"Contacts"),r.a.createElement(k,{contacts:c,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);H.defaultProps={filter:""};var z=H;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={button:"ContactListItem_button__14uxZ",item:"ContactListItem_item__24mqb"}}},[[16,1,2]]]);
//# sourceMappingURL=main.99c77c70.chunk.js.map