!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactQuill=e(require("react")):t.ReactQuill=e(t.React)}(window,(function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(e,o){e.exports=t},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o);var i=Object.getOwnPropertyDescriptor(e,o);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,n,i)}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),l=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&s(e,t,o);return a(e,t),e},d=this&&this.__spreadArray||function(t,e,o){if(o||2===arguments.length)for(var n,i=0,r=e.length;i<r;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},h=l(o(0)),p=u(o(1)),c=u(o(2)),f=function(t){function e(e){var o=t.call(this,e)||this;o.editingAreaRef=(0,h.createRef)(),o.dirtyProps=["modules","formats","bounds","theme","children"],o.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],o.state={generation:0},o.selection=null,o.onEditorChange=function(t,e,n,i){var r,s;"text-change"===t?null===(r=o.onEditorChangeText)||void 0===r||r.call(o,o.editor.root.innerHTML,e,i,o.unprivilegedEditor):"selection-change"===t&&(null===(s=o.onEditorChangeSelection)||void 0===s||s.call(o,e,i,o.unprivilegedEditor))};var n=o.isControlled()?e.value:e.defaultValue;return o.value=null!=n?n:"",o}return i(e,t),e.prototype.validateProps=function(t){if(h.default.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(h.default.Children.count(t.children)){var e=h.default.Children.only(t.children);if("textarea"===(null==e?void 0:e.type))throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var o,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var i=this.getEditorContents(),r=null!==(o=t.value)&&void 0!==o?o:"";this.isEqualValue(r,i)||this.setEditorContents(this.editor,r)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),d(d([],this.cleanProps,!0),this.dirtyProps,!0).some((function(e){return!(0,p.default)(t[e],n.props[e])}))},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some((function(o){return!(0,p.default)(t[o],e.props[o])}))},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var o=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),i=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:i},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var r=this.regenerationSnapshot,s=(n=r.delta,r.selection);delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(n),g((function(){return o.setEditorSelection(a,s)}))}},e.prototype.instantiateEditor=function(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())},e.prototype.destroyEditor=function(){this.editor&&this.unhookEditor(this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var o=new c.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(o,e.tabIndex),this.hookEditor(o),o},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?(0,p.default)(t.ops,e.ops):(0,p.default)(t,e)},e.prototype.setEditorContents=function(t,e){var o=this;this.value=e;var n=this.getEditorSelection();"string"==typeof e?t.setContents(t.clipboard.convert({html:e})):t.setContents(e),g((function(){return o.setEditorSelection(t,n)}))},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var o=t.getLength();e.index=Math.max(0,Math.min(e.index,o-1)),e.length=Math.max(0,Math.min(e.length,o-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var o;(null===(o=null==t?void 0:t.scroll)||void 0===o?void 0:o.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){var e=t;return{getHTML:function(){return e.root.innerHTML},getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}},e.prototype.getEditingArea=function(){if(!this.editingAreaRef.current)throw new Error("Instantiating on missing editing area");var t=this.editingAreaRef.current;if(!t)throw new Error("Cannot find element for editing area");if(3===t.nodeType)throw new Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this.props,e=t.children,o=t.preserveWhitespace,n={key:this.state.generation,ref:this.editingAreaRef};return h.default.Children.count(e)?h.default.cloneElement(h.default.Children.only(e),n):o?h.default.createElement("pre",r({},n)):h.default.createElement("div",r({},n))},e.prototype.render=function(){var t;return h.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill ".concat(null!==(t=this.props.className)&&void 0!==t?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,o,n){var i,r;if(this.editor){var s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(r=(i=this.props).onChange)||void 0===r||r.call(i,t,e,o,n))}},e.prototype.onEditorChangeSelection=function(t,e,o){var n,i,r,s,a,l;if(this.editor){var d=this.getEditorSelection(),u=!d&&t,h=d&&!t;(0,p.default)(t,d)||(this.selection=t,null===(i=(n=this.props).onChangeSelection)||void 0===i||i.call(n,t,e,o),u?null===(s=(r=this.props).onFocus)||void 0===s||s.call(r,t,e,o):h&&(null===(l=(a=this.props).onBlur)||void 0===l||l.call(a,d,e,o)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=c.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(h.default.Component);function g(t){Promise.resolve().then(t)}t.exports=f},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o);var i=Object.getOwnPropertyDescriptor(e,o);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,n,i)}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),l=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&s(e,t,o);return a(e,t),e},d=this&&this.__spreadArray||function(t,e,o){if(o||2===arguments.length)for(var n,i=0,r=e.length;i<r;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},h=l(o(0)),p=u(o(1)),c=u(o(2)),f=function(t){function e(e){var o=t.call(this,e)||this;o.editingAreaRef=(0,h.createRef)(),o.dirtyProps=["modules","formats","bounds","theme","children"],o.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],o.state={generation:0},o.selection=null,o.onEditorChange=function(t,e,n,i){var r,s;"text-change"===t?null===(r=o.onEditorChangeText)||void 0===r||r.call(o,o.editor.root.innerHTML,e,i,o.unprivilegedEditor):"selection-change"===t&&(null===(s=o.onEditorChangeSelection)||void 0===s||s.call(o,e,i,o.unprivilegedEditor))};var n=o.isControlled()?e.value:e.defaultValue;return o.value=null!=n?n:"",o}return i(e,t),e.prototype.validateProps=function(t){if(h.default.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(h.default.Children.count(t.children)){var e=h.default.Children.only(t.children);if("textarea"===(null==e?void 0:e.type))throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var o,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var i=this.getEditorContents(),r=null!==(o=t.value)&&void 0!==o?o:"";this.isEqualValue(r,i)||this.setEditorContents(this.editor,r)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),d(d([],this.cleanProps,!0),this.dirtyProps,!0).some((function(e){return!(0,p.default)(t[e],n.props[e])}))},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some((function(o){return!(0,p.default)(t[o],e.props[o])}))},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var o=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),i=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:i},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var r=this.regenerationSnapshot,s=(n=r.delta,r.selection);delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(n),g((function(){return o.setEditorSelection(a,s)}))}},e.prototype.instantiateEditor=function(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())},e.prototype.destroyEditor=function(){this.editor&&this.unhookEditor(this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var o=new c.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(o,e.tabIndex),this.hookEditor(o),o},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?(0,p.default)(t.ops,e.ops):(0,p.default)(t,e)},e.prototype.setEditorContents=function(t,e){var o=this;this.value=e;var n=this.getEditorSelection();"string"==typeof e?t.setContents(t.clipboard.convert({html:e})):t.setContents(e),g((function(){return o.setEditorSelection(t,n)}))},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var o=t.getLength();e.index=Math.max(0,Math.min(e.index,o-1)),e.length=Math.max(0,Math.min(e.length,o-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var o;(null===(o=null==t?void 0:t.scroll)||void 0===o?void 0:o.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){var e=t;return{getHTML:function(){return e.root.innerHTML},getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}},e.prototype.getEditingArea=function(){if(!this.editingAreaRef.current)throw new Error("Instantiating on missing editing area");var t=this.editingAreaRef.current;if(!t)throw new Error("Cannot find element for editing area");if(3===t.nodeType)throw new Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this.props,e=t.children,o=t.preserveWhitespace,n={key:this.state.generation,ref:this.editingAreaRef};return h.default.Children.count(e)?h.default.cloneElement(h.default.Children.only(e),n):o?h.default.createElement("pre",r({},n)):h.default.createElement("div",r({},n))},e.prototype.render=function(){var t;return h.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill ".concat(null!==(t=this.props.className)&&void 0!==t?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,o,n){var i,r;if(this.editor){var s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(r=(i=this.props).onChange)||void 0===r||r.call(i,t,e,o,n))}},e.prototype.onEditorChangeSelection=function(t,e,o){var n,i,r,s,a,l;if(this.editor){var d=this.getEditorSelection(),u=!d&&t,h=d&&!t;(0,p.default)(t,d)||(this.selection=t,null===(i=(n=this.props).onChangeSelection)||void 0===i||i.call(n,t,e,o),u?null===(s=(r=this.props).onFocus)||void 0===s||s.call(r,t,e,o):h&&(null===(l=(a=this.props).onBlur)||void 0===l||l.call(a,d,e,o)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=c.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(h.default.Component);function g(t){Promise.resolve().then(t)}t.exports=f},function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o);var i=Object.getOwnPropertyDescriptor(e,o);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,n,i)}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),l=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&s(e,t,o);return a(e,t),e},d=this&&this.__spreadArray||function(t,e,o){if(o||2===arguments.length)for(var n,i=0,r=e.length;i<r;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},h=l(o(0)),p=u(o(1)),c=u(o(2)),f=function(t){function e(e){var o=t.call(this,e)||this;o.editingAreaRef=(0,h.createRef)(),o.dirtyProps=["modules","formats","bounds","theme","children"],o.cleanProps=["id","className","style","placeholder","tabIndex","onChange","onChangeSelection","onFocus","onBlur","onKeyPress","onKeyDown","onKeyUp"],o.state={generation:0},o.selection=null,o.onEditorChange=function(t,e,n,i){var r,s;"text-change"===t?null===(r=o.onEditorChangeText)||void 0===r||r.call(o,o.editor.root.innerHTML,e,i,o.unprivilegedEditor):"selection-change"===t&&(null===(s=o.onEditorChangeSelection)||void 0===s||s.call(o,e,i,o.unprivilegedEditor))};var n=o.isControlled()?e.value:e.defaultValue;return o.value=null!=n?n:"",o}return i(e,t),e.prototype.validateProps=function(t){if(h.default.Children.count(t.children)>1)throw new Error("The Quill editing area can only be composed of a single React element.");if(h.default.Children.count(t.children)){var e=h.default.Children.only(t.children);if("textarea"===(null==e?void 0:e.type))throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")}if(this.lastDeltaChangeSet&&t.value===this.lastDeltaChangeSet)throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")},e.prototype.shouldComponentUpdate=function(t,e){var o,n=this;if(this.validateProps(t),!this.editor||this.state.generation!==e.generation)return!0;if("value"in t){var i=this.getEditorContents(),r=null!==(o=t.value)&&void 0!==o?o:"";this.isEqualValue(r,i)||this.setEditorContents(this.editor,r)}return t.readOnly!==this.props.readOnly&&this.setEditorReadOnly(this.editor,t.readOnly),d(d([],this.cleanProps,!0),this.dirtyProps,!0).some((function(e){return!(0,p.default)(t[e],n.props[e])}))},e.prototype.shouldComponentRegenerate=function(t){var e=this;return this.dirtyProps.some((function(o){return!(0,p.default)(t[o],e.props[o])}))},e.prototype.componentDidMount=function(){this.instantiateEditor(),this.setEditorContents(this.editor,this.getEditorContents())},e.prototype.componentWillUnmount=function(){this.destroyEditor()},e.prototype.componentDidUpdate=function(t,e){var o=this;if(this.editor&&this.shouldComponentRegenerate(t)){var n=this.editor.getContents(),i=this.editor.getSelection();this.regenerationSnapshot={delta:n,selection:i},this.setState({generation:this.state.generation+1}),this.destroyEditor()}if(this.state.generation!==e.generation){var r=this.regenerationSnapshot,s=(n=r.delta,r.selection);delete this.regenerationSnapshot,this.instantiateEditor();var a=this.editor;a.setContents(n),g((function(){return o.setEditorSelection(a,s)}))}},e.prototype.instantiateEditor=function(){this.editor?this.hookEditor(this.editor):this.editor=this.createEditor(this.getEditingArea(),this.getEditorConfig())},e.prototype.destroyEditor=function(){this.editor&&this.unhookEditor(this.editor)},e.prototype.isControlled=function(){return"value"in this.props},e.prototype.getEditorConfig=function(){return{bounds:this.props.bounds,formats:this.props.formats,modules:this.props.modules,placeholder:this.props.placeholder,readOnly:this.props.readOnly,scrollingContainer:this.props.scrollingContainer,tabIndex:this.props.tabIndex,theme:this.props.theme}},e.prototype.getEditor=function(){if(!this.editor)throw new Error("Accessing non-instantiated editor");return this.editor},e.prototype.createEditor=function(t,e){var o=new c.default(t,e);return null!=e.tabIndex&&this.setEditorTabIndex(o,e.tabIndex),this.hookEditor(o),o},e.prototype.hookEditor=function(t){this.unprivilegedEditor=this.makeUnprivilegedEditor(t),t.on("editor-change",this.onEditorChange)},e.prototype.unhookEditor=function(t){t.off("editor-change",this.onEditorChange)},e.prototype.getEditorContents=function(){return this.value},e.prototype.getEditorSelection=function(){return this.selection},e.prototype.isDelta=function(t){return t&&t.ops},e.prototype.isEqualValue=function(t,e){return this.isDelta(t)&&this.isDelta(e)?(0,p.default)(t.ops,e.ops):(0,p.default)(t,e)},e.prototype.setEditorContents=function(t,e){var o=this;this.value=e;var n=this.getEditorSelection();"string"==typeof e?t.setContents(t.clipboard.convert({html:e})):t.setContents(e),g((function(){return o.setEditorSelection(t,n)}))},e.prototype.setEditorSelection=function(t,e){if(this.selection=e,e){var o=t.getLength();e.index=Math.max(0,Math.min(e.index,o-1)),e.length=Math.max(0,Math.min(e.length,o-1-e.index)),t.setSelection(e)}},e.prototype.setEditorTabIndex=function(t,e){var o;(null===(o=null==t?void 0:t.scroll)||void 0===o?void 0:o.domNode)&&(t.scroll.domNode.tabIndex=e)},e.prototype.setEditorReadOnly=function(t,e){e?t.disable():t.enable()},e.prototype.makeUnprivilegedEditor=function(t){var e=t;return{getHTML:function(){return e.root.innerHTML},getLength:e.getLength.bind(e),getText:e.getText.bind(e),getContents:e.getContents.bind(e),getSelection:e.getSelection.bind(e),getBounds:e.getBounds.bind(e)}},e.prototype.getEditingArea=function(){if(!this.editingAreaRef.current)throw new Error("Instantiating on missing editing area");var t=this.editingAreaRef.current;if(!t)throw new Error("Cannot find element for editing area");if(3===t.nodeType)throw new Error("Editing area cannot be a text node");return t},e.prototype.renderEditingArea=function(){var t=this.props,e=t.children,o=t.preserveWhitespace,n={key:this.state.generation,ref:this.editingAreaRef};return h.default.Children.count(e)?h.default.cloneElement(h.default.Children.only(e),n):o?h.default.createElement("pre",r({},n)):h.default.createElement("div",r({},n))},e.prototype.render=function(){var t;return h.default.createElement("div",{id:this.props.id,style:this.props.style,key:this.state.generation,className:"quill ".concat(null!==(t=this.props.className)&&void 0!==t?t:""),onKeyPress:this.props.onKeyPress,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp},this.renderEditingArea())},e.prototype.onEditorChangeText=function(t,e,o,n){var i,r;if(this.editor){var s=this.isDelta(this.value)?n.getContents():n.getHTML();s!==this.getEditorContents()&&(this.lastDeltaChangeSet=e,this.value=s,null===(r=(i=this.props).onChange)||void 0===r||r.call(i,t,e,o,n))}},e.prototype.onEditorChangeSelection=function(t,e,o){var n,i,r,s,a,l;if(this.editor){var d=this.getEditorSelection(),u=!d&&t,h=d&&!t;(0,p.default)(t,d)||(this.selection=t,null===(i=(n=this.props).onChangeSelection)||void 0===i||i.call(n,t,e,o),u?null===(s=(r=this.props).onFocus)||void 0===s||s.call(r,t,e,o):h&&(null===(l=(a=this.props).onBlur)||void 0===l||l.call(a,d,e,o)))}},e.prototype.focus=function(){this.editor&&this.editor.focus()},e.prototype.blur=function(){this.editor&&(this.selection=null,this.editor.blur())},e.displayName="React Quill",e.Quill=c.default,e.defaultProps={theme:"snow",modules:{},readOnly:!1},e}(h.default.Component);function g(t){Promise.resolve().then(t)}t.exports=f}])}));