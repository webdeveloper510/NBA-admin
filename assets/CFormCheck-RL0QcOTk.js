import{r as v,_ as j,R as e,a as d,c as l,P as a}from"./index-DmIDuIAH.js";import{C as y}from"./CFormControlValidation-B0o-OTtV.js";import{C}from"./CFormLabel-akASq4i3.js";import{u as w}from"./api-DHK8CfzK.js";var g=v.forwardRef(function(t,N){var k=t.className,n=t.button,R=t.feedback,L=t.feedbackInvalid,V=t.feedbackValid,x=t.floatingLabel,A=t.tooltipFeedback,p=t.hitArea,r=t.id,m=t.indeterminate,I=t.inline,s=t.invalid,i=t.label,T=t.reverse,h=t.type,O=h===void 0?"checkbox":h,f=t.valid,E=j(t,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),c=v.useRef(null),z=w(N,c);v.useEffect(function(){c.current&&m&&(c.current.indeterminate=m)},[m,c.current]);var o=function(){return e.createElement("input",d({type:O,className:l(n?"btn-check":"form-check-input",{"is-invalid":s,"is-valid":f,"me-2":p}),id:r},E,{ref:z}))},b=function(){return e.createElement(y,{describedby:E["aria-describedby"],feedback:R,feedbackInvalid:L,feedbackValid:V,floatingLabel:x,invalid:s,tooltipFeedback:A,valid:f})},F=function(){var u;return e.createElement(C,d({customClassName:l(n?l("btn",n.variant?"btn-".concat(n.variant,"-").concat(n.color):"btn-".concat(n.color),(u={},u["btn-".concat(n.size)]=n.size,u),"".concat(n.shape)):"form-check-label")},r&&{htmlFor:r}),i)},P=function(){return n?e.createElement(e.Fragment,null,e.createElement(o,null),i&&e.createElement(F,null),e.createElement(b,null)):i?p?e.createElement(e.Fragment,null,e.createElement(o,null),e.createElement(C,d({customClassName:l("form-check-label stretched-link",k)},r&&{htmlFor:r}),i),e.createElement(b,null)):e.createElement("div",{className:l("form-check",{"form-check-inline":I,"form-check-reverse":T,"is-invalid":s,"is-valid":f},k)},e.createElement(o,null),e.createElement(F,null),e.createElement(b,null)):e.createElement(o,null)};return e.createElement(P,null)});g.propTypes=d({button:a.object,className:a.string,hitArea:a.oneOf(["full"]),id:a.string,indeterminate:a.bool,inline:a.bool,label:a.oneOfType([a.string,a.node]),reverse:a.bool,type:a.oneOf(["checkbox","radio"])},y.propTypes);g.displayName="CFormCheck";export{g as C};
