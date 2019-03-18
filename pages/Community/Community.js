// pages/Community/Community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    array: ''
  },
  onLoad: function (options) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('testLIst').get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          array: res.data
        })
        console.log(res.data)
      }
    })
  },
  inChat:function(e){
    getApp().globalData.name = e.currentTarget.id
    wx.navigateTo({
      url: '../chatWindows/chatWindows'
    })
  }

})