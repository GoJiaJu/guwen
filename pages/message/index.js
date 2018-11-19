const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    List:[
      {
        title: '本月新上架简美套房产品，需要的亲速来选购，前10名到店客户有小礼物但是操控空哦产生的超市菜市场色彩的上传速度',
        titleImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=847513091,2164248614&fm=27&gp=0.jpg',
        message:[
          {
            avatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1128825484,3968527144&fm=27&gp=0.jpg',
            nick:'南海鳄神',
            fsrq:'2018-07-25 14:32',
            content: '亲，还有货么，我想要棕色的有没有，能不能到你店里看看？'
          },
          {
            fsrq: '2018-07-25 14:32',
            content: '有的，您可以点我头像跟我私聊有的，上的残存的苏沪',
            avatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=347837335,1617350328&fm=27&gp=0.jpg'
          }
        ]
      }
    ],
    visible:false
  },
  
  reply(){
    this.setData({
      visible:true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let height = app.globalData.winHeight - 35;
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