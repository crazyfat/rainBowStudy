// pages/mainIn/mainIn.js
let Charts = require('./../../utils/wxcharts.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['今日课表', '彩虹学堂','我的关注'],
    currentTab: 1,
    studyContiune:false,
    userPics: ['../Eximages/Pic1.jpeg', '../Eximages/Pic2.jpeg','../Eximages/Pic3.jpeg'],
    PPrecent:56,
  },
  //顶部tabbar的切换
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
    })
    console.log("当前的navbarTab:"+this.data.currentTab)
  },
  delete:function(){
    var that=this
    that.setData({
      studyContiune:true
    })
  },
  onShow: function () {
    var that=this
    that.setData({
      studyContiune:false
    })
  },
  onLoad:function(){
   
  },
  ToVideo:function(){
    wx.navigateTo({
      url: '../test/test'
    })
  }
})