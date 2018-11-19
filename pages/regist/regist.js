const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        label: '选择身份',
        value: 1
      },
      {
        label: '手机验证',
        value: 2
      }
    ],
    currentStep: 1,
    animation: null,
    screenWidth: 0,
    sfList:[
      {
        id:1,
        title:'我是家居顾问',
        desc:'家具/建材店员',
        img: '../../assets/1.png'
      },
      {
        id: 2,
        title: '我是设计顾问',
        desc: '家装设计师',
        img: '../../assets/1.png'
      }
    ],
    form:{
      sf:0,//1-顾问 2-设计师
      phone:'',
      code:'',
      password:'',
      paddword2:'',
      ty:true
    }
  },
  next() {
    if (this.data.currentStep == 2 && !app.$util.phoneValidity(this.data.form.phone)){
      app.$util.toast('手机号格式有误');
    } else if (this.data.currentStep == 3 && !app.$util.passwordValidity(this.data.form.password)){
      app.$util.toast('密码不符合规范');
    }else if (this.data.currentStep == 3 && this.data.form.password != this.data.form.password2){
      app.$util.toast('两次密码输入不一致');
    }else{
      if(this.data.currentStep==3){
        if(!this.data.form.ty)
          app.$util.toast("请同意'Go佳居注册协议");
        else{
          app.$util.toast("success");
        }
      }else{
        let step = this.data.currentStep;
        this.animation.translateX(`${-1 * this.data.currentStep * this.data.screenWidth}px`).step();
        this.setData({
          animation: this.animation.export(),
          currentStep: step + 1
        });
      }
    }
  },
  selectSf(e){
    let sf_key='form.sf';
    this.setData({
      [sf_key]: e.currentTarget.dataset.id
    });
  },
  setForm(e){
    let _key = `form.${e.currentTarget.dataset.key}`;
    this.setData({
      [_key]:e.detail
    });
  },
  openAgreement(){
    // this.setData({
    //   ['form.ty']:true
    // });
    wx.navigateTo({
      url: '../agreement/agree',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.animation = wx.createAnimation({
      duration: 200
    });
    wx.getSystemInfo({
      success: res => {
        this.setData({
          screenWidth: res.screenWidth
        });
      },
      fail: err => {
        app.$util.toast(app.$ERR_MSG.systemInfo)
      }
    });
  }
});