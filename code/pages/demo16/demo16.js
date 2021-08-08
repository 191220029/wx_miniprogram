// pages/demo16/demo16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    //在onLoad中发送异步请求初始化页面数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
    //进行页面数据或者效果的重新刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要让页面出现上下滚动才行
   */
  onReachBottom: function () {
    console.log("onReachBottom");
    //加载下一页数据...
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },
  /**
   * 页面滚动就可以触发
   */
  onPageScroll(){
    console.log("onPageScroll");
  },
  /**
   * 页面尺寸改变的时候触发
   * 小程序发生了横屏竖屏切换时触发
   * 需要在.json文件中加入"pageOrientation": "auto"设置
   */
  onResize(){
    console.log("onResize");
  },
  /**
   * 当前页面是tab页是，点击tab触发
   */
  onTabItemTap(){
    console.log("onTabItemTap");
  }
})