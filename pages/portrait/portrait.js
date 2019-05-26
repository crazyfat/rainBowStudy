let Charts = require('./../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ima1Op:1,
    ima2Op:0.2,
    ima3Op:0.2,
    allInfo: [{ mubiao: '网易Java工程师', precent: 11, huaxiang1: '1.本科以上学历，计算机专业;', huaxiang2: '2.精通java编程;', huaxiang3: '3.熟悉多线程编程;', huaxiang4: '4.熟悉Spring、MyBatis等框架;', huaxaing5:'5.具备良好学习、沟通能力;'}],
    nowData:'',
    ima1:'https://peoplesurechange.cn/WebStudy/pic/wangyi.png',
    ima2: 'https://peoplesurechange.cn/WebStudy/pic/xiaomi.png',
    ima3: 'https://peoplesurechange.cn/WebStudy/pic/meituan.png',
    ima4: 'https://peoplesurechange.cn/WebStudy/pic/baidu.png',
    ima5: 'https://peoplesurechange.cn/WebStudy/pic/alibaba.png',
    ima6: 'https://peoplesurechange.cn/WebStudy/pic/huawei.png',
    hideFlag: false,
    rotateIndex: '',
    animation: {},
    substatus: true,
    name: '',
    uid: '',
    major: '',
    occup: '',
    subima: '../images/whiteload.png',
    subTe: '提交',
    Videoarray: [{ name: 'Spring框架实战', title: '带你入门Spring', teacher: '吴高德' },
      { name: '操作系统', title: 'Linux', teacher: '金立斌' },
      { name: '代码整洁之道', title: '代码质量、程序维护', teacher: '王一川' }],
    videoImages: ['https://peoplesurechange.cn/WebStudy/pic/spring.png', 'https://peoplesurechange.cn/WebStudy/pic/caozuoxitong.png', '../userImages/zhengjie.jpg'],
    PPrecent: 11,
  
    fontColor: '#1b1919af',
    hideTip: false,
    fontColor: '#fff',
    Tab: 9,
    begin: false,
    begin2: false,
    begin3: false,
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
    hidenext: true,
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
    height: [],
    width: [],
   
    multiIndex: [],
  },
  onLoad: function (options) {
    let that = this,
      labLen = that.data.array.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      newColorArr = [],
      newheight = []
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      newColorArr.push(random);
      let randomheight = Math.floor(Math.random() * 40) + 190;
      newheight.push(randomheight);

      labLen--;

    } while (labLen > 0)

    that.setData({
      randomColorArr: newColorArr,
      height: newheight,
      nowData: { mubiao: '网易Java工程师', precent: 11, huaxiang1: '1.本科以上学历，计算机专业', huaxiang2: '2.精通java编程', huaxiang3: '3.熟悉多线程编程', huaxiang4: '4.熟悉Spring、MyBatis等框架', huaxiang5: '5.具备良好学习、沟通能力', geren1: '1.计算机科学技术专业', geren2: '2.Java课程优秀', geren3: '3.未了解多线程编程', geren4: '4.未了解过框架', geren5: "5.有良好的学习能力", 
        icon1:'../images/Fin.png', icon2: '../images/Fin.png', icon3: '../images/unFin.png', icon4: "../images/unFin.png", icon5:'../images/Fin.png' }
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
          name: '当前能力',
          data: [2, 3, 2, 3, 4],  //数据点
        },

      ],
      extra: {
        radar: {
          max: 5,
        }
      },
      width: 300,  //图表展示内容宽度
      height: 190,  //图表展示内容高度

    });
    

  },



  tabJob1:function(){
    var that=this
    that.setData({
      ima1Op:1,
      ima2Op:0.2,
      ima3Op:0.2,
      PPrecent:11
    })
    let 
      labLen = that.data.array.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      newColorArr = [],
      newheight = []
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      newColorArr.push(random);
      let randomheight = Math.floor(Math.random() * 40) + 190;
      newheight.push(randomheight);

      labLen--;

    } while (labLen > 0)

    that.setData({
      randomColorArr: newColorArr,
      height: newheight,
      videoImages: ['https://peoplesurechange.cn/WebStudy/pic/spring.png', 'https://peoplesurechange.cn/WebStudy/pic/caozuoxitong.png', '../userImages/zhengjie.jpg'],
      Videoarray:[{ name: 'Spring框架实战', title: '带你入门Spring', teacher: '吴高德' },
        { name: '操作系统', title: 'Linux', teacher: '金立斌' },
        { name: '代码整洁之道', title: '代码质量、程序维护', teacher: '王一川' }],
      nowData: { mubiao: '网易Java工程师', precent: 11, huaxiang1: '1.本科以上学历，计算机专业', huaxiang2: '2.精通java编程', huaxiang3: '3.熟悉多线程编程', huaxiang4: '4.熟悉Spring、MyBatis等框架', huaxiang5: '5.具备良好学习、沟通能力', geren1: '1.计算机科学技术专业', geren2: '2.Java课程优秀', geren3: '3.未了解多线程编程', geren4: '4.未了解过框架', geren5: "5.有良好的学习能力", 
        icon1:'../images/Fin.png', icon2: '../images/Fin.png', icon3: '../images/unFin.png', icon4: "../images/unFin.png", icon5:'../images/Fin.png'}
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
          name: '当前能力',
          data: [3, 3, 2, 3, 4],  //数据点
        },

      ],
      extra: {
        radar: {
          max: 5,
        }
      },
      width: 300,  //图表展示内容宽度
      height: 190,  //图表展示内容高度


    });

  },
  tabJob2: function () {
    var that = this
    that.setData({
      ima1Op: 0.2,
      ima2Op: 1,
      ima3Op: 0.2,
      PPrecent: 9
    })
  let labLen = that.data.array.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      newColorArr = [],
      newheight = []
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      newColorArr.push(random);
      let randomheight = Math.floor(Math.random() * 40) + 190;
      newheight.push(randomheight);

      labLen--;

    } while (labLen > 0)

    that.setData({
      randomColorArr: newColorArr,
      height: newheight,
      Videoarray: [{ name: 'Web前端开发', title: '最贴心的Web教程', teacher: '张喜乐' },
      { name: '数据结构', title: '最实用的数据算法', teacher: '王立波' },
      { name: 'spingIcould', title: '分布式数据框架', teacher: '李丽' }],
      videoImages: ['https://peoplesurechange.cn/WebStudy/pic/web.png', 'https://peoplesurechange.cn/WebStudy/pic/shujujiegou.png', 'https://peoplesurechange.cn/WebStudy/pic/fenbushi.png'],
      nowData: {
        mubiao: '小米Java工程师', precent: 11, huaxiang1: '1.熟悉Linux开发环境', huaxiang2: '2.熟悉Web服务开发', huaxiang3: '3.熟悉常用算法和数据结构', huaxiang4: '4.了解分布式存储计算框架', huaxiang5: '5.有强烈的上进心和自我驱动',geren1: '1.Linux课成绩优秀', geren2: '2.未了解开发', geren3: '3.数据结构成绩较低', geren4: '4.未了解过框架', geren5: "5.上进心强热爱学习",
        icon1: '../images/Fin.png', icon2: '../images/unFin.png', icon3: '../images/unFin.png', icon4: "../images/unFin.png", icon5:'../images/Fin.png' }
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
          data: [5, 3, 3, 4, 4],  //数据点
        },
        {   //具体坐标数据
          name: '当前能力',
          data: [3, 3, 2, 3, 4],  //数据点
        },

      ],
      extra: {
        radar: {
          max: 5,
        }
      },
      width: 300,  //图表展示内容宽度
      height: 190,  //图表展示内容高度


    });

  },
  tabJob3: function () {
    var that = this
    that.setData({
      ima1Op: 0.2,
      ima2Op: 0.2,
      ima3Op: 1,
      PPrecent: 16
    })
    let 
      labLen = that.data.array.length,
      colorArr = that.data.colorArr,
      colorLen = colorArr.length,
      newColorArr = [],
      newheight = []
    //判断执行
    do {
      let random = colorArr[Math.floor(Math.random() * colorLen)];
      newColorArr.push(random);
      let randomheight = Math.floor(Math.random() * 40) + 190;
      newheight.push(randomheight);

      labLen--;

    } while (labLen > 0)

    that.setData({
      randomColorArr: newColorArr,
      height: newheight,
      nowData: { mubiao: '网易Java工程师', precent: 11, huaxiang1: '1.本科以上学历，计算机专业', huaxiang2: '2.精通java编程', huaxiang3: '3.熟悉多线程编程', huaxiang4: '4.熟悉Spring、MyBatis等框架', huaxiang5: '5.具备良好学习、沟通能力' }
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
          data: [4, 5, 4, 3, 3],  //数据点
        },
        {   //具体坐标数据
          name: '当前能力',
          data: [3, 3, 2, 3, 4],  //数据点
        },

      ],
      extra: {
        radar: {
          max: 5,
        }
      },
      width: 300,  //图表展示内容宽度
      height: 190,  //图表展示内容高度


    });

  },
})
