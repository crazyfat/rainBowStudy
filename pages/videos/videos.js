// pages/videos/videos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Pic:'',
    Videoarray: [{ name: '王老师疯狂Java（上）', title: 'java教程、初级实践', teacher:'王成恩'},
      { name: '王老师疯狂Java（中）', title: 'java教程、初级实践', teacher: '王成恩'},
      { name: '王老师疯狂Java（下）', title: 'java教程、初级实践', teacher: '王成恩'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initial()
  },
  //从服务器获取信息
  initial: function (options) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('teamPic').get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          Pic: res.data
        })
        console.log(that.data.Pic)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})