// pages/components/release/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false,
      observer(nv){
        this.createAnimation(nv);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animation:null,
    animation2:null,
    dialogShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    createAnimation(val){
      if(!!this.animation){
        if (val) {
          this.animation.translateX('-50%').translateY(0).step();       
        } else {
          this.animation.translateX('-50%').translateY('100%').step();;
        }
        this.setData({
          animation: this.animation.export()
        });
      }
    },
    release(){
      this.setData({ dialogShow : true });
      this.animation.translateX(0).translateY(0).step();
      this.setData({
        animation2: this.animation.export()
      });
    },
    closeDialog(){
      this.animation.translateX(0).translateY('100%').step();
      this.setData({
        animation2: this.animation.export()
      });
      setTimeout(()=>{
        this.setData({ dialogShow: false });
      },200);
    },
    openPage(){
      console.log(877)
    },
    move(){
      return;
    }
  },
  attached(){
    this.animation=wx.createAnimation({duration:200});
  }
})
