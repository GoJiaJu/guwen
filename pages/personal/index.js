Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      xxt:'',
      tx:'',
      name:'夏夏',
      isrz:1,
      szdq:'江苏省-苏州市-工业园区',
      dpmc:'OPPO FindX-观前专卖',
      dpdz:'苏州市工业园区若水路388号纳米大学科技园',
      grjj:'',
      fwrs:1200
    },
    navs:[
      { label: '客户案例', sl: 16, icon: '../../assets/gr1.png' },
      { label: '产品推荐', sl: 14, icon: '../../assets/gr2.png' },
      { label: '客户留言', sl: 17, icon: '../../assets/gr3.png' },
      { label: '案例点评', sl: 20, icon: '../../assets/gr4.png' }
    ],
    visible:false
  },
  
  handleUpload(e){
    this.setData({
      ['details.xxt']: e.detail.tempFilePaths
    });
  },

  changeImage(e){
    this.setData({
      ['details.tx']: e.detail.tempFilePaths[0]
    });
  },

  openTextarea(){
    this.setData({
      visible:true
    });
  },
  
  setComments(e){
    this.setData({
      ['details.grjj']:e.detail
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