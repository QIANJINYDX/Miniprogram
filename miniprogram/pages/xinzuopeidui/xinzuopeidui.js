// pages/xinzuopeidui/xinzuopeidui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['白羊','金牛','双鱼','巨蟹','狮子','处女','天枰','天蝎','射手','摩羯','水瓶','双鱼'],
    index:'0',
    index1:'0',
    ok:false,
    items:[]
  },
  getinfo:function(){
    var that=this
    that.setData({
      ok:true
    })
    wx.request({
      url: 'https://apis.juhe.cn/xzpd/query?key=4bb111019bdd01a2d7ec7b59f4aa87f5',
      data:{
        men:that.data.array[that.data.index],
        women:that.data.array[that.data.index1],
      },
      success:function(res){
        that.setData({
          items:res.data
        })
      }
    })
  },
  bindgetxinzuo:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  bindgetxinzuo1:function(e){
    this.setData({
      index1:e.detail.value
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