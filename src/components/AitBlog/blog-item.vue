<template>
  <div class="blog column items-center justidy-center">
    <img
      :src="'images/' + blogData.image"
      :alt="blogData.name"
      class="q-ma-none"
    />
    <h3 class="q-mt-md q-mb-md">{{ blogData.title }}</h3>
    <p>{{ textFilter(blogData.description) }}</p>
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
      this.$router.push(`/blogInfo/${this.blogData.id}`);
    },
  },
  computed: {
    textFilter() {
      return (v) => {
        if (v.length > 100) {
          return v.slice(0, 100) + "...";
        }
        return v;
      };
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
  @include mobile {
    padding: 4vw;
  }
  @include afterNotebook {
    border-radius: 30px;
  }
  margin: 0;
  img {
    width: 100%;
    @include afterNotebook {
      width: 90%;
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
      font-size: 27px;
    }
    @include noteBook {
      font-size: 25px;
    }

    @include mobile {
      font-size: 20px;
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
      width: 350px;
      font-size: 14px;
    }
    @include tablet {
      width: 280px;
      font-size: 11px;
    }
    @include mobile {
      width: 80%;
      font-size: 2.4vw;
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
      padding: 15px 26px;
      font-size: 12px;
    }
  }
}
</style>
