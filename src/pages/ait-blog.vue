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
          control-color="primary"
          control-text-color="black"
          ref="carousel"
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
          <template v-slot:control>
            <q-carousel-control class="q-gutter-xs controls">
              <q-btn
                push
                round
                dense
                icon="img:images/monthLeft.png"
                class="arrows arrow1"
                @click="$refs.carousel.previous()"
              ></q-btn>
              <q-btn
                push
                round
                dense
                icon="img:images/monthRight.png"
                @click="$refs.carousel.next()"
                class="arrows arrow2"
              ></q-btn>
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
      <div
        class="row items-center justify-center blog-container q-gutter-x-lg q-gutter-y-xl"
      >
        <blog-item
          v-for="blog in activeMonth.blogs"
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
          type: "1",
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
        },
        {
          id: 2,
          name: "Փետրվար",
          type: "2",
          blogs: [
            {
              id: 1,
              image: "ilonmask.png",
              name: "Արմեն Ասատրյան",
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
        },
        {
          id: 3,
          name: "Մարտ",
          type: "3",
          blogs: [
            {
              id: 1,
              image: "ilonmask.png",
              name: "Karen Aramyan",
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
        },
        {
          id: 4,
          name: "Ապրիլ",
          type: "4",
          blogs: [
            {
              id: 1,
              image: "ilonmask.png",
              name: "Serob Grigoryan",
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
        },
        {
          id: 5,
          name: "Մայիս",
          type: "5",
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
        },
        {
          id: 6,
          name: "Հունիս",
          type: "6",
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
        },
        {
          id: 7,
          name: "Հուլիս",
          type: "7",
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
        },
        {
          id: 8,
          name: "Օգոստոս",
          type: "8",
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
        },
        {
          id: 9,
          name: "Սեպտեմբեր",
          type: "9",
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
        },
        {
          id: 10,
          name: "Հոկտեբեր",
          type: "10",
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
        },
        {
          id: 11,
          name: "Նոյեմբեր",
          type: "11",
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
        },
        {
          id: 12,
          name: "Դեկտեմբեր",
          type: "12",
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
        },
      ],
      slide: "2",
    };
  },
  computed: {
    activeMonth() {
      return this.months[+this.slide - 1];
    },
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
        width: 600px;
        background: #f8f8f8;
        height: 100px !important;

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
      padding: 0 10vw;
      margin-bottom: 100px;
    }
    .controls {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 91%;
      top: 0% !important;
      left: 0% !important;
      .arrows::before {
        box-shadow: 0 0 0;
      }
      .arrows::before {
        border-bottom: none;
      }
      .arrows {
        font-size: 2.2em;
      }
    }
  }
}
</style>
