;// 图片懒加载全局监听
'use strict';

var lazyImg = {
    offset: function offset(ele) {
        //console.log(ele);
        var top = ele.offsetTop;
        var left = ele.offsetLeft;
        while (ele.offsetParent) {
            ele = ele.offsetParent;
            if (window.navigator.userAgent.indexOf('MSTE 8') > -1) {
                top += ele.offsetTop;
                left += ele.offsetLeft;
            } else {
                top += ele.offsetTop + ele.clientTop;
                left += ele.offsetLeft + ele.clientLeft;
            }
        }
        return {
            left: left,
            top: top
        };
    },

    start: function start() {
        var _this = this;
        var imgList = Array.prototype.slice.call(window.document.querySelectorAll('.lazyImg'));
        this.imgListForEach(imgList);
        window.addEventListener('scroll', lazyImg.imgListForEach.bind(_this));
    },
    imgListForEach: function imgListForEach() {
        var imgList = Array.prototype.slice.call(window.document.querySelectorAll('.lazyImg'));
        var _this = this;
        for (var i = 0; i < imgList.length; i++) {
            var img = imgList[i];
            if (_this.checkInView(img)) {
                var src = img.getAttribute('data-src');
                img.setAttribute('src', src);
                img.onload = function () {
                    img.setAttribute('data-state', 'loaded');
                };
                imgList.splice(i, 1);
                i--;
            }
        }
    },

    checkInView: function checkInView(dom) {
        var wh = window.innerHeight;
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        var imgHeight = dom.clientHeight ? dom.clientHeight : dom.parentNode.clientHeight;
        var offsetTop = this.offset(dom).top;
        if (offsetTop >= st && offsetTop <= st + wh) {
            return true;
        } else if (offsetTop < st && (offsetTop + imgHeight) > st && (offsetTop + imgHeight) < (st + wh)) {
            return true;
        }
        return false;
    }
};
