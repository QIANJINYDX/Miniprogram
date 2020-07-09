// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['北京市','北京市',['东城区']],
    now:'',
    foest:[],
    okkkkk:false
  },
  // 选择地区赋值给region
  changeRegion:function(e){
    this.setData({
      region:e.detail.value,
      okkkkk:true
    })
    this.getWeater();//每选择一个地区更新一下天气
  },
  getWeater:function(){
    var that=this;//this不可以直接在wxAPI函数内部使用
    // 发起请求
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[2],
        key:'f4c0db977cd24ebeafec180dee94cfdc'
      },
      success:function(res){
        console.log(res.data)
        // 把请求来的数据赋值给原来data对象
        that.setData({now:res.data.HeWeather6[0].now})
      }
    })
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/forecast?',
      data:{
        location:that.data.region[2],
        key:'f4c0db977cd24ebeafec180dee94cfdc'
      },
      success:function(res){
        console.log(res.data)
        // 把请求来的数据赋值给原来data对象
        that.setData({foest:res.data.HeWeather6[0].daily_forecast})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeater();
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