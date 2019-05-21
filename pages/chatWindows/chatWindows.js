// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '我是你的智能小老师，有问题赶紧来问吧。'
  },
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: ' ',
    inputBottom: 0,
    name: '',
    hideleft: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(getApp().globalData.name)
    initData(this);
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('user').where({
      _openid: wx.getStorageSync('openId'),
    }).get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          myInfo: res.data
        })
        console.log(that.data.myInfo[0])
      }
    })

    db.collection('testLIst').where({
      name: getApp().globalData.name,
    }).get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          currentMsg: res.data
        })
        console.log(that.data.currentMsg[0])
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
   * 获取聚焦
   */
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    msgList.push({
      speaker: 'server',
      contentType: 'text',
      content: "Java继承特性：1.子类拥有父类非private的属性，方法。2.子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。3.子类可以用自己的方式实现父类的方法。"
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });


  },

  /**
   * 退回上一页
   */
  return: function () {
    wx.navigateBack({})
  }

})
