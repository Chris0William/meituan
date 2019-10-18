package cn.bdqn.service;

import cn.bdqn.dao.MeituanMapper;
import cn.bdqn.pojo.Goods;
import cn.bdqn.pojo.Order_goods;
import cn.bdqn.pojo.Seller_goods;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("meituanService")
public class MeituanServiceImpl implements MeituanService{
    @Resource
    private MeituanMapper meituanMapper;

    @Override
    public List<Seller_goods> getSeller_goods() {
        return meituanMapper.getSeller_goods();
    }

    @Override
    public  Seller_goods  getGoodsAndId(Seller_goods seller_goods) {
        return meituanMapper.getGoodsAndId(seller_goods);
    }

    @Override
    public int addOrder(Order_goods order_goods) {
        return meituanMapper.addOrder(order_goods);
    }

    @Override
    public List<Seller_goods> getSeller(Integer sellerId) {
        return meituanMapper.getSeller(sellerId);
    }

    @Override
    public Goods getGoodsAndSellerId(Integer sellerId) {
        return meituanMapper.getGoodsAndSellerId(sellerId);
    }
}
