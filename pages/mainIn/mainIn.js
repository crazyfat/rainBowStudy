// pages/mainIn/mainIn.js
let Charts = require('./../../utils/wxcharts.js');
var lineChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classInfo:'',
    pageInfo:'',
    hideFloat:false,
    float:'../Eximages/floatBow.png',
    navbar: ['今日课表', '彩虹学堂','我的关注'],
    currentTab: 1,
    studyContiune:false,
    userPics: ['../Eximages/Pic1.jpeg', '../Eximages/Pic2.jpeg','../Eximages/Pic3.jpeg'],
    PPrecent:56,
    learnPrecent:12,
    suanfaP:4,
  },
  //悬浮点击事件
  openFloat:function(){
    var that=this
    that.setData({
      hideFloat: !that.data.hideFloat
    })
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
  //从服务器获取信息
  initial: function (options) {
    var that = this
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('mainIn').where({
      openid: "oKwMc5LHB8IOJmQtOV7qKCzBG9Oo",
    }).get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          pageInfo: res.data
        })
        console.log(that.data.pageInfo)
      }
    })
    db.collection('mainIn_class').where({
      type: "oKwMc5LHB8IOJmQtOV7qKCzBG9Oo",
    }).get({
      success: function (res) {
        // res.data 包含该记录的数据
        that.setData({
          classInfo: res.data
        })
        console.log(that.data.classInfo)
      }
    })
  },
  onLoad:function(){
    setTimeout(function () {
      wx.showModal({
        showCancel: false,
        title: '上课了',
        confirmText: '知道了',
        confirmColor: '#3b7ffa',
        content: '亲爱的张同学,你今日的计算机组成原理（甲）还有二十分钟就要开始了,检测到您当前位置距离教室（6教研楼312）较远（>200m）,请及时上课小心别迟到哦~',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },13000)

   
    this.initial()
    var windowWidth = '', windowHeight = '';    //定义宽高
    try {
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 350    //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!');   //如果获取失败
    }
    new Charts({     //定义一个wxCharts图表实例
      canvasId: 'lineCanvas',     //输入wxml中canvas的id
      type: 'line',       //图标展示的类型有:'line','pie','column','area','ring','radar'
      categories: ['5.12', '5.13', '5.14', '5.15', '5.16', '5.17', '今天'],    //模拟的x轴横坐标参数
      animation: true,  //是否开启动画
      series: [{   //具体坐标数据
        name: '学习时间 (min)',  //名字
        data: [20, 12, 30, 2, 10, 5, 7],  //数据点
        format: function (val, name) {  //点击显示的数据注释
          return val ;
        }
      }
      ],
      xAxis: {   //是否隐藏x轴分割线
        disableGrid: true,
      },
      yAxis: {      //y轴数据
        format: function (val) {  //返回数值
          return val.toFixed();
        },
        min: 0,   //最小值
        gridColor: '#D8D8D8',
      },
      width: windowWidth,  //图表展示内容宽度
      height: windowHeight,  //图表展示内容高度
      dataLabel: true,  //是否在图表上直接显示数据
      dataPointShape: true, //是否在图标上显示数据点标志
      extra: {
        lineStyle: 'curve'  //曲线
      },
    });
  },
  ToVideo:function(){
    wx.navigateTo({
      url: '../test/test'
    })
  },
  
})