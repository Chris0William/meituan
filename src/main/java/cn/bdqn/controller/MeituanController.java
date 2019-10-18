package cn.bdqn.controller;

import cn.bdqn.pojo.Goods;
import cn.bdqn.pojo.Order_goods;
import cn.bdqn.pojo.Seller_goods;
import cn.bdqn.service.MeituanService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/meituan")
public class MeituanController{
    @Resource
    private MeituanService meituanService;

    @RequestMapping("/getGoods")
    public String getGoods(HttpSession session){
        List<Seller_goods> getGoods=meituanService.getSeller_goods();
        List<Goods> goods = null;
        for (Seller_goods itm:getGoods){
            goods = itm.getGoods();
        }
        session.setAttribute("getGoods",getGoods);
        session.setAttribute("goods",goods);
        return "index";
    }
    @RequestMapping("/addGoods")
    public String addGoods(HttpSession session,Integer sellerId){
        List<Seller_goods> getGoods=meituanService.getSeller_goods();
        List<Seller_goods> getSeller=meituanService.getSeller(sellerId);
        List<Goods> goods=null;
        for (Seller_goods itm:getGoods){
            goods=itm.getGoods();
        }
        session.setAttribute("getGoods",getGoods);
        session.setAttribute("goods",goods);
        session.setAttribute("getSeller",getSeller);
        return "purchase";
    }
    @RequestMapping("getHoues")
    public String getHoues(HttpSession session,Integer sellerId){
        Goods getGoods=meituanService.getGoodsAndSellerId(sellerId);
        session.setAttribute("getGoods",getGoods);
        return "payment";
    }
    @RequestMapping(value = "addHouse",method = RequestMethod.POST)
    public String addHouse(HttpSession session, Seller_goods seller_goods, Order_goods order_goods){
        Seller_goods getGood=meituanService.getGoodsAndId(seller_goods);
        if(getGood!=null){
            order_goods.setSellerId(1);
            order_goods.setDateOfOrder(new Date());
            order_goods.setStatu(1);
            int count = meituanService.addOrder(order_goods);
            if (count==1){
                List<Seller_goods> getGoods=meituanService.getSeller_goods();
                session.setAttribute("getGoods",getGoods);
                return "index";
            }
        }
        return "payment";
    }
}
