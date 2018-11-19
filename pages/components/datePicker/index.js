// pages/components/datePicker/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type:{
      type:String,
      value:'date'
    },
    placeholder:{
      type: String,
      value:'请选择日期'
    },
    //只对type=date有效
    value:{
      type: String,
      value: ''
    },
    //只对type=range有效
    date:{
      type:Array,
      value:['','']
    },
    start: {
      type: String,
      value: ''
    },
    end: {
      type: String,
      value: ''
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
    handleDateChange(e){
      let value=e.detail.value;
      this.setData({ value });
      this.triggerEvent('change',value);
    },
    handleRangeChange(e){
      let index=e.currentTarget.dataset.index;
      let date=this.data.date;
      date[index]=e.detail.value;
      this.setData({ date });
      this.triggerEvent('change',date);
    }
  }
})
