<template>
    <div class="page-container">
      <div class="left-section">
        <div class="left-section">


  <ul class="myul">
    <li>分类</li>
    <li>女装/内衣/奢品</li>
    <li>女鞋/男鞋/箱包</li>
    <li>美妆/饰品/洗护</li>
    <li>男装/运动/百货</li>
    <li>手机/数码/企业礼品</li>
    <li>家装/电器/车品</li>
    <li>食品/生鲜/母婴</li>
    <li>医药/保健/进口</li>
  </ul>
</div>

      </div>
      <div class="right-section">
        <div class="upper-section">
          <a class="link" v-for="index in 8" :key="index">聚划算</a>
        </div>
        <div class="lower-section">
          <div class="lower-left-section">
           <img class="image1" src="https://img.alicdn.com/imgextra/i4/O1CN01cmWoxh1S6H07yrmcM_!!6000000002197-0-tps-846-472.jpg">
          </div>
          <div class="lower-right-section">

            <div >
              <img class="userimge" src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=60&height=60&type=sns&_input_charset=UTF-8"/>
            </div>
            <div><p>HI！ 你好</p></div>
            <div>
              <button class="bottomline"></button>
              <button class="bottomline"></button>
              <button class="bottomline"></button>
            </div>
            <div class="parent-div">
              <img src="" alt="">
              <i>宝贝收藏</i>
              <img src="" alt="">
              <i>买过的店</i>
              <img src="" alt="">
              <i>收藏的店</i>
              <img src="" alt="">
              <i>我的足迹</i>
            </div>
            
          </div>  
            <!-- 右侧部分的下部分右侧内容 -->
          </div>
        </div>
      </div>
    
  </template>
  
  <style>
  .page-container {
    display: flex;
  }
  
  .left-section {
    height: 400px;
    width: 300px;
    background-color: lightgray;
    border-radius: 10px;
  }
  
  .right-section {
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    height: 400px;
    width: 800px;

  }
  
  .upper-section {
  height: 50px;
  background-color: lightgreen;
  display: flex;
  border-radius: 10px;
}

  
  .link {
  flex: 1;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

  
  .lower-section {
    display: flex;
  }
  
  .lower-left-section {
    width: 500px;
    height: 350px;

    border-radius: 10px;
  }
  
  .lower-right-section {
  width: 300px;
  height: auto;

}

.lower-right-section div {
  display: flex;
  justify-content: center;
  align-items: center;
}


  .lower-right-section1{
    width: 280px;
    height: 50px;
  }
  .image1{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .userimge {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.bottomline {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  margin: 10px;
}
.parent-div {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent-div img,
.parent-div i {
  margin-right: 10px;
  font-size: 12px;
}

.myul {
  list-style-type: none; /* 消除圆点样式 */
  padding: 0;
  margin: 0;
}

.myul li{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
 
}

  
  </style>
  