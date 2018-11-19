// pages/components/avatar/avatar.js
const upload=require('../upload.js');
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[upload],
  properties: {
    text:{
      type:String,
      value:'设置'
    },
    type:{
      type:String,
      value:'circle'
    },
    size:{
      type:String,
      value:'large'
    },
    value:{
      type:String,
      value:''
    },
    needUpload:{
      type:Boolean,
      value:true
    },
    padding:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    doChoose(){
      if(this.data.needUpload)
        this.chooseImage();
    }
  }
})
