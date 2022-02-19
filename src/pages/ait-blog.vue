<template>
  <div class="ait-blog column items-center">
    <h2>AIT բլոգ</h2>
    <div class="videos column q-gutter-y-xl">
      <Video
        v-for="video in videos"
        :key="'video' + video.id"
        :text="video.text"
        :title="video.title"
        :video="video.video"
        :backgroundImg="video.backgroundImg"
        class="video col"
      />
    </div>
    <div class="blogs column items-center">
      <div class="blog-month">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          prev-icon="img:images/monthLeft.png"
          next-icon="img:images/monthRight.png"
          control-color="primary"
          control-text-color="black"
          arrows
          height="max-content"
          class="rounded-borders month-carousel"
        >
          <q-carousel-slide
            v-for="month in months"
            :key="`month${month.id}`"
            :name="month.type"
            class="column no-wrap flex-center"
          >
            <div class="q-mt-md month-name">
              {{ month.name }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="row items-center blog-container q-gutter-x-lg q-gutter-y-xl">
        <blog-item
          v-for="blog in blogs"
          :key="`blog${blog.id}`"
          :image="blog.image"
          :name="blog.name"
          :minInfo="blog.minInfo"
          class="col-4.5"
          @click="$router.push('/blogInfo')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Video from "src/components/AitBlog/video.vue";
import BlogItem from "src/components/AitBlog/blog-item.vue";
export default {
  components: { Video, BlogItem },
  data() {
    return {
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
      months: [
        {
          id: 1,
          name: "Հունվար",
          type: "style",
        },
        {
          id: 2,
          name: "Փետրվար",
          type: "second",
        },
        {
          id: 3,
          name: "Մարտ",
          type: "third",
        },
        {
          id: 4,
          name: "Ապրիլ",
          type: "fourth",
        },
        {
          id: 5,
          name: "Մայիս",
          type: "fifth",
        },
        {
          id: 6,
          name: "Հունիս",
          type: "sixth",
        },
        {
          id: 7,
          name: "Հուլիս",
          type: "seventh",
        },
        {
          id: 8,
          name: "Օգոստոս",
          type: "eighth",
        },
        {
          id: 9,
          name: "Սեպտեմբեր",
          type: "ninth",
        },
        {
          id: 10,
          name: "Հոկտեբեր",
          type: "tenth",
        },
        {
          id: 11,
          name: "Նոյեմբեր",
          type: "eleventh",
        },
        {
          id: 12,
          name: "Դեկտեմբեր",
          type: "twelfth",
        },
      ],
      slide: "second",
      blogs: [
        {
          id: 1,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 2,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 3,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 4,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 5,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 6,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 7,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 8,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
        {
          id: 9,
          image: "ilonmask.png",
          name: "Իլոն Մասկ",
          minInfo:
            "Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։",
          info: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ait-blog {
  .videos {
    margin-bottom: 100px;
  }
  .blogs {
    .blog-month {
      margin-bottom: 100px;
      .month-carousel {
        width: 517px;
        background: #f8f8f8;

        img {
          width: 80px !important;
          height: 80px !important;
        }

        .month-name {
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 41px;
          color: #004a5d;
        }
      }
    }
    .blog-container {
      padding: 0 10.4166666667vw;
      margin-bottom: 100px;
    }
  }
}
</style>
