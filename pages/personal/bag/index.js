Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      zje:730,
      kyje:700,
      djje:30,
      bdzt:false
    },
    List:[
      { title: '免息红包', fsrq:'2018-05-06  12:23:34',je:50,zt:'提现中'},
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: -50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: -50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: 50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: -50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: 50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: -50, zt: '' },
      { title: '免息红包', fsrq: '2018-05-06  12:23:34', je: -50, zt: '' },
    ]
  },

  getCash(){
    wx.showModal({
      title: '',
      content: '提现前您还需要绑定银行卡哦',
      confirmColor:'#438cfe',
      confirmText:'去绑定',
      success:function(){
        wx.navigateTo({
          url: './card/add',
        });
      }
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
    console.log(555)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})