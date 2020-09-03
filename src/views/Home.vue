<template>
  <section class="section">
    <div class="container is-fullhd">
      <h1 class="title">빈칸만들기</h1>
      <p class="subtitle">
        <strong>빈칸</strong> 만들어서 공부하세요!!
      </p>
      <div class="container is-fluid mb-4">
        <p class="title">Source</p>
        <div class="container">
          <textarea class="textarea is-info" placeholder="e.g. Hello world" v-model="textSource"></textarea>
        </div>
      </div>
      <div class="container is-fluid mb-4">
        <p class="title">필터 단어1</p>
        <div class="container">
          <textarea
            class="textarea is-info"
            placeholder="e.g. Hello world"
            v-model="textFilter"
            rows="2"
          ></textarea>
        </div>
      </div>
      <div class="container is-fluid mb-4">
        <p class="title">결과</p>
        <div class="container">
          <textarea
            class="textarea is-info"
            placeholder="e.g. Hello world"
            v-model="textTarget"
            disabled
          ></textarea>
        </div>
      </div>

      <div class="container">
        <div class>
          <div class>
            <div class="select mx-1">
              <select v-model="blankPer">
                <option>15%</option>
                <option>30%</option>
                <option>50%</option>
                <option>80%</option>
              </select>
            </div>
            <a class="button is-primary mx-1" v-on:click="makeblank">Button</a>
          </div>
        </div>
      </div>

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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      textSource:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      textFilter:
        "i, on, about, by, with, you, they, he, she, it, for, in, that, him, her, me, us, a, the",
      textTarget: "-",
      blankPer: "15%",
    };
  },
  methods: {
    makeblank: function makeblank() {
      var texts = this.textSource.split(".");
      var values1;

      var filters = this.textFilter.replace(/ /gi, "").split(",");
      console.log(filters);

      for (var j = 0; j < texts.length; j++) {
        var text = texts[j];
        var editedText = text.split(" ");
        //몇개를 공백으로 처리할지 정함
        var blankCnt = parseInt(
          (editedText.length * parseInt(this.blankPer)) / 100
        );
        var blanckedArray = [];
        for (var i = 0; i < blankCnt; ) {
          var index = this.getRandom(0, editedText.length - 1);
          //빈칸으로 만들 단어 index 선택
          if (blanckedArray.includes(index) != true) {
            blanckedArray.push(index);
            i++;
          }
        }

        for (var i = 0; i < blanckedArray.length; i++) {
          var index = blanckedArray[i];

          //check filter word
          var checkFilterWord = editedText[index];

          //필터용 단어라면
          if (filters.includes(checkFilterWord) != true) {
            editedText[index] = "(____)";
          }
        }

        texts[j] = editedText.toString().replace(/,/g, " ");
      }

      this.textTarget = texts;
    },
    getRandom: function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>
