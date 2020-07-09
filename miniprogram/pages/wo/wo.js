//index.js
//获取应用实例
const app = getApp()
const DB=wx.cloud.database().collection("qiandao_date")
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数//给页面传递数据
  bindViewTap: function() {
    var ds=this.data.userInfo
    wx.navigateTo({
      url: '../woinfo/woinfo?userInfo='+ this.data.userInfo,
      
    })
  },
  tianjia:function(){
    //加法云函数
    // wx.cloud.callFunction({
    //   name:"add",
    //   data:{
    //     a:10,
    //     b:3
    //   },
    //   success:function(res){
    //     console.log("请求成功",res)
    //   },
    //   fail:function(res){
    //     console.log("请求失败",res)
    //   }
    // })
    //获取openid
    // wx.cloud.callFunction({
    //   name:"getopenid",
    //   success:function(res){
    //     console.log("获取openid成功",res)
    //   }
    //   ,
    //   fail:function(res){
    //     console.log("获取openid失败",res)
    //   }
    // })
  },
  order:function()
  {
    wx.navigateTo({
      url: '../woinfo/woinfo',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  //获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
