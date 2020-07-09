//index.js
Page({
  data: {
    items:[],
    diqu:'北京',
    diqu2:'',
    region:['北京市','北京市',['东城区']],
    now:''
  }, 
  changeRegion:function(e){
    this.setData({
      region:e.detail.value,
      diqu:this.data.region[0],
    })
    this.setData({
      diqu:this.data.region[0],
    })
    console.log(this.data.diqu.length)
    for (var i = 0; i < this.data.diqu.length; i++) { 
      if(this.data.diqu[i]=='市'||this.data.diqu[i]=='自'||this.data.diqu[i]=='省'||this.data.diqu[i]=='特')
      {
        break
      }
      this.data.diqu2+=this.data.diqu[i]; 
   }
   this.getyoujia();
  },
  getyoujia:function(){
    var that=this
    wx.request({
      url: "https://oil.ylapi.cn/todayoil/info.u?uid=11238&appkey=770b0a59cf9aee51cca96fb908917d7f",
      data:{
        prov:that.data.diqu2
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function (res) {
        console.log("success:" + res);
        try {
          that.setData({
            items:res.data.data,
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
    that.data.diqu2=''
  },
  onLoad: function () {
  },
})