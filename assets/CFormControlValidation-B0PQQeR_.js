import{r as k,_ as y,R as l,a as b,c as F,P as e}from"./index-DknxvMTE.js";var n=k.forwardRef(function(a,r){var i,c=a.children,o=a.as,d=o===void 0?"div":o,t=a.className,s=a.invalid,p=a.tooltip,m=a.valid,f=y(a,["children","as","className","invalid","tooltip","valid"]);return l.createElement(d,b({className:F((i={},i["invalid-".concat(p?"tooltip":"feedback")]=s,i["valid-".concat(p?"tooltip":"feedback")]=m,i),t)},f,{ref:r}),c)});n.propTypes={as:e.elementType,children:e.node,className:e.string,invalid:e.bool,tooltip:e.bool,valid:e.bool};n.displayName="CFormFeedback";var v=function(a){var r=a.describedby,i=a.feedback,c=a.feedbackInvalid,o=a.feedbackValid,d=a.invalid,t=a.tooltipFeedback,s=a.valid;return l.createElement(l.Fragment,null,i&&(s||d)&&l.createElement(n,b({},d&&{id:r},{invalid:d,tooltip:t,valid:s}),i),c&&l.createElement(n,{id:r,invalid:!0,tooltip:t},c),o&&l.createElement(n,{valid:!0,tooltip:t},o))};v.propTypes={describedby:e.string,feedback:e.oneOfType([e.node,e.string]),feedbackValid:e.oneOfType([e.node,e.string]),feedbackInvalid:e.oneOfType([e.node,e.string]),invalid:e.bool,tooltipFeedback:e.bool,valid:e.bool};v.displayName="CFormControlValidation";export{v as C,n as a};
