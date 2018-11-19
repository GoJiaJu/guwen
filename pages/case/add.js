const house=require('../../utils/house.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      alxxt:'',
      altp:''
    },
    steps:[
      { label: '案例属性', icon: '../../../assets/rz1.png', value: 1 },
      { label: '案例描述', icon: '../../../assets/rz2.png', value: 2 },
      { label: '关联产品', icon: '../../../assets/rz3.png', value: 3 },
      { label: '客户信息', icon: '../../../assets/rz3.png', value: 4 }
    ],
    current:1,
    houseHx: [],
    houseMj: [],
    houseFg: [],
    count:1,//上传图片的数量
    visible:false,
    actions:[
      {
        name: '从相册选择',
        color:'#438cfe'
      },
      {
        name: '拍照',
        color: '#438cfe'
      }
    ],
    animation1: null,
    animation2: null,
    animation3: null
    
  },

  next(){
    this.animation.translateX('-100%').step();
    this.setData({
      animation1: this.animation.export()
    });
    setTimeout(()=>{
      this.setData({
        current:2
      });
    },300);
  },

  chooseImage: function (e) {
    this.setData({
      visible:true,
      count: e.currentTarget.dataset.count
    });
  },

  handleCancel(){
    this.setData({
      visible: false
    });
  },

  handleClickItem({detail}){
    
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animation=wx.createAnimation({
      duration:300
    });
    this.setData({
      houseHx:house.hx,
      houseMj: house.mj,
      houseFg: house.fg,
    })
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