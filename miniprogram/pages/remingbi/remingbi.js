// pages/remingbi/remingbi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[],
    shuzi:'',
    zhuanhua:"",
    okkk:false
  },
  bindKeyInput:function(e){
    this.setData({
      shuzi:e.detail.value,
    })
  },
  bindzhuanhua:function(){
    var that=this;
    wx.request({
      url: 'https://mws.ylapi.cn/moneywords/query.u?uid=11238&appkey=bb16152917e072e53113d6a7bb33f2d1',
      data:{
        money:this.data.shuzi
      },
      success:function(res){
        console.log(res)
        that.setData({
          zhuanhua:res.data.data.words,
          okkk:true
        })
      }
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