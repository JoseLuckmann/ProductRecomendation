/*!
  * Bootstrap v4.3.1-admin-ui (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors Author And MIM Dev
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self)["bootstrap-drawer"]={},e.jQuery)}(this,function(e,s){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i})}return o}s=s&&s.hasOwnProperty("default")?s.default:s;var t="transitionend";function n(e){var t=this,n=!1;return s(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(t)},e),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=s(e).css("transition-duration"),n=s(e).css("transition-delay"),i=parseFloat(t),o=parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){s(e).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],s=r&&l.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?l.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null}};s.fn.emulateTransitionEnd=n,s.event.special[l.TRANSITION_END]={bindType:t,delegateType:t,handle:function(e){if(s(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var r="drawer",c="bs.drawer",d="."+c,o=s.fn[r],h={backdrop:!0,keyboard:!0,focus:!0,show:!0},u={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},f={HIDE:"hide"+d,HIDDEN:"hidden"+d,SHOW:"show"+d,SHOWN:"shown"+d,FOCUSIN:"focusin"+d,RESIZE:"resize"+d,CLICK_DISMISS:"click.dismiss"+d,KEYDOWN_DISMISS:"keydown.dismiss"+d,MOUSEUP_DISMISS:"mouseup.dismiss"+d,MOUSEDOWN_DISMISS:"mousedown.dismiss"+d,CLICK_DATA_API:"click"+d+".data-api"},_="drawer-content-scrollable",m="drawer-scrollbar-measure",g="drawer-backdrop",p="slide",S="fade",b="show",y="drawer-open",v=".drawer-content",w=".drawer-body",E='[data-toggle="drawer"]',I='[data-dismiss="drawer"]',D=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",k=".sticky-top",N=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._content=e.querySelector(v),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=o.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){s(this._element).hasClass(p)&&(this._isTransitioning=!0);var n=s.Event(f.SHOW,{relatedTarget:e});s(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._setEscapeEvent(),s(this._element).on(f.CLICK_DISMISS,I,function(e){return t.hide(e)}),s(this._content).on(f.MOUSEDOWN_DISMISS,function(){s(t._element).one(f.MOUSEUP_DISMISS,function(e){s(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=s.Event(f.HIDE);if(s(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=s(this._element).hasClass(p);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),s(document).off(f.FOCUSIN),s(this._element).removeClass(b),s(this._element).off(f.CLICK_DISMISS),s(this._content).off(f.MOUSEDOWN_DISMISS),i){var o=l.getTransitionDurationFromElement(this._element);s(this._element).one(l.TRANSITION_END,function(e){return t._hideDrawer(e)}).emulateTransitionEnd(o)}else this._hideDrawer()}}},e.dispose=function(){[window,this._element,this._content].forEach(function(e){return s(e).off(d)}),s(document).off(f.FOCUSIN),s.removeData(this._element,c),this._config=null,this._element=null,this._content=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e._getConfig=function(e){return e=a({},h,e),l.typeCheckConfig(r,e,u),e},e._showElement=function(e){var t=this,n=s(this._element).hasClass(p);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),s(this._content).hasClass(_)?this._content.querySelector(w).scrollTop=0:this._element.scrollTop=0,n&&l.reflow(this._element),s(this._element).addClass(b),this._config.focus&&this._enforceFocus();function i(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,s(t._element).trigger(o)}var o=s.Event(f.SHOWN,{relatedTarget:e});if(n){var r=l.getTransitionDurationFromElement(this._element);s(this._element).one(l.TRANSITION_END,i).emulateTransitionEnd(r)}else i()},e._enforceFocus=function(){var t=this;s(document).off(f.FOCUSIN).on(f.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===s(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?s(document.body).on(f.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||s(document.body).off(f.KEYDOWN_DISMISS)},e._hideDrawer=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){s(document.body).removeClass(y),e._resetAdjustments(),e._resetScrollbar(),s(e._element).trigger(f.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(s(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=s(this._element).hasClass(p)?S:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=g,n&&this._backdrop.classList.add(n),s(this._backdrop).appendTo(document.body),s(this._backdrop).on(f.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),n&&l.reflow(this._backdrop),s(this._backdrop).addClass(b),!e)return;if(!n)return e();var i=l.getTransitionDurationFromElement(this._backdrop);s(this._backdrop).one(l.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){s(this._backdrop).removeClass(b);var o=function(){t._removeBackdrop(),e&&e()};if(s(this._element).hasClass(p)){var r=l.getTransitionDurationFromElement(this._backdrop);s(this._backdrop).one(l.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(D)),t=[].slice.call(document.querySelectorAll(k));s(e).each(function(e,t){var n=t.style.paddingRight,i=s(t).css("padding-right");s(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),s(t).each(function(e,t){var n=t.style.marginRight,i=s(t).css("margin-right");s(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=s(document.body).css("padding-right");s(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}s(document.body).addClass(y)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(D));s(e).each(function(e,t){var n=s(t).data("padding-right");s(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+k));s(t).each(function(e,t){var n=s(t).data("margin-right");"undefined"!=typeof n&&s(t).css("margin-right",n).removeData("margin-right")});var n=s(document.body).data("padding-right");s(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=m,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(n,i){return this.each(function(){var e=s(this).data(c),t=a({},h,s(this).data(),"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),s(this).data(c,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(o,null,[{key:"VERSION",get:function(){return"0.0.1"}},{key:"Default",get:function(){return h}}]),o}();s(document).on(f.CLICK_DATA_API,E,function(e){var t,n=this,i=l.getSelectorFromElement(this);i&&(t=document.querySelector(i));var o=s(t).data(c)?"toggle":a({},s(t).data(),s(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=s(t).one(f.SHOW,function(e){e.isDefaultPrevented()||r.one(f.HIDDEN,function(){s(n).is(":visible")&&n.focus()})});N._jQueryInterface.call(s(t),o,this)}),s.fn[r]=N._jQueryInterface,s.fn[r].Constructor=N,s.fn[r].noConflict=function(){return s.fn[r]=o,N._jQueryInterface},e.Drawer=N,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap-drawer.min.js.map