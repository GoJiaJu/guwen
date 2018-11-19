// pages/components/textarea/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
      value:''
    },
    maxLength:{
      type:Number,
      value:200
    },
    value:{
      type:String,
      value:''
    },
    visible:{
      type:Boolean,
      value:false,
      observer :function(newVal){
        this.animation.top(newVal?0:'100%').step();
        this.setData({ showText: newVal });
        if(!newVal){
          this.setData({
            animation: this.animation.export()
          });
          setTimeout(() => {
            this.setData({ show: newVal })
          }, 300);
        }else{
          this.setData({
            show: newVal,
          });
          setTimeout(()=>{
            this.setData({ animation: this.animation.export()})
          },0);
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text:'',
    animation:null,
    show:false,
    showText:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputText(e){
      let text=e.detail.value;
      this.setData({ text });
    },
    clear(){
      let _self=this;
      wx.showModal({
        content: '确认要清空文本框吗?',
        success:function(res){
          if(res.confirm){
            let text = '';
            _self.setData({ text });
          }
        }
      });
    },
    save(){
      this.setData({
        visible:false
      });
      this.triggerEvent('change',this.data.text);
    }
  },
  
  attached(){
    let text = this.data.value;
    this.setData({ text });
    this.animation=wx.createAnimation({
      duration:300
    });
  }
})
