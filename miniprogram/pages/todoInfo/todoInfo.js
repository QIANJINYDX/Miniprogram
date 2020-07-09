// pages/todoInfo/todoInfo.js
const db=wx.cloud.database();
const todos=db.collection("todos");
let task
let text 
let that=this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task:{},
    checked: true,
    text:"",
    id:""
  },
  pageData:{
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageData.id=options.id
    todos.doc(options.id).get().then(res =>{
      this.setData({
        task:res.data,
      })
    })
  },
  viewLocation:function(){
    wx.openLocation({
      latitude: this.data.task.location.latitude,
      longitude: this.data.task.location.longitude,
      name: this.data.task.location.name,
      address: this.data.task.location.address,
    })
  },
  delete(){
    todos.where({
      title:that.task.title
    }).remove({
      success:function(res){
        console.log("输出成功",res)
      },fail:function(res)
      {
        console.log("删除失败",res)
      }
    })
  }
})