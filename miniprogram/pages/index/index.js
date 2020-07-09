const db = wx.cloud.database();
const todos = db.collection('todos');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    this.getData(res => {
      wx.stopPullDownRefresh();
      //this.pageData.skip = 0;
    });  
  },

  /**
   * 页面上拉触底事件的处理函数
   * 触底刷新
   */
  onReachBottom: function () {
    this.getData();
  },
  //自己写的函数
  getData:function(callback){
    if(!callback){
      callback = res => {}
    }
    wx.showLoading({
      title: 'Loading...',
    })
    todos.skip(this.pageData.skip).get().then(res=>{
      let oldData=this.data.tasks;
      this.setData({
        tasks: oldData.concat(res.data)
      },res=>{
        this.pageData.skip = this.pageData.skip + 20
        wx.hideLoading()
        callback();
      })
    })
  },
  pageData:{
    skip:0
  }
})