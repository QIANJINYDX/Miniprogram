// pages/xinzuoyunshi/xinzuoyunshi.js
var util=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    todyitem:[],
    ok:false
  },
  // consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&&key=申请的KEY
  getxingxi:function(){
    this.getjinri()
  },
  getjinri:function(){
    var that=this;
    wx.request({
      url: 'https://lucky.ylapi.cn/lucky/query.u?uid=11238&appkey=df7c737bb31dddb0463cffd3bb1b1ba4',
      data:{  
        data:this.data.day
      },
      success:function(res){
        that.setData({
          todyitem:res.data,
          ok:true
        })
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time=util.noformatDate(new Date());
    this.setData({
      day:time
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