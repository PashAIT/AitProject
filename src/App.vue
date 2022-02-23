<template>
  <div class="main" :class="{ forPages: onRegistration }" v-cloak>
    <Header id="header-content" />
    <router-view />
    <Footer v-if="!onRegistration" />
    <img
      v-if="!onRegistration"
      class="scrollimage"
      src="../public/images/Scroll.png"
      alt=""
    />
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

.main {
  scroll-behavior: smooth;
  background-color: #f8f8f8;
  @include scroll();
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
  }
}
.forPages {
  height: 100vh;
}
</style>
