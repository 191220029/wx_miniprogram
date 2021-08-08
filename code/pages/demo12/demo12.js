// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //标签字符串
    html:'<ul class="service-bd" role="menubar"> <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="0" class="J_Cat a-all">      <a href="https://huodong.taobao.com/wow/a/act/tao/dailyact/2633/wupr?wh_pid=dailyAct-214753" data-cid="1" data-dataid="222887">女装</a> /      <a href="https://s.taobao.com/search?q=内衣" data-cid="1" data-dataid="222890">内衣</a>     / <a href="https://s.taobao.com/search?q=家居" data-cid="1" data-dataid="222889">家居</a>     <i aria-hidden="true" class="tb-ifont service-arrow"></i>    </li>    <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="1" class="J_Cat a-all">      <a href="https://huodong.taobao.com/wow/a/act/tao/dailyact/2772/wupr?wh_pid=dailyAct-216657" data-cid="1" data-dataid="222887">女鞋</a> /      <a href="https://s.taobao.com/search?q=%E7%94%B7%E9%9E%8B&amp;imgfile=&amp;commend=all&amp;ssid=s5-e&amp;search_type=item&amp;sourceId=tb.index&amp;spm=a21bo.2017.201856-taobao-item.1&amp;ie=utf8&amp;initiative_id=tbindexz_20170306" data-cid="1" data-dataid="222890">男鞋</a>     / <a href="https://s.taobao.com/search?q=%E7%AE%B1%E5%8C%85&amp;imgfile=&amp;commend=all&amp;ssid=s5-e&amp;search_type=item&amp;sourceId=tb.index&amp;spm=a21bo.21814703.201856-taobao-item.1&amp;ie=utf8&amp;initiative_id=tbindexz_20170306" data-cid="1" data-dataid="222889">箱包</a>  <i aria-hidden="true" class="tb-ifont service-arrow"></i>   </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="2" class="J_Cat a-all">   <a href="https://s.taobao.com/search?ie=utf8&amp;initiative_id=staobaoz_20210219&amp;stats_click=search_radio_all%3A1&amp;js=1&amp;imgfile=&amp;q=%E6%AF%8D%E5%A9%B4&amp;suggest=history_1&amp;_input_charset=utf-8&amp;wq=%E6%AF%8D%E5%A9%B4&amp;suggest_query=%E6%AF%8D%E5%A9%B4&amp;source=suggest" data-cid="1" data-dataid="222887">母婴</a> /   <a href="https://s.taobao.com/search?q=童装" data-cid="1" data-dataid="222890">童装</a>     / <a href="https://s.taobao.com/search?q=玩具" data-cid="1" data-dataid="222889">玩具</a> <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li> <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="3" class="J_Cat a-all">  <a href="https://s.taobao.com/search?q=男装" data-cid="1" data-dataid="222887">男装</a> /   <a href="https://s.taobao.com/search?q=运动户外" data-cid="1" data-dataid="222890">运动户外</a>   <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="4" class="J_Cat a-all"><a href="https://s.taobao.com/search?q=%E7%BE%8E%E5%A6%86&amp;imgfile=&amp;js=1&amp;stats_click=search_radio_all%3A1&amp;initiative_id=staobaoz_20210126&amp;ie=utf8" data-cid="1" data-dataid="222887">美妆</a> / <a href="https://s.taobao.com/search?q=彩妆" data-cid="1" data-dataid="222890">彩妆</a> / <a href="https://s.taobao.com/search?q=个护" data-cid="1" data-dataid="222889">个护</a>    <i aria-hidden="true" class="tb-ifont service-arrow"></i>   </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="5" class="J_Cat a-all">   <a href="https://s.taobao.com/search?q=手机" data-cid="1" data-dataid="222887">手机</a> /   <a href="https://s.taobao.com/search?q=数码" data-cid="1" data-dataid="222890">数码</a>  / <a href="https://s.taobao.com/search?q=办公" data-cid="1" data-dataid="222889">企业</a>    <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="6" class="J_Cat a-all">  <a href="https://s.taobao.com/search?q=大家电" data-cid="1" data-dataid="222887">大家电</a> /   <a href="https://s.taobao.com/search?q=生活电器" data-cid="1" data-dataid="222890">生活电器</a>    <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="7" class="J_Cat a-all">   <a href="https://s.taobao.com/search?q=零食" data-cid="1" data-dataid="222887">零食</a> / <a href="https://s.taobao.com/search?q=生鲜" data-cid="1" data-dataid="222890">生鲜</a>   / <a href="https://s.taobao.com/search?q=茶酒" data-cid="1" data-dataid="222889">茶酒</a>    <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li> <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="8" class="J_Cat a-all">  <a href="https://s.taobao.com/search?q=厨具" data-cid="1" data-dataid="222887">厨具</a> /   <a href="https://s.taobao.com/search?q=收纳" data-cid="1" data-dataid="222890">收纳</a> / <a href="https://s.taobao.com/search?q=清洁" data-cid="1" data-dataid="222889">清洁</a>    <i aria-hidden="true" class="tb-ifont service-arrow"></i>   </li>  <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="9" class="J_Cat a-all">    <a href="https://s.taobao.com/search?q=家纺" data-cid="1" data-dataid="222887">家纺</a> /      <a href="https://s.taobao.com/search?q=家饰" data-cid="1" data-dataid="222890">家饰</a>            / <a href="https://s.taobao.com/search?q=鲜花" data-cid="1" data-dataid="222889">鲜花</a>  <i aria-hidden="true" class="tb-ifont service-arrow"></i>    </li>      <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="10" class="J_Cat a-all">      <a href="https://s.taobao.com/search?q=图书音像" data-cid="1" data-dataid="222887">图书音像</a> /      <a href="https://s.taobao.com/search?q=%E6%96%87%E5%85%B7&amp;imgfile=&amp;commend=all&amp;ssid=s5-e&amp;search_type=item&amp;sourceId=tb.index&amp;spm=a21bo.2017.201856-taobao-item.1&amp;ie=utf8&amp;initiative_id=tbindexz_20170306" data-cid="1" data-dataid="222890">文具</a>            <i aria-hidden="true" class="tb-ifont service-arrow"></i>    </li>    <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="11" class="J_Cat a-all">      <a href="https://s.taobao.com/search?q=医药保健" data-cid="1" data-dataid="222887">医药保健</a> /      <a href="https://s.taobao.com/search?q=%E8%BF%9B%E5%8F%A3&amp;imgfile=&amp;js=1&amp;stats_click=search_radio_all%3A1&amp;initiative_id=staobaoz_20201113&amp;ie=utf8" data-cid="1" data-dataid="222890">进口</a>            <i aria-hidden="true" class="tb-ifont service-arrow"></i>    </li>      <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="12" class="J_Cat a-all">      <a href="https://car.tmall.com/wow/car/act/carfp" data-cid="1" data-dataid="222887">汽车</a> /      <a href="https://huodong.taobao.com/wow/pm/default/pcgroup/c51a5b?disableNav=YES" data-cid="1" data-dataid="222890">二手车</a>            / <a href="https://car.tmall.com/wow/car/act/carfp" data-cid="1" data-dataid="222889">用品</a>            <i aria-hidden="true" class="tb-ifont service-arrow"></i>    </li>      <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="13" class="J_Cat a-all">      <a href="https://s.taobao.com/search?q=%E5%A4%A9%E7%8C%AB%E5%A5%BD%E6%88%BF&amp;imgfile=&amp;js=1&amp;stats_click=search_radio_all%3A1&amp;initiative_id=staobaoz_20200925&amp;ie=utf8" data-cid="1" data-dataid="222887">房产</a> /    <a href="https://s.taobao.com/search?q=装修" data-cid="1" data-dataid="222890">装修家具</a>            / <a href="https://s.taobao.com/search?q=建材" data-cid="1" data-dataid="222889">建材</a>            <i aria-hidden="true" class="tb-ifont service-arrow"></i>  </li> <li data-closeper="" aria-label="查看更多" role="menuitem" aria-haspopup="true" data-groupid="14" class="J_Cat a-all">      <a href="https://s.taobao.com/search?q=手表" data-cid="1" data-dataid="222887">手表</a> /  <a href="https://s.taobao.com/search?q=眼镜" data-cid="1" data-dataid="222890">眼镜</a>       / <a href="https://s.taobao.com/search?q=珠宝饰品" data-cid="1" data-dataid="222889">珠宝饰品</a>     <i aria-hidden="true" class="tb-ifont service-arrow"></i> </li>  </ul>',
    //对象数组
    a:[
      {
        //div标签 name属性指定
        name:'div',
        //标签上有哪些属性
        attrs:{
          //标签上的属性：class style
          class:"my_div",
          style:"color:red;"
        },
        //子节点要接受的数据类型和 nodes第二种渲染方式的数据类型
        children:[
          {
            name:"p",
            attrs:{},
            //放文本
            children:[{
              type:"text",
              text:"hello"
            }]
          }
        ]
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