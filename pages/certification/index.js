const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps:[
      { label: '实名认证', icon: '../../../assets/rz1.png', value: 1},
      { label: '门店绑定', icon: '../../../assets/rz2.png', value: 2 },
      { label: '提交审核', icon: '../../../assets/rz3.png', value: 3 }
    ],
    screenWidth:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      screenWidth: app.globalData.screenWidth
    });
  }
})