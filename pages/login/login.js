const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:0,
    tabs:[
      {label:'短信登录',value:0},
      {label:'账号登录',value:1}
    ],
    form:{
      phone:'15632111222',
      code:'',
      password:''
    },
    status:false,
    seconds:59
  },
  tabChange(e){
    let type=e.currentTarget.dataset.value;
    this.setData({ type });
  },
  setValue(e){
    let key = 'form.' + e.currentTarget.dataset.attr;
    this.setData({
      [key]:e.detail.value
    });
  },
  getCode(){
    if (!this.data.form.phone){
      app.$util.toast({
        title: '请填写手机号'
      });
    } else if (!app.$util.phoneValidity(this.data.form.phone)){
      app.$util.toast({
        title: '手机号格式有误'
      });
    }else{
      if(!this.data.status){
        this.setData({
          status: true
        });
        let interval = setInterval(() => {
          let seconds = this.data.seconds - 1;
          if (seconds < 1) {
            clearInterval(interval);
            seconds = 59;
            this.setData({
              status: false
            });
          }
          this.setData({
            seconds: seconds
          });
        }, 1000);
      }
    }
    
    console.log(app.$util.phoneValidity(this.data.form.phone))
  },
  doLogin(){
    wx.navigateTo({
      url: '../index/index',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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