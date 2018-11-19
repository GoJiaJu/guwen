const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      img1:'',
      img2:'',
      name:'',
      id:'',
      jgmc:'',
      yxrq:[],
      tx:'http://img4.duitang.com/uploads/item/201411/09/20141109142633_ncKBY.thumb.700_0.jpeg',
      name:'李文秀',
      idcard:'320821199405263562'
    },
    step:1,
    animation:null
  },

  handleCard(e){
    let key=e.currentTarget.dataset.key;
    this.setData({
      ['details.'+key]: e.detail.tempFilePaths[0]
    });
  },

  next(){
    if(this.data.step==1){
      //自动识别
      this.autoIdentification();
    }else{
      //提交
      let left=-1*app.globalData.screenWidth+'px';
      this.animation.translateX(left).step();
      this.setData({
        animation: this.animation.export()
      });
      setTimeout(()=>{
        this.setData({step:3});
      },200);
    }
  },

  autoIdentification(){
    wx.showLoading({
      title: '正在自动识别',
      mask:true
    });
    setTimeout(()=>{
      wx.hideLoading();
      this.setData({
        step: 2,
        ['details.name']:'Nevermore',
        ['details.id']: '320821199110023556',
        ['details.jgmc']: '苏州市公安局'
      });
    },2000);
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