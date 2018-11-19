// pages/components/MSelect/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label:{
      type:String,
      value:''
    },
    type:{
      type: String,
      value: ''//sex-性别
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请选择'
    },
    key: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectType:'',
    array:[],
    selectValue:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e){
      if(this.data.type=='date'){
        this.triggerEvent('change', {
          value: e.detail.value
        });
      }else{
        let selectValue = parseInt(e.detail.value);
        let name = this.data.array[selectValue];
        this.setData({
          selectValue
        });
        this.triggerEvent('change', {
          value: selectValue,
          name: name
        });
      }
    }
  },
  attached(){
    let selectType=this.data.type=='date'?'date':'selector';
    this.setData({ selectType });
    if(this.data.type=='date'){
      let selectValue = this.data.value;
      this.setData({ selectValue });
      return;
    }
    var array=[];
    if(this.data.type=='sex'){
      array = ['男','女'];
    } else if (this.data.type == 'job'){
      array = ['家居顾问', '家居设计师'];
    } else if (this.data.type == 'job-year') {
      array = ['小于1年', '1年', '2年', '3年','大于3年'];
    }
    let selectValue = array.indexOf(this.data.value);
    selectValue = selectValue < 0 ? 0 : selectValue;
    this.setData({
      array,
      selectValue
    });
  }
})
