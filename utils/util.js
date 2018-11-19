const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

const util={
  phoneValidity(phone){
    return /^1[0-9]{10}$/.test(phone);
  },
  passwordValidity(password){
    //字母数字组合 6-12位
    return /^[a-zA-Z0-9]{6,12}$/.test(password);
  },
  formatPhone(tel){
    //格式化电话号码 13584833734--->135****3734
    return `${tel.substring(0,4)}****${tel.substring(6)}`;
  },
  toast(title,icon='none'){
    wx.showToast({
      title:title,
      icon:icon
    });
  }
}
module.exports=util;
