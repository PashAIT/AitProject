<template>
  <div class="ait-blog column items-center">
    <h2 @click="blogsAndMonths">Բլոգ</h2>
    <div class="videos column q-gutter-y-xl">
      <Video
        v-for="video in videos"
        :key="'video' + video.id"
        :videoData="video"
        class="video"
        :data-aos="[video.id % 2 === 0 ? 'fade-right' : 'fade-left']"
        data-aos-duration="800"
      />
    </div>
    <div class="blogs column items-center full-width q-mb-lg">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        padding
        height="max-content"
        ref="carousel"
        class="text-white shadow-1 rounded-borders full-width relative-position"
      >
        <template v-slot:control>
          <q-carousel-control
            class="q-gutter-xs controls relative-position"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <q-btn
              round
              dense
              icon="img:images/monthLeft.png"
              class="arrows arrow1"
              @click="prevBlogs"
            ></q-btn>
            <q-btn
              round
              dense
              icon="img:images/monthRight.png"
              @click="nextBlogs"
              class="arrows arrow2"
            ></q-btn>
          </q-carousel-control>
        </template>
        <q-carousel-slide
          class="column no-wrap flex-center q-pt-xl"
          v-for="(blog, i) in activeBlogs"
          :key="`blog${i}`"
          :name="blog.id"
        >
          <span
            style="
              color: #004a5d;
              font-size: 2.08333333333vw;
              font-family: Nortar;
              font-weight: 700;
            "
            class="q-pt-md"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>{{ blog.month }}</h2></span
          >

          <div
            class="q-mt-xl row justify-evenly full-width blogs-container q-col-gutter-xl"
          >
            <div
              v-for="item in blog.blogs"
              :key="item.id"
              data-aos="fade-up"
              data-aos-duration="800"
              class="col-lg-4 col-md-6 col-sm-8 col-xs-10"
            >
              <blog-item :blogData="item" />
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import Video from "src/components/AitBlog/video.vue";
import AOS from "aos";
import Api from "src/api";
import "aos/dist/aos.css";
import BlogItem from "src/components/AitBlog/blog-item.vue";
export default {
  components: { Video, BlogItem },
  data() {
    return {
      slide: 2,
      videos: [
        {
          id: 1,
          title: "Մեր մասին",
          video: "araratit.mp4",
          backgroundImg: "videoBackground.png",
          text: "Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեք",
        },
        {
          id: 2,
          title: "Մեր մասին",
          video: "araratit.mp4",
          backgroundImg: "videoBackground.png",
          text: "Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեք",
        },
        {
          id: 3,
          title: "Մեր մասին",
          video: "araratit.mp4",
          backgroundImg: "videoBackground.png",
          text: "Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեք",
        },
      ],
      month: [
        {
          id: 1,
          monthNum: "01",
          title: "Հունվար",
        },
        {
          id: 2,
          monthNum: "02",
          title: "Փետրվար",
        },
        {
          id: 3,
          monthNum: "03",
          title: "Մարտ",
        },
        {
          id: 4,
          monthNum: "04",
          title: "Ապրիլ",
        },
        {
          id: 5,
          monthNum: "05",
          title: "Մայիս",
        },
        {
          id: 6,
          monthNum: "06",
          title: "Հունիս",
        },
        {
          id: 7,
          monthNum: "07",
          title: "Հուլիս",
        },
        {
          id: 8,
          monthNum: "08",
          title: "Օգոստոս",
        },
        {
          id: 9,
          monthNum: "09",
          title: "Սեպտեմբեր",
        },
        {
          id: 10,
          monthNum: "10",
          title: "Հոկտեմբեր",
        },
        {
          id: 11,
          monthNum: "11",
          title: "Նոյեմբեր",
        },
        {
          id: 12,
          monthNum: "12",
          title: "Դեկտեմբեր",
        },
      ],
      blogs: [],
      activeMonths: [],
      activeMonth: 4,
      activeYear: new Date().getFullYear(),
    };
  },
  computed: {
    activeBlogs() {
      let arr = [];
      this.blogs.forEach((el, i) => {
        let a = el[0].creation_date.split("-")[1];
        let b = this.month.find((el) => el.monthNum === a);
        let obj = { blogs: el, month: b.title, id: i + 1 };
        arr.push(obj);
      });
      return arr;
    },
    monthWidthZero() {
      if (this.activeMonth < 10) return `0${this.activeMonth}`;
      else return this.activeMonths;
    },
  },
  mounted() {
    this.getblogs();
    AOS.init();
  },

  methods: {
    async getblogs() {
      const rsp = await Api.Blogs.GetBlogs(
        this.monthWidthZero,
        this.activeYear
      );
      this.blogs = rsp.data.items;
    },
    nextBlogs() {
      if (this.activeMonth < 12) {
        this.activeMonth++;
        this.getblogs();

        this.$refs.carousel.next();
      }
    },
    prevBlogs() {
      if (this.activeMonth < 0) {
        this.activeMonth--;
        this.getblogs();
        this.$refs.carousel.previous();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/mixins.scss";

.ait-blog {
  overflow-x: hidden;
  .videos {
    margin-bottom: 100px;
    :first-child {
      @include noteBook {
        margin-top: 0;
      }
    }
  }
  .blogs {
    padding: 0 7vw;
    .controls {
      width: 26vw;
      height: max-content;
      position: absolute;
      top: 0.1%;
      left: 29vw;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      @include noteBook {
        width: 35vw;
        left: 23vw;
      }
      @include noteBook {
        width: 45vw;
        left: 17vw;
      }
      @include mobile {
        width: 52vw;
        left: 12vw;
      }
    }
    .blogs-container {
      @include mobile {
        margin-top: 0;
      }
      > div {
        @include mobile {
          padding: 0;
        }
      }
    }
  }
}
</style>
