// pages/components/VCode/code.js
const app=getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tel:{
      type:String,
      value:''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    seconds:59,
    getting:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCode() {
      if(!this.data.getting){
        let tel = this.data.tel.trim();
        if (!tel){
          wx.showToast({
            title: '手机号不可为空',
            icon:'none'
          });
        }else if (!/^1[0-9]{10}$/.test(tel)) {
          wx.showToast({
            title: '手机号格式有误',
            icon: 'none'
          });
        } else {
          this.setData({
            getting: true
          });
          let interval = setInterval(() => {
            let sec = this.data.seconds;
            if (sec <= 1) {
              clearInterval(interval);
              sec = 60;
              this.setData({
                getting: false
              });
            }
            this.setData({
              seconds: sec - 1
            });
          }, 1000);
        }
      }
    },
  }
})
