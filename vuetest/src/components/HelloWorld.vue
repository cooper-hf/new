<template>
  <div class="hello">
    <header1></header1>
    <div style="height:183px;color:#fff">
      <mt-swipe :auto="4000">
        <mt-swipe-item><div style="width:100%;height:100%;background:red;"><img src="https://img1.360buyimg.com/da/jfs/t18913/141/306655918/114007/6c03047e/5a6ac846N90a067b2.jpg"></div></mt-swipe-item>
        <mt-swipe-item><div style="width:100%;height:100%;background:blue;"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t14284/336/2045553899/201491/c10395aa/5a69a068N27b7b089.jpg!q70.jpg"></div></mt-swipe-item>
        <mt-swipe-item><div style="width:100%;height:100%;background:green;"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t18652/94/307703245/202710/3cf8e65/5a6ac5c4Nd71407c5.jpg!q70.jpg"></div></mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <ul class="hello_d1 ul">
        <li v-for="(json,index) in img" :key="index" @click="alert(index)">
          <div><img :src="json.url"></div>
          <div>{{json.text}}</div>
          <!-- <div>{{index}}</div> -->
        </li>
      </ul>
    </div>
    <ul id="ul1">
      <li><span> 1 </span><span> 1 </span><span> 1 </span><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
      <li><span> 1 </span></li>
    </ul>
    <!-- <div><img src="./assets/5a69c01dN9874d895.gif"></div> -->
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import header1 from "./common/header.vue"
import Vue from "vue"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      img:[
        {
          "url":"//img.alicdn.com/tps/i4/TB14Rz7jfBNTKJjSszbwu1FrFXa.png_200x200Q50s50.jpg_.webp",
          "text":"衣服"
        },
        {
          "url":"http://p0.meituan.net/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png.webp",
          "text":"美团超市"
        },
        {
          "url":"http://p0.meituan.net/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png.webp",
          "text":"生鲜果蔬"
        },
        {
          "url":"http://p0.meituan.net/jungle/45816fffb346c194d58e961fde7c0fad4901.png.webp",
          "text":"甜品饮料"
        },
        {
          "url":"http://p1.meituan.net/jungle/bd3ea637aeaa2fb6120b6938b5e468a13442.png.webp",
          "text":"美食"
        },
        {
          "url":"http://p0.meituan.net/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png.webp",
          "text":"美团超市"
        },
        {
          "url":"http://p0.meituan.net/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png.webp",
          "text":"生鲜果蔬"
        },
        {
          "url":"http://p0.meituan.net/jungle/45816fffb346c194d58e961fde7c0fad4901.png.webp",
          "text":"甜品饮料"
        }
      ]
    }
  },
  methods:{

    add:function(){

      MessageBox({

        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true

      }).then(action=>{
        MessageBox('提示', '操作成功');
      });
    },
    alert:function(index){
      alert(index);
    }
  },
  components:{
    header1
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
div > img{
  width: 100%;
}
.ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}
.ul > li {
  display: inline-block;
  width: 25%;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
}
li > div:first-child{
  width: 47px;
  margin: 0 auto;
}
li > div > img{
  width: 100%;
}
a {
  color: #42b983;
}
.hello_d1{
  width: 100%;
}
#ul1{
  list-style: none;
  padding: 0;
  display: flex;
  text-align: center;
  margin-top: 40px;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
}
#ul1 li{
  display: flex;
  justify-content: center;
  height: 40px;
  line-height: 40px;
  align-items: center;
}
#ul1 li > span{
  align-items: center;
  display: inline-block;
  background: red;
  width: 20px;
}
</style>
