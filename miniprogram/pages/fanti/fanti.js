// pages/fanti/fanti.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    shuzi:-1,
    textwenzi:'',
    bianhuahoudewenzi:'',
    item:[],
    okk:false,
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  bindKeyInput:function(e)
  {
    this.setData({
      inputValue:e.detail.value,
    })
  },
  bindjian:function()
  {
    var that=this;
    this.setData({
      shuzi:0,
      textwenzi:this.data.inputValue,
      okk:true
    })
    wx.request(
      {
      url: 'https://cct.ylapi.cn/charconvert/query.u?uid=11238&appkey=85b117afbda800b1bb130d824c5def62',
      data:{
        text:this.data.textwenzi,
        type:0
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res.data);
        try {
          that.setData({
            item:res.data,
            bianhuahoudewenzi:res.data.data.out
          });
        } catch (e) {

        }
      },
    })
  },
  bindfan:function()
  {
    var that=this;
    this.setData({
      shuzi:1,
      textwenzi:this.data.inputValue,
      okk:true
    })
    wx.request({
      url: 'http://cct.ylapi.cn/charconvert/query.u?uid=11238&appkey=85b117afbda800b1bb130d824c5def62',
      data:{
        text:this.data.textwenzi,
        type:1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            item:res.data,
            bianhuahoudewenzi:res.data.data.out,
          });
        } catch (e) {

        }
      },
    })
  },
  bindhuo:function()
  {
    var that=this
    this.setData({
      shuzi:2,
      textwenzi:this.data.inputValue,
      okk:true
    })
    wx.request({
      url: 'http://cct.ylapi.cn/charconvert/query.u?uid=11238&appkey=85b117afbda800b1bb130d824c5def62',
      data:{
        text:this.data.textwenzi,
        type:2
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            bianhuahoudewenzi:res.data.data.out,
          });
        } catch (e) {

        }
      },
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