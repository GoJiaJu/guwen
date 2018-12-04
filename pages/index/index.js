const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {
      phone: '13584833734',
      tips: 15,
      isrz: 1, //是否认证
      syje: 256540
    },
    menu: [{
        label: '客户案例',
        icon: '../../assets/index1.png',
        istip: false,
        isbubble: false,
        path:'../case/case'
      },
      {
        label: '我的推荐',
        icon: '../../assets/index2.png',
        istip: false,
        isbubble: false,
        path: ''
      },
      {
        label: '我的金币',
        icon: '../../assets/index3.png',
        istip: false,
        isbubble: false,
        path: '../personal/gold/index'
      },
      {
        label: '我的钱包',
        icon: '../../assets/index4.png',
        istip: false,
        isbubble: false,
        path: '../personal/bag/index'
      },

      {
        label: '优惠券',
        icon: '../../assets/index5.png',
        istip: false,
        isbubble: false,
        path:''
      },
      {
        label: '个人主页',
        icon: '../../assets/index6.png',
        istip: false,
        isbubble: false,
        path: '../personal/index',
        path:'../personal/index'
      },
      {
        label: '客户留言',
        icon: '../../assets/index7.png',
        istip: true,
        isbubble: false,
        path: '../message/index'
      },
      {
        label: '客户点评',
        icon: '../../assets/index8.png',
        istip: true,
        isbubble: false,
        path: '../comments/comments'
      },

      {
        label: '我的店铺',
        icon: '../../assets/index9.png',
        istip: false,
        isbubble: true,
        bubbleText:'未绑定'
      },
      {
        label: '实名认证',
        icon: '../../assets/index10.png',
        istip: false,
        isbubble: true,
        bubbleText: '未认证',
        path: '../authentication/index'
      },
      {
        label: '帮助中心',
        icon: '../../assets/index11.png',
        istip: false,
        isbubble: false,
        path:'../help/help'
      },
      {
        label: '设置中心',
        icon: '../../assets/index12.png',
        istip: false,
        isbubble: false,
        hidden:true,
        path:''
      },
    ],
    banner: [{
        src: '../../assets/index13.png',
      istip: false,
      isbubble: false
      },
      {
        src: '../../assets/index14.png',
        istip: false,
        isbubble: false
      }
    ],
    swiperHeight: 0,
    showModel:false,
    releaseShow:true,
    scrollTop:0
  },
  imageLoad(e) {
    if (!this.data.swiperHeight) {
      const ratio = e.detail.width / e.detail.height;
      this.setData({
        swiperHeight: app.globalData.screenWidth / ratio
      });
    }
  },
  openModel(){
    this.setData({
      showModel:true
    });
  },
  closeModel(){
    this.setData({
      showModel: false
    });
  },
  openPath(e){
    console.log(e)
    let path=e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path
    });
  },

  onPageScroll:function(e){
    let releaseShow=e.scrollTop>this.data.scrollTop?false:true;
    this.setData({
      scrollTop: e.scrollTop,
      releaseShow: releaseShow
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})