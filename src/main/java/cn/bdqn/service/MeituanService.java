package cn.bdqn.service;

import cn.bdqn.pojo.Goods;
import cn.bdqn.pojo.Order_goods;
import cn.bdqn.pojo.Seller_goods;

import java.util.List;

public interface MeituanService {
    List<Seller_goods> getSeller_goods();
    Seller_goods getGoodsAndId(Seller_goods seller_goods);
    int addOrder(Order_goods Order_goods);
    List<Seller_goods> getSeller(Integer sellerId);
    Goods getGoodsAndSellerId(Integer sellerId);
}
