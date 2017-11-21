// pages/me/me.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 1,
    isFirstLoad: true,
    hasMore: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //  console.log('page-----------onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  //  console.log('page-----------onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  //  console.log('page-----------onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   // console.log('page-----------onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //console.log('page-----------onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log('page-----------onPullDownRefresh');
    wx.showNavigationBarLoading();
    //this.loadData();
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
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
    return {
      title: "share",
      text: "share"
    }
  },

  // bindtap: function(){
  //   wx.chooseImage({
  //     count: 9,
  //     sizeType: ['original','compressed'],
  //     sourceType:['album','camera'],
  //     success:function(res){
  //       var tem = res.tempFilePaths;
  //       console.log(tem);
  //     }
  //   })
  // }

  bindButtonTap: function(){
    var that = this;
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success: function(res){
        that.setData({
          src: res.tempFilePath
        })
      }
    })    
  }

})