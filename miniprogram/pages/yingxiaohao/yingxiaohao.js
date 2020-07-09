// pages/yingxiaohao/yingxiaohao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ok:false,
    zhu:'',
    shi:'',
    yi:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  zhuti:function(e){
    this.setData({
      zhu:e.detail.value
    })
  },
  shijian:function(e){
    this.setData({
      shi:e.detail.value
    })
  },
  yijuhua:function(e){
    this.setData({
      yi:e.detail.value
    })
  },
  shengcheng:function(){
    var that=this
    that.setData({
      ok:true
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