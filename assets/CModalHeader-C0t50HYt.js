import{r as o,_ as p,R as l,a as m,c as v,P as n}from"./index-lMwZ4wLQ.js";import{u as le,T as re,C as te}from"./api-BvH-JseP.js";import{z as j,A as ae}from"./DefaultLayout-BLpIrPSH.js";var E=o.forwardRef(function(e,s){var r=e.children,d=e.className,a=p(e,["children","className"]);return l.createElement("div",m({className:v("modal-content",d)},a,{ref:s}),r)});E.propTypes={children:n.node,className:n.string};E.displayName="CModalContent";var k=o.forwardRef(function(e,s){var r,d=e.children,a=e.alignment,i=e.className,u=e.fullscreen,f=e.scrollable,b=e.size,y=p(e,["children","alignment","className","fullscreen","scrollable","size"]);return l.createElement("div",m({className:v("modal-dialog",(r={"modal-dialog-centered":a==="center"},r[typeof u=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(u,"-down")]=u,r["modal-dialog-scrollable"]=f,r["modal-".concat(b)]=b,r),i)},y,{ref:s}),d)});k.propTypes={alignment:n.oneOf(["top","center"]),children:n.node,className:n.string,fullscreen:n.oneOfType([n.bool,n.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:n.bool,size:n.oneOf(["sm","lg","xl"])};k.displayName="CModalDialog";var A=o.createContext({}),I=o.forwardRef(function(e,s){var r=e.children,d=e.alignment,a=e.backdrop,i=a===void 0?!0:a,u=e.className,f=e.container,b=e.duration,y=b===void 0?150:b,x=e.focus,J=x===void 0?!0:x,Q=e.fullscreen,w=e.keyboard,U=w===void 0?!0:w,W=e.onClose,R=e.onClosePrevented,X=e.onShow,O=e.portal,T=O===void 0?!0:O,Y=e.scrollable,Z=e.size,M=e.transition,h=M===void 0?!0:M,P=e.unmountOnClose,$=P===void 0?!0:P,N=e.visible,_=p(e,["children","alignment","backdrop","className","container","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),z=o.useRef(null),C=o.useRef(null),ee=o.useRef(null),ne=le(s,C),B=o.useState(N),c=B[0],g=B[1],L=o.useState(!1),S=L[0],V=L[1],oe={visible:c,setVisible:g};o.useEffect(function(){g(N)},[N]),o.useEffect(function(){var t;return c?(z.current=document.activeElement,document.addEventListener("mouseup",F),document.addEventListener("keydown",H)):(t=z.current)===null||t===void 0||t.focus(),function(){document.removeEventListener("mouseup",F),document.removeEventListener("keydown",H)}},[c]);var D=function(){if(i==="static")return V(!0);g(!1)};o.useLayoutEffect(function(){R&&R(),setTimeout(function(){return V(!1)},y)},[S]),o.useLayoutEffect(function(){return c?(document.body.classList.add("modal-open"),i&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var t;J&&((t=C.current)===null||t===void 0||t.focus())},h?y:0)):(document.body.classList.remove("modal-open"),i&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),i&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[c]);var F=function(t){C.current&&C.current==t.target&&D()},H=function(t){t.key==="Escape"&&U&&D()};return l.createElement(l.Fragment,null,l.createElement(re,{in:c,mountOnEnter:!0,nodeRef:C,onEnter:X,onExit:W,unmountOnExit:$,timeout:h?y:0},function(t){return l.createElement(j,{container:f,portal:T},l.createElement(A.Provider,{value:oe},l.createElement("div",m({className:v("modal",{"modal-static":S,fade:h,show:t==="entered"},u),tabIndex:-1},c?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:m({},t!=="exited"&&{display:"block"})},_,{ref:ne}),l.createElement(k,{alignment:d,fullscreen:Q,scrollable:Y,size:Z},l.createElement(E,{ref:ee},r)))))}),i&&l.createElement(j,{container:f,portal:T},l.createElement(ae,{visible:c})))});I.propTypes={alignment:n.oneOf(["top","center"]),backdrop:n.oneOfType([n.bool,n.oneOf(["static"])]),children:n.node,className:n.string,container:n.any,duration:n.number,focus:n.bool,fullscreen:n.oneOfType([n.bool,n.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:n.bool,onClose:n.func,onClosePrevented:n.func,onShow:n.func,portal:n.bool,scrollable:n.bool,size:n.oneOf(["sm","lg","xl"]),transition:n.bool,unmountOnClose:n.bool,visible:n.bool};I.displayName="CModal";var K=o.forwardRef(function(e,s){var r=e.children,d=e.className,a=p(e,["children","className"]);return l.createElement("div",m({className:v("modal-body",d)},a,{ref:s}),r)});K.propTypes={children:n.node,className:n.string};K.displayName="CModalBody";var q=o.forwardRef(function(e,s){var r=e.children,d=e.className,a=p(e,["children","className"]);return l.createElement("div",m({className:v("modal-footer",d)},a,{ref:s}),r)});q.propTypes={children:n.node,className:n.string};q.displayName="CModalFooter";var G=o.forwardRef(function(e,s){var r=e.children,d=e.className,a=e.closeButton,i=a===void 0?!0:a,u=p(e,["children","className","closeButton"]),f=o.useContext(A).setVisible;return l.createElement("div",m({className:v("modal-header",d)},u,{ref:s}),r,i&&l.createElement(te,{onClick:function(){return f(!1)}}))});G.propTypes={children:n.node,className:n.string,closeButton:n.bool};G.displayName="CModalHeader";export{I as C,G as a,K as b,q as c};
