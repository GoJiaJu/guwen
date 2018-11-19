const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      { label: '审核中', value: 0 },
      { label: '待放款', value: 1 },
      { label: '已放款', value: 2 },
      { label: '未通过', value: 3 }
    ],
    height:0,
    List:[
      {
        ddh:'GFQ201806220005',
        name:'张楚欢',
        fsrq:'2018-06-18  16:34',
        imgs:[
          'https://www.miya365.com/img/pc.png'
        ],
        je:15000,
        yj:2000
      }
    ]
  },

  previewImage(e){
    let array = e.currentTarget.dataset.array;
    wx.previewImage({
      urls: [
        'https://www.miya365.com/img/pc.png'
      ],
      complete:function(e){
        console.log(e)
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let height = app.globalData.winHeight - 70;
    this.setData({ height });
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