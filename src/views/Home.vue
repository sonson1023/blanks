<template>
<section class="section">
    <div class="container  is-fullhd">
      <h1 class="title">
        빈칸만들기
      </h1>
      <p class="subtitle">
        <strong>빈칸</strong> 만들어서 공부하세요!!
      </p>
    
        <section class="level">
          <div class="level-left ">
            <div class="level-item is-full">
              <div class="tile is-ancestor">
                <div class="">

                </div>
              </div>
              <p class="">Source</p>
                <textarea class="textarea  is-info" placeholder="e.g. Hello world" 
                v-model="textSource">
                </textarea>
            </div> 
          </div>
          <div class="level-left">
              <p class="title">필터링 리스트</p>
              <textarea class="textarea  is-info" placeholder="e.g. Hello world" 
              v-model="textFilter"></textarea>
          </div>
          <div class="level-left">
              <p class="title">결과</p>
              <textarea class="textarea  is-info" placeholder="e.g. Hello world" 
              v-model="textTarget"></textarea>
          </div>
        </section>
      </div>
     
      <div class="select">
        <select v-model="blankPer">
          <option>15%</option>
          <option>30%</option>
          <option>50%</option>
          <option>80%</option>
        </select>
      </div>
      <a class="button is-primary" v-on:click="makeblank">Button</a>
      
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </section>
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
  -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      
      textSource : "South Korea's battle with the virus is being hampered in part by the refusal of some churches to heed requests to halt face-to-face religious services until the crisis is under control, compounded by a three-day strike by doctors. Analysts also say, however, that the government was 'over-confident' that it had the crisis under control after it won plaudits around the world for its response to the original outbreak in the spring. Health officials reported 441 new cases across the country on Thursday, the highest daily figure since March. That figure fell to 371 additional cases on Friday, although the daily total has remained in triple figures for more than two weeks. The majority of new infections are in Seoul and the surrounding region, home to more than half of the nation's 51 million population. ",
      textFilter :'i, on, about',
      textTarget : ''    ,
      blankPer : '15%'
    }
      
  },
  methods:{
    makeblank : function makeblank(){
     var texts = this.textSource.split(".");
     var values1;
      
    for(var j=0; j < texts.length; j++){
      var text = texts[j];  
       var editedText = text.split(" "); 
       //몇개를 공백으로 처리할지 정함
       var blankCnt = parseInt((editedText.length * parseInt(this.blankPer))/100);
       var blanckedArray = [];
       for(var i =0; i < blankCnt; ){
         var index = this.getRandom(0, editedText.length-1);
        if(blanckedArray.includes(index) != true)
        {
          blanckedArray.push(index);
          i++;
        }         
       } 

       for(var i=0; i < blanckedArray.length; i++){
         var index = blanckedArray[i];
         editedText[index] = "(___)";
       }   

       texts[j] = editedText.toString().replace(/,/g, ' ');
       texts[j] += '<br>';
    }
      
     this.textTarget = texts;
    },
    getRandom : function getRandom(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }
  }
}
</script>
