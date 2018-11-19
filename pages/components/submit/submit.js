// pages/components/submit/submit.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      default:'确认'
    },
    circle:{
      type:Boolean,
      default:false
    },
    disabled:{
      type: Boolean,
      default: false
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
    doTap(){
      if (!this.data.disabled)
        this.triggerEvent('tap');
    }
  }
})
