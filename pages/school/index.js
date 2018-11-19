const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      { label: '精选', value: 1 },
      { label: '新手专区', value: 2 },
      { label: '营销推广', value: 3 },
      { label: '常见问题', value: 4 }
    ],
    height:0,
    List:[
      {
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=858959453,1988929777&fm=27&gp=0.jpg',
        title:'如何提升客单金额？',
        content:'导语：据美国《华尔街日报》报道，投资者对中国科技“独角兽”公司的态度越来越谨慎。有知情人士称，华平投资最近决定不参与链家融资计划，因为该投资公司认为链家的估值过高；同时有监管文件显示，滴滴部分股权被私下交易，而滴滴的估值在交易中降至最低500亿美元。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let height=app.globalData.winHeight - 70;
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