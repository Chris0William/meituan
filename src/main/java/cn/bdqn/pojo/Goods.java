package cn.bdqn.pojo;

public class Goods {
    private Integer goodsId;
    private Integer sellerId;
    private String goodsName;
    private String goodsprice;
    private String goodsDescription;
    private String goodsJpg;

    public String getGoodsDescription() {
        return goodsDescription;
    }

    public void setGoodsDescription(String goodsDescription) {
        this.goodsDescription = goodsDescription;
    }

    public String getGoodsJpg() {
        return goodsJpg;
    }

    public void setGoodsJpg(String goodsJpg) {
        this.goodsJpg = goodsJpg;
    }

    public Integer getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public String getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(String goodsprice) {
        this.goodsprice = goodsprice;
    }
}
