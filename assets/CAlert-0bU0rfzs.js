import{r,_ as x,R as t,a as y,c as T,P as s,b as g}from"./index-lMwZ4wLQ.js";import{u as k,T as w,C as P}from"./api-BvH-JseP.js";var m=r.forwardRef(function(e,f){var b=e.children,v=e.className,o=e.color,n=o===void 0?"primary":o,a=e.dismissible,p=e.variant,l=e.visible,i=l===void 0?!0:l,C=e.onClose,R=x(e,["children","className","color","dismissible","variant","visible","onClose"]),c=r.useRef(null),E=k(f,c),d=r.useState(i),N=d[0],u=d[1];return r.useEffect(function(){u(i)},[i]),t.createElement(w,{in:N,mountOnEnter:!0,nodeRef:c,onExit:C,timeout:150,unmountOnExit:!0},function(h){return t.createElement("div",y({className:T("alert",p==="solid"?"bg-".concat(n," text-white"):"alert-".concat(n),{"alert-dismissible fade":a,show:h==="entered"},v),role:"alert"},R,{ref:E}),b,a&&t.createElement(P,{onClick:function(){return u(!1)}}))})});m.propTypes={children:s.node,className:s.string,color:g.isRequired,dismissible:s.bool,onClose:s.func,variant:s.string,visible:s.bool};m.displayName="CAlert";export{m as C};
