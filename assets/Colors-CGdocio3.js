import{o as p,j as r,r as d,P as m}from"./index-lMwZ4wLQ.js";import{D as f}from"./DefaultLayout-BLpIrPSH.js";import"./index.esm-BkQdAGAJ.js";import"./api-BvH-JseP.js";import{C as u,a as j}from"./CCardBody-DUmW3XHp.js";import{C as g}from"./CCardHeader-BcGlY8d-.js";import{C as b,a as C}from"./CRow-7t_rj6cG.js";import"./CContainer-CZBtYz9z.js";import"./cil-lock-locked-DmxpJbVL.js";var h={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var x;function y(){return x||(x=1,function(n){(function(){var o={}.hasOwnProperty;function e(){for(var s="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(s=c(s,l(i)))}return s}function l(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return e.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var t="";for(var i in s)o.call(s,i)&&s[i]&&(t=c(t,i));return t}function c(s,t){return t?s?s+" "+t:s+t:s}n.exports?(e.default=e,n.exports=e):window.classNames=e})()}(h)),h.exports}var N=y();const v=p(N);var w=function(n){if(typeof n>"u")throw new TypeError("Hex color is not defined");if(n==="transparent")return"#00000000";var o=n.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!o)throw new Error("".concat(n," is not a valid rgb color"));var e="0".concat(parseInt(o[1],10).toString(16)),l="0".concat(parseInt(o[2],10).toString(16)),c="0".concat(parseInt(o[3],10).toString(16));return"#".concat(e.slice(-2)).concat(l.slice(-2)).concat(c.slice(-2))};const S=()=>{const[n,o]=d.useState("rgb(255, 255, 255)"),e=d.createRef();return d.useEffect(()=>{const l=e.current.parentNode.firstChild,c=window.getComputedStyle(l).getPropertyValue("background-color");o(c)},[e]),r.jsx("table",{className:"table w-100",ref:e,children:r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"HEX:"}),r.jsx("td",{className:"font-weight-bold",children:w(n)})]}),r.jsxs("tr",{children:[r.jsx("td",{className:"text-body-secondary",children:"RGB:"}),r.jsx("td",{className:"font-weight-bold",children:n})]})]})})},a=({className:n,children:o})=>{const e=v(n,"theme-color w-75 rounded mb-3");return r.jsxs(C,{xs:12,sm:6,md:4,xl:2,className:"mb-4",children:[r.jsx("div",{className:e,style:{paddingTop:"75%"}}),o,r.jsx(S,{})]})};a.propTypes={children:m.node,className:m.string};const V=()=>r.jsx(r.Fragment,{children:r.jsxs(u,{className:"mb-4",children:[r.jsxs(g,{children:["Theme colors",r.jsx(f,{href:"https://coreui.io/docs/utilities/colors/"})]}),r.jsx(j,{children:r.jsxs(b,{children:[r.jsx(a,{className:"bg-primary",children:r.jsx("h6",{children:"Brand Primary Color"})}),r.jsx(a,{className:"bg-secondary",children:r.jsx("h6",{children:"Brand Secondary Color"})}),r.jsx(a,{className:"bg-success",children:r.jsx("h6",{children:"Brand Success Color"})}),r.jsx(a,{className:"bg-danger",children:r.jsx("h6",{children:"Brand Danger Color"})}),r.jsx(a,{className:"bg-warning",children:r.jsx("h6",{children:"Brand Warning Color"})}),r.jsx(a,{className:"bg-info",children:r.jsx("h6",{children:"Brand Info Color"})}),r.jsx(a,{className:"bg-light",children:r.jsx("h6",{children:"Brand Light Color"})}),r.jsx(a,{className:"bg-dark",children:r.jsx("h6",{children:"Brand Dark Color"})})]})})]})});export{V as default};
