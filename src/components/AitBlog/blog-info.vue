<template>
  <div class="blog-info-container row justify-center items-center">
    <div class="blog-info row justify-center items-center">
      <img :src="`${host}/${blog.image}`" alt="ilon mask" class="person-img" />
      <div class="blog-text">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
      </div>
      <img
        class="arrowBack"
        src="images/blogInfoArrow.png"
        alt=""
        @click="$router.push('/aitblog')"
      />
    </div>
  </div>
</template>

<script>
import { HOST } from "../../providers/constants";
import Api from "src/api";

export default {
  data() {
    return {
      blog: {},
      host: HOST,
    };
  },
  inject: ["isOnRegistration", "isOffRegistration"],
  mounted() {
    this.getblog();
    this.isOnRegistration();
  },
  unmounted() {
    this.isOffRegistration();
  },
  computed: {
    blogId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async getblog() {
      const rsp = await Api.Blogs.GetBlogDetailed(this.blogId);
      // console.log(rsp.data.items);
      this.blog = rsp.data.items[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.blog-info-container {
  padding: 0 10.4166666667vw 0;
  background: #f8f8f8;
  @include noteBook {
    padding-bottom: 50px;
  }
  .blog-info {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    padding: 13.25925925926vh 5vw 9.25925925926vh;
    position: relative;
    @include noteBook {
      padding: 60px;
      width: 750px;
    }
    @include mobile {
      padding: 80px 20px 40px 20px;
      width: 300px;
      border-radius: 30px;
    }
    .person-img {
      width: 26vw;
      height: 20vw;
      object-fit: cover;
      border-radius: 30px;
      margin-right: 4.6875vw;
      @include afterNotebook {
        width: 335px;
        object-fit: contain;
        margin-right: 3vw;
      }
      @include noteBook {
        width: 460px;
        height: auto;
        margin-right: 0;
        margin-bottom: 40px;
      }
      @include mobile {
        width: 250px;
        margin-bottom: 20px;
      }
    }
    h2 {
      margin-bottom: 40px;
      @include noteBook {
        font-size: 30px;
        margin-bottom: 20px;
      }
      @include mobile {
        font-size: 24px;
        text-align: center;
      }
    }
    p {
      width: 37vw;
      height: 33vh;
      overflow: auto;
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 140%;
      color: #000000;
      margin: 0;
      @include noteBook {
        width: 460px;
        height: auto;
        font-size: 14px;
      }
      @include mobile {
        width: 250px;
        font-size: 10px;
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .arrowBack {
    position: absolute;
    top: 10%;
    right: 40px;
    cursor: pointer;
    @include noteBook {
      width: 40px;
      height: 40px;
      right: 20px;
    }
    @include mobile {
      width: 50px;
      height: 50px;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
