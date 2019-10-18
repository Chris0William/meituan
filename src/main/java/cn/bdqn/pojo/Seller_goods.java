package cn.bdqn.pojo;

import java.util.List;

public class Seller_goods {
    private Integer sellerId;
    private String sellerName;
    private String sellerPhone;
    private String sellerAddress;
    private String goodPivpsth;
    private List<Goods> goods;

    public List<Goods> getGoods() {
        return goods;
    }

    public void setGoods(List<Goods> goods) {
        this.goods = goods;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getSellerName() {
        return sellerName;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public String getSellerPhone() {
        return sellerPhone;
    }

    public void setSellerPhone(String sellerPhone) {
        this.sellerPhone = sellerPhone;
    }

    public String getSellerAddress() {
        return sellerAddress;
    }

    public String getGoodPivpsth() {
        return goodPivpsth;
    }

    public void setGoodPivpsth(String goodPivpsth) {
        this.goodPivpsth = goodPivpsth;
    }

    public void setSellerAddress(String sellerAddress) {
        this.sellerAddress = sellerAddress;
    }
}
