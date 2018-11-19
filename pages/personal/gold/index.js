Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:[
      { fsrq: '2018-05-06  12:23:34', title:'金币转出到钱包',je:-200,ye:1000},
      { fsrq: '2018-05-07  12:23:34', title: '金币转出到钱包', je: -200, ye: 1000 },
      { fsrq: '2018-05-08  12:23:34', title: '金币转出到钱包', je: -200, ye: 1010 },
      { fsrq: '2018-05-09  12:23:34', title: '金币转出到钱包', je: -200, ye: 1020 },
      { fsrq: '2018-05-10  12:23:34', title: '金币转出到钱包', je: -200, ye: 1030 },
      { fsrq: '2018-05-11  12:23:34', title: '金币转出到钱包', je: -200, ye: 1040 },
      { fsrq: '2018-05-12  12:23:34', title: '金币转出到钱包', je: -200, ye: 1050 }
    ],
    loading:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(10033)
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
    setTimeout(()=>{
      this.data.List.push({ fsrq: '2018-08-06  12:23:34', title: '支出', je: -200, ye: 1000 });
      this.setData({
        loading: false
      });
    },2000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})