// pages/woinfo/woinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju:[],
    sex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that=this
    wx.getUserInfo({
      complete: (res) => {
        this.setData({
          shuju:res.userInfo
        })
      },
    })
    var p="";
    if(that.data.shuju.gender=0) p="未知"
    else if(that.data.shuju.gender=1) p="男"
    else if(that.data.shuju.gender=2) p="女"
    that.setData({
      sex:p
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