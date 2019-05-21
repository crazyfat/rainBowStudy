// pages/load/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    butHide:true
  },
  onLoad: function (options) {
    var that=this
    that.getOPenId()
    wx.checkSession({
      success: function (res) {
        console.log(res, '登录未过期')
        that.setData({
          butHide: false
        })
      },
      fail: function (res) {
        console.log(res, '登录过期了')
        that.setData({
          butHide:false
        })
      }
    })
  },
  getOPenId:function(){
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        wx.setStorage({
          key: 'openId',
          data: res.result.openid,
        })
      }
    })
  },
  bindGetUserInfo: function (e) {
    var that=this
    const db = wx.cloud.database()
    this.setData({
      userInfo: e.detail.userInfo
    })
    console.log(that.data.userInfo)
    db.collection('user').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        nickName: that.data.userInfo.nickName,
        gender:that.data.userInfo.gender,
        city:that.data.userInfo.city,
        avatar: that.data.userInfo.avatarUrl
      },
      success(res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        wx.navigateTo({
          url: '../question/question',
        })
      }
    })
  }

})