// pages/components/uploadCard/index.js
const upload=require('../upload.js')
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[upload],
  properties: {
    value:{
      type:String,
      value:''
    },
    count:{
      type:Number,
      value:1
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

  }
})
