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
  mounted() {
    console.log(this.blogData);
  },
  props: {
    blogData: Object,
  },
  methods: {
    goToBlogInfo() {
      this.$router.push(`/blogInfo?${this.blogData.id}`);
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
  width: 24vw;
  padding: 2vw;
  border-radius: 50px;
  img {
    width: 100%;
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
