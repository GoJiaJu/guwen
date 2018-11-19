// pages/components/MCheckbox/checkbox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    checked:{
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
    change(e){
      console.log(e)
      // this.setData({
      //   checked: !e.currentTarget.dataset.value
      // });
      this.triggerEvent('change', !e.currentTarget.dataset.value);
    }
  }
})
