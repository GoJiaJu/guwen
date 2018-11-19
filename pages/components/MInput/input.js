// pages/components/mInput/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    suffixIcon:{
      type:String,
      value:''
    },
    disabled:{
      type:Boolean,
      value:false
    },
    align:{
      type:String,
      value:'left'
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
    emitValue(e) {
      this.triggerEvent('blur', e.detail.value);
      this.triggerEvent('input', e.detail.value);
    }
  }
})