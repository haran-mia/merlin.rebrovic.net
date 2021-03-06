{# commenting out Google Analytics for an experiment
{% if site.config.mode == "production" %}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '{{ site.meta.ga_tracking_code }}', 'auto');
ga('send', 'pageview');
{% endif %}
#}

(function() {
    /**
     * Utility to wrap the different behaviors between W3C-compliant browsers
     * and IE when adding event handlers.
     *
     * @param {Object} element Object on which to attach the event listener.
     * @param {string} type A string representing the event type to listen for
     *     (e.g. load, click, etc.).
     * @param {function()} callback The function that receives the notification.
     */
    function addListener(element, type, callback) {
        if (element.addEventListener) element.addEventListener(type, callback);
        else if (element.attachEvent) element.attachEvent('on' + type, callback);
    }

    function addAnalyticsEvent(element) {
        var eventObject = {};
        eventObject.hitType = "event";
        eventObject.eventCategory = element.dataset.gacategory;
        eventObject.eventAction = element.dataset.gaaction;
        if (element.dataset.galabel) {
            eventObject.eventLabel = element.dataset.galabel;
        }
        addListener(element, "click", function() {
            {% if site.config.mode == "production" -%}
            ga("send", eventObject);
            {%- else -%}
            console.log(eventObject);
            {%- endif %}
        });
    }

    var actionableElements = document.querySelectorAll("[data-action]");
    [].forEach.call(actionableElements, function(element, index, array) {
        switch (element.dataset.action) {
            case "track-event":
                addAnalyticsEvent(element);
                break;
        }
    });
})();

/**
 * https://github.com/bramstein/fontfaceobserver
 * Font Face Observer + Promise polyfill
 */
(function(){'use strict';function e(a){function b(){document.body?a():setTimeout(b,0)}b()};function f(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function n(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
function u(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function z(a,b){a.b.addEventListener("scroll",function(){u(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){u(a)&&null!==a.a.parentNode&&b(a.d)},!1);u(a)};function A(a){this.a=B;this.b=void 0;this.c=[];var b=this;try{a(function(a){b.resolve(a)},function(a){b.reject(a)})}catch(c){b.reject(c)}}var B=2;A.prototype.resolve=function(a){var b=this;if(b.a===B){if(a===b)throw new TypeError("Promise settled with itself.");var c=!1;try{var g=a&&a.then;if(null!==a&&"object"===typeof a&&"function"===typeof g){g.call(a,function(a){c||b.resolve(a);c=!0},function(a){c||b.reject(a);c=!0});return}}catch(d){c||b.reject(d);return}b.a=0;b.b=a;C(b)}};
A.prototype.reject=function(a){if(this.a===B){if(a===this)throw new TypeError("Promise settled with itself.");this.a=1;this.b=a;C(this)}};function C(a){setTimeout(function(){if(a.a!==B)for(;a.c.length;){var b=a.c.shift(),c=b[0],g=b[1],d=b[2],b=b[3];try{0===a.a?"function"===typeof c?d(c.call(void 0,a.b)):d(a.b):1===a.a&&("function"===typeof g?d(g.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}},0)}A.prototype.catch=function(a){return this.then(void 0,a)};
A.prototype.then=function(a,b){var c=this;return new A(function(g,d){c.c.push([a,b,g,d]);C(c)})};
if(window.Promise){var D=window.Promise;D.prototype.then=window.Promise.prototype.then;D.prototype.catch=window.Promise.prototype["catch"];D.all=window.Promise.all;D.race=window.Promise.race;D.resolve=window.Promise.resolve;D.reject=window.Promise.reject}else D=A,D.prototype.then=A.prototype.then,D.prototype.catch=A.prototype.catch,D.all=A.prototype.all,D.race=A.prototype.race,D.resolve=A.prototype.resolve,D.reject=A.prototype.reject;function E(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.variant=c.variant||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"stretch";this.featureSettings=c.featureSettings||"normal"}var F=null;
E.prototype.a=function(a,b){var c=a||"BESbswy",g=b||3E3,d="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",h=document.createElement("div"),p=new f(c),q=new f(c),r=new f(c),k=-1,l=-1,m=-1,v=-1,w=-1,x=-1,t=this;return new D(function(a,b){function c(){null!==h.parentNode&&h.parentNode.removeChild(h)}
function y(){if(-1!==k&&-1!==l||-1!==k&&-1!==m||-1!==l&&-1!==m)if(k===l||k===m||l===m){if(null===F){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}F?k===v&&l===v&&m===v||k===w&&l===w&&m===w||k===x&&l===x&&m===x||(c(),a(t)):(c(),a(t))}}e(function(){function a(){if(Date.now()-G>=g)c(),b(t);else{var d=document.hidden;if(!0===d||void 0===d)k=p.a.offsetWidth,l=q.a.offsetWidth,m=r.a.offsetWidth,
y();setTimeout(a,50)}}var G=Date.now();n(p,"sans-serif",d);n(q,"serif",d);n(r,"monospace",d);h.appendChild(p.a);h.appendChild(q.a);h.appendChild(r.a);document.body.appendChild(h);v=p.a.offsetWidth;w=q.a.offsetWidth;x=r.a.offsetWidth;a();z(p,function(a){k=a;y()});n(p,t.family+",sans-serif",d);z(q,function(a){l=a;y()});n(q,t.family+",serif",d);z(r,function(a){m=a;y()});n(r,t.family+",monospace",d)})})};window.FontFaceObserver=E;window.FontFaceObserver.prototype.check=E.prototype.a;}());

(function() {
    var openSansObserver = new FontFaceObserver("Open Sans", {
        weight: 400
    });
    var sourceSansObserver = new FontFaceObserver("Source Sans Pro", {
        weight: 900
    });

    Promise.all([
        openSansObserver.check(),
        sourceSansObserver.check()
    ]).then(function () {
        document.documentElement.classList.add("custom-fonts");
    });
})();
