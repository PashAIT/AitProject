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
  @include afterNotebook {
    padding: 30px;
  }
  @include noteBook {
    padding: 15px;
  }
  @include tablet {
    border-radius: 25px;
  }
  @include mobile {
    padding: 9px;
    border-radius: 20px;
  }
  img {
    width: 95%;
    height: 8%;
    border-radius: 20px;
    margin-bottom: 40px;
    @include afterNotebook {
      width: 300px;
      height: 209px;
      margin-bottom: 30px;
    }
    @include noteBook {
      width: 220px;
      height: 169px;
    }
    @include tablet {
      width: 180px;
      height: 149px;
    }
    @include mobile {
      width: 32vw;
      height: 22vw;
      margin-bottom: 10px;
      border-radius: 10px;
    }
  }
  h3 {
    font-family: Nortar;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #0e243c;
    margin-bottom: 20px;
    @include afterNotebook {
      font-size: 16px;
    }
    @include noteBook {
      font-size: 15px;
    }

    @include mobile {
      font-size: 10px;
      margin-bottom: 10px;
      text-align: center;
    }
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
    @include afterNotebook {
      font-size: 12px;
      margin-bottom: 30px;
      text-align: center;
    }
    @include noteBook {
      width: 250px;
      font-size: 14px;
    }
    @include tablet {
      width: 140px;
      font-size: 11px;
    }
    @include mobile {
      width: 80px;
      font-size: 9px;
      margin-bottom: 20px;
    }
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
    @include afterNotebook {
      padding: 18px 48px;
    }
    @include tablet {
      padding: 14px 20px;
      font-size: 12px;
    }
    @include mobile {
      padding: 9px 11px;
      font-size: 8px;
    }
  }
}
</style>
