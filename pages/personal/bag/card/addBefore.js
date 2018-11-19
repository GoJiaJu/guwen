Page({

  /**
   * 页面的初始数据
   */
  data: {
    kfdh:'0512-82277444'
  },

  callPhone(){
    wx.makePhoneCall({
      phoneNumber: this.data.kfdh
    });
  },

  nativeToForm(){
    wx.navigateTo({
      url: './add',
    });
  },
  
});