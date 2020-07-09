//index.js
Page({
  data: {
    scrollViewHeight:200,
    dateOfToday:'',
    dateDay:'',
    items:[],
    hid:[]
  },  
  onLoad: function () {
    var that = this;

    //显示加载动画
    wx.showLoading({
      title: '正在加载',
    });

    //获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        that.setData({
          scrollViewHeight: res.windowHeight - 100
        });
      }
    });

    //获取当前日期
    var myDate = new Date();
    var dateStr = myDate.getFullYear() + '年' + (myDate.getMonth()+1) + '月' + myDate.getDate() + '日';
    var M=myDate.getMonth()+1<10 ? '0'+(myDate.getMonth()+1):myDate.getMonth()+1;
    var D=myDate.getDate()<10?'0'+myDate.getDate():myDate.getDate();
    var M=M+D;
    this.setData({
      dateOfToday: dateStr,
      dateDay:M
    });
    //发送请求
    wx.request({
      url: "https://dh.ylapi.cn/today_his/query.u?uid=11238&appkey=9f08d8ec798b89b2bd2094940ab502c1&date:dateDay",
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
        var arr = new Array(that.data.items.length);
        for(var i=0;i<that.data.items.length;i++)
        {
          if(that.data.items[i].img!=null) arr[i]=1;
          else arr[i]=0;
          console.log(1);
        };
        that.setData({
          hid:arr
        });
        wx.hideLoading();
      },
      fail: function (err) {
        console.log("error:" + err);
        wx.hideLoading();
      }
      
    });
    
  },
})