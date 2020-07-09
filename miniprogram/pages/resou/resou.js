//index.js
Page({
  data: {
    scrollViewHeight:200,
    dateOfToday:'',
    dateDay:'',
    items:[],
    id:""
  },
  bindkeji:function(){
    var that=this;
    that.setData({
      id:1566
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  binddianyin:function(){
    var that=this;
    that.setData({
      id:26
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  bindrewu:function(){
    var that=this;
    that.setData({
      id:257
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  bindyouxi:function(){
    var that=this;
    that.setData({
      id:62
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  binddianshiju:function(){
    var that=this;
    that.setData({
      id:4
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  bindkexiaoshuo:function(){
    var that=this;
    that.setData({
      id:7
    })
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:this.data.id
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
  onLoad: function () {
    var that = this;

    //显示加载动画
    // wx.showLoading({
    //   title: '正在加载',
    // });
    
    //发送请求
    wx.request({
      url: "https://nethot.ylapi.cn/hotword/wordList.u?uid=11238&appkey=6aa4993cae4cd6f22e349e7c53b0afec",
      data:{
        typeId:0
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.datas,
            dateOfToday: res.data.today
          });
        } catch (e) {

        }
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
    });
  },
})