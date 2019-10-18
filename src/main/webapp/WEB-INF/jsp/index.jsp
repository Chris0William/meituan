<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2019/10/6
  Time: 15:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
    <link rel="stylesheet" href="/statics/css/com_footer.css">
    <link rel="stylesheet" href="/statics/css/com_header.css">
    <link rel="stylesheet" href="/statics/css/index.css">
    <link rel="stylesheet" href="/statics/css/main.css">
    <script src="/statics/js/es6-shim.js"></script>
    <script src="/statics/js/lazy-img.js"></script>
    <script src="/statics/js/fetch.js"></script>
    <script src="/statics/js/analytics.js"></script>
    <style>
        com-footer .footer-content .footer-copyright .footer-copyright-cert a.sp-ft {
            display: inline-block;
            overflow: hidden;
            text-indent: -1000px;
            height: 38px;
            background-image: url(/statics/images/footer.png);
            background-repeat: no-repeat;
            margin-right: 2px;
        }
    </style>
</head>
<body id="main">
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
<div id="react">
    <div class="page index" data-reactroot="">
        <div class="index-container">
            <!--轮播图和分类-->
            <div class="banner-container clearfix">
                <div class="left-banner">
                    <div class="category-nav-container">
                        <div class="category-nav-title-wrapper">
                            <span class="category-nav-title">全部分类</span>
                            <span class="title-icon"></span>
                        </div>
                        <div class="category-nav-content-wrapper">
                            <ul>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-foodNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a data-bid="b_atx2p7dc" class="link nav-text" target="_blank">美食</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-waimaiNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text"target="_blank">外卖</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-hotelNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">
                                                酒店<span class="nav-promotion">HOT</span>
                                            </a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-zhenguoNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                        <a class="link nav-text" target="_blank">榛果民宿</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-maoyanNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">猫眼电影</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-planeNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">机票</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">火车票</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-ktvNew"></i>
                                    <span class="nav-text-wrapper"><span>
                                        <a class="link nav-text" target="_blank">休闲娱乐</a> /
                                    </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">KTV</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-lifeNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">生活服务</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i></li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-beautyNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">丽人</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">美发</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">医学美容</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-marriedNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">结婚</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">婚纱摄影</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">婚宴</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li"><i class="iconfontNew hc-icon-childNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">亲子</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">儿童乐园</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">幼教</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-sportNew"></i>
                                    <span class="nav-text-wrapper">
                                    <span>
                                        <a class="link nav-text" target="_blank">运动健身</a> /
                                    </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">健身中心</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-decorateNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                        <a class="link nav-text" target="_blank">家装</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">建材</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">家居</a>
                                        </span>
                                    s</span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-educationNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">学习培训</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">音乐培训</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-medicalNew"></i>
                                    <span class="nav-text-wrapper"><span>
                                        <a class="link nav-text" target="_blank">医疗健康</a> /
                                    </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">宠物</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">爱车</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                                <li class="nav-li">
                                    <i class="iconfontNew hc-icon-barNew"></i>
                                    <span class="nav-text-wrapper">
                                        <span>
                                            <a class="link nav-text" target="_blank">酒吧</a> /
                                        </span>
                                        <span>
                                            <a class="link nav-text" target="_blank">密室逃脱</a>
                                        </span>
                                    </span>
                                    <i class="nav-right-arrow"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="category-nav-detail-wrapper">
                            <div class="category-nav-detail">
                                <div class="detail-area">
                                    <div class="detail-title-wrapper clearfix">
                                        <h2>
                                            <a class="link detail-title" target="_blank">美食</a>
                                        </h2>
                                        <a class="link detail-more" target="_blank" data-query="utm_source=meituanweb">更多
                                            <i class="detail-right-arrow"></i>
                                        </a>
                                    </div>
                                    <div class="detail-content">
                                        <a class="link detail-text" target="_blank">代金券</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">甜点饮品</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">火锅</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">自助餐</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">小吃快餐</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">日韩料理</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西餐</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">聚餐宴请</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">东北菜</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">川湘菜</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">江浙菜</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">香锅烤鱼</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">粤港菜</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">中式烧烤/烤串</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">西北菜</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a>
                                        <a class="link detail-text" target="_blank" data-query="utm_source=meituanweb">烧烤烤肉</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-banner">
                    <div class="home-header-links">
                        <a class="link waimai-link" title="美团外卖" target="_blank">美团外卖</a>
                        <a class="link maoyan-link" title="猫眼电影" query="utm_source=meituanweb" data-query="utm_source=meituanweb" target="_blank">猫眼电影</a>
                        <a class="link hotel-link" title="美团酒店" target="_blank">美团酒店</a>
                        <a class="link homestay-link" title="民宿／公寓" target="_blank">民宿／公寓</a>
                        <a class="link merchant-link" title="商家入驻" target="_blank">商家入驻</a>
                        <a class="link gongyi-link" title="美团公益" target="_blank">美团公益</a>
                    </div>
                    <div class="banner-row clearfix">
                        <div class="item banner-slider shadow">
                            <div class="slider" id="banner-slider">
                                <div class="slider-content clearfix" style="width: 2750px;">
                                    <div class="slider-item" style="width: 550px; left: 0px; z-index: 9; opacity: 0; transition: opacity 0.5s ease 0s;">
                                        <a class="link" target="_blank">
                                            <div class="slider-img-div" style="background-image:url(/statics/images/daa73310c9e57454dc97f0146640fd9f69772.jpg)"></div>
                                        </a>
                                    </div>
                                    <div class="slider-item" style="width: 550px; left: -550px; z-index: 9; opacity: 0; transition: opacity 0.5s ease 0s;">
                                        <a class="link" target="_blank">
                                            <div class="slider-img-div" style="background-image:url(/statics/images/daa73310c9e57454dc97f0146640fd9f69772.jpg)"></div>
                                        </a>
                                    </div>
                                    <div class="slider-item" style="width: 550px; left: -1100px; z-index: 9; opacity: 0; transition: opacity 0.5s ease 0s;">
                                        <a class="link" target="_blank">
                                            <div class="slider-img-div" style="background-image:url(/statics/images/daa73310c9e57454dc97f0146640fd9f69772.jpg)"></div>
                                        </a>
                                    </div>
                                    <div class="slider-item" style="width: 550px; left: -1650px; z-index: 50; opacity: 1; transition: opacity 0.5s ease 0s;">
                                        <a class="link" target="_blank">
                                            <div class="slider-img-div" style="background-image:url(/statics/images/daa73310c9e57454dc97f0146640fd9f69772.jpg)"></div>
                                        </a>
                                    </div>
                                    <div class="slider-item" style="width: 550px; left: -2200px; z-index: 9; opacity: 0; transition: opacity 0.5s ease 0s;">
                                        <a class="link" target="_blank">
                                            <div class="slider-img-div" style="background-image:url(/statics/images/daa73310c9e57454dc97f0146640fd9f69772.jpg)"></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="slider-pagination" id="banner-sliderpage" style="margin-left: -45px;">
                                    <div class="pagination" style="background: rgb(255, 255, 255); opacity: 0.2;"></div>
                                    <div class="pagination" style="background: rgb(255, 255, 255); opacity: 0.2;"></div>
                                    <div class="pagination" style="background: rgb(255, 255, 255); opacity: 0.2;"></div>
                                    <div class="pagination" style="background: rgb(255, 255, 255); opacity: 0.9;"></div>
                                    <div class="pagination" style="background: rgb(255, 255, 255); opacity: 0.2;"></div>
                                </div>
                                <div class="btn btn-next" style="display:block"><i class="iconfont icon-btn_right"></i></div>
                                <div class="btn btn-pre" style="display:block"><i class="iconfont icon-btn_left"></i></div>
                            </div>
                        </div>
                        <a class="link" target="_blank">
                            <div class="item shadow pic-1" style="background-image:url(/statics/images/e473bb428f070321269b23370ff02ba956209.jpg)"></div>
                        </a>
                        <div class="item banner-logincard">
                            <div style="float:left">
                                <div class="login-container">
                                    <div class="default" style="display:block">
                                        <div class="head-img-row"><img src="/statics/images/avatar.jpg" alt=""></div>
                                        <p class="user-name">Hi！你好</p>
                                        <a class="btn-login">注册</a>
                                        <a class="btn-login">立即登录</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-row clearfix">
                        <a class="link" target="_blank">
                            <div class="item pic-2 shadow" style="background-image:url(/statics/images/8cce56c467a17e04f3094d1e455462a0132772.png)"></div>
                        </a>
                        <a class="link" target="_blank">
                            <div class="item pic-3 shadow" style="background-image:url(/statics/images/8cce56c467a17e04f3094d1e455462a0132772.png)"></div>
                        </a>
                        <a class="link" target="_blank">
                            <div class="item pic-4 shadow" style="background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg)"></div>
                        </a>
                        <div class="item download-app">
                            <div class="qrcode-box"><img src="/statics/images/download-qr.png" alt="下载APP"></div>
                            <p class="app-name">美团APP手机版</p>
                            <p class="sl"><span class="red">1元起</span><span class="gary">吃喝玩乐</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <!--有格调和狠优惠-->
            <div class="scenes-container">
                <!--有格调-->
                <div class="quality-container">
                    <div class="index-nav-container undefined"
                         style="background-color: rgb(190, 164, 116); background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);">
                        <ul class="clearfix ">
                            <li class="title nav-item mf-shang-hei-regular">有格调</li>
                            <li class="nav-item active">全部</li>
                            <li class="nav-item">约会聚餐</li>
                            <li class="nav-item">丽人spa</li>
                            <li class="nav-item">电影演出</li>
                            <li class="nav-item">品质出游</li>
                        </ul>
                    </div>
                    <div class="quality-area clearfix">
                        <c:forEach items="${getGoods}" var="li">
                            <c:forEach items="${goods}" var="l">
                        <a href="/meituan/addGoods?sellerId=${li.sellerId}" class="link quality-card" data-query="utm_source=meituanweb" target="_blank">
                            <div class="quality-img">
                               <img src="/statics/images/${l.goodsJpg}.jpg" class="image">
                            </div>
                            <div class="poi-info">
                                <div class="title" title="${li.sellerName}">${li.sellerName}</div>
                                <div class="sub-title" title="${l.goodsDescription}">${l.goodsDescription}</div>
                                <div class="price-info">
                                    <span class="current-price-wrapper">
                                        <span class="price-symbol numfont">¥</span>
                                        <span class="current-price numfont">${l.goodsprice}</span>
                                    </span>
                                    <span class="old-price">门市价¥${l.goodsprice}</span>
                                    <span class="sold bottom-right-info">${li.sellerAddress}</span>
                                </div>
                            </div>
                        </a>
                                </c:forEach>
                            </c:forEach>
                    </div>
                </div>
                <!--狠优惠-->
                <div class="offer-container">
                    <div class="index-nav-container undefined" style="background-color: rgb(190, 164, 116); background-image: linear-gradient(to right, rgb(255, 113, 74) 2%, rgb(252, 66, 66) 97%);">
                        <ul class="clearfix ">
                            <li class="title nav-item mf-shang-hei-regular">狠优惠</li>
                            <li class="nav-item active">全部</li>
                            <li class="nav-item">美食</li>
                            <li class="nav-item">休闲</li>
                        </ul>
                    </div>
                    <div class="cheap-area clearfix">
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/3_0928170346.jpg" class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="万达影城（华南MALL店）">万达影城（华南MALL店）</div>
                            <div class="sub-title" title="速度与激情：特别行动">速度与激情：特别行动</div>
                            <div class="tags-wrapper clearfix">
                                <div class="tag">改签</div>
                            </div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">¥</span>
                                    <span class="current-price numfont">41.9</span>
                                </span>
                                <span class="old-price">门市价¥160</span>
                                <span class="sold">已售14.2万</span>
                            </div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/fd74bcfbbcf21c3f045712b4cbb27206188131.png" class="image">
                        </div>
                        <div class="poi-info">
                            <div class="title" title="来御来三汁焖锅">来御来三汁焖锅</div>
                            <div class="sub-title" title="[2店通用]51元代金券1张">[2店通用]51元代金券1张</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">¥</span>
                                    <span class="current-price numfont">1</span>
                                </span>
                                <span class="old-price">美团价¥51</span>
                                <span class="sold">已售753</span>
                            </div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/c95e85575563d22789aa19411dfcd8e0147181.jpg" class="image">
                        </div>
                        <div class="poi-info">
                            <div class="title" title="美联英语（长安万达中心）">美联英语（长安万达中心）</div>
                            <div class="sub-title" title="[万达广场]MT低段(10-13岁)体验课">[万达广场]MT低段(10-13岁)体验课</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">¥</span>
                                    <span class="current-price numfont">9.1</span>
                                </span>
                                <span class="old-price">门市价¥900</span>
                                <span class="sold">已售16</span>
                            </div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/faea72813933ab25b1e4ec45344fc72653212.jpg" class="image">
                        </div>
                        <div class="poi-info">
                            <div class="title" title="万岁寿司">万岁寿司</div>
                            <div class="sub-title" title="[多城市]和风三文鱼骨腩1份，包间免费">[多城市]和风三文鱼骨腩1份，包间免费</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="current-price numfont">抢光了</span>
                                </span>
                                <span class="sold">已售2860</span>
                            </div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/c95e85575563d22789aa19411dfcd8e0147181.jpg" class="image">
                        </div>
                        <div class="poi-info">
                            <div class="title" title="美联英语（长安万达中心）">美联英语（长安万达中心）</div>
                            <div class="sub-title" title="[万达广场]青少国庆节课程套餐">[万达广场]青少国庆节课程套餐</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info">
                                <span class="current-price-wrapper">
                                    <span class="price-symbol numfont">¥</span>
                                    <span class="current-price numfont">9.1</span>
                                </span>
                                <span class="old-price">门市价¥880</span>
                                <span class="sold">已售9</span>
                            </div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img">
                            <img src="/statics/images/c95e85575563d22789aa19411dfcd8e0147181.jpg"
                                class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="美联英语（长安万达中心）">美联英语（长安万达中心）</div>
                            <div class="sub-title" title="[万达广场]商务英语精选课程套餐">[万达广场]商务英语精选课程套餐</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info"><span class="current-price-wrapper"><span
                                    class="price-symbol numfont">¥</span><span class="current-price numfont">8.1</span></span><span
                                    class="old-price">门市价¥850</span><span class="sold">已售101</span></div>
                        </div>
                    </a>
                        <a href="https://www.meituan.com/xuexipeixun/73074910/" data-bid="b_frobtpp5"
                           class="link cheap-card" target="_blank">

                        <div class="cheap-img"><img
                                src="/statics/images/c95e85575563d22789aa19411dfcd8e0147181.jpg"
                                class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="美联英语（长安万达中心）">美联英语（长安万达中心）</div>
                            <div class="sub-title" title="[万达广场]学生英语精选课程套餐">[万达广场]学生英语精选课程套餐</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info"><span class="current-price-wrapper"><span
                                    class="price-symbol numfont">¥</span><span class="current-price numfont">18.1</span></span><span
                                    class="old-price">门市价¥650</span><span class="sold">已售46</span></div>
                        </div>
                        </a>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img"><img
                                src="/statics/images/00de4560d740401ada7d80f809dd5e34619590.jpg"
                                class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="巴黎经典婚纱摄影（万达阳光商业城店）">巴黎经典婚纱摄影（万达阳光商业城店）</div>
                            <div class="sub-title" title="[康乐路]抢5000大礼包">[康乐路]抢5000大礼包</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info"><span class="current-price-wrapper"><span
                                    class="price-symbol numfont">¥</span><span
                                    class="current-price numfont">1</span></span><span class="old-price">门市价¥5000</span><span
                                    class="sold">已售14</span></div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img"><img
                                src="/statics/images/cd9005ca4bb1e54b3529dbaf289568f5256318.jpg"
                                class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="施诺装饰·专注设计施工">施诺装饰·专注设计施工</div>
                            <div class="sub-title" title="[常平镇中心]主笔设计师量房+初步方案+预算">[常平镇中心]主笔设计师量房+初步方案+预算</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info"><span class="current-price-wrapper"><span
                                    class="price-symbol numfont">¥</span><span
                                    class="current-price numfont">1</span></span><span class="old-price">门市价¥4800</span><span
                                    class="sold">已售17</span></div>
                        </div>
                    </a>
                        <a class="link cheap-card" target="_blank">
                        <div class="cheap-img"><img
                                src="/statics/images/add47252b5f09dfd547e84e240909d4c733162.jpg"
                                class="image"></div>
                        <div class="poi-info">
                            <div class="title" title="喜滋味卜卜贝火锅专门店">喜滋味卜卜贝火锅专门店</div>
                            <div class="sub-title" title="[怡华北路]20元代金券1张，可叠加2张">[怡华北路]20元代金券1张，可叠加2张</div>
                            <div class="tags-wrapper clearfix"></div>
                            <div class="price-info"><span class="current-price-wrapper"><span
                                    class="price-symbol numfont">¥</span><span
                                    class="current-price numfont">1</span></span><span
                                    class="old-price">美团价¥20</span><span class="sold">已售196</span></div>
                        </div>
                    </a></div>
                </div>
            </div>
            <!--猫眼电影-->
            <div class="maoyan-container">
                <div class="index-nav-container undefined"
                     style="background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);">
                    <ul class="clearfix ">
                        <li class="title nav-item mf-shang-hei-regular">猫眼电影</li>
                        <li class="nav-item active">正在热映</li>
                        <li class="nav-item">即将上映</li>
                        <li class="total nav-item"><a  data-bid="b_rbbamvz0" class="link"
                                                      target="_blank" data-query="utm_source=meituanweb"><span>全部</span><span
                                class="right-arrow iconfont icon-btn_right"></span></a></li>
                    </ul>
                </div>
                <div class="scenes-body">
                    <div class="hot-container" style="display: block;">
                        <div>
                            <div class="slider">
                                <div class="slider-content clearfix" style="left: 0px; margin: 0px 12px;">
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/c5975d98fc484027ff55d813ab3b2daa427032.jpg" class="image film-img">
                                            <img class="film-mark" style="display: none;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>9.2</span></b>
                                            </p>
                                            <p class="film-name">小Q</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                    </a></div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/845dce25ba800e91ac591b683a0c3ba92450317.jpg" class="image film-img">
                                            <img src="/statics/images/imax.png" class="film-mark" style="display: inline-block;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>7.6</span></b>
                                            </p>
                                            <p class="film-name">诛仙Ⅰ</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a  class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/4c01895cfd53e82f7c3048c407974a6b4739229.jpg" class="image film-img">
                                            <img src="/statics/images/imax.png" class="film-mark" style="display: inline-block;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b><span>493531</span> 人想看</b>
                                            </p>
                                            <p class="film-name">攀登者</p>
                                            <span class="buy-ticket">预售</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/b2c5c74d33e45745fd3462e44b3698e18336620.jpg" class="image film-img">
                                            <img src="/statics/images/imax.png" class="film-mark" style="display: inline-block;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b><span>449764</span> 人想看</b>
                                            </p>
                                            <p class="film-name">我和我的祖国</p>
                                            <span class="buy-ticket">预售</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/cddf92d0ac6a0db837a1bc488b241c42267927.jpg" class="image film-img">
                                            <img src="/statics/images/imax.png" class="film-mark" style="display: inline-block;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b><span>474765</span> 人想看</b>
                                            </p>
                                            <p class="film-name">中国机长</p>
                                            <span class="buy-ticket">预售</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/d18915868f6e3e6e287162354700690f2338229.jpg" class="image film-img">
                                            <img class="film-mark" style="display: none;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>8.6</span></b>
                                            </p>
                                            <p class="film-name">小小的愿望</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/dfaf2fc4169522642294fae240d35f522332427.jpg" class="image film-img">
                                            <img class="film-mark" style="display: none;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>8.6</span></b>
                                            </p>
                                            <p class="film-name">友情以上</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/005955214d5b3e50c910d7a511b0cb571445301.jpg" class="image film-img">
                                            <img src="/statics/images/imax3d.png" class="film-mark" style="display: inline-block;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>9.6</span></b>
                                            </p>
                                            <p class="film-name">哪吒之魔童降世</p>
                                            <span class="buy-ticket">s</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a data-lab="null" class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/d5bc40a51534c26acbafd49c1dc484e24634457.jpg" class="image film-img">
                                            <img class="film-mark" style="display: none;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>9.2</span></b>
                                            </p>
                                            <p class="film-name">决胜时刻</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                        </a>
                                    </div>
                                    <div class="slider-item-film">
                                        <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                            <img src="/statics/images/b7362f555340906684944957dfc8d5421530646.jpg" class="image film-img">
                                            <img class="film-mark" style="display: none;">
                                        <div class="film-info">
                                            <p class="film-score">
                                                <b>观众评 <span>8.7</span></b>
                                            </p>
                                            <p class="film-name">名侦探柯南：绀青之拳</p>
                                            <span class="buy-ticket">购票</span>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="btn btn-next" style="right: 0px;"><i class="iconfont icon-btn_right"></i>
                                </div>
                                <div class="btn btn-pre" style="left: 0px;"><i class="iconfont icon-btn_left"></i></div>
                            </div>
                            <div class="slider-pagination" id="maoyan-page" style="margin-left: -15px;">
                                <div class="pagination" style="opacity: 0.9;"></div>
                                <div class="pagination" style="opacity: 0.2;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--民宿-->
            <div class="zhenguo-container">
                <div class="index-nav-container undefined" style="background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);">
                    <ul class="clearfix ">
                        <li class="title nav-item mf-shang-hei-regular">推荐民宿</li>
                        <li class="nav-item active">广州</li>
                        <li class="nav-item">厦门</li>
                        <li class="nav-item">深圳</li>
                        <li class="nav-item">珠海</li>
                        <li class="nav-item">桂林</li>
                        <li class="nav-item">海口</li>
                        <li class="nav-item">惠州</li>
                        <li class="nav-item">佛山</li>
                        <li class="nav-item">柳州</li>
                        <li class="nav-item">清远</li>
                        <li class="total nav-item">
                            <a class="link" target="_blank" data-query="utm_source=meituanweb">
                                <span>全部</span>
                                <span class="right-arrow iconfont icon-btn_right"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="minsu-ls-view clearfix">
                    <div class="products" style="display: flex;">
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/5b3b25aeb000232f5790c1870bce5ab0476349.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">【嘉培民宿】家庭影院 整套电梯公寓房 华商隔壁 锦绣半山 情侣出游 可做饭</p>
                                <p class="sub-title">
                                    <span>整套1居室·</span>
                                    <span>可住2人 | </span>
                                    <span>增城商圈</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>168
                                </p>
                            </div>
                            </a>
                        </div>
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/8dcb22b39552384954ac072c710c135c387579.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">天河万科|宜家暗色系落地窗高层大复式投影房|有厨房可做饭|岭南学院私立华联|广交会|机场直达|龙洞</p>
                                <p class="sub-title">
                                    <span>整套1居室·</span>
                                    <span>可住2人 | </span>
                                    <span>萝岗/黄埔区</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>188
                                </p>
                            </div>
                            </a>
                        </div>
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/feb1b1a8831ef00e38346abb86f9d0493200614.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">【乐湾】天河万科米酷18方错层9号LOFT大床房·温馨粉色调·广交会/宝能/岭南学院/驾照考场</p>
                                <p class="sub-title">
                                    <span>整套1居室·</span>
                                    <span>可住2人 | </span>
                                    <span>萝岗/黄埔区</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>131
                                </p>
                            </div>
                            </a>
                        </div>
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/ae80009bd554aa93b4778fe6e48871da1002223.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">《悠度》小型loft公寓. 天河区万科米酷/小新塘/科学城/岭南学院/珠江新城/琶洲</p>
                                <p class="sub-title">
                                    <span>整套1居室·</span>
                                    <span>可住3人 | </span>
                                    <span>萝岗/黄埔区</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>178
                                </p>
                            </div>
                            </a>
                        </div>
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/cbe827b75798482f058d3d3c0b5b052b288985.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">【极简诗意•学术咖御宅】欢迎免押短租&amp;出门公车站BRT/直达琶洲/珠江新城岗顶/天河公园上社/华师暨大广技师邮电学院</p>
                                <p class="sub-title">
                                    <span>整套3居室·</span>
                                    <span>可住2人 | </span>
                                    <span>天河公园/东圃商圈</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>122
                                </p>
                            </div>
                            </a>
                        </div>
                        <div class="minsu-item">
                            <a target="_blank">
                            <div class="product-card-header">
                                <img src="/statics/images/a0aaa371f8818e6ca38fdc3fb61a76d5307062.jpg" class="product-img">
                            </div>
                            <div class="product-info">
                                <p class="product-title">ins•甜蜜•遇见/长隆/广州南站/广州塔小蛮腰/珠江新城/上下九/落地窗/可做饭/电子密码自助入住/新公寓</p>
                                <p class="sub-title">
                                    <span>整套1居室·</span>
                                    <span>可住2人 | </span>
                                    <span>广州南站</span>
                                </p>
                                <p class="price-number numfont price">
                                    <span class="price-icon">￥</span>99
                                </p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--猜你喜欢-->
            <div class="recommend-container">
                <div class="index-nav-container undefined"
                     style="background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);">
                    <ul class="clearfix ">
                        <li class="title nav-item mf-shang-hei-regular">猜你喜欢</li>
                        <li class="nav-item active">为你甄选最适合的</li>
                    </ul>
                </div>
                <div class="recommend-list"><a class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/db56a35f87eaf8298303b674885e3afb120467.png"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="三禾寿司（石龙店）">三禾寿司（石龙店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 76%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">831个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">新城区</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">78.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a  data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/dc45a3f77739220086ec8f3a9399fb68153820.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="牛豪客牛排（横沥店）">牛豪客牛排（横沥店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 74%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">5029个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">华润购物商场</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">35.8</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/ac7f049e4615bd219646d9eb445aaac1129756.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="MOCO莫蔻形象健康管理（南城8店）">MOCO莫蔻形象健康管理（南城8店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 100%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">27个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">鸿福路口</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">58.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/5d6c124ca4dbe83c69d76693efd3bff3217008.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="麦当劳（石龙东升路）">麦当劳（石龙东升路）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 76%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">375个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">新城区</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">28.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/ee1b63b5ae82b549e3d05eff7084f19d210423.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="仟福粥点（世贸店）">仟福粥点（世贸店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 60%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">78个评价</div>
                                </div>
                                <div class="desc-line aligned"></div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">29.9</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/e8473a0c707e4359155ffda186c27d5f77464.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="蜀八婆鲍鱼鸡煲虾（常平店）">蜀八婆鲍鱼鸡煲虾（常平店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 94%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">3552个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">百花时代广场</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">68.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/6d6fe7a623bc85cc39802016223cb8c2156280.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="东城榕树湾泳健会SPA水疗">东城榕树湾泳健会SPA水疗</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 96%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">7139个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">主山/高田坊</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">28.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/8b7e32ab31872f21767cd4cdef8b84333862528.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="活力舞蹈瑜伽健身会">活力舞蹈瑜伽健身会</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 100%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">189个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">花园新村</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">480.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/1cf4b125666be7b5d933d863d402ed401259511.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="草堂养生盐蒸馆（南城店）">草堂养生盐蒸馆（南城店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 100%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">557个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">城市风景街</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">35.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/55f552fe971c12abac8b83d28dcd5e8524302.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="德雷克海鲜自助餐厅（汇景城店）">德雷克海鲜自助餐厅（汇景城店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 68%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">1166个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">汇景城</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">99.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/e5b8d205597e91128e50ceaa6bec316e908180.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="玛莎国际专业接发潮牌（东城万达店）">玛莎国际专业接发潮牌（东城万达店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 94%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">37个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">世博/世纪广场</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">31.8</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/d63ad52115689bf3d2e0d369594609a8219553.png"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="广隆蛋挞王（万江恒大店）">广隆蛋挞王（万江恒大店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 96%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">912个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">石美</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">14.9</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/9ad0d4cd92402dbf54d70f95f0f8dc8a190361.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="粤姐开饭(华南MALL店)">粤姐开饭(华南MALL店)</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 74%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">4597个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">华南摩尔</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">44.99</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/4959afe01d60680636c2fd94325d2709909466.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="非烤勿扰自助烤肉海鲜火锅（大朗店）">非烤勿扰自助烤肉海鲜火锅（大朗店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 86%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">1684个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">长盛广场</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">56.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a><a data-bid="b_ecc0l2di"
                       class="link link recommend-item" target="_blank">
                    <div class="card-container">
                        <div class="recommend-card-wrapper">
                            <div class="img-box"><img
                                    src="/statics/images/fa65d2de5568e44c5e340bd600be682a365932.jpg"
                                    class="image"></div>
                            <div class="info-box">
                                <div class="title aligned" title="愿者上钩（厚街店）">愿者上钩（厚街店）</div>
                                <div class="score-line aligned">
                                    <div class="score">
                                        <div class="rate-stars">
                                            <ul class="rate-stars-ul rate-stars-dark">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                            <ul class="rate-stars-ul rate-stars-light" style="width: 86%;">
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                                <li><i class="iconfont icon-star_icon"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="comment-number">3266个评价</div>
                                </div>
                                <div class="desc-line aligned">
                                    <div class="desc">康乐路</div>
                                </div>
                                <div class="bottom-line aligned">
                                    <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">88.0</span><span
                                            class="price-desc">起</span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></div>
            </div>
        </div>
    </div>
