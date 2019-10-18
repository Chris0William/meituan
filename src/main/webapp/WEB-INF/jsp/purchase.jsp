<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2019/10/6
  Time: 15:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
    <script>!function (e, t, n) {
        function s() {
            var e = t.createElement("script");
            e.async = !0, e.src = "https://s0.meituan.net/bs/js/?f=mta-js:mta.min.js";
            var n = t.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(e, n)
        }

        "[object String]" === Object.prototype.toString.call(n) && (n = [n]), e.MeituanAnalyticsObject = n;
        for (var r = 0; r < n.length; r++) !function (t) {
            e[t] = e[t] || function () {
                (e[t].q = e[t].q || []).push(arguments)
            }
        }(n[r]);
        if ("complete" === t.readyState) s(); else {
            var i = "addEventListener", a = "attachEvent";
            if (e[i]) e[i]("load", s, !1); else if (e[a]) e[a]("onload", s); else {
                var o = e.onload;
                e.onload = function () {
                    s(), o && o()
                }
            }
        }
    }(window, document, "mta"), function (e, t, n) {
        if (t && !("_mta" in t)) {
            t._mta = !0;
            var s = e.location.protocol;
            if ("file:" !== s) {
                var r = e.location.host, i = t.prototype.open;
                t.prototype.open = function (t, n, a, o, l) {
                    if (this._method = "string" == typeof t ? t.toUpperCase() : null, n) {
                        if (0 === n.indexOf("http://") || 0 === n.indexOf("https://") || 0 === n.indexOf("//")) this._url = n; else if (0 === n.indexOf("/")) this._url = s + "//" + r + n; else {
                            var h = s + "//" + r + e.location.pathname;
                            h = h.substring(0, h.lastIndexOf("/") + 1), this._url = h + n
                        }
                        var u = this._url.indexOf("?");
                        -1 !== u ? (this._searchLength = this._url.length - 1 - u, this._url = this._url.substring(0, u)) : this._searchLength = 0
                    } else this._url = null, this._searchLength = 0;
                    return this._startTime = (new Date).getTime(), i.apply(this, arguments)
                };
                var a = "onreadystatechange", o = "addEventListener", l = t.prototype.send;
                t.prototype.send = function (t) {
                    function n(n, r) {
                        if (0 !== n._url.indexOf(s + "//frep.meituan.net/_.gif")) {
                            for (var i = "browser.ajax", a = [98, 114, 111, 119, 115, 101, 114, 46, 97, 106, 97, 120], o = 0, l = i.length; l > o; o++) if (i.charCodeAt(o) !== a[o]) return;
                            var h;
                            if (n.response) switch (n.responseType) {
                                case"json":
                                    h = JSON && JSON.stringify(n.response).length;
                                    break;
                                case"blob":
                                case"moz-blob":
                                    h = n.response.size;
                                    break;
                                case"arraybuffer":
                                    h = n.response.byteLength;
                                case"document":
                                    h = n.response.documentElement && n.response.documentElement.innerHTML && n.response.documentElement.innerHTML.length + 28;
                                    break;
                                default:
                                    h = n.response.length
                            }
                            e.mta("send", i, {
                                url: n._url,
                                method: n._method,
                                error: !(0 === n.status.toString().indexOf("2") || 304 === n.status),
                                responseTime: (new Date).getTime() - n._startTime,
                                requestSize: n._searchLength + (t ? t.length : 0),
                                responseSize: h || 0
                            })
                        }
                    }

                    if (o in this) {
                        var r = function (e) {
                            n(this, e)
                        };
                        this[o]("load", r), this[o]("error", r), this[o]("abort", r)
                    } else {
                        var i = this[a];
                        this[a] = function (t) {
                            i && i.apply(this, arguments), 4 === this.readyState && e.mta && e.mta && n(this, t)
                        }
                    }
                    return l.apply(this, arguments)
                }
            }
        }
    }(window, window.XMLHttpRequest, "mta");

    </script>
    <link rel="stylesheet" href="/statics/css/com_header.css">
    <link rel="stylesheet" href="/statics/css/com_footer.css">
    <link rel="stylesheet" href="/statics/css/purchase.css">
    <style>
        .detail-wrap .content .details .d-left .name span b {
            background-image: url(/statics/images/下载.png);
            width: 15px;
            height: 18px;
            background-size: 100% 100%;
            display: inline-block;
            margin-right: 6px;
            vertical-align: middle;
            margin-top: -3px;
        }
        .detail-wrap .content .details .d-left .address p b {
            background-image: url(/statics/images/16pt.png);
            width: 14px;
            height: 14px;
            background-position-x: -28px;
            background-size: auto 14px;
            display: inline-block;
            margin-left: 6px;
            vertical-align: middle;
            margin-top: -3px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<header class="com-header">
    <div class="header-bar">
        <div class="header-content clearfix">
            <div class="header-bar-position" style="display: block;"><span
                    class="header-icon icon-header_location"></span><span class="current-city">东莞</span><a
                    class="change-city">切换城市</a>
                <div class="near-citys">[<a class="city-guess">东坑镇</a><a
                        class="city-guess">企石镇</a><a class="city-guess">南沙</a>]
                </div>
                <div class="user-entry" style="display: inline-block;"><a class="growth-entry user-up">立即登录</a><a
                        class="extra-entry">注册</a>
                </div>
            </div>
            <nav class="header-bar-nav">
                <ul class="header-nav-first">
                    <li class="has-child">
                        <a rel="nofollow" target="_blank">我的美团</a>
                        <ul class="header-nav-my header-nav-second" style="display: none;">
                            <a rel="nofollow" target="_blank"></a>
                            <li><a rel="nofollow" target="_blank"></a><a rel="nofollow" target="_blank">我的订单</a></li>
                            <li><a rel="nofollow" target="_blank">我的收藏</a></li>
                            <li><a rel="nofollow" target="_blank">抵用券</a></li>
                            <li><a rel="nofollow" target="_blank">账户设置</a></li>
                        </ul>
                    </li>
                    <li><a target="_blank">手机APP</a></li>
                    <li class="has-child">商家中心
                        <ul class="header-nav-merchant header-nav-second">
                            <li><a rel="nofollow" href="https://e.meituan.com/" target="_blank">登录商家中心</a></li>
                            <li><a rel="nofollow">美团智能收银</a></li>
                            <li><a rel="nofollow" target="_blank">我想合作</a></li>
                            <li><a rel="nofollow" target="_blank">手机免费开店</a></li>
                            <li><a rel="nofollow" target="_blank">餐饮代</a>
                            </li>
                            <li><a target="_blank">商家申请开票</a></li>
                            <li><a target="_blank">免费合作美团排队</a>
                            </li>
                        </ul>
                    </li>
                    <li class="has-child">美团规则
                        <ul class="header-nav-my header-nav-second">
                            <li><a rel="nofollow"  target="_blank">规则中心</a></li>
                            <li><a rel="nofollow"  target="_blank">规则目录</a></li>
                            <li><a rel="nofollow" target="_blank">规则评议院</a></li>
                        </ul>
                    </li>
                    <li class="has-child">网站导航
                        <div class="header-nav-site header-nav-second">
                            <dl class="header-jiulv header-nav-third">
                                <dt>酒店旅游</dt>
                                <dd><a target="_blank">国际机票</a></dd>
                                <dd><a target="_blank">火车票</a></dd>
                                <dd><a target="_blank">榛果民宿</a></dd>
                                <dd><a target="_blank">经济型酒店</a></dd>
                                <dd><a target="_blank">主题酒店</a></dd>
                                <dd><a target="_blank">商务酒店</a></dd>
                                <dd><a target="_blank">公寓</a></dd>
                                <dd><a target="_blank">豪华酒店</a></dd>
                                <dd><a target="_blank">客栈</a></dd>
                                <dd><a target="_blank">青年旅社</a></dd>
                                <dd><a target="_blank">度假酒店</a></dd>
                                <dd><a target="_blank">别墅</a></dd>
                                <dd><a target="_blank">农家院</a></dd>
                            </dl>
                            <dl class="header-meishi header-nav-third">
                                <dt>吃美食</dt>
                                <dd><a target="_blank">烤鱼</a></dd>
                                <dd><a target="_blank">特色小吃</a></dd>
                                <dd><a target="_blank">烧烤</a></dd>
                                <dd><a target="_blank">自助餐</a></dd>
                                <dd><a target="_blank">火锅</a></dd>
                                <dd><a target="_blank">代金券</a></dd>
                            </dl>
                            <dl class="header-movie header-nav-third">
                                <dt>看电影</dt>
                                <dd><a target="_blank">热映电影</a></dd>
                                <dd><a target="_blank">热门影院</a></dd>
                                <dd><a target="_blank">热映电影口碑榜</a></dd>
                                <dd><a target="_blank">最受期待电影</a></dd>
                                <dd><a target="_blank">国内票房榜</a></dd>
                                <dd><a target="_blank">北美票房榜</a></dd>
                                <dd><a target="_blank">电影排行榜</a></dd>
                            </dl>
                            <dl class="header-app header-nav-third">
                                <dt>手机应用</dt>
                                <dd>
                                    <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                                        <img class="appicon" src="">
                                    </a>
                                </dd>
                                <dd>
                                    <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                                        <img class="appicon" src="" title="外卖app" alt="外卖app">
                                    </a>
                                </dd>
                                <dd>
                                    <a href="https://phoenix.meituan.com/app/" target="_blank">
                                        <img class="appicon" src="" title="榛果app" alt="榛果app">
                                    </a>
                                </dd>
                                <dd>
                                    <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                                        <img class="appicon" src="" title="点评app" alt="点评app">
                                    </a>
                                </dd>
                                <dd>
                                    <a href="https://maoyan.com/app" target="_blank">
                                        <img class="appicon" src="" title="猫眼app" alt="猫眼app">
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="header-content clearfix">
        <div class="header-title-module">
            <div class="header-title">
                <a><img src="/statics/images/logo.png"></a>
            </div>
        </div>
        <div class="header-search-module">
            <div class="header-search-block">
                <input class="header-search-input" type="text" placeholder="搜索商家或地点">
                <button class="header-search-btn"><span class="header-icon icon-search-new"></span></button>
            </div>
            <div class="header-search-suggest">
                <div class="header-search-noinput">
                    <div class="header-search-history" style="display: none;"><h6>最近搜索</h6>
                        <span class="header-search-clean">删除搜索历史</span>
                    </div>
                    <h6>热门搜索</h6>
                    <div class="header-search-hotword">
                        <a>东莞香市动物园</a>
                        <a>隐贤山庄水上乐园</a>
                        <a>隐贤山庄</a>
                        <a>龙凤山庄</a>
                        <a>东莞观音山旅游风景区</a>
                        <a>海底捞火锅</a>
                        <a>喜茶</a>
                        <a>南社明清古建筑群</a>
                    </div>
                </div>
                <div class="header-search-hasinput">
                    <ul></ul>
                </div>
            </div>
            <div class="header-search-hotword">
                <a>东莞香市动物园</a>
                <a>隐贤山庄水上乐园</a>
                <a>隐贤山庄</a>
                <a>龙凤山庄</a>
                <a>东莞音山旅游风景区</a>
                <a>海底捞火锅</a>
                <a>喜茶</a>
                <a>南社明清古建筑群</a>
            </div>
        </div>
    </div>
</header>
<script>window.comPtData = window.comPtData || {};
window.comPtData['header'] = {
    "currentCity": {
        "id": 91,
        "name": "东莞",
        "pinyin": "dongguan",
        "acronym": "dg",
        "onlineTime": "1293465600",
        "open": true,
        "rank": "B",
        "locationId": "441900",
        "position": {"lat": 23.0430241, "lng": 113.7634354},
        "divisionStr": "",
        "originGeotagID": 0,
        "realLocationID": "441900",
        "provinceLocationID": "440000",
        "gisID": "441900",
        "chineseFullName": "东莞市",
        "isHot": 0,
        "firstChar": "D",
        "originCityID": 0,
        "recommend": 1,
        "newIndex": 1,
        "endTime": "2000000000"
    }
}</script>
<script src="/statics/js/com_header.js" defer=""></script>
    <div id="app">
        <section class="detail-wrap">
            <div class="content">
                <div class="breadcrumbs">
                    <span>
                        <a>东莞美团</a>>
                    </span>
                    <span>
                        <a>东莞美食</a>>
                    </span>
                    <span>
                        <a>东莞生日蛋糕</a>
                    </span>
                </div>
                <div class="details clear">
                    <div class="d-left">
                        <div class="name">
                            <span>
                                <b></b>食品安全档案
                            </span>
                            <c:forEach items="${getGoods}" var="li">
                             ${li.sellerName}
                            </c:forEach>
                        </div>
                        <div class="score clear">
                            <div class="star-cont">
                                <ul class="stars-ul">
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                </ul>
                                <ul class="stars-ul stars-light" style="width: 72.24px;">
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                    <li><i class="iconfont icon-star_icon"></i></li>
                                </ul>
                            </div>
                            <p>
                                4.3分
                                <span>人均￥33</span>
                            </p>
                        </div>
                        <c:forEach items="${getGoods}" var="li">
                        <div class="address">
                            <p>地址：${li.sellerName}<b></b></p>
                            <p>电话：${li.sellerPhone}</p>
                            <p>营业时间：周一至周日 08:00-21:30  2019-02-03至2019-02-09 休息</p>
                        </div>
                        </c:forEach>
                        <ul class="tags clear">
                            <li>
                                <img src="/statics/images/551290739062eda37e52999e2315f50c1887.png">
                                提供wifi
                            </li>
                            <li>
                                <img src="/statics/images/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png">
                                停车位
                            </li>
                        </ul>
                    </div>
                    <div class="d-right">
                        <div class="big">
                            <c:forEach items="${goods}" var="li">
                            <div class="imgbox" style="height: 100%; width: 100%;">
                                <img src="/statics/images/${li.goodsJpg}.jpg">
                            </div>
                            </c:forEach>
                        </div>
                        <ul>
                            <c:forEach items="${getGoods}" var="li">
                                <c:forEach items="${goods}" var="l">
                                <li>
                                    <div class="imgbox" style="height: 100%; width: 100%;">
                                        <img src="/statics/images/${l.goodsJpg}.jpg">
                                    </div>
                                </li>
                                </c:forEach>
                            </c:forEach>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div class="btm-cont clear">
                    <div class="btm-left">
                        <div>
                            <h3>商家团购及优惠</h3>
                            <div class="group hasVouchers">
                                <h4>17款堂食套餐</h4>
                                <c:forEach items="${getGoods}" var="li">
                                    <c:forEach items="${goods}" var="l">
                                <div>
                                    <div class="one clear">
                                        <div class="pic">
                                            <div class="imgbox" style="height: 100%; width: 100%;">
                                                <img src="/statics/images/${l.goodsJpg}.jpg">
                                            </div>
                                    </div>
                                        <div class="info">
                                            <a href="/meituan/getHoues?sellerId=${li.sellerId}" class="fr buy">立即抢购</a>
                                            <p class="name">
                                                <span>${li.sellerPhone}</span>
                                                <img class="icon" src="/statics/images/${l.goodsJpg}.jpg">
                                            </p>
                                            <p class="sale">已售497</p>
                                            <p class="price">
                                                <b>￥</b>${l.goodsprice}
                                                <span>门店价￥${l.goodsprice}</span>
                                            </p>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                    </c:forEach>
                                </c:forEach>
                            </div>
                        </div>
                    </div>
                    <div class="btm-right">
                        <div class="guess-you-like">
                            <h4>猜你喜欢</h4>
                            <ul>
                                <li>
                                    <a>
                                        <div class="pic">
                                            <div class="imgbox" style="height: 100%; width: 100%;">
                                                <img src="/statics/images/db56a35f87eaf8298303b674885e3afb120467%20(2).png">
                                            </div>
                                        </div>
                                        <p class="name">三禾寿司（石龙店）</p>
                                        <p class="desc">新城区</p>
                                        <p class="price">
                                            <b>￥</b>78.0
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="pic">
                                            <div class="imgbox" style="height: 100%; width: 100%;">
                                                <img src="/statics/images/db56a35f87eaf8298303b674885e3afb120467%20(2).png">
                                            </div>
                                        </div>
                                        <p class="name">三禾寿司（石龙店）</p>
                                        <p class="desc">新城区</p>
                                        <p class="price">
                                            <b>￥</b>78.0
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="pic">
                                            <div class="imgbox" style="height: 100%; width: 100%;">
                                                <img src="/statics/images/db56a35f87eaf8298303b674885e3afb120467%20(2).png">
                                            </div>
                                        </div>
                                        <p class="name">三禾寿司（石龙店）</p>
                                        <p class="desc">新城区</p>
                                        <p class="price">
                                            <b>￥</b>78.0
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
<script src="/statics/js/common.js"></script>
<script src="/statics/js/index.js"></script>
<!-- JS_DEPS_END -->
<!-- JS_APP_BOOTSTRAP_BEGIN -->
<script>
    ;(function () {
        try {
            var app = document.getElementById('react');
            if ('default' in App) App = App['default'];
            // https://facebook.github.io/react/docs/react-dom.html#hydrate
            (ReactDOM.hydrate || ReactDOM.render)(
                React.createElement(App, window.AppData), app
            );
        } catch (e) {
            console.error('[Turbo#React] ', e);
        }
    })(this);</script>
<footer class="com-footer">
    <div class="footer-content">
        <div class="footer-link clearfix">
            <div class="footer-column">
                <dl>
                    <dt>用户帮助</dt>
                    <dd><a rel="nofollow" target="_blank">申请退款</a></dd>
                    <dd><a rel="nofollow" target="_blank">查看美团券密码</a></dd>
                    <dd><a rel="nofollow" target="_blank">常见问题</a></dd>
                    <dd><a rel="nofollow" target="_blank">用户协议</a></dd>
                    <dd><a rel="nofollow" target="_blank">隐私政策</a></dd>
                    <dd><a rel="nofollow" target="_blank">反诈骗公告</a></dd>
                    <dd><a rel="nofollow" target="_blank">消费者权益保障</a>
                    </dd>
                </dl>
                <dl>
                    <dt>美团服务</dt>
                    <dd><a target="_blank">美团外卖</a></dd>
                    <dd><a target="_blank">美团酒店</a></dd>
                    <dd><a target="_blank">猫眼电影</a></dd>
                    <dd><a target="_blank">美团配送</a></dd>
                    <dd><a target="_blank">美团云</a></dd>
                    <dd><a target="_blank">大众点评</a></dd>
                    <dd><a target="_blank">榛果民宿</a></dd>
                    <dd><a target="_blank">无人配送</a></dd>
                </dl>
            </div>
            <div class="footer-column">
                <dl>
                    <dt>商家合作</dt>
                    <dd><a rel="nofollow" target="_blank">美食商家入驻(非外卖)</a></dd>
                    <dd><a target="_blank">美团外卖开店申请</a></dd>
                    <dd><a target="_blank">美团收银官网</a></dd>
                    <dd><a rel="nofollow" target="_blank">外卖配送加盟申请</a></dd>
                    <dd><a target="_blank">美团点评餐饮学院</a></dd>
                    <dd><a rel="nofollow" target="_blank">酒店商家入驻</a></dd>
                    <dd><a rel="nofollow" target="_blank">境内度假商家入驻</a></dd>
                    <dd><a rel="nofollow" target="_blank">综合商家入驻</a></dd>
                    <dd><a rel="nofollow" target="_blank">榛果民宿房东商家入驻</a></dd>
                    <dd><a target="_blank">商家开票申请</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团点评智能收银机</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团点评餐饮开放平台</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团点评收单</a>s</dd>
                    <dd><a rel="nofollow" target="_blank">免费使用美团排队</a></dd>
                    <dd><a rel="nofollow" target="_blank">快驴进货商家合作</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团闪购商家入驻</a></dd>
                </dl>
            </div>
            <div class="footer-column">
                <dl>
                    <dt>代理商加盟</dt>
                    <dd><a rel="nofollow" target="_blank">美团外卖代理商招募</a></dd>
                    <dd><a rel="nofollow" target="_blank">到店餐饮代理商招募</a></dd>
                    <dd><a rel="nofollow" target="_blank">非餐饮代理商招募</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团联盟</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团收银招募线上分销商</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团点评5S服务商招募</a></dd>
                    <dd><a rel="nofollow" target="_blank">美团收单渠道代理商招募</a>
                    </dd>
                </dl>
                <dl>
                    <dt>美团规则</dt>
                    <dd><a rel="nofollow" target="_blank">规则中心</a></dd>
                    <dd><a rel="nofollow" target="_blank">规则目录</a></dd>
                    <dd><a rel="nofollow" target="_blank">规则评议院</a></dd>
                </dl>
            </div>
            <div class="footer-column">
                <dl>
                    <dt>关注美团</dt>
                    <dd><a rel="nofollow" target="_blank">美团新浪微博</a></dd>
                </dl>
                <dl>
                    <dt>公司信息</dt>
                    <dd><a rel="nofollow" target="_blank">关于我们</a></dd>
                    <dd><a rel="nofollow" target="_blank">投资者关系</a></dd>
                    <dd><a rel="nofollow" target="_blank">加入我们</a></dd>
                    <dd><a rel="nofollow" target="_blank">商户诚信公约及管理办法</a></dd>
                    <dd><a rel="nofollow" target="_blank">保险经纪资质</a></dd>
                </dl>
                <dl>
                    <dt>廉正举报</dt>
                    <dd><a rel="nofollow" target="_self">廉政邮箱</a></dd>
                </dl>
            </div>
            <div class="footer-column">
                <dl>
                    <dt>消费者服务热线</dt>
                    <dd>外卖消费者：<a rel="nofollow" href="tel:10109777" target="_blank">10109777</a></dd>
                    <dd>猫眼消费者：<a rel="nofollow" href="tel:10105335" target="_blank">10105335</a></dd>
                    <dd>其他消费者：<a rel="nofollow" href="tel:10107888" target="_blank">10107888</a></dd>
                </dl>
                <dl>
                    <dt>商家服务热线</dt>
                    <dd>外卖&amp;餐饮商家：<a rel="nofollow" href="tel:10105557" target="_blank">10105557</a></dd>
                    <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：<a rel="nofollow" href="tel:10100107" target="_blank">10100107</a>
                    </dd>
                </dl>
                <dl>
                    <dt>投诉举报热线</dt>
                    <dd>违法和不良信息举报电话：<a rel="nofollow" href="tel:4006018900" target="_blank">4006018900</a></dd>
                    <dd>举报邮箱：<a rel="nofollow" target="_self">tousujubao@meituan.com</a></dd>
                </dl>
                <dl>
                    <dt><a rel="nofollow" target="_blank">商家自助入驻美团入口</a></dt>
                </dl>
            </div>
        </div>
        <div class="footer-copyright clearfix">
            <div class="footer-copyright-left">
                <p>©美团网团购 meituan.com<a style="margin-left: 20px;">京ICP证070791号</a><a>京ICP备10211739号</a></p>
                <p><a target="_blank">广播电视节目制作经营许可证（京）字第03889号</a></p>
                <p><a target="_blank">食品经营许可证</a><a target="_blank">互联网药品信息服务资格证</a></p>
                <p><a target="_blank">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a></p>
            </div>
            <div class="footer-copyright-right"><a target="_blank">京公网安备11010502025545号</a>
                <div class="footer-copyright-cert">
                    <a class="bus-license" target="_blank">
                        <img src="/statics/images/3e7f8a17e55bace814166b667618b459366061.png">
                        <p>北京三快科技有限公司</p>
                    </a>
                    <a class="sp-ft sp-ft--record" title="备案信息" target="_blank">备案信息</a>
                    <a class="sp-ft sp-ft--knet"target="_blank">可信网站</a>
                    <a class="sp-ft sp-ft--12315" target="_blank">12315消费争议</a>
                </div>
            </div>
        </div>
    </div>
</footer>
</body>
</html>