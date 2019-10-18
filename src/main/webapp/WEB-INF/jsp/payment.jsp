<%--
  Created by IntelliJ IDEA.
  User: ASUS
  Date: 2019/10/6
  Time: 15:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/statics/css/com_footer.css">
    <link rel="stylesheet" href="/statics/css/com_header.css">
    <link rel="stylesheet" href="/statics/css/payment.css">
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
                            <li><a rel="nofollow" target="_blank">登录商家中心</a></li>
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
                                    <a  target="_blank">
                                        <img class="appicon" src="/statics/images/meituan.png">
                                    </a>
                                </dd>
                                <dd>
                                    <a  target="_blank">
                                        <img class="appicon" src="/statics/images/waimai.png" title="外卖app" alt="外卖app">
                                    </a>
                                </dd>
                                <dd>
                                    <a  target="_blank">
                                        <img class="appicon" src="/statics/images/zhenguo.png" title="榛果app" alt="榛果app">
                                    </a>
                                </dd>
                                <dd>
                                    <a  target="_blank">
                                        <img class="appicon" src="/statics/images/dianping.png" title="点评app" alt="点评app">
                                    </a>
                                </dd>
                                <dd>
                                    <a  target="_blank">
                                        <img class="appicon" src="/statics/images/maoyan.png" title="猫眼app" alt="猫眼app">
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
    <div class="bd">
        <form action="/meituan/addHouse?goodsId=${getGoods.goodsId}" method="post">
            <table>
                <tbody>
                    <tr>
                        <th class="desc">项目</th>
                        <th class="unit-price">单价</th>
                        <th class="num">数量</th>
                    </tr>
                    <tr>
                        <td>¥${getGoods.goodsprice}</td>
                        <td>
                            <div class="input-number">
                                <button class="minus-btn" type="button"></button>
                                <input type="text" class="input-number" value="1">
                                <button class="plus-btn" type="button"></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="row discount"></div>
            <div class="row mobile-info"></div>
            <div class="form-submit">
                <input type="submit" class="btn" value="提交订单">
            </div>
        </form>
    </div>
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