(this.webpackJsonpthree_p_world=this.webpackJsonpthree_p_world||[]).push([[7],{43:function(e,t){var a,n,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===r||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:r}catch(e){a=r}try{n="function"===typeof clearTimeout?clearTimeout:d}catch(e){n=d}}();var o,s=[],l=!1,u=-1;function p(){l&&o&&(l=!1,o.length?s=o.concat(s):u=-1,s.length&&m())}function m(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(o=s,s=[];++u<t;)o&&o[u].run();u=-1,t=s.length}o=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===d||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new h(e,t)),1!==s.length||l||c(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},45:function(e,t,a){(function(t){var a=t&&t.pid?t.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+a+n().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+a+n().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}).call(this,a(43))},99:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(9),i=a(10),r=a(12),d=a(11),c=a(0),o=a.n(c),s=a(1);function l(e){var t="/vendor/".concat(e.id);return o.a.createElement("div",{className:"dsbrd"},o.a.createElement("div",{className:"links-dsbrd"},o.a.createElement(s.b,{className:"dsLnk",to:t},"Profile"),o.a.createElement(s.b,{className:"dsLnk",to:"/VendorLogin"},"Logout")))}var u=a(45),p=a.n(u),m=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onpdctedit=function(t){fetch("http://159.65.147.41:5000/Product/".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){e.setState({pdtId:t[0]._id,imageID:t[0].imageID,vendorEdit:t[0].vendor,iteamEdit:t[0].iteam,priceEdit:t[0].price,BrandNameEdit:t[0].BrandName,descriptionEdit:t[0].description,tagsEdit:t[0].tags,sizeEdit:t[0].size,offerEdit:t[0].offer,imageIDEdit:t[0].imageID})}))},e.ondeleteid=function(t){e.setState({deleteId:t.target.value})},e.fileChangeNID=function(t){e.setState({NidImage:t.target.files[0]})},e.onNIDUpload=function(){var t=new FormData;t.append("upload",e.state.NidImage),fetch("http://159.65.147.41:5000/ProductPICNID/".concat(e.props.match.params.id),{method:"POST",body:t})},e.onbrandnameupdate=function(t){e.setState({BrandNameEdit:t.target.value})},e.onoffrupdate=function(t){e.setState({offerEdit:t.target.value})},e.onsizeupdate=function(t){e.setState({sizeEdit:t.target.value})},e.ontagsupdate=function(t){e.setState({tagsEdit:t.target.value})},e.ondesupdate=function(t){e.setState({descriptionEdit:t.target.value})},e.onpriceupdate=function(t){e.setState({priceEdit:t.target.value})},e.onvendorupdate=function(t){e.setState({vendorEdit:t.target.value})},e.onnameupdate=function(t){e.setState({iteamEdit:t.target.value})},e.activateAddproduct=function(){e.setState({addProduct:!0,editProduct:!1,deleteProduct:!1})},e.activateEditproduct=function(){e.setState({addProduct:!1,editProduct:!0,deleteProduct:!1})},e.activateDeleteproduct=function(){e.setState({addProduct:!1,editProduct:!1,deleteProduct:!0})},e.onBRANDChange=function(t){e.setState({BrandName:t.target.value})},e.onvendorChange=function(t){e.setState({vendor:t.target.value})},e.onofferChange=function(t){e.setState({offer:t.target.value})},e.onsizeChange=function(t){e.setState({size:t.target.value})},e.ontagChange=function(t){e.setState({tags:t.target.value})},e.ondesChange=function(t){e.setState({description:t.target.value})},e.onpriceChange=function(t){e.setState({price:t.target.value})},e.oniteamChange=function(t){e.setState({imageID:p()()}),e.setState({iteam:t.target.value})},e.fileChange=function(t){e.setState({file:t.target.files[0]})},e.fileChange2=function(t){e.setState({file2:t.target.files[0]})},e.fileChange3=function(t){e.setState({file3:t.target.files[0]})},e.upload=function(){var t=new FormData;t.append("upload",e.state.file),t.append("upload",e.state.file2),t.append("upload",e.state.file3),t.append("upload",e.state.imageID),fetch("http://159.65.147.41:5000/ProductPIC",{method:"POST",body:t}).then(alert("product Image uploaded")),fetch("http://159.65.147.41:5000/ProductADD",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({iteam:e.state.iteam,price:e.state.price,vendor:e.state.vendor,description:e.state.description,tags:e.state.tags,size:e.state.size,offer:e.state.offer,BrandName:e.state.BrandName,imageID:e.state.imageID})}).then(alert("product  uploaded"))},e.updateproduct=function(){fetch("http://159.65.147.41:5000/ProductEditV/".concat(e.state.email,"/").concat(e.state.pdtId),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({iteam:e.state.iteamEdit,price:e.state.priceEdit,vendor:e.state.vendorEdit,description:e.state.descriptionEdit,tags:e.state.tagsEdit,size:e.state.sizeEdit,offer:e.state.offerEdit,BrandName:e.state.BrandNameEdit})}).then(alert("product Edited"))},e.ondeleteProduct=function(){fetch("http://159.65.147.41:5000/DeleteV/".concat(e.state.email,"/").concat(e.state.deleteId),{method:"post"}).then(alert("product Deleted"))},e.state={name:void 0,email:void 0,file:null,file2:null,file3:null,vendor:"",iteam:"",access:!1,price:"",description:"",tags:"",size:"",offer:"",BrandName:"",imageID:"",NidImage:"",NidUserID:"",addProduct:!0,deleteProduct:!1,editProduct:!1,deleteId:"",vendorEdit:"",iteamEdit:"",priceEdit:"",descriptionEdit:"",tagsEdit:"",sizeEdit:"",offerEdit:"",BrandNameEdit:"",imageIDEdit:"",pdtId:""},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://159.65.147.41:5000/getvendordata/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({name:t[0].name,email:t[0].email,access:t[0].access,NidUserID:t[0]._id})}))}}]),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.addProduct?{display:"block"}:{display:"none"},t=this.state.deleteProduct?{display:"block"}:{display:"none"},a=this.state.editProduct?{display:"block"}:{display:"none"};return o.a.createElement("div",null,o.a.createElement("div",{className:"opsLink"},o.a.createElement(s.b,{onClick:this.activateAddproduct,className:"opsLink_"},"Add Product"),o.a.createElement(s.b,{onClick:this.activateDeleteproduct,className:"opsLink_"},"Edit Product"),o.a.createElement(s.b,{onClick:this.activateEditproduct,className:"opsLink_"},"Delete Product")),o.a.createElement(l,{id:this.props.match.params.id}),o.a.createElement("div",{className:"dsbrd-cntnt"},o.a.createElement("p",{className:"title"},"Profile :"),o.a.createElement("p",{className:"title-des"},"Name : ",this.state.name),o.a.createElement("p",{className:"title-des"},"Email : ",this.state.email),this.state.access?o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement("p",{className:"vndr-right-ok"},"You Have Rights to Add,Delete,Edit Product ")):o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement("div",null,o.a.createElement("p",{className:"vndr-right-warn"},"You Have No Rights to Add,Delete,Edit Product "),o.a.createElement("p",{className:"vndr-right-warn"},"Submit Document to get access"),o.a.createElement("input",{className:"img-admin-input",onChange:this.fileChangeNID,type:"file"}),o.a.createElement("button",{className:"btn-upld-pdtc",onClick:this.onNIDUpload},"Submit")))),o.a.createElement("div",{className:"main-admin"},o.a.createElement("div",{className:"main-admin-content"},o.a.createElement("div",{style:e,className:"addProduct"},o.a.createElement("p",{className:"title-admin"},"Add Product by Vendor"),o.a.createElement("input",{onChange:this.oniteamChange,className:"admin-input",type:"name",placeholder:"Enter Product Name"}),o.a.createElement("input",{onChange:this.onvendorChange,className:"admin-input",type:"name",placeholder:"Enter Vendor Name"}),o.a.createElement("input",{onChange:this.onpriceChange,className:"admin-input",type:"number",placeholder:"Enter Product Price"}),o.a.createElement("input",{onChange:this.onofferChange,className:"admin-input",type:"number",placeholder:"Enter Product Offer"}),o.a.createElement("input",{onChange:this.onsizeChange,className:"admin-input",type:"text",placeholder:"Product Size (Upercase)"}),o.a.createElement("input",{onChange:this.onBRANDChange,className:"admin-input",type:"text",placeholder:"Product Brand (lowercase)"}),o.a.createElement("textarea",{onChange:this.ondesChange,className:"admin-txtarea",placeholder:"Enter Product Description"}),o.a.createElement("textarea",{onChange:this.ontagChange,className:"admin-txtarea",placeholder:"Enter Product Tags , color , story by (lowercase)"}),o.a.createElement("input",{className:"img-admin-input",onChange:this.fileChange3,type:"file"}),o.a.createElement("input",{className:"img-admin-input",onChange:this.fileChange,type:"file"}),o.a.createElement("input",{className:"img-admin-input",onChange:this.fileChange2,type:"file"}),o.a.createElement("button",{className:"btn-upld-pdtc",onClick:this.upload},"ADD Product")),o.a.createElement("div",{style:t,className:"GetProductforEdit"},o.a.createElement("p",{className:"title-admin"},"Edit Product"),o.a.createElement("input",{onChange:this.onpdctedit,className:"admin-input",type:"text",required:!0}),o.a.createElement("p",{className:"edit-pdct-dtls"},"Name: ",this.state.iteamEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Price: ",this.state.priceEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Vendor: ",this.state.vendorEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Description: ",this.state.descriptionEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Tag's: ",this.state.tagsEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Size: ",this.state.sizeEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"Offer: ",this.state.offerEdit),o.a.createElement("p",{className:"edit-pdct-dtls"},"BrandName: ",this.state.BrandNameEdit),o.a.createElement("input",{onChange:this.onnameupdate,className:"admin-input",type:"text",placeholder:"Product  Name"}),o.a.createElement("input",{onChange:this.onpriceupdate,className:"admin-input",type:"text",placeholder:"Product  price"}),o.a.createElement("input",{onChange:this.onsizeupdate,className:"admin-input",type:"text",placeholder:"Product  Size"}),o.a.createElement("input",{onChange:this.onoffrupdate,className:"admin-input",type:"text",placeholder:"Product  offer"}),o.a.createElement("input",{onChange:this.onbrandnameupdate,className:"admin-input",type:"text",placeholder:"Product  Brand"}),o.a.createElement("input",{onChange:this.onvendorupdate,className:"admin-input",type:"text",placeholder:"Vendor Name"}),o.a.createElement("textarea",{onChange:this.ondesupdate,className:"admin-txtarea",placeholder:"Enter Product Description"}),o.a.createElement("textarea",{onChange:this.ontagsupdate,className:"admin-txtarea",placeholder:"Enter Product Tags"}),o.a.createElement("button",{onClick:this.updateproduct,className:"btn-upld-pdtc"},"Update Product")),o.a.createElement("div",{style:a,className:"GetProductforEdit"},o.a.createElement("p",{className:"title-admin"},"Delete Product"),o.a.createElement("input",{onChange:this.ondeleteid,className:"admin-input",type:"text",required:!0}),o.a.createElement("button",{onClick:this.ondeleteProduct,className:"btn-upld-pdtc"},"Delete Product")))))}}]),a}(c.Component)}}]);
//# sourceMappingURL=7.f7f7ebcb.chunk.js.map