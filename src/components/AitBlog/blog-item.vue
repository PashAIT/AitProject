<template>
  <div class="blog column items-center">
    <img :src="'images/' + blogData.image" :alt="blogData.name" />
    <h3>{{ blogData.name }}</h3>
    <p>{{ blogData.minInfo }}</p>
    <button @click="goToBlogInfo">Կարդալ ավելին</button>
  </div>
</template>

<script>
export default {
  props: {
    blogData: Object,
  },
  methods: {
    goToBlogInfo() {
      this.$router.push(`/blogInfo?${this.blogData.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";
.blog {
  background: rgba(255, 255, 255, 0.5);
  padding: 2vw;
  border-radius: 50px;
  img {
    width: 95%;
    height: 8%;
    border-radius: 20px;
    margin-bottom: 40px;
  }
  h3 {
    font-family: Nortar;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #0e243c;
    margin-bottom: 20px;
  }
  p {
    width: 326px;
    margin-bottom: 40px;
    font-family: Nortar;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    color: #000000;
  }
  button {
    @include button();
    padding: 22px 51px;
    border: none;
    font-family: Nortar;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #0e243c;
  }
}
</style>
