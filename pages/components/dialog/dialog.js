// pages/components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false,
      observer :function(newval,oldval){
        this.controlModel(newval);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animation:null,
    model:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    controlModel(value){
      this.animation.translateY(value?0:'-10px').step();
      if(value){
        this.setData({
          model:value
        });
        setTimeout(()=>{
          this.setData({
            animation: this.animation.export()
          });
        },300);
      }else{
        this.setData({
          animation: this.animation.export()
        });
        setTimeout(() => {
          this.setData({
            model: value
          });
        }, 300);
      }
    },
    close(e){
      this.animation.translateY('-10px').step();
      this.setData({
        animation: this.animation.export()
      });
      setTimeout(()=>{
        this.setData({
          model: false
        });
      },300);
    },
    stop(){
      
    }
  },
  attached(){
    this.animation=wx.createAnimation({
      duration: 300,
      timingFunction:'ease-out'
    });
  }
})
