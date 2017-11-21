// pages/index/index.js
var util = require('../tem/util.js')
var flag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['首页','搜索','我'],
    currentTab: 0
  },
  navberTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
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
  
  }, 

  bindLocation: function(){
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
        })
      },
    })
  },
  bindValue: function(){
    
    var that = this;
    wx.vibrateLong({
      success: function(){
        console.log('success')
      }
    })
    if(flag){
      wx.showLoading({
        title: '加载中',
      })
      flag = false
    }else{
      wx.hideLoading()
      flag = true
    }
  }
  


})