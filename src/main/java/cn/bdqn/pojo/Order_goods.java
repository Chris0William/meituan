package cn.bdqn.pojo;

import java.util.Date;

public class Order_goods {
    private Integer orderId;
    private Integer userId;
    private Integer sellerId;
    private Date dateOfOrder;
    private Date sendToTime;
    private Integer statu;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public Date getDateOfOrder() {
        return dateOfOrder;
    }

    public void setDateOfOrder(Date dateOfOrder) {
        this.dateOfOrder = dateOfOrder;
    }

    public Date getSendToTime() {
        return sendToTime;
    }

    public void setSendToTime(Date sendToTime) {
        this.sendToTime = sendToTime;
    }

    public Integer getStatu() {
        return statu;
    }

    public void setStatu(Integer statu) {
        this.statu = statu;
    }
}
