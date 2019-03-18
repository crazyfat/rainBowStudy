// 云函数入口文件
const cloud = require('wx-server-sdk')
// 云函数入口函数
exports.main = async (event, context) => {
  wx.cloud.init()
  const wxContext = cloud.getWXContext()
  if (event.locationId == wxContext.OPENID)
  return 0
  else
  return 1
}