(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,g=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&g.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(g.length)g.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function o(t){return i.p+"js/"+({categories:"categories"}[t]||t)+"."+{categories:"ae4a72cd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"1ba0":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-xl flex flex-col justify-center items-center"},[a("div",{staticClass:"arrow-up"}),a("div",{staticClass:"p-2 mt-1 bg-gray-400 rounded-lg "},[a("form",{staticClass:"flex items-center",on:{submit:function(e){return e.preventDefault(),t.submitCategory()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategory,expression:"newCategory"}],staticClass:"py-1 px-2 text-sm bg-gray-100 rounded-lg placeholder-gray-700 border-2 border-transparent  focus:border-indigo-600 transition-all ease-in-out duration-300",attrs:{type:"text",placeholder:"New Category Name"},domProps:{value:t.newCategory},on:{input:function(e){e.target.composing||(t.newCategory=e.target.value)}}}),a("button",{staticClass:"px-3 py-1 ml-2 text-sm bg-indigo-600 text-gray-200 font-semibold rounded-lg justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300",attrs:{type:"submit"}},[t._v(" Add ")])])])])},s=[],n=(a("96cf"),a("1da1")),o=a("bc3a"),i=a.n(o),l={name:"Addcategory",data:function(){return{newCategory:null,allMsg:null}},methods:{submitCategory:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t.newCategory){e.next=10;break}return e.next=4,i.a.post("https://post-category-life-rc.herokuapp.com/api/categories",{type:t.newCategory});case 4:a=e.sent,t.allMsg=a,t.$emit("reloadCategory"),t.closeCategories(),e.next=11;break;case 10:t.allMsg={dangerMsg:"Category not added"};case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t.allMsg={dangerMsg:"Category not added",err:e.t0};case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},closeCategories:function(){this.$emit("closeCategories")}}},c=l,u=(a("504f"),a("2877")),d=Object(u["a"])(c,r,s,!1,null,null,null);e["a"]=d.exports},"504f":function(t,e,a){"use strict";var r=a("b130"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-mon bg-gray-200 text-gray-800 font-medium min-h-screen transition-all ease-in-out duration-300 pb-5",attrs:{id:"app"}},[a("Navbar"),a("router-view",{attrs:{"all-categories":t.allCategories},on:{reloadCategory:function(e){return t.loadCategories()}}})],1)},n=[],o=(a("96cf"),a("1da1")),i=a("bc3a"),l=a.n(i),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"text-gray-200 bg-indigo-700 rounded-b-xl py-5 px-8 w-10/12 md:w-8/12 shadow-lg mx-auto mb-5"},[a("router-link",{staticClass:"px-8",attrs:{to:"/"}},[a("h1",{staticClass:"text-xl font-bold text-center"},[t._v("Welcome to Demo Post")])])],1)},u=[],d={name:"Navbar"},g=d,p=a("2877"),f=Object(p["a"])(g,c,u,!1,null,null,null),m=f.exports,v={name:"App",components:{Navbar:m},data:function(){return{allCategories:null}},mounted:function(){this.loadCategories()},methods:{loadCategories:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://post-category-life-rc.herokuapp.com/api/categories");case 3:a=e.sent,r=a.data,t.allCategories=r,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},b=v,h=(a("034f"),Object(p["a"])(b,s,n,!1,null,null,null)),y=h.exports,w=(a("d3b7"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-10/12 md:w-8/12 mx-auto bg-gray-100 p-5 rounded-xl"},[t.alartMsg?a("Alart",{attrs:{"alart-msg":t.alartMsg}}):t._e(),t.show?a("Addpost",{attrs:{"all-categories":t.allCategories},on:{closeModal:function(e){return t.closeModal()},postAlart:function(e){return t.alartFunc(e)},reloadCategory:t.reloadCategory}}):t._e(),t.editableID?a("Editpost",{attrs:{"editable-i-d":t.editableID,"all-categories":t.allCategories},on:{closeModal:function(e){return t.closeModal(e)},postAlart:function(e){return t.alartFunc(e)},reloadCategory:t.reloadCategory}}):t._e(),a("div",{staticClass:"flex justify-between items-center"},[a("h2",{staticClass:"text-lg font-semibold"},[t._v("List of Posts")]),a("div",{staticClass:"flex"},[a("button",{staticClass:"flex items-center px-3 py-2 mr-5 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300",on:{click:function(e){t.show=!t.show}}},[a("svg",{staticClass:"w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"}})]),a("span",{staticClass:"px-1 hidden md:inline-block"},[t._v("Add post")])]),a("router-link",{staticClass:"flex items-center px-3 py-2 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300",attrs:{to:"/categories"}},[a("svg",{staticClass:"view-list w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),a("span",{staticClass:"px-1 hidden md:inline-block"},[t._v("View category")])])],1)]),a("Postlist",{attrs:{"all-posts":t.allPosts},on:{triggerDelPost:function(e){return t.deletePost(e)},triggerEdit:function(e){return t.editPostID(e)}}})],1)},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md:grid grid-cols-3 gap-5 py-5"},t._l(t.allPosts,(function(e){return a("div",{key:e._id,staticClass:"p-5 rounded-xl shadow-lg"},[a("div",{staticClass:"flex justify-between items-center"},[a("h3",{staticClass:"font-semibold"},[t._v(t._s(e.title))]),a("div",{staticClass:"flex items-center text-center"},[a("button",{staticClass:"hover:text-indigo-600 transition-all ease-in-out duration-300",on:{click:function(a){return t.editPost(e._id)}}},[a("svg",{staticClass:"pencil w-4 h-4",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}})])]),a("button",{staticClass:"font-bold ml-2 text-xl w-6 h-6 hover:text-indigo-600 transition-all ease-in-out duration-300",on:{click:function(a){return t.deletePost(e._id)}}},[a("svg",{staticClass:"x w-4 h-4",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]),a("p",{staticClass:"text-sm"},[t._v(" "+t._s(e.msg)+" ")]),a("div",{staticClass:"pt-3 flex items-center text-xs font-semibold"},t._l(e.category_id,(function(e){return a("span",{key:e._id,staticClass:"py-1 px-2 bg-gray-300 mr-1 rounded-xl"},[t._v(t._s(e.type))])})),0)])})),0)},P=[],k={name:"Postlist",props:{allPosts:Array},methods:{deletePost:function(t){this.$emit("triggerDelPost",t)},editPost:function(t){this.$emit("triggerEdit",t)}}},M=k,A=Object(p["a"])(M,_,P,!1,null,null,null),j=A.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-black bg-opacity-75 fixed inset-0 z-10"},[a("div",{staticClass:"z-20 bg-white w-10/12 md:w-6/12 mx-auto my-10 rounded-xl"},[a("div",{staticClass:"p-5"},[a("div",{staticClass:"flex justify-between items-center"},[a("h3",{staticClass:"font-semibold text-lg"},[t._v("Add Post")]),a("button",{staticClass:"text-4xl hover:text-indigo-600",on:{click:function(e){return t.closeModal()}}},[t._v(" × ")])]),t.dangerMsg?a("p",{staticClass:"text-red-500 text-center py-1 px-3 border-2 border-red-500 bg-red-100 rounded-lg"},[t._v(" "+t._s(t.dangerMsg)+" ")]):t._e(),a("form",{staticClass:"py-5",on:{submit:function(e){return e.preventDefault(),t.submitPost()}}},[a("div",[a("label",{staticClass:"font-semibold text-sm pl-1",attrs:{for:"title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],staticClass:"py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}})]),a("div",{staticClass:"my-5"},[a("label",{staticClass:"font-semibold text-sm pl-1",attrs:{for:"title"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.msg,expression:"newPost.msg"}],staticClass:"py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300",attrs:{name:"title",type:"text",placeholder:"Enter your post description"},domProps:{value:t.newPost.msg},on:{input:function(e){e.target.composing||t.$set(t.newPost,"msg",e.target.value)}}})]),a("div",{staticClass:"py-5"},[a("div",{staticClass:"flex items-center"},[a("p",[t._v("Categories")]),a("div",{staticClass:"relative"},[a("button",{staticClass:"font-bold w-6 h-6 bg-gray-300 rounded-full ml-3 text-center hover:text-indigo-600 hover:bg-indigo-100 transition-all ease-in-out duration-300",on:{click:function(e){e.preventDefault(),t.show=!t.show}}},[t._v(" + ")]),t.show?a("Addcategory",{staticClass:"absolute absolute-center2",on:{closeCategories:t.closeCategories,reloadCategory:function(e){return t.reloadCategory()}}}):t._e()],1)]),a("div",{staticClass:"flex items-center flex-wrap overflow-y-auto",staticStyle:{"max-height":"7rem"}},t._l(t.allCategories,(function(e){return a("label",{key:e._id,staticClass:"inline-flex items-center m-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.category_id,expression:"newPost.category_id"}],staticClass:"form-checkbox h-5 w-5 text-indigo-600 border-2 border-indigo-600",attrs:{type:"checkbox"},domProps:{value:e._id,checked:Array.isArray(t.newPost.category_id)?t._i(t.newPost.category_id,e._id)>-1:t.newPost.category_id},on:{change:function(a){var r=t.newPost.category_id,s=a.target,n=!!s.checked;if(Array.isArray(r)){var o=e._id,i=t._i(r,o);s.checked?i<0&&t.$set(t.newPost,"category_id",r.concat([o])):i>-1&&t.$set(t.newPost,"category_id",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.newPost,"category_id",n)}}}),a("span",{staticClass:"ml-2 text-gray-700 transition-all ease-in-out duration-300"},[t._v(t._s(e.type))])])})),0)]),a("button",{staticClass:"px-5 py-2 mr-5 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300",attrs:{type:"submit"}},[t._v(" Add ")])])])])])},O=[],D=a("1ba0"),E={name:"Addpost",components:{Addcategory:D["a"]},props:{allCategories:Array},data:function(){return{newPost:{title:null,msg:null,category_id:[]},show:!1,dangerMsg:null}},methods:{submitPost:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.newPost.category_id==[]&&null==t.newPost.title&&null==t.newPost.msg){e.next=10;break}return e.next=4,l.a.post("https://post-category-life-rc.herokuapp.com/api/posts",t.newPost);case 4:a=e.sent,r=a.data,t.$emit("postAlart",r),t.closeModal(),e.next=11;break;case 10:t.dangerAlart({dangerMsg:"Fill up everything"});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t.dangerAlart({dangerMsg:"Something went wrong in server",error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},closeModal:function(){this.$emit("closeModal")},closeCategories:function(){this.show=!1},reloadCategory:function(){this.$emit("reloadCategory")},clearAlart:function(){var t=this;setTimeout((function(){return t.dangerMsg=null}),3e3)},dangerAlart:function(t){var e=t.dangerMsg;this.dangerMsg=e,this.clearAlart()}}},R=E,z=Object(p["a"])(R,$,O,!1,null,null,null),N=z.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-black bg-opacity-75 fixed inset-0 z-10"},[a("div",{staticClass:"z-20 bg-white w-10/12 md:w-6/12 mx-auto my-10 rounded-xl"},[a("div",{staticClass:"p-5"},[a("div",{staticClass:"flex justify-between items-center"},[a("h3",{staticClass:"font-semibold text-lg"},[t._v("Edit Post")]),a("button",{staticClass:"text-4xl hover:text-indigo-600",on:{click:function(e){return t.closeModal()}}},[t._v(" × ")])]),a("form",{staticClass:"py-5",on:{submit:function(e){return e.preventDefault(),t.submitPost()}}},[a("div",[a("label",{staticClass:"font-semibold text-sm pl-1",attrs:{for:"title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],staticClass:"py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300",attrs:{type:"text",placeholder:"Title",required:""},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}})]),a("div",{staticClass:"my-5"},[a("label",{staticClass:"font-semibold text-sm pl-1",attrs:{for:"title"}},[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.msg,expression:"newPost.msg"}],staticClass:"py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300",attrs:{name:"title",type:"text",placeholder:"Enter your post description",required:""},domProps:{value:t.newPost.msg},on:{input:function(e){e.target.composing||t.$set(t.newPost,"msg",e.target.value)}}})]),a("div",{staticClass:"py-5"},[a("div",{staticClass:"flex items-center"},[a("p",[t._v("Categories")]),a("div",{staticClass:"relative"},[a("button",{staticClass:"font-bold w-6 h-6 bg-gray-300 rounded-full ml-3 text-center hover:text-indigo-600 hover:bg-indigo-100 transition-all ease-in-out duration-300",on:{click:function(e){e.preventDefault(),t.show=!t.show}}},[t._v(" + ")]),t.show?a("Addcategory",{staticClass:"absolute absolute-center2",on:{closeCategories:t.closeCategories,reloadCategory:function(e){return t.reloadCategory()}}}):t._e()],1)]),a("div",{staticClass:"flex items-center flex-wrap overflow-y-auto",staticStyle:{"max-height":"7rem"}},t._l(t.allCategories,(function(e){return a("label",{key:e._id,staticClass:"inline-flex items-center m-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.category_id,expression:"newPost.category_id"}],staticClass:"form-checkbox h-5 w-5 text-indigo-600 border-2 border-indigo-600",attrs:{type:"checkbox"},domProps:{value:e._id,checked:Array.isArray(t.newPost.category_id)?t._i(t.newPost.category_id,e._id)>-1:t.newPost.category_id},on:{change:function(a){var r=t.newPost.category_id,s=a.target,n=!!s.checked;if(Array.isArray(r)){var o=e._id,i=t._i(r,o);s.checked?i<0&&t.$set(t.newPost,"category_id",r.concat([o])):i>-1&&t.$set(t.newPost,"category_id",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.newPost,"category_id",n)}}}),a("span",{staticClass:"ml-2 text-gray-700 transition-all ease-in-out duration-300"},[t._v(t._s(e.type))])])})),0)]),a("button",{staticClass:"px-5 py-2 mr-5 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300",attrs:{type:"submit"}},[t._v(" Update ")])])])])])},T=[],S=a("2909"),L={name:"Editpost",components:{Addcategory:D["a"]},props:{allCategories:Array,editableID:String},data:function(){return{newPost:{title:null,msg:null,category_id:[]},show:!1}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.editableID){e.next=8;break}return e.next=3,l.a.get("https://post-category-life-rc.herokuapp.com/api/posts/".concat(t.editableID));case 3:r=e.sent,s=r.data,t.newPost.title=s.title,t.newPost.msg=s.msg,(a=t.newPost.category_id).push.apply(a,Object(S["a"])(s.category_id));case 8:case"end":return e.stop()}}),e)})))()},methods:{submitPost:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.newPost.category_id==[]){e.next=10;break}return e.next=4,l.a.patch("https://post-category-life-rc.herokuapp.com/api/posts/".concat(t.editableID),t.newPost);case 4:a=e.sent,r=a.data,t.$emit("postAlart",r),t.closeModal(),e.next=11;break;case 10:t.$emit("postAlart",{dangerMsg:"Category can't be empty"});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),t.$emit("postAlart",{dangerMsg:"Something went wrong",error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},closeModal:function(){this.$emit("closeModal","edit")},closeCategories:function(){this.show=!1},reloadCategory:function(){this.$emit("reloadCategory")}}},H=L,B=Object(p["a"])(H,I,T,!1,null,null,null),F=B.exports,q=a("e97f"),V={name:"Home",components:{Postlist:j,Addpost:N,Alart:q["a"],Editpost:F},props:{allCategories:Array},data:function(){return{allPosts:null,show:!1,alartMsg:null,editableID:null}},created:function(){this.loadPosts()},methods:{loadPosts:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://post-category-life-rc.herokuapp.com/api/posts");case 3:a=e.sent,r=a.data,t.allPosts=r,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.alartMsg={dangerMsg:"Post not loaded",err:e.t0};case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},deletePost:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("https://post-category-life-rc.herokuapp.com/api/posts/".concat(t));case 3:r=a.sent,s=r.data,e.alartMsg=s,e.loadPosts(),e.clearAlart(),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.alartMsg={dangerMsg:"Post not deleted"};case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},closeModal:function(t){"edit"==t?this.editableID=null:this.show=!this.show},alartFunc:function(t){this.alartMsg=t,this.loadPosts(),this.clearAlart()},clearAlart:function(){var t=this;setTimeout((function(){return t.alartMsg=null}),3e3)},editPostID:function(t){this.editableID=t},reloadCategory:function(){this.$emit("reloadCategory")}}},J=V,U=Object(p["a"])(J,x,C,!1,null,null,null),W=U.exports;r["a"].use(w["a"]);var G=[{path:"/",name:"Home",component:W},{path:"/categories",name:"Categories",component:function(){return a.e("categories").then(a.bind(null,"58c2"))}}],K=new w["a"]({mode:"history",base:"/",routes:G}),Q=K;a("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:Q,render:function(t){return t(y)}}).$mount("#app")},5812:function(t,e,a){},"85ec":function(t,e,a){},"9aca":function(t,e,a){"use strict";var r=a("5812"),s=a.n(r);s.a},b130:function(t,e,a){},ba8c:function(t,e,a){},e97f:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed text-xs absolute-center"},[t.alartMsg.sucMsg?a("div",{staticClass:"p-1 mb-2 rounded-lg bg-green-100 text-green-600 border-2 border-green-600"},[a("p",[a("span",{staticClass:"text-sm"},[t._v("✔")]),t._v(" "+t._s(t.alartMsg.sucMsg))])]):t._e(),t.alartMsg.dangerMsg?a("div",{staticClass:"p-1 mb-2 rounded-lg bg-red-100 text-red-600 border-2 border-red-600"},[a("p",[a("span",{staticClass:"text-sm"},[t._v("⚠")]),t._v(" "+t._s(t.alartMsg.dangerMsg))])]):t._e()])},s=[],n={name:"Alart",props:{alartMsg:Object}},o=n,i=(a("9aca"),a("2877")),l=Object(i["a"])(o,r,s,!1,null,null,null);e["a"]=l.exports}});
//# sourceMappingURL=app.7238f8b4.js.map