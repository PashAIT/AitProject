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
    <img
      v-for="img in 7"
      :key="`image${img}`"
      :src="`images/Ellipse${img}.svg`"
      :alt="`Ellipe${img}`"
      :class="`ellipse${img}`"
      class="ellipses"
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
      if (this.scrollY >= 850) {
        this.scrollDiv = true;
      } else if (this.scrollY < 850) {
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
body {
  background-color: #f8f8f8;
}
.main {
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
  .ellipses {
    position: absolute;
    z-index: -1;
  }
  .ellipse1 {
    top: 0;
    left: 0;
  }
  .ellipse2 {
    top: 13vw;
    right: 0;
  }
  .ellipse3 {
    top: 60vw;
    left: 0;
  }
  .ellipse4 {
    top: 95vw;
    right: 0;
  }
  .ellipse5 {
    top: 100vw;
    left: 36.5vw;
  }
  .ellipse6 {
    top: 130.9vw;
    left: 0.05vw;
  }
  .ellipse7 {
    bottom: 36vw;
    left: 13vw;
  }
  .ellipse1,
  .ellipse4 {
    width: 26vw;
    height: 26vw;
  }
}
.forPages {
  min-height: 100vh;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 0;
  transform: translateY(100px);
}
</style>
