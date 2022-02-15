<template>
  <div class="main">
    <Header />
    <router-view />
    <Footer />
    <img class="scroll" src="../public/images/Scroll.png" alt="" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Footer from "./components/Footer/footer.vue";
import Header from "./components/Header/header.vue";

export default defineComponent({
  components: { Header, Footer },
});
</script>

<style lang="scss" scoped>
.main {
  // height: 3861px;
  // background-image: url("../public/images/Background.png");
  // background-size: 100% 100%;
  // background-position: center center;
  scroll-behavior: smooth;
  background-color: #f8f8f8;
  position: relative;
  .scroll {
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
</style>
