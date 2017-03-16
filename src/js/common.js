(function (doc, win) {
    // 控制body元素根据页面宽度变化 font-size值随之改变
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    //doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();

})(document, window);

function SetRouterViewFullScreen(el){
    el.css({
        "width":"100%",
        "height":window.screen.availHeight+'px',
        "background":"#f3f6ff",
        "overflowX":"hidden",
        "overflowY":"auto",
        "position":"fixed",
        "top":"0",
        "left":"0"
    });
}
//公共调用alert自动消失
function openAlert(p,duration,callBack){
    var duration=duration ? duration :1500;
    var module=$(".alert-module.disappear");
    var m_c=module.find(".content");
    module.find(".content > p").text(p);
    module.show().delay(duration).fadeOut(function(){if(callBack)callBack();});
    m_c.css("marginTop",(($(window).height()-m_c.outerHeight())/2)*.8);
}

