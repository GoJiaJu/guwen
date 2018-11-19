const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    List:[
      {
        avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3797481993,1929347741&fm=27&gp=0.jpg',
        nick:'夏夏',
        fsrq:'2018-06-18  16:34',
        rate:4,
        content: '看好这家产品好久了，价格有点小贵一直没有入手，正好这次可以分期，终于可以带回家了！导购人很好，看好这家产品好久了',
        imgs:[
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1763044357,684998663&fm=27&gp=0.jpg'
        ]
      },
      {
        avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3797481993,1929347741&fm=27&gp=0.jpg',
        nick: '夏夏',
        fsrq: '2018-06-18  16:34',
        rate: 4,
        content: '看好这家产品好久了，价格有点小贵一直没有入手，正好这次可以分期，终于可以带回家了！导购人很好，看好这家产品好久了',
        imgs: [
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1763044357,684998663&fm=27&gp=0.jpg'
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let height=app.globalData.winHeight - 35;
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