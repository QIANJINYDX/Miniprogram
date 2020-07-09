Page({

  /**
   * 页面的初始数据
   */
  data: {
    QQ:'',
    ok:false
  },
  getQQ:function(e){
    this.setData({
      QQ:e.detail.value,
      items:[],
    })
  },
  getqinkong:function(res){
    var that=this;
    that.setData({
      QQ:'',
      ok:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getdaan:function(){
    var that=this;
    wx.request({
      url: 'https://japi.juhe.cn/qqevaluate/qq?key=e7556961eeded7e3e76eebbcf72c9541',
      data:{
        qq:that.data.QQ
      },

      success:function(res){
        // Console.log(e)
        that.setData({
          items:res.data,
          ok:true
        })
      }
    })
  },
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