</div>
<!-- JS_DEPS_BEGIN -->
<!-- JS_DEPS_REACT_BEGIN -->
<script src="/statics/js/react.js"></script>
<script src="/statics/js/react-dom.js"></script>
<!-- JS_DEPS_REACT_END -->
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
<!-- JS_APP_BOOTSTRAP_END -->
<nav class="botton-nav">
    <div class="title">美团导航</div>
    <dl class="b-n-content">
        <div class="b-n-classification">
            <dt class="b-n-subtitle">热门城市</dt>
            <div class="b-n-sublist">
                <dd class="b-n-list-item"><a title="无锡" target="_blank">无锡</a></dd>
                <dd class="b-n-list-item"><a title="成都" target="_blank">成都</a></dd>
                <dd class="b-n-list-item"><a title="青岛" target="_blank">青岛</a></dd>
                <dd class="b-n-list-item"><a title="佛山" target="_blank">佛山</a></dd>
                <dd class="b-n-list-item"><a title="昆明" target="_blank">昆明</a></dd>
                <dd class="b-n-list-item"><a title="长春" target="_blank">长春</a></dd>
                <dd class="b-n-list-item"><a title="南京" target="_blank">南京</a></dd>
                <dd class="b-n-list-item"><a title="厦门" target="_blank">厦门</a></dd>
                <dd class="b-n-list-item"><a title="长沙" target="_blank">长沙</a></dd>
                <dd class="b-n-list-item"><a title="济南" target="_blank">济南</a></dd>
                <dd class="b-n-list-item"><a title="太原" target="_blank">太原</a></dd>
                <dd class="b-n-list-item"><a title="北京" target="_blank">北京</a></dd>
                <dd class="b-n-list-item"><a title="苏州" target="_blank">苏州</a></dd>
                <dd class="b-n-list-item"><a title="常州" target="_blank">常州</a></dd>
                <dd class="b-n-list-item"><a title="哈尔滨" target="_blank">哈尔滨</a></dd>
                <dd class="b-n-list-item"><a title="杭州" target="_blank">杭州</a></dd>
                <dd class="b-n-list-item"><a title="深圳" target="_blank">深圳</a></dd>
                <dd class="b-n-list-item"><a title="广州" target="_blank">广州</a></dd>
                <dd class="b-n-list-item"><a title="重庆" target="_blank">重庆</a></dd>
                <dd class="b-n-list-item"><a title="天津" target="_blank">天津</a></dd>
            </div>
        </div>
        <div class="b-n-classification">
            <dt class="b-n-subtitle">热门分类</dt>
            <div class="b-n-sublist">
                <dd class="b-n-list-item"><a target="_blank">酒店<span class="nav-promotion">HOT</span></a></dd>
                <dd class="b-n-list-item"><a target="_blank">美食</a></dd>
                <dd class="b-n-list-item"><a target="_blank">休闲娱乐</a></dd>
                <dd class="b-n-list-item"><a target="_blank">运动健身</a></dd>
                <dd class="b-n-list-item"><a target="_blank">生活服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">上门服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">购物</a></dd>
                <dd class="b-n-list-item"><a target="_blank">时尚购</a></dd>
                <dd class="b-n-list-item"><a target="_blank">本地购物</a></dd>
                <dd class="b-n-list-item"><a target="_blank">结婚</a></dd>
                <dd class="b-n-list-item"><a target="_blank">摄影写真</a></dd>
                <dd class="b-n-list-item"><a target="_blank">宴会</a></dd>
                <dd class="b-n-list-item"><a target="_blank">丽人</a></dd>
                <dd class="b-n-list-item"><a target="_blank">母婴亲子</a></dd>
                <dd class="b-n-list-item"><a target="_blank">学习培训</a></dd>
                <dd class="b-n-list-item"><a target="_blank">家装</a></dd>
                <dd class="b-n-list-item"><a target="_blank">汽车服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">医疗</a></dd>
                <dd class="b-n-list-item"><a target="_blank">宠物</a></dd>
            </div>
        </div>
        <div class="b-n-classification">
            <dt class="b-n-subtitle">周边热门</dt>
            <div class="b-n-sublist">
                <dd class="b-n-list-item"><a target="_blank">东坑镇酒店</a></dd>
                <dd class="b-n-list-item"><a target="_blank">南沙美食</a></dd>
                <dd class="b-n-list-item"><a target="_blank">企石镇休闲娱乐</a></dd>
                <dd class="b-n-list-item"><a target="_blank">企石镇运动健身</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇生活服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇上门服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">南沙购物</a></dd>
                <dd class="b-n-list-item"><a target="_blank">企石镇时尚购</a></dd>
                <dd class="b-n-list-item"><a target="_blank">南沙本地购物</a></dd>
                <dd class="b-n-list-item"><a target="_blank">企石镇结婚</a></dd>
                <dd class="b-n-list-item"><a target="_blank">南沙摄影写真</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇宴会</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇丽人</a></dd>
                <dd class="b-n-list-item"><a target="_blank">企石镇母婴亲子</a></dd>
                <dd class="b-n-list-item"><a target="_blank">南沙学习培训</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇家装</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇汽车服务</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇医疗</a></dd>
                <dd class="b-n-list-item"><a target="_blank">东坑镇宠物</a></dd>
            </div>
        </div>
    </dl>
</nav>
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