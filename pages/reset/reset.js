const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        label: '身份验证',
        value: 1
      },
      {
        label: '重置密码',
        value: 2
      }
    ],
    currentStep: 1,
    animation:null
  },

  next(){
    let width = app.globalData.screenWidth;
    this.animation.translateX(-1 * width + 'px').step();
    this.setData({
      animation: this.animation.export()
    });
    setTimeout(()=>{
      this.setData({
        currentStep:2
      });
    },200);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animation=wx.createAnimation({
      duration:200
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})