"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[643],{5458:function(e,s,n){var t=n(3433),a=n(4165),r=n(5861),i=n(9439),c=n(8820),o=n(1635),l=n(2791),u=n(3271),d=n(8320),m=n(6856),h=n(6403),p=n(7200),f=n(7783),x=n(184);s.Z=function(e){var s=e.setOpenNewchat,n=e.type,j=e.title,g=(0,l.useContext)(p.p),v=g.handleOpenMessage,N=g.chatSingle,k=(0,l.useContext)(d.V),w=k.currentUser,Z=k.successMessage,C=(0,l.useState)(""),b=(0,i.Z)(C,2),y=b[0],S=b[1],O=(0,l.useState)([]),U=(0,i.Z)(O,2),_=U[0],A=U[1],L=(0,l.useState)(!1),T=(0,i.Z)(L,2),z=T[0],M=T[1],I=(0,l.useState)(!1),P=(0,i.Z)(I,2),E=P[0],B=P[1],F=(0,l.useState)("Chat"===n||"Send"===n?[]:null===N||void 0===N?void 0:N.members),V=(0,i.Z)(F,2),D=V[0],Q=V[1],H=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(s){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(s),s){e.next=3;break}return e.abrupt("return");case 3:return M(!0),e.prev=4,e.next=7,u.Z.get("/users/search?keyword=".concat(s),{headers:{Authorization:"Bearer ".concat(w.accessToken)}});case 7:n=e.sent,A(n.data.results),M(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),M(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(s){return e.apply(this,arguments)}}(),R=function(e){D.map((function(e){return e._id})).includes(e._id)||Q([].concat((0,t.Z)(D),[e]))},W=(0,h.NL)(),G=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.stringify(D.map((function(e){return e._id}))),B(!0),"Chat"!==n){e.next=9;break}return e.next=5,u.Z.get("/chats/".concat(t),{headers:{Authorization:"Bearer ".concat(w.accessToken)}});case 5:r=e.sent,v(r.data.chat),e.next=22;break;case 9:if("Add to group"!==n||!N){e.next=17;break}return e.next=12,u.Z.patch("/chats/".concat(null===N||void 0===N?void 0:N._id),{people:t},{headers:{Authorization:"Bearer ".concat(w.accessToken)}});case 12:i=e.sent,v(i.data.chat),Z(i.data.message),e.next=22;break;case 17:if("Send"!==n){e.next=21;break}console.log("Send"),e.next=22;break;case 21:return e.abrupt("return");case 22:W.invalidateQueries(["chats"]),s(!1),B(!1);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)("div",{className:"newchat",onClick:function(e){return"newchat"===e.target.className&&(0,o.handleCloseOptions)(s)},children:(0,x.jsxs)("div",{className:"newchat-container",children:[E&&(0,x.jsx)(f.Z,{}),(0,x.jsx)("p",{className:"newchat-title",children:j}),(0,x.jsxs)("div",{className:"newchat-search",children:[(0,x.jsx)("div",{className:"newchat-friend-choose",children:D.map((function(e){return(0,x.jsxs)("div",{className:"newchat-friend-item",children:[(0,x.jsx)("p",{className:"newchat-friend-name",children:e.name}),(0,x.jsx)(c.oHP,{style:{cursor:"pointer"},onClick:function(){return s=e,void Q(D.filter((function(e){return e._id!==s._id})));var s}})]},e._id)}))}),(0,x.jsx)("span",{children:"To:"}),(0,x.jsx)("input",{type:"text",placeholder:"Search...",className:"newchat-input",value:y,onChange:function(e){return H(e.target.value)}})]}),(0,x.jsx)("div",{className:"newchat-search-results",children:z?(0,x.jsx)(f.Z,{}):y&&(null===_||void 0===_?void 0:_.length)>0?_.map((function(e){return(0,x.jsxs)("div",{className:"newchat-user",children:[(0,x.jsxs)("div",{className:"newchat-user-info",children:[(0,x.jsx)("img",{src:e.avatar,alt:"",className:"newchat-img"}),(0,x.jsxs)("div",{className:"newchat-user-name",children:[(0,x.jsx)("p",{className:"newchat-name",children:e.name}),(0,x.jsx)("p",{className:"newchat-username",children:e.username})]})]}),D.map((function(e){return e._id})).includes(e._id)?(0,x.jsx)(m.br6,{className:"newchat-choose-user",onClick:function(){return R(e)}}):(0,x.jsx)(m.bSN,{className:"newchat-choose-user",onClick:function(){return R(e)}})]},e._id)})):(0,x.jsx)("p",{style:{textAlign:"center",color:"gray"},children:"No search results found"})}),(0,x.jsx)("div",{className:"newchat-btn",children:(0,x.jsx)("button",{className:"newchat-btn-chat",onClick:G,children:n})}),(0,x.jsx)(c.oHP,{className:"newchat-close",onClick:function(){return(0,o.handleCloseOptions)(s)}})]})})}},103:function(e,s,n){var t=n(184);s.Z=function(){return(0,t.jsx)("div",{className:"footer",children:(0,t.jsxs)("div",{className:"footer-container",children:[(0,t.jsxs)("ul",{className:"footer-list",children:[(0,t.jsx)("li",{className:"footer-item",children:"Meta"}),(0,t.jsx)("li",{className:"footer-item",children:"About"}),(0,t.jsx)("li",{className:"footer-item",children:"Blog"}),(0,t.jsx)("li",{className:"footer-item",children:"Jobs"}),(0,t.jsx)("li",{className:"footer-item",children:"Help"}),(0,t.jsx)("li",{className:"footer-item",children:"API"}),(0,t.jsx)("li",{className:"footer-item",children:"Privacy"}),(0,t.jsx)("li",{className:"footer-item",children:"Terms"}),(0,t.jsx)("li",{className:"footer-item",children:"Top Accounts"}),(0,t.jsx)("li",{className:"footer-item",children:"Locations"}),(0,t.jsx)("li",{className:"footer-item",children:"Instagram Lite"}),(0,t.jsx)("li",{className:"footer-item",children:"Contact Uploading & Non-Users"}),(0,t.jsx)("li",{className:"footer-item",children:"Meta Verified"})]}),(0,t.jsxs)("div",{className:"footer-bottom",children:[(0,t.jsx)("p",{children:"English"}),(0,t.jsx)("p",{children:"\xa9 2023 Instagram from Meta"})]})]})})}},4715:function(e,s,n){var t=n(4165),a=n(5861),r=n(9439),i=n(6403),c=n(3418),o=n(8820),l=n(3271),u=n(2791),d=n(8320),m=n(1635),h=n(7783),p=n(184);s.Z=function(e){var s=e.setOpenFollow,n=e.friendId,f=(0,u.useContext)(d.V),x=f.currentUser,j=f.errorMessage,g=f.successMessage,v=f.socket,N=(0,i.NL)(),k=(0,u.useState)(!1),w=(0,r.Z)(k,2),Z=w[0],C=w[1],b=x.username,y=x.avatar,S=(0,c.D)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,l.Z.post("/users/follow/unfl",a,{headers:{Authorization:"Bearer ".concat(x.accessToken)}}).then((function(e){g(e.data.message),C(!1),v.current&&v.current.emit("send-notifications",{sender:{username:b,avatar:y},receiver:n,type:"follow"}),(0,m.handleCloseOptions)(s)})).catch((function(){j("Something went wrong..."),C(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){N.invalidateQueries(["posts"]),N.invalidateQueries(["friends"]),N.invalidateQueries(["users",b])}});return(0,p.jsxs)("div",{className:"pu-options",onClick:function(e){return"pu-options"===e.target.className&&(0,m.handleCloseOptions)(s)},children:[Z&&(0,p.jsx)(h.Z,{}),(0,p.jsx)("div",{className:"pu-options-container",children:(0,p.jsxs)("ul",{className:"pu-options-list",children:[(0,p.jsx)("li",{className:"pu-options-item",style:{color:"#ed4956",fontWeight:500},onClick:function(){S.mutate({friendId:n})},children:"UnFollow"}),(0,p.jsx)("li",{className:"pu-options-item",onClick:function(){return(0,m.handleCloseOptions)(s)},children:"Cancel"})]})}),(0,p.jsx)(o.oHP,{className:"pu-options-close",onClick:function(){return(0,m.handleCloseOptions)(s)}})]})}},2579:function(e,s,n){var t=n(8820),a=n(1635),r=n(1087),i=n(184);s.Z=function(e){var s=e.setSwitchAccount,n=e.handleLogout;return(0,i.jsxs)("div",{className:"sa",onClick:function(e){return"sa"===e.target.className&&(0,a.handleCloseOptions)(s)},children:[(0,i.jsx)("div",{className:"sa-container",children:(0,i.jsxs)("ul",{className:"sa-list",children:[(0,i.jsx)("li",{className:"sa-item",onClick:function(){return(0,a.handleCloseOptions)(s)},children:(0,i.jsx)(r.rU,{className:"link",to:"/accounts/login",children:"Log in"})}),(0,i.jsx)("li",{className:"sa-item",onClick:function(){return(0,a.handleCloseOptions)(s)},children:(0,i.jsx)(r.rU,{className:"link",to:"/accounts/sign-up",children:"Sign up"})}),(0,i.jsx)("li",{className:"sa-item",onClick:function(){(0,a.handleCloseOptions)(s),n()},children:"Log out"}),(0,i.jsx)("li",{className:"sa-item",onClick:function(){return(0,a.handleCloseOptions)(s)},children:"Cancel"})]})}),(0,i.jsx)(t.oHP,{className:"sa-close",onClick:function(){return(0,a.handleCloseOptions)(s)}})]})}},8027:function(e,s,n){var t=n(4165),a=n(5861),r=n(9439),i=n(8820),c=n(6355),o=n(1213),l=n(1087),u=n(8194),d=n(6403),m=n(3418),h=n(3271),p=n(2791),f=n(8320),x=n(5458),j=n(184);s.Z=function(e){var s=e.postId,n=e.post,g=e.isPostDetails,v=(0,p.useContext)(f.V),N=v.currentUser,k=v.successMessage,w=v.errorMessage,Z=v.socket,C=(0,d.NL)(),b=N.username,y=N.avatar,S=(0,p.useState)(!1),O=(0,r.Z)(S,2),U=O[0],_=O[1],A=(0,m.D)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.post("/posts/like",a,{headers:{Authorization:"Bearer ".concat(N.accessToken)}}).then((function(e){var t;Z.current&&Z.current.emit("send-notifications",{sender:{username:b,avatar:y},receiver:null===(t=n.author)||void 0===t?void 0:t._id,post:{postId:s,postImage:n.image[0]},type:"like"})})).catch((function(){return w("Something went wrong...")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){C.invalidateQueries(["posts"])}}),L=function(){A.mutate({postLiked:s})},T=(0,m.D)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.post("/posts/bookmark",s,{headers:{Authorization:"Bearer ".concat(N.accessToken)}}).then((function(e){return k(e.data.message)})).catch((function(){return w("Something went wrong...")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){C.invalidateQueries(["posts"])}}),z=function(){T.mutate({postBookmark:s})};return(0,j.jsxs)("div",{className:"post-actions",children:[(0,j.jsxs)("div",{className:"post-actions-left",children:[null!==n&&void 0!==n&&n.likes.includes(N.id)?(0,j.jsx)(i.M_L,{className:"post-icon",style:{color:"#ff3040"},onClick:L}):(0,j.jsx)(i.lo,{className:"post-icon",onClick:L}),g?(0,j.jsx)(c.ZvA,{className:"post-icon"}):(0,j.jsx)(l.rU,{className:"link",to:"posts/".concat(s),onClick:u.c,children:(0,j.jsx)(c.ZvA,{className:"post-icon"})}),(0,j.jsx)(i.gYb,{className:"post-icon",onClick:function(){return _(!0)}})]}),(0,j.jsx)("div",{className:"post-actions-right",children:null!==n&&void 0!==n&&n.bookmarks.includes(N.id)?(0,j.jsx)(o.VyV,{className:"post-icon",onClick:z}):(0,j.jsx)(o.SAh,{className:"post-icon",onClick:z})}),U&&(0,j.jsx)(x.Z,{setOpenNewchat:_,type:"Send",title:"Share"})]})}},1342:function(e,s,n){var t=n(4165),a=n(5861),r=n(9439),i=n(2791),c=n(8820),o=n(1635),l=n(6403),u=n(3418),d=n(3271),m=n(7689),h=n(8320),p=n(7783),f=n(184);s.Z=function(e){var s=e.setOpenEditProfile,n=e.currentUser,x=e.setCurrentUser,j=e.data,g=(0,i.useState)(null===j||void 0===j?void 0:j.name),v=(0,r.Z)(g,2),N=v[0],k=v[1],w=(0,i.useState)(null===j||void 0===j?void 0:j.username),Z=(0,r.Z)(w,2),C=Z[0],b=Z[1],y=(0,i.useState)(null===j||void 0===j?void 0:j.email),S=(0,r.Z)(y,2),O=S[0],U=S[1],_=(0,i.useState)(null===j||void 0===j?void 0:j.bio),A=(0,r.Z)(_,2),L=A[0],T=A[1],z=(0,i.useState)(null===j||void 0===j?void 0:j.location),M=(0,r.Z)(z,2),I=M[0],P=M[1],E=(0,i.useState)(),B=(0,r.Z)(E,2),F=B[0],V=B[1],D=(0,i.useState)(!1),Q=(0,r.Z)(D,2),H=Q[0],R=Q[1],W=null===j||void 0===j?void 0:j.username,G=(0,m.s0)(),J=(0,i.useContext)(h.V),Y=J.successMessage,K=J.errorMessage,X=(0,l.NL)(),$=(0,u.D)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,d.Z.patch("/users",a,{headers:{Authorization:"Bearer ".concat(n.accessToken)}}).then((function(e){Y(e.data.message);var t=e.data.user,a=t.id,r=t.username,i=t.avatar;x({id:a,username:r,avatar:i,accessToken:n.accessToken}),R(!1),(0,o.handleCloseOptions)(s),G("/")})).catch((function(){K("Something went wrong..."),R(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){W!==n.username&&X.invalidateQueries(["users",n.username])}});return(0,f.jsxs)("div",{className:"edit",onClick:function(e){return"edit"===e.target.className&&(0,o.handleCloseOptions)(s)},children:[H&&(0,f.jsx)(p.Z,{}),(0,f.jsxs)("div",{className:"edit-container",children:[(0,f.jsx)("h2",{children:"Edit profile"}),(0,f.jsxs)("form",{className:"edit-profile",children:[(0,f.jsx)("input",{type:"text",placeholder:"Full Name",value:N,className:"edit-form-input",onChange:function(e){return k(e.target.value)}}),(0,f.jsx)("input",{type:"text",placeholder:"User Name",value:C,className:"edit-form-input",onChange:function(e){return b(e.target.value)}}),(0,f.jsx)("input",{type:"text",placeholder:"Email",value:O,className:"edit-form-input",onChange:function(e){return U(e.target.value)}}),(0,f.jsx)("input",{type:"text",placeholder:"Bio",value:L,className:"edit-form-input",onChange:function(e){return T(e.target.value)}}),(0,f.jsx)("input",{type:"text",placeholder:"Location",value:I,className:"edit-form-input",onChange:function(e){return P(e.target.value)}}),(0,f.jsxs)("div",{className:"form-edit-group",children:[(0,f.jsx)("input",{type:"file",className:"edit-profile-img",onChange:function(e){return V(e.target.files[0])}}),F&&(0,f.jsx)("img",{src:URL.createObjectURL(F),alt:""})]}),(0,f.jsx)("button",{className:"edit-btn",onClick:function(e){e.preventDefault();var s=new FormData;s.append("name",N),s.append("username",C),s.append("email",O),L&&s.append("bio",L),I&&s.append("location",I),F&&s.append("avatar",F),$.mutate(s)},children:"Submit"})]})]}),(0,f.jsx)(c.oHP,{className:"edit-close",onClick:function(){return(0,o.handleCloseOptions)(s)}})]})}},9643:function(e,s,n){n.r(s),n.d(s,{default:function(){return J}});var t=n(9439),a=n(2791),r=n(2323),i=n(8320),c=n(4165),o=n(5861),l=n(6403),u=n(3418),d=n(1087),m=n(3271),h=n(7783),p=n(8820),f=n(1635),x=n(8194),j=n(1342),g=n(4715),v=n(184),N=function(e){var s,n,r=e.username,N=(0,a.useContext)(i.V),k=N.currentUser,w=N.setCurrentUser,Z=N.socket,C=N.errorMessage,b=(0,f.GetUserProfile)("users",r),y=b.isLoading,S=b.data,O=b.error,U=(0,a.useState)(!1),_=(0,t.Z)(U,2),A=_[0],L=_[1],T=(0,a.useState)(!1),z=(0,t.Z)(T,2),M=z[0],I=z[1],P=(0,a.useState)(!1),E=(0,t.Z)(P,2),B=E[0],F=E[1],V=(0,l.NL)(),D=k.avatar,Q=(0,u.D)(function(){var e=(0,o.Z)((0,c.Z)().mark((function e(s){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,m.Z.post("/users/follow/fl",s,{headers:{Authorization:"Bearer ".concat(k.accessToken)}}).then((function(e){F(!1),Z.current&&Z.current.emit("send-notifications",{sender:{username:r,avatar:D},receiver:null===S||void 0===S?void 0:S._id,type:"follow"})})).catch((function(){C("Something went wrong..."),F(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){V.invalidateQueries(["posts"])}});if(!y&&!O)return(0,v.jsxs)("div",{className:S.posts.length>0?"user-card":"user-card no-posts",children:[(0,v.jsxs)("div",{className:"user-card-top",children:[(0,v.jsxs)("div",{className:"user-card-info",children:[(0,v.jsx)(d.rU,{to:"".concat(S.username),className:"link",onClick:x.c,children:(0,v.jsx)("img",{src:S.avatar,alt:"",className:"user-card-avatar"})}),(0,v.jsxs)("div",{className:"user-card-details",children:[(0,v.jsx)(d.rU,{to:"".concat(S.username),className:"link",onClick:x.c,children:(0,v.jsx)("p",{className:"user-card-username",children:S.username})}),(0,v.jsx)("p",{className:"user-card-name",children:S.name})]})]}),(0,v.jsxs)("ul",{className:"user-card-title",children:[(0,v.jsxs)("li",{className:"user-card-item",children:[(0,v.jsx)("b",{children:S.posts.length}),(0,v.jsx)("p",{className:"user-card-desc",children:"posts"})]}),(0,v.jsxs)("li",{className:"user-card-item",children:[(0,v.jsx)("b",{children:S.followers.length}),(0,v.jsx)("p",{className:"user-card-desc",children:"followers"})]}),(0,v.jsxs)("li",{className:"user-card-item",children:[(0,v.jsx)("b",{children:S.followings.length}),(0,v.jsx)("p",{className:"user-card-desc",children:"followings"})]})]})]}),S.posts.length>0?(0,v.jsx)("div",{className:"user-card-posts",children:S.posts.map((function(e,s){if(s<3)return(0,v.jsx)("img",{src:e.image[0],alt:"",className:"user-card-posts-img"},e._id)}))}):(0,v.jsxs)("div",{className:"user-card-notice",children:[(0,v.jsx)("div",{className:"user-card-icon",children:(0,v.jsx)(p.rJU,{})}),(0,v.jsx)("h2",{children:"No posts yet"}),(0,v.jsxs)("p",{className:"user-card-text",children:["When ",r," shares photos and reels, you'll see them here."]})]}),(0,v.jsx)("div",{className:"user-card-actions",children:(null===(s=S.followers)||void 0===s||null===(n=s.filter((function(e){return e._id===k.id})))||void 0===n?void 0:n.length)>0?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("button",{className:"user-card-btn-msg",children:"Message"}),(0,v.jsx)("button",{className:"user-card-btn-unfollow",onClick:function(){return(0,f.handleOpenOptions)(I)},children:"Following"})]}):k.username===r?(0,v.jsx)("button",{className:"user-card-btn-edit",onClick:function(){return(0,f.handleOpenOptions)(L)},children:"Edit profile"}):(0,v.jsx)("button",{className:"user-card-btn-follow",onClick:function(){Q.mutate({friendId:null===S||void 0===S?void 0:S._id})},children:B?(0,v.jsx)(h.Z,{}):"Follow"})}),A&&(0,v.jsx)(j.Z,{setOpenEditProfile:L,currentUser:k,setCurrentUser:w,data:S}),M&&(0,v.jsx)(g.Z,{friendId:null===S||void 0===S?void 0:S._id,setOpenFollow:I})]})},k=function(e){var s=e.user,n=(0,l.NL)(),r=(0,a.useState)(!1),p=(0,t.Z)(r,2),f=p[0],x=p[1],j=(0,a.useState)("Follow"),g=(0,t.Z)(j,2),k=g[0],w=g[1],Z=(0,a.useState)(!1),C=(0,t.Z)(Z,2),b=C[0],y=C[1],S=(0,a.useContext)(i.V),O=S.currentUser,U=S.successMessage,_=S.errorMessage,A=(0,u.D)(function(){var e=(0,o.Z)((0,c.Z)().mark((function e(s){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,m.Z.post("/users/follow",s,{headers:{Authorization:"Bearer ".concat(O.accessToken)}}).then((function(e){U(e.data.message),w(""),x(!1)})).catch((function(){return _("Something went wrong...")}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){n.invalidateQueries(["posts"])}});return(0,v.jsxs)("div",{className:"userinfo",children:[(0,v.jsx)(d.rU,{to:"/".concat(s.username),className:"link",children:(0,v.jsxs)("div",{className:"userinfo-details",onMouseOver:function(){return y(!0)},onMouseOut:function(){return y(!1)},children:[(0,v.jsx)("img",{src:s.avatar,alt:"",className:"userinfo-img"}),(0,v.jsx)("p",{className:"userinfo-username",children:s.username}),b&&(0,v.jsx)(N,{username:s.username})]})}),(0,v.jsx)("div",{className:"userinfo-btn",onClick:function(){return e=s._id,void A.mutate({friendId:e});var e},children:f?(0,v.jsx)(h.Z,{}):k})]})},w=n(7689),Z=n(2579),C=n(8290),b=function(e){var s=e.suggests;return Array(s).fill(0).map((function(e,s){return(0,v.jsx)("div",{className:"skeleton",children:(0,v.jsx)("div",{className:"suggest-sk",children:(0,v.jsxs)("div",{className:"suggest-details-sk",children:[(0,v.jsx)(C.Z,{circle:!0,width:32,height:32}),(0,v.jsx)(C.Z,{width:100,height:10})]})})},s)}))},y=function(){var e=(0,a.useContext)(i.V),s=e.currentUser,n=e.setCurrentUser,r=e.successMessage,l=(0,a.useState)(!1),u=(0,t.Z)(l,2),p=u[0],x=u[1],j=(0,w.s0)(),g=(0,a.useState)(!1),N=(0,t.Z)(g,2),C=N[0],y=N[1],S=(0,a.useState)([]),O=(0,t.Z)(S,2),U=O[0],_=O[1],A=(0,a.useState)(!1),L=(0,t.Z)(A,2),T=L[0],z=L[1];(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!0),e.next=4,m.Z.get("/users/suggestions",{headers:{Authorization:"Bearer ".concat(s.accessToken)}});case 4:n=e.sent,_(n.data.users),z(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),z(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[s.accessToken]);return(0,v.jsxs)("div",{className:"rightbar",children:[C&&(0,v.jsx)(h.Z,{}),(0,v.jsxs)("div",{className:"rightbar-container",children:[(0,v.jsxs)("div",{className:"rightbar-info",children:[(0,v.jsx)(d.rU,{to:"/".concat(s.username),className:"link",children:(0,v.jsxs)("div",{className:"rightbar-info-details",children:[(0,v.jsx)("img",{src:s.avatar,alt:"",className:"rightbar-info-img"}),(0,v.jsxs)("div",{className:"rightbar-info-fullname",children:[(0,v.jsx)("p",{className:"rightbar-info-username",children:s.username}),(0,v.jsx)("p",{className:"rightbar-info-name",children:s.name})]})]})}),(0,v.jsx)("p",{className:"rightbar-info-btn",onClick:function(){return(0,f.handleOpenOptions)(x)},children:"Switch"})]}),(0,v.jsxs)("div",{className:"rightbar-suggests",children:[(0,v.jsx)("p",{className:"rightbar-suggest-text",children:"Suggest for you"}),T?(0,v.jsx)(b,{suggests:4}):U&&U.map((function(e){return(0,v.jsx)(k,{user:e},e._id)}))]}),(0,v.jsx)("div",{className:"rightbar-foot",children:(0,v.jsx)("p",{className:"rightbar-copyright",children:"\xa9 2023 KEEPSTORY FROM TUAN"})})]}),p&&(0,v.jsx)(Z.Z,{setSwitchAccount:x,handleLogout:function(){y(!0),n({}),r("You have been logged out"),setTimeout((function(){j("/accounts/login")}),1e3),y(!1)}})]})},S=n(5914),O=n(3166),U=function(e){var s=e.posts;return Array(s).fill(0).map((function(e,s){return(0,v.jsx)("div",{className:"skeleton",children:(0,v.jsxs)("div",{className:"post-sk",children:[(0,v.jsxs)("div",{className:"post-info-sk",children:[(0,v.jsx)(C.Z,{circle:!0,width:32,height:32}),(0,v.jsxs)("div",{className:"post-info-details-sk",children:[(0,v.jsx)(C.Z,{width:120,height:10}),(0,v.jsx)(C.Z,{width:90,height:10})]})]}),(0,v.jsx)("div",{className:"post-img-sk",children:(0,v.jsx)(C.Z,{width:480,height:500})})]})},s)}))},_=n(8027),A=n(6856),L=n(1413),T=function(e){var s=(0,a.useState)(!1),n=(0,t.Z)(s,2),r=n[0],i=n[1],c=(0,a.useRef)(),o=function(e,s){e.forEach((function(e){e.isIntersecting&&i(!0)}))};return(0,a.useEffect)((function(){var e=new IntersectionObserver(o);return null!==c&&void 0!==c&&c.current&&e.observe(c.current),function(){e.disconnect()}}),[]),r?(0,v.jsx)("img",(0,L.Z)((0,L.Z)({},e),{},{alt:""})):(0,v.jsx)("img",{alt:"",ref:c,className:"lazy-img"})},z=function(e){var s=e.post,n=e.openCreate,r=(0,a.useState)(0),i=(0,t.Z)(r,2),c=i[0],o=i[1],l=(0,a.useState)(""),u=(0,t.Z)(l,2),d=u[0],m=u[1],h=function(e,s){m(s._id),"left"===e&&c>0?o((function(e){return e-1})):"right"===e&&c<s.image.length-1?o((function(e){return e+1})):o(0)};return(0,v.jsxs)("div",{className:"post-img",children:[s.image.length>1&&c>0&&(0,v.jsx)(A.D68,{className:n?"post-img-btn prev hidden":"post-img-btn prev",onClick:function(){return h("left",s)}}),s.image.length>1&&c<s.image.length-1&&(0,v.jsx)(A.sOJ,{className:n?"post-img-btn next hidden":"post-img-btn next",onClick:function(){return h("right",s)}}),(0,v.jsxs)("div",{className:"post-img-container",style:{transform:d===s._id&&"translateX(".concat(-470*c,"px)")},children:[s.image.map((function(e,s){return(0,v.jsx)(T,{id:s+"post-img-lazy",src:e},s)})),s.image.length>1&&(0,v.jsx)("p",{className:"post-img-count",children:"".concat(c+1," / ").concat(s.image.length)})]})]})},M=n(8617),I=function(e){var s=e.setOpenPostOptions,n=e.ownPost,r=e.postId,x=(0,a.useContext)(i.V),j=x.currentUser,g=x.successMessage,N=x.errorMessage,k=(0,l.NL)(),w=(0,a.useState)(!1),Z=(0,t.Z)(w,2),C=Z[0],b=Z[1],y=(0,u.D)(function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,m.Z.delete("/posts/".concat(r),{headers:{Authorization:"Bearer ".concat(j.accessToken)}}).then((function(e){g(e.data.message),b(!1),(0,f.handleCloseOptions)(s)})).catch((function(){N("Something went wrong..."),b(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){k.invalidateQueries(["posts"])}});return(0,v.jsxs)("div",{className:"po",onClick:function(e){return"po"===e.target.className&&(0,f.handleCloseOptions)(s)},children:[C&&(0,v.jsx)(h.Z,{}),(0,v.jsx)("div",{className:"po-container",children:(0,v.jsxs)("ul",{className:"po-list",children:[n===j.username&&(0,v.jsx)("li",{className:"po-item",style:{color:"#ed4956",fontWeight:500},onClick:function(){y.mutate()},children:"Remove post"}),(0,v.jsx)("li",{className:"po-item",children:(0,v.jsx)(d.rU,{to:"/posts/".concat(r),className:"link",onClick:function(){return(0,f.handleCloseOptions)(s)},children:"Go to post"})}),(0,v.jsx)("li",{className:"po-item",onClick:function(){var e=window.location.href;e+="posts/".concat(r),navigator.clipboard.writeText(e).then((function(){return g("Link copied to clipboard")})).catch((function(){return N("Can not copy to link")})),(0,f.handleCloseOptions)(s)},children:"Copy link"}),(0,v.jsx)("li",{className:"po-item",children:"Share to..."}),(0,v.jsx)("li",{className:"po-item",children:(0,v.jsx)(d.rU,{to:"/".concat(n),className:"link",onClick:function(){return(0,f.handleCloseOptions)(s)},children:"About this account"})}),(0,v.jsx)("li",{className:"po-item",onClick:function(){return(0,f.handleCloseOptions)(s)},children:"Cancel"})]})}),(0,v.jsx)(p.oHP,{className:"po-close",onClick:function(){return(0,f.handleCloseOptions)(s)}})]})},P=function(e){var s=e.post,n=(0,a.useContext)(i.V),r=n.currentUser,p=n.socket,j=n.errorMessage,g=(0,a.useState)(!1),k=(0,t.Z)(g,2),w=k[0],Z=k[1],C=(0,a.useState)(""),b=(0,t.Z)(C,2),y=b[0],S=b[1],O=(0,a.useState)(""),U=(0,t.Z)(O,2),_=U[0],A=U[1],L=(0,a.useState)(!1),T=(0,t.Z)(L,2),z=T[0],P=T[1],E=(0,a.useState)(!1),B=(0,t.Z)(E,2),F=B[0],V=B[1],D=(0,l.NL)(),Q=r.username,H=r.avatar,R=(0,u.D)(function(){var e=(0,o.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,m.Z.post("/users/follow/fl",n,{headers:{Authorization:"Bearer ".concat(r.accessToken)}}).then((function(e){V(!1),p.current&&p.current.emit("send-notifications",{sender:{username:Q,avatar:H},receiver:s.author._id,type:"follow"})})).catch((function(){j("Something went wrong..."),V(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){D.invalidateQueries(["posts"])}});return(0,v.jsxs)("div",{className:"post-info",children:[(0,v.jsxs)("div",{className:"post-info-details",onMouseOver:function(){return P(!0)},onMouseOut:function(){return P(!1)},children:[(0,v.jsx)(d.rU,{className:"link",to:"/".concat(s.author.username),onClick:x.c,children:(0,v.jsx)("img",{src:s.author.avatar,alt:"",className:"post-info-avatar"})}),(0,v.jsx)(d.rU,{className:"link",to:"/".concat(s.author.username),onClick:x.c,children:(0,v.jsx)("p",{className:"post-info-username",children:s.author.username})}),(0,v.jsxs)("p",{className:"post-info-created",children:["\u2022 ",(0,f.formatTime)(s.createdAt)]}),(0,v.jsx)("p",{className:"post-info-btn-fl",onClick:function(){R.mutate({friendId:s.author._id})},children:F?(0,v.jsx)(h.Z,{}):!s.author.followers.includes(r.id)&&s.author._id!=r.id&&"\u2022 Follow"}),z&&(0,v.jsx)(N,{username:s.author.username})]}),(0,v.jsx)(M.Ws$,{className:"post-info-options",onClick:function(){return(0,f.handleOpenOptions)(Z,s.author.username,s._id,S,A)}}),w&&(0,v.jsx)(I,{setOpenPostOptions:Z,ownPost:y,postId:_})]})},E=function(e){var s=e.post,n=e.openCreate;return(0,v.jsxs)("div",{className:"post",children:[(0,v.jsx)(P,{post:s}),(0,v.jsx)(z,{post:s,openCreate:n}),(0,v.jsx)(_.Z,{postId:s._id,post:s}),s.likes.length>0&&(0,v.jsx)("p",{className:"post-text",children:(0,v.jsxs)("b",{style:{fontSize:"14px"},children:[s.likes.length," likes"]})}),(0,v.jsxs)("div",{className:"post-title",children:[(0,v.jsx)("p",{className:"post-title-username",children:s.author.username}),(0,v.jsxs)("p",{className:"post-title-caption",children:[s.caption.length>40?"".concat(s.caption.substring(0,40),"..."):s.caption,s.caption.length>40&&(0,v.jsx)(d.rU,{to:"/posts/".concat(s._id),className:"link",children:(0,v.jsx)("span",{className:"post-viewmore",children:"View more"})})]})]})]},s._id)},B=function(e){var s=e.openCreate,n=(0,S.D)("posts"),t=n.isLoading,a=n.data,r=n.error;return r?(0,v.jsx)(O.Z,{}):(0,v.jsx)("div",{className:"posts",children:(0,v.jsx)("div",{className:"posts-container",children:t?(0,v.jsx)(U,{posts:1}):r?(0,v.jsx)("p",{children:"Somethings wents wrong..."}):a.map((function(e){return(0,v.jsx)(E,{post:e,openCreate:s},e._id)}))})})},F=function(){return(0,v.jsx)("div",{className:"stories",children:(0,v.jsxs)("div",{className:"stories-container",children:[(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]}),(0,v.jsxs)("div",{className:"story",children:[(0,v.jsx)("img",{src:"https://i.pinimg.com/564x/17/51/d2/1751d2aa3f581b31c2ade112b2a885ae.jpg",alt:"",className:"story-img"}),(0,v.jsx)("p",{className:"story-username",children:"_tuanoday"})]})]})})},V=function(e){var s=e.openCreate;return(0,v.jsx)("div",{className:"section",children:(0,v.jsxs)("div",{className:"section-container",children:[(0,v.jsx)(F,{}),(0,v.jsx)(B,{openCreate:s})]})})},D=n(103),Q=function(e){var s,n,r=e.item,i=e.currentUser,d=e.data,p=(0,a.useState)(!1),x=(0,t.Z)(p,2),j=x[0],N=x[1],k=(0,l.NL)(),w=(0,a.useState)(!1),Z=(0,t.Z)(w,2),C=Z[0],b=Z[1],y=(0,a.useRef)(),S=(0,u.D)(function(){var e=(0,o.Z)((0,c.Z)().mark((function e(s){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,m.Z.post("/users/follow/fl",s,{headers:{Authorization:"Bearer ".concat(i.accessToken)}}).then((function(e){N(!1)})).catch((function(){N(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),{onSuccess:function(){k.invalidateQueries(["friends"])}});return(0,a.useEffect)((function(){C?y.current&&y.current.parentElement.classList.remove("load"):y.current&&y.current.parentElement.classList.add("load")}),[C]),(0,v.jsxs)("li",{className:"sg-item",ref:y,children:[(0,v.jsxs)("div",{className:"sg-info",children:[(0,v.jsx)("img",{src:r.avatar,alt:"",className:"sg-img"}),(0,v.jsxs)("div",{className:"sg-info-details",children:[(0,v.jsx)("p",{className:"sg-username",children:r.username}),(0,v.jsx)("p",{className:"sg-name",children:r.name})]})]}),!(null!==d&&void 0!==d&&null!==(s=d.followings)&&void 0!==s&&s.includes(r._id))&&(0,v.jsx)("button",{className:"sg-btn follow",onClick:function(){var e;(e=r._id)&&S.mutate({friendId:e})},children:j?(0,v.jsx)(h.Z,{}):"Follow"}),(null===d||void 0===d||null===(n=d.followings)||void 0===n?void 0:n.includes(r._id))&&(0,v.jsx)("button",{className:"sg-btn following",onClick:function(){return(0,f.handleOpenOptions)(b)},children:"Following"}),C&&(0,v.jsx)(g.Z,{setOpenFollow:b,friendId:r._id})]})},H=function(e){var s=e.loading,n=e.listUser,t=e.currentUser,a=e.data,r=e.handleStarted;return(0,v.jsxs)("div",{className:"sg",children:[(0,v.jsxs)("div",{className:"sg-container",children:[(0,v.jsx)("h2",{children:"Suggested for you"}),(0,v.jsxs)("ul",{className:"sg-list load",children:[s?(0,v.jsx)(h.Z,{}):null===n||void 0===n?void 0:n.map((function(e){return(0,v.jsx)(Q,{item:e,currentUser:t,data:a},e._id)})),(null===a||void 0===a?void 0:a.followings.length)>0&&(0,v.jsx)("button",{className:"sg-btn-get-started",onClick:r,children:"Get started"})]})]}),(0,v.jsx)(D.Z,{})]})},R=function(e){var s=e.openCreate,n=(0,a.useState)(),r=(0,t.Z)(n,2),l=r[0],u=r[1],d=(0,a.useContext)(i.V),h=d.currentUser,p=d.setErrorPage,x=(0,a.useState)(!1),j=(0,t.Z)(x,2),g=j[0],N=j[1],k=(0,f.GetListFriend)("friends"),w=(k.isLoading,k.data);k.error;(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,c.Z)().mark((function e(){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,m.Z.get("/users/first-login",{headers:{Authorization:"Bearer ".concat(h.accessToken)}});case 4:s=e.sent,u(s.data.results),N(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),N(!1),401===e.t0.response.status&&p(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]);return(0,v.jsx)("div",{className:"main",children:0===(null===l||void 0===l?void 0:l.length)?(0,v.jsxs)("div",{className:"main-container",children:[(0,v.jsx)(V,{openCreate:s}),(0,v.jsx)(y,{})]}):(0,v.jsx)(H,{loading:g,listUser:l,data:w,currentUser:h,handleStarted:function(){window.location.reload()}})})},W=function(){return(0,v.jsx)("p",{style:{height:"32px",lineHeight:"32px",fontSize:"14px",backgroundColor:"#222",color:"#fff",letterSpacing:"1px",wordSpacing:"2px",textAlign:"center",position:"absolute",width:"100vw",zIndex:5e3,top:"-32px"},className:"top-sub",children:"Welcome my page \xa9\ufe0f no copyright"})},G=function(e){var s=e.setIsPage401,n=(0,w.s0)();return(0,v.jsx)("div",{className:"authorized-page",children:(0,v.jsxs)("div",{className:"authorized-page-container",children:[(0,v.jsx)("h2",{className:"authorized-page-title",children:"Sorry, something went wrong"}),(0,v.jsx)("p",{className:"authorized-page-text",children:"Please try close browser and login again."}),(0,v.jsx)("button",{className:"authorized-page-btn",onClick:function(){s(!1),n("/accounts/login"),setTimeout((function(){window.location.reload()}),200)},children:"Ok"})]})})},J=function(){var e=(0,a.useState)(!1),s=(0,t.Z)(e,2),n=(s[0],s[1],(0,a.useContext)(i.V)),c=n.currentUser,o=n.setCurrentUser,l=n.errorPage,u=(0,a.useState)(!1),d=(0,t.Z)(u,2),m=d[0],h=d[1],p=(0,a.useState)(!1),f=(0,t.Z)(p,2),x=f[0],j=f[1];(0,a.useEffect)((function(){window.addEventListener("load",(function(){h(!0),setTimeout((function(){h(!1)}),5e3)}))}),[c]);var g=(0,a.useState)(!1),N=(0,t.Z)(g,2),k=N[0],w=N[1];return(0,a.useEffect)((function(){l&&j(!0)}),[l]),(0,v.jsxs)("div",{className:x?"home unauthorized":"home",children:[m&&(0,v.jsx)(W,{}),(0,v.jsx)(r.Z,{openCreate:k,setOpenCreate:w}),(0,v.jsx)(R,{openCreate:k}),x&&(0,v.jsx)(G,{setIsPage401:j,setCurrentUser:o})]})}},8194:function(e,s,n){n.d(s,{c:function(){return t}});var t=function(){window.scrollTo(0,0)}}}]);
//# sourceMappingURL=643.d27bf517.chunk.js.map