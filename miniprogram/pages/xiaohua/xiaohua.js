// pages/xiaohua/xiaohua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    scrollViewHeight:200,
    shuzi:0,
    cangotop:false,
    index:0
  },
  getinfo:function(){
    var that=this
    this.setData({
      index:Math.floor(Math.random()*this.data.items.length),
      jishu:this.data.index
    })
    console.log(this.data.items.length)
    
  },
  getxiaohua:function(){
    
  },
  goTop:function(e){
    if(wx.pageScrollTo){
      wx.pageScrollTo({
          scrollTop:0
      })
    }else{
      wx.showModal({
        cancelColor: 'cancelColor',
        title:'提示',
        content:'当前微信版本过低，暂无法使用该功能，请升级后重绘试'
      })
    }
  },
  fuzhi:function(){
    wx.setClipboardData({
      data: this.data.items[this.data.index].content,
      success:function(){
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      shuzi:Math.floor(Math.random()*20)
    })
    wx.request({
      url: 'https://v.juhe.cn/joke/content/text.php?key=69833f83c3fc67af58ce1ab564c16520',
      data:{
        page:that.data.shuzi,
        pagesize:20
      },
      success:function(res){
        that.setData({
          items:res.data.result.data
        })
      }
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
  onShareAppMessage: function (res) {
    if(res.from=='button'){
      console.log(res.target.res)
    }
    return {
      title:this.data.items[this.data.index].content,
      path:'pages/pengyouquan/pengyouquan'
    }
  }
})