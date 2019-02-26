// pages/mainIn/mainIn.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that=this
    that.setData({
      studyContiune:false
    })
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