$(document).ready(function(){$(".contact-me").click(function(){$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500);return!1});$(".navbar").sticky({topSpacing:0});$("#main-menu").onePageNav({currentClass:"active",changeHash:!1,scrollThreshold:.5,scrollSpeed:750,filter:"",easing:"swing"});$(".chart").waypoint(function(){$(this).easyPieChart({barColor:"#3498db",size:"150",easing:"easeOutBounce",onStep:function(e,t,n){$(this.el).find(".percent").text(Math.round(n))}})},{triggerOnce:!0,offset:"bottom-in-view"});$(function(){$.vegas({src:"img/slider/800px-Arthur_Ravenel_Jr._Bridge%27s_cables.jpg"})("overlay",{src:"img/overlays/07.png"})});$("#contact-form").validate({rules:{name:{minlength:2,required:!0},email:{required:!0,email:!0},message:{minlength:2,required:!0}},highlight:function(e){$(e).closest(".control-group").removeClass("success").addClass("error")},success:function(e){e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")}})});