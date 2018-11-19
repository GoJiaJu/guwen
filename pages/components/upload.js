//image upload from album or camera
module.exports=Behavior({
  behaviors: [],
  properties: {
    //上传图片的数量
    count: {
      type: Number,
      value: 9
    }
  },
  data: {
    visible: false,
    actions: [
      {
        name: '从相册选择',
        color: '#438cfe'
      },
      {
        name: '拍照',
        color: '#438cfe'
      }
    ],
  },
  methods: {
    chooseImage() {
      this.setData({
        visible: true
      });
    },
    handleCancel() {
      this.setData({
        visible: false
      });
    },
    handleClickItem({ detail }) {
      let _self = this;
      let type = detail.index == 0 ? 'album' : 'camera';
      wx.chooseImage({
        count: this.data.count,
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
          _self.setData({
            visible: false
          });
          _self.triggerEvent('uploaded', res);
        }
      });
    },
  },
  attached: function () { }
});