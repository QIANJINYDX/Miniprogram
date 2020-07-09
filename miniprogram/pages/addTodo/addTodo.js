// pages/addTodo/addTodo.js
const db=wx.cloud.database();
const todos=db.collection("todos");
Page({
  data:{
    image:null
  },
  pageData:{
    locationObj:{}
  },
  selectImage:function(e){
    wx.chooseImage({
      success: res => {
        wx.cloud.uploadFile({
          cloudPath:`${Math.floor(Math.random()*10000000)}.png`,
          filePath:res.tempFilePaths[0]
        }).then(res =>{
          console.log(res.fileID)
          this.setData({
            image: res.fileID
          })
        }).catch(err =>{
          console.error(err)
        })
      }
    })
  },
  onSubmit:function(event){
    console.log(event.detail.value.title)
    todos.add({
      data:{
        title: event.detail.value.title,
        image:this.data.image,
        location: this.pageData.locationObj
      }
    }).then (res=>{
      console.log(res._id)
      wx.showToast({
        title: 'Success',
        icon:'success',
        success:res2 =>{
          wx.redirectTo({
            url: `../todoInfo/todoInfo?id=${res._id}`,
          })
        }
      })
    })
  },
  chooseLocation: function(e){
    wx.chooseLocation({
      success: res => {
        let locationObj={
          latitude: res.latitude,
          longitude: res.longitude,
          name: res.name,
          address: res.address
        }
        this.pageData.locationObj = locationObj
      },
    })
  }
})