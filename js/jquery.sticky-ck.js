// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.
(function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},n=e(window),r=e(document),i=[],s=n.height(),o=function(){var t=n.scrollTop(),o=r.height(),u=o-s,a=t>u?u-t:0;for(var f=0;f<i.length;f++){var l=i[f],c=l.stickyWrapper.offset().top,h=c-l.topSpacing-a;if(t<=h){if(l.currentTop!==null){l.stickyElement.css("position","").css("top","");l.stickyElement.parent().removeClass(l.className);l.currentTop=null}}else{var p=o-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-a;p<0?p+=l.topSpacing:p=l.topSpacing;if(l.currentTop!==p){l.stickyElement.css("position","fixed").css("top",p);typeof l.getWidthFrom!="undefined"&&l.stickyElement.css("width",e(l.getWidthFrom).width());l.stickyElement.parent().addClass(l.className);l.currentTop=p}}}},u=function(){s=n.height()},a={init:function(n){var r=e.extend(t,n);return this.each(function(){var t=e(this),n=t.attr("id"),s=e("<div></div>").attr("id",n+"-sticky-wrapper").addClass(r.wrapperClassName);t.wrapAll(s);r.center&&t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"});t.css("float")==="right"&&t.css({"float":"none"}).parent().css({"float":"right"});var o=t.parent();o.css("height",t.outerHeight());i.push({topSpacing:r.topSpacing,bottomSpacing:r.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:o,className:r.className,getWidthFrom:r.getWidthFrom})})},update:o};if(window.addEventListener){window.addEventListener("scroll",o,!1);window.addEventListener("resize",u,!1)}else if(window.attachEvent){window.attachEvent("onscroll",o);window.attachEvent("onresize",u)}e.fn.sticky=function(t){if(a[t])return a[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return a.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.sticky")};e(function(){setTimeout(o,0)})})(jQuery);