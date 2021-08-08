// pages/demo14/demo14.js
Page({

  handleChange(e){
    //console.log(e);
    //获取单选框中的值
    let gender = e.detail.value;
    //把值赋给data中的数据
    this.setData({
      gender:gender
    })
  },
  handleItemChange(e){
    console.log(e);
    //获取单选框中的值
    const fruit = e.detail.value;
    //把值赋给data中的数据
    this.setData({
      fruit:fruit
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    gender : "",
    fruit : [],
    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape"
      },
      {
        id:2,
        name:"香蕉",
        value:"banana"
      }
    ]
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

  }
})