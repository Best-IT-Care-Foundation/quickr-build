(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[19],{91:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(10),r=a(12),o=a(11),i=a(0),l=a.n(i),m=a(1),u=a(2),d=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onNameChange=function(t){e.setState({name:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onAddChange=function(t){e.setState({Address:t.target.value})},e.onRefferalChange=function(t){e.setState({refferal:t.target.value})},e.onnumber=function(t){e.setState({number:t.target.value})},e.onSubmit=function(){e.state.email.length>6&&e.state.password.length>5&&e.state.Address.length>3&&e.state.name.length>1&&e.state.number.length>10&&fetch("http://159.65.147.41:5000/Join",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password,name:e.state.name,number:e.state.number,Address:e.state.Address})}).then(setTimeout((function(){e.props.history.push("/VendorLogin")}),1e3))},e.state={name:"",email:"",password:"",Address:"",number:""},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-login"},l.a.createElement("p",{className:"title-login"},"Join as a Vendor"),l.a.createElement("input",{className:"password-input",required:!0,onChange:this.onNameChange,type:"name",placeholder:"Enter Your Name :"}),l.a.createElement("input",{className:"email-input",required:!0,onChange:this.onEmailChange,minLength:"6",type:"email",placeholder:"Enter Your Email :"}),l.a.createElement("input",{className:"password-input",required:!0,onChange:this.onPasswordChange,minLength:"6",type:"password",placeholder:"Enter New Password Here"}),l.a.createElement("input",{className:"password-input",onChange:this.onnumber,minLength:"6",type:"number",placeholder:"mobile number"}),l.a.createElement("input",{className:"password-input",onChange:this.onAddChange,minLength:"6",type:"text",placeholder:"Your Address"}),l.a.createElement("input",{className:"submit-input",onClick:this.onSubmit,value:"Submit"}),l.a.createElement(m.b,{className:"undr-form",to:"/VendorLogin"},"Log In"))))}}]),a}(i.Component);t.default=Object(u.f)(d)}}]);
//# sourceMappingURL=19.4fb8c514.chunk.js.map