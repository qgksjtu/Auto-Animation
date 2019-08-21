//index.js
const app = getApp()

Page({
  data: {
    parameter: [{ id: 1, name: "miku" }, { id: 2, name: "Not used" }, { id: 3, name:"Not used"}]
  },
  onLoad: function () {
    //默认选中第一个选项
    this.data.parameter[0].checked = true;
    this.setData({
      parameter:this.data.parameter
    })
  },
  parameterTap: function (e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.parameter//获取Json数组
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true;//当前点击的位置为true即选中
      }
      else {
        parameterList[i].checked = false;//其他的位置为false
      }
    }
    that.setData({
      parameter: parameterList
    })
  },
  bindGetVideoTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
       
      }
    })
  },
  bindUploadVideoTap() {
    this.setData({
      UploadModal: true
    })
    this.uploadVideo()
    setTimeout(() => {
      this.setData({
        UploadModal: false
      })
    }, 600)
  },
  bindDownloadVideoTap() {
    this.setData({
      DownloadModal: true
    })
    this.downloadVideo()
    setTimeout(() => {
      this.setData({
        DownloadModal: false
      })
    }, 600)
  },
  uploadVideo: function () {
    var that = this
    wx.uploadFile({
      url: 'http://ganwenyao.com:5463/', 
      method: 'POST',
      filePath: that.data.src,
      name: 'file',
      formData: {
        'user': 'new'
      },
      success: function (res) {
        var data = res.data
        console.log('1')
        
      },
      fail: function () {
        console.log(that.__data__)
        console.log('2')
      }
    })
  },
  downloadVideo: function() {
    var that=this
    wx.downloadFile({
      url: 'http://ganwenyao.com:5463/uploads/new.mp4', //仅为示例，并非真实的资源
      success(res) {
        console.log('11111')
        that.setData({
          src: res.tempFilePath
        })
      }
      
      
    })
  }

})
