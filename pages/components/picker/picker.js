// pages/components/picker/picker.js
const maps = require("../../../utils/citys.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:Array,
      value:['北京市','北京市']
    },
    placeholder:{
      type:String,
      value:'请选择省市'
    },
    text:{
      type: String,
      value: '当前选择'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    citys: [],
    current:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerChange(e){
      let temp=[];
      temp.push(this.data.citys[0][e.detail.value[0]]);
      temp.push(this.data.citys[1][e.detail.value[1]]);
      this.setData({
        value:temp
      });
      this.triggerEvent('change',temp);
    },
    bindMultiPickerColumnChange(e){
      if(e.detail.column<1){
        let index = e.detail.value;
        let temp = this.data.citys;
        temp[1] = maps[this.data.citys[0][index]];
        this.setData({
          citys: temp
        });
      }  
    },
  },

  ready(){
    let temp=[];
    let indexs=[];
    temp.push(Object.keys(maps));
    temp.push(maps[this.data.value[0]]);
    indexs.push(temp[0].indexOf(this.data.value[0]));
    indexs.push(temp[1].indexOf(this.data.value[1]));
    this.setData({
      citys:temp,
      current:indexs
    });
  }
})
