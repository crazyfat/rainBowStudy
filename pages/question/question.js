let Charts = require('./../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideFlag:false,
    rotateIndex:'',
    animation:{},
    substatus:true,
    name:'',
    uid:'',
    major:'',
    occup:'',
    subima:'../images/whiteload.png',
    subTe:'提交',
    userInfo:['张彩虹','大二','19','计算机','网易Java工程师'],
    Videoarray: [{ name: '王老师疯狂Java（上）', title: 'java教程、初级实践', teacher: '王成恩' },
      { name: '算法导论', title: '计算机算法、网络', teacher: '金立斌' },
    { name: '代码整洁之道', title: '代码质量、程序维护', teacher: '林丽' }],
    videoImages: ['../Eximages/java.jpg', '../userImages/daolun.jpg','../userImages/zhengjie.jpg'],
    PPrecent:11,
    YesHide:false,
    NoHide:false,
    DontKnow:false,
    YesHide1: false,
    NoHide1: false,
    DontKnow1: false,
    YesHide2: false,
    NoHide2: false,
    DontKnow2: false,
    fontColor: '#1b1919af',
    hideTip:false,
    fontColor:'#fff',
    Tab:9,
    begin:false,
    begin2:false,
    begin3: false,
    status:'采集测试数据',
    status2: '用户能力分析',
    status3:'建立能力测试树',
    question1:'虚拟机栈描述的是Java方法执行的内存模型，用于存储局部变量，操作数栈，动态链接，方法出口等信息，是线程隔离的。',
    questionTitle1:'JVM内存',
    question2:'PROPAGATION_NESTED：支持当前事务，新增Savepoint点，与当前事务同步提交或回滚。',
    questionTitle2:'SPRING的事务传播',
    question3:'servlet在易用性上强于cgi，它提供了大量的实用工具例程，例如自动地解析和解码html表单数据、读取和设置http头、处理Cookie、跟踪会话状态等。',
    questionTitle3:'servlet和cgi',
    array: [
      { name: "嵌入式", value: '0', checked: false },
      { name: "信息编码", value: '1', checked: false },
      { name: "计算理论", value: '2', checked: false },
      { name: "算法设计", value: '3', checked: false },
      { name: "分布系统", value: '4', checked: false },
      { name: "区块链", value: '5', checked: false },
      { name: "大数据", value: '6', checked: false },
      ],
    tecono: [
      { name: "Oracle", value: '0', checked: false },
      { name: "Spring", value: '1', checked: false },
      { name: "Java", value: '2', checked: false },
      { name: "JVM原理", value: '3', checked: false },
      { name: "Tomcat", value: '4', checked: false },
      { name: "Linux", value: '5', checked: false },
      { name: "微服务架构", value: '6', checked: false },
    ],
    hidenext:true,
    bottom: ['140', '170', '360', '400', '380', '580', '560'],
    right: ['160', '400', '110', '280', '480', '160', '420'],
    // 自定义自己喜欢的颜色
    colorArr: ["#EE2C2C", "#ff7070", "#EEC900", "#4876FF", "#ff6100",
      "#7DC67D", "#E17572", "#7898AA", "#C35CFF", "#33BCBA", "#C28F5C",
      "#FF8533", "#6E6E6E", "#428BCA", "#5cb85c", "#FF674F", "#E9967A",
      "#66CDAA", "#00CED1", "#9F79EE", "#CD3333", "#FFC125", "#32CD32",
      "#00BFFF", "#68A2D5", "#FF69B4", "#DB7093", "#CD3278", "#607B8B"],
    // 存储随机颜色
    randomColorArr: [],
    height:[],
    width:[],
    multiArray: [['机械工程', '电子信息', '计算机', '人文与法'], ['车辆工程', '工业设计', '机械电子工程', '制造工程', '物流装备']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '机械工程'
        },
        {
          id: 1,
          name: '电子信息'
        },
        {
          id: 2,
          name: '计算机'
        },
        {
          id: 3,
          name: '人文与法'
        }
      ],
      [
        {
          id: 0,
          name: '车辆工程'
        },
        {
          id: 1,
          name: '工业设计'
        },
        {
          id: 2,
          name: '机械电子工程'
        },
        {
          id: 3,
          name: '制造工程'
        },  
        {
          id: 4,
          name: '物流装备'
        },  
      ]
    ],
    multiIndex: [],
  },
  judge:function(){
    var that=this
    if (that.data.name != '' && that.data.uid != '' && that.data.occup != '' && that.data.multiIndex != '' )
    that.showSub();
  },
  showSub:function(){
    this.app = getApp();
    this.app.show(this, 'slide_up1',1 )
    this.setData({
      substatus:false
    })

  },
  tapSub:function(){
    this.setData({
      hideFlag:true
    })
    // 创建动画
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease'
    })
    this.animation = animation
    // 图片旋转
    this.imageRotators()
  },
  //get name
  inputname: function (e) {

    this.setData({
      name: e.detail.value
    })
    this.judge();
  },
  //get uid
  inputuid: function (e) {

    this.setData({
      uid: e.detail.value
    })
    this.judge();
  },
  //get name
  inputoccup: function (e) {

    this.setData({
      occup: e.detail.value
    })
    this.judge();
  },
  reChoose:function(){
    var that=this
    that.setData({
      YesHide: false,
      NoHide: false,
      DontKnow: false,
    })
  },
  reChoose1: function () {
    var that = this
    that.setData({
      YesHide1: false,
      NoHide1: false,
      DontKnow1: false,
    })
  },
  reChoose2: function () {
    var that = this
    that.setData({
      YesHide2: false,
      NoHide2: false,
      DontKnow2: false,
    })
  },
  Choose:function(e){
    var that=this
    that.reChoose()
    var Id=e.currentTarget.id
    switch(Id){
      case '1':
      that.setData({
        YesHide: !that.data.YesHide
      })
      break;
      case '2':
        that.setData({
          NoHide: !that.data.NoHide
        })
        break;
      case '3':
        that.setData({
          DontKnow: !that.data.DontKnow
        })
        break;
        
    }
  },
  Choose1: function (e) {
    var that = this
    that.reChoose1()
    var Id = e.currentTarget.id
    switch (Id) {
      case '1':
        that.setData({
          YesHide1: !that.data.YesHide1
        })
        break;
      case '2':
        that.setData({
          NoHide1: !that.data.NoHide1
        })
        break;
      case '3':
        that.setData({
          DontKnow1: !that.data.DontKnow1
        })
        break;

    }
  },
  Choose2: function (e) {
    var that = this
    that.reChoose2()
    var Id = e.currentTarget.id
    switch (Id) {
      case '1':
        that.setData({
          YesHide2: !that.data.YesHide2
        })
        break;
      case '2':
        that.setData({
          NoHide2: !that.data.NoHide2
        })
        break;
      case '3':
        that.setData({
          DontKnow2: !that.data.DontKnow2
        })
        break;

    }
  },
  click: function (e) {
    let index = e.currentTarget.dataset.id;
    let arrs = this.data.array;
    if (arrs[index].checked == false) {
      arrs[index].checked = true;
    } else {
      arrs[index].checked = false;
    }
    this.setData({
      array: arrs
    })
     console.log(e)
  },
  click2: function (e) {
    let index = e.currentTarget.dataset.id;
    let tecono = this.data.tecono;
    if (tecono[index].checked == false) {
      tecono[index].checked = true;
    } else {
      tecono[index].checked = false;
    }
    this.setData({
      tecono: tecono
    })
    console.log(e)
  },
  tabadd:function(){
    
    var that=this
    console.log(that.data.Tab)
    if (that.data.Tab == 0){
      that.setData({
        begin3: true,
        hidenext: true
      })
      that.Status3()
    }
      if (that.data.Tab <= 4 )
    that.setData({
      Tab:that.data.Tab+1,
    })
    if (that.data.Tab==5){
      that.setData({
        begin: true,
        hidenext:true
      })
      that.Status()
    }
    if (that.data.Tab>=6)
      that.setData({
        Tab: that.data.Tab + 1,
      })
    if (that.data.Tab ==8){
      that.setData({
        begin2: true,
        hidenext: true
      })
      that.Status2()
    }
  },
 
  bindMultiPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    this.judge();
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    this.setData({
      hideTip:true
    })
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };

    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['车辆工程', '工业设计', '机械电子工程', '制造工程','物流装备'];
            break;
          case 1:
            data.multiArray[1] = ['电子信息工程', '电子信息科学技术', '电子科学与技术','集成电路设计'];
            break;
          case 2:
            data.multiArray[1] = ['计算机科学与技术', '软件工程', '物联网工程', '卓越工程师'];
            break;
          case 3:
            data.multiArray[1] = ['法学', '人文学', '汉语言师范', '国学'];
            break;
        }
        break;
    }
    this.setData(data);
  },
  onLoad:function(options){
    let that = this,
      labLen = that.data.array.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      newColorArr = [],
    newheight=[]
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      newColorArr.push(random);
      let randomheight = Math.floor(Math.random() * 40)+190;
      newheight.push(randomheight);

      labLen--;
      
    } while (labLen > 0)

    that.setData({
      randomColorArr: newColorArr,
      height: newheight
    });
    var windowWidth = '', windowHeight = '';    //定义宽高
    try {
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 350    //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!');   //如果获取失败
    }
    new Charts({     //定义一个wxCharts图表实例
      canvasId: 'rader',     //输入wxml中canvas的id
      type: 'radar',       //图标展示的类型有:'line','pie','column','area','ring','radar'
      categories: ['专业技能', '性格特质', '身体素质', '项目经验', '获奖情况'],    //模拟的x轴横坐标参数
      animation: true,  //是否开启动画
      series: [
        {
          name: '职业要求',
          data: [4, 4, 3, 5, 4],  //数据点
        },
        {   //具体坐标数据
        name:'当前能力',
        data: [2,3,2,3,4],  //数据点
      },

      ],
      extra:{
        radar: {
          max: 5,
        }
      },
      width: 240,  //图表展示内容宽度
      height: windowHeight,  //图表展示内容高度

    });
    new Charts({
      canvasId: 'canvas1',
      background: '#000',
      type: 'pie',
      series: [{
        name: '初步了解',
        data: 12,
      }, {
        name: '基本掌握',
        data: 17,
          color:'#F4606C'
      }, {
        name: '未了解或未掌握',
        data: 53,
          color: '#19CAAD'
      }, {
        name: '难度较大的需要掌握部分',
        data: 30,
      }],
      width: 240,
      height: 250,
      dataLabel: true
    });
    console.log(that.data.height)
  },
  Status:function(){
    var that=this
    setTimeout(function () {
      that.setData({
        status:'授权教育系统'
      })
    }, 1100)
    setTimeout(function () {
      that.setData({
        status: '分析测试结果'
      })
    }, 2100)
    setTimeout(function () {
      that.setData({
        Tab: that.data.Tab + 1,
        hidenext: false
      })
    }, 3700)

  },
  Status3: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        Tab: that.data.Tab + 1,
        hidenext: false
      })
    }, 3000)

  },
  Status2: function () {
    var that = this
    setTimeout(function () {
      that.setData({
        status2: '用户画像生成'
      })
    }, 800)
    setTimeout(function () {
      that.setData({
        status2: '就业库查询'
      })
    }, 1800)
    setTimeout(function () {
      that.setData({
        status2: '建立学习计划'
      })
    }, 2600)
    setTimeout(function () {
      that.setData({
        Tab: that.data.Tab + 1,
        hidenext: true,
      })
    }, 3700)

  },
  OKto:function(){
    wx.switchTab({
      url: '../mainIn/mainIn',

    })
  },
  
  // 图片一直旋转动画
  imageRotators: function () {
    //连续动画需要添加定时器,所传参数每次+1就行
    this.timeInterval = setInterval(function () {
      this.data.rotateIndex = this.data.rotateIndex + 1;
      this.animation.rotateZ(360 * (this.data.rotateIndex)).step()
      this.setData({
        animationData: this.animation.export()
      })
    }.bind(this), 500)
    // 请求API接口或者别的操作
    this.request()
  },
  // 停止旋转
  stopRotators: function () {
    if (this.timeInterval > 0) {
      clearInterval(this.timeInterval)
      this.timeInterval = 0
    }
  },
  // 请求API接口或者别的操作
  request: function (e) {
    var that = this
    console.log('request')
    setTimeout(function () {
      // 停止旋转
      that.stopRotators()
      console.log('请求到了数据或者操作完成,停止旋转')
      // 这里是根据自己的业务逻辑设置
      var data = true
      
     that.setData({
       subima: '../images/whiteRight.png',
     })
    }, 2000)
    setTimeout(function () {
      that.tabadd()
    }, 3000)
  },
})
