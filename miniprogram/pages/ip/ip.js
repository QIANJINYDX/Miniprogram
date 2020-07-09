// pages/ip/ip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    item:[],
    ok:false
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value,  
    })
  },
  // 1.24.210.0
  getinfo:function(){
    var that=this;
    wx.request({
      url: 'https://ip.ylapi.cn/ip/address.u?uid=11238&appkey=c5dcaf203a0e1aca979c1efa474b2ed4',
      data:{
        ip:that.data.inputValue
      },
      success:function(res){
        that.setData({
          item:res.data,
          ok:true
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