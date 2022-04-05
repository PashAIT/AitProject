<template>
  <div class="main" :class="{ forPages: onRegistration }" v-cloak>
    <Header id="header-content" :isNoScrollPages="onRegistration" />
    <router-view />
    <Footer v-if="!onRegistration" />
    <div class="scrollDiv" v-if="scrollDiv">
      <img
        v-if="scrollDiv"
        class="scrollimage"
        src="../public/images/Scroll.png"
        alt=""
        @click="GoToTop"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Footer from "./components/Footer/footer.vue";
import Header from "./components/Header/header.vue";

export default defineComponent({
  data() {
    return {
      onRegistration: false,
      scrollY: 0,
      scrollDiv: false,
    };
  },
  components: { Header, Footer },
  methods: {
    isOnRegistration() {
      this.onRegistration = true;
    },
    isOffRegistration() {
      this.onRegistration = false;
    },
    handleScroll() {
      this.scrollY = window.scrollY;
      if (this.scrollY >= 700) {
        this.scrollDiv = true;
      } else if (this.scrollY < 700) {
        this.scrollDiv = false;
      }
    },
    GoToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.foundersAnimation);
  },
  provide() {
    return {
      isOnRegistration: this.isOnRegistration,
      isOffRegistration: this.isOffRegistration,
    };
  },
});
</script>

<style lang="scss">
@import "css/mixins.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  @include scroll();
}
.main {
  background-color: #f8f8f8;
  // background-image: url("../public/images/Background.png");
  // background-size: ;
  // background-repeat: no-repeat;
  // background-position: center center;
  position: relative;
  .scrollimage {
    width: 80px;
    height: 80px;
    border: 1px linear-gradient(180deg, #00c9ff 0%, rgba(146, 254, 157, 0) 100%)
      solid;
    position: fixed;
    right: 30px;
    top: 80%;
    cursor: pointer;
    @include mobile {
      width: 55px;
      height: 55px;
    }
  }
}
.forPages {
  height: 100vh;
}
</style>
