<template>
  <section class="section">
    <div class="columns is-fullhd">
      <!-- <h1 class="title">빈칸 만들어서 공부하세요!!</h1> -->

      <div class="column is-fluid mb-2">
        <p class="title">
          Source
          <span class="tag is-warning is-medium">
            Clear
            <button class="delete is-small" v-on:click="clearSource"></button>
          </span>
        </p>
        <div class="container">
          <textarea class="textarea is-info" placeholder v-model="textSource" rows="20"></textarea>
        </div>
      </div>

      <div class="column is-fluid mb-2">
        <p class="title">결과</p>
        <div class="container">
          <textarea
            class="textarea is-info"
            placeholder="e.g. Hello world"
            v-model="textTarget"
            rows="20"
            readonly
          ></textarea>
        </div>
      </div>
    </div>
    <div class="container is-fluid mb-2 mt-2">
      <p class="title">필터 금지 단어</p>
      <div class="container">
        <textarea
          class="textarea is-info"
          placeholder="e.g. Hello world"
          v-model="textFilter"
          rows="1"
        ></textarea>
      </div>
    </div>

    <div class="container">
      <div class>
        <div class="select m-2">
          <select v-model="blankPer">
            <option>15%</option>
            <option>30%</option>
            <option>50%</option>
            <option>80%</option>
          </select>
        </div>
        <a class="button is-success mb-2" v-on:click="makeblank">필터</a>
      </div>

      <div class="mx-3">
        <div class="button is-info mx-1 my-1" v-on:click="saveSentence">Source 문장 저장</div>
        <div class="button is-info mx-1 my-1" v-on:click="loadSentence">Source 문장 불러오기</div>
      </div>
    </div>
    <div v-if="isInfoMsg" class="dim">
      <div class="notification is-primary is-light msg">
        <button class="delete" v-on:click="closeAlert"></button>
        <p style="margin:10%">{{infoMessage}}</p>
      </div>
    </div>

    <div v-if="isErorMsg" class="dim">
      <div class="notification is-danger is-light msg">
        <button class="delete" v-on:click="closeAlert"></button>
        <p>{{errorMessage}}</p>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
      isInfoMsg: false,
      isErorMsg: false,
      infoMessage: "",
      errorMessage: "",
    };
  },
  beforeMount() {
    this.initLoadSentence();
  },
  methods: {
    clearSource: function clearSource() {
      this.textSource = "";
    },
    makeblank: function makeblank() {
      var texts = this.textSource.split(".");
      var values1;

      var filters = this.textFilter.replace(/ /gi, "").split(",");
      // console.log(filters);

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

          //필터용 단어라면 pass or change
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
    initLoadSentence: function initLoadSentence() {
      try {
        var storage = localStorage;
        var text = storage.getItem("sentence");
        if (text != null) {
          this.textSource = text;
        }
      } catch (e) {}
    },
    loadSentence: function loadSentence() {
      try {
        var storage = localStorage;
        var text = storage.getItem("sentence");
        if (text != null) {
          this.showInfoAlert("성공");
          this.textSource = text;
        } else {
          this.showInfoAlert("저장된 문장이 없습니다.");
        }
      } catch (e) {
        this.showErrAlert("불러오기 실패");
      }
    },
    saveSentence: function saveSentence() {
      try {
        var storage = localStorage;
        storage.setItem("sentence", this.textSource);
      } catch (e) {
        this.showErrAlert("저장에 실패했습니다.");
      }
      this.showInfoAlert("저장되었습니다.");
    },
    showInfoAlert: function showInfoAlert(text) {
      this.infoMessage = text;
      this.isInfoMsg = true;
    },
    showErrAlert: function showErrAlert(text) {
      this.errorMessage = text;
      this.isErorMsg = true;
    },
    closeAlert: function closeAlert(id) {
      this.isInfoMsg = false;
      this.isErorMsg = false;
    },
  },
};
</script>

<style scoped>
.dim {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100 !important;
  background-color: black;
  filter: alpha(opacity=75); /* internet explorer */
  -khtml-opacity: 0.75; /* khtml, old safari */
  -moz-opacity: 0.75; /* mozilla, netscape */
  opacity: 0.75; /* fx, safari, opera */
}

.dim .msg {
  display: inline-block;
  position: absolute;
  width: 250px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
