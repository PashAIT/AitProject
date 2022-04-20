<template>
  <div class="course" id="course" ref="course">
    <h2 class="course-header">Դասընթացի փուլեր</h2>
    <div class="stage-container">
      <div
        class="course-stages"
        v-for="(stage, i) in sliderItems"
        :key="`stage${stage.id}`"
        :class="`course-stage${stage.id}`"
      >
        <Stage
          :image="stage.image"
          :subTitle="stage.subTitle"
          :title="stage.title"
          class="stage"
          :class="`stage${stage.id}`"
          @click="openModal(i)"
        >
          <div class="gt-xs">
            <img
              src="images/path.png"
              alt=""
              :class="`stage${stage.id}path`"
              class="path"
            />
          </div>
          <div class="lt-sm">
            <img
              src="images/path-small.png"
              alt=""
              :class="`stage${stage.id}path`"
              class="path"
            />
          </div>
        </Stage>
      </div>
    </div>
  </div>
  <div class="">
    <q-dialog v-model="bar" persistent full-width class="course-modal">
      <q-card class="course-modal-card">
        <div class="modal-header row justify-end items-center q-pt-lg q-pr-xl">
          <img
            src="images/Esc.png"
            alt="Esc"
            v-close-popup
            class="cursor-pointer"
          />
        </div>
        <div class="course-modal-container">
          <ul class="steps-list">
            <li
              v-for="(stage, idx) in sliderItems"
              :key="stage.title"
              class="row items-center"
              :class="`step${stage.id}`"
            >
              <div
                class="steps-item row items-center justify-center"
                :class="{
                  active: idx === activeIndex,
                  done: idx < activeIndex,
                  [`step${stage.id}`]: true,
                }"
                @click="setActive(idx)"
              >
                <img :src="`images/${stage.image}`" alt="" />
              </div>
              <img
                src="images/Line.png"
                alt="line"
                :class="'line' + stage.id"
                class="lines"
              />
            </li>
          </ul>
          <q-carousel
            v-model="currentSlide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            height="max-content"
            ref="carousel"
          >
            <q-carousel-slide
              v-for="item in activeSlides"
              :key="item + item.id"
              :name="item.id"
            >
              <div class="modal-info row items-center justify-center q-mr-xl">
                <img :src="`images/${item.image}`" alt="activeStep.img" />
                <div class="steps">
                  <div class="modal-info-text">
                    <h3>{{ item.title }}</h3>
                    <h4>{{ item.subTitle }}</h4>
                    <p>{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <div class="buttons row justify-end items-center">
            <button class="addCourse" @click="$router.push('/registration')">
              Գրանցվել դասընթացին
            </button>
            <div class="row justify-center items-center">
              <img
                src="images/monthLeft.png"
                v-if="!prevDisabled"
                @click="prev"
                alt="left"
                class="cursor-pointer prev-icon q-mr-md"
              />
              <img
                @click="nextOfFinish"
                src="images/monthRight.png"
                alt="right"
                class="cursor-pointer next-icon"
                v-if="!nextDisabled"
              />
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import activeSlideMixin from "src/mixins/activeSlideMixin";
import Stage from "./stage.vue";
export default {
  data() {
    return {
      currentSlide: 1,
      sliderItems: [
        {
          id: 1,
          title: "HTML & CSS",
          subTitle: "1-ին փուլ",
          image: "HTMLCSS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 2,
          title: "Javascript",
          subTitle: "2-րդ փուլ",
          image: "JS.png",
          text: "Պահանջված Front-end մասնագետ դառնալու համար, պետք է տիրապետել JavaScriptի խորը գիտելիքների։ Այս փուլում կուսումնասիրվեն Խորացված JavaScript, OOP-ն JavaScript-ում, անսիխրոն ծրագրավորում, JavaScript-ում հիմնական տվյալների տիպերը, JavaScript-ի framework-ները։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 3,
          title: "Advanced JS",
          subTitle: "3-րդ փուլ",
          image: "AdvancedJS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },

        {
          id: 4,
          title: "Front-End / React JS",
          subTitle: "4-րդ փուլ",
          image: "React.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 5,
          title: "Back-End / Node. JS",
          subTitle: "5-րդ փուլ",
          image: "NodeJS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
      ],
      bar: false,
      activeIndex: this.currentSlide - 1,
      isActive: true,
    };
  },
  methods: {
    openModal(i) {
      this.bar = true;
      this.activeIndex = i;
      this.currentSlide = this.sliderItems[i].id;
    },
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
      }
      this.$refs.carousel.previous();
    },
    reset() {
      this.activeIndex = 0;
      this.isActive = true;
    },
    nextOfFinish() {
      if (this.activeIndex !== this.sliderItems.length - 1) {
        this.activeIndex++;
      } else {
        this.isActive = false;
      }
      this.$refs.carousel.next();
    },
    setActive(idx) {
      this.activeIndex = idx;
      this.currentSlide = this.sliderItems[idx].id;
    },
  },
  computed: {
    activeStep() {
      return this.sliderItems[this.activeIndex];
    },
    prevDisabled() {
      return this.activeIndex === 0;
    },
    nextDisabled() {
      return this.activeIndex === this.sliderItems.length - 1;
    },
    isLastStep() {
      return this.activeIndex === this.sliderItems.length - 1;
    },
  },
  mixins: [activeSlideMixin],
  components: { Stage },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.course {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 139px;

  .stage-container {
    height: 43vw;
    display: flex;
    @include noteBook {
      width: 450px;
      height: max-content;
      flex-direction: column;
    }
    @include mobile {
      width: 290px;
    }
    .course-stages {
      height: 100%;
      display: flex;
      .stage {
        align-items: center;
        position: relative;
        @include noteBook {
          width: 200px;
          height: 200px;
          margin: 0px;
        }
        @include mobile {
          width: 150px;
          height: 150px;
        }
        img {
          position: absolute;
          width: 28%;
          height: 10vw;
          @include noteBook {
            width: 80px;
            height: 130px;
          }
          @include mobile {
            width: 64px;
            height: 111px;
          }
        }
      }
    }
    .course-stage2 {
      @include noteBook {
        align-self: flex-end !important;
      }
    }
    .course-stage4 {
      @include noteBook {
        align-self: flex-end !important;
      }
    }
    .stage2path,
    .stage4path {
      top: -60%;
      left: 50%;
      transform: rotateX(170deg);
      @include noteBook {
        top: 100% !important;
        left: 0% !important;
        transform: rotateX(0deg) rotateZ(272deg) !important;
      }
      @include mobile {
        top: 107% !important;
        left: 20% !important;
        width: 64px !important;
        height: 64px !important;
      }
    }
    .stage3path,
    .stage1path {
      bottom: -60%;
      left: 52%;
      @include noteBook {
        left: 65%;
        transform: rotateY(180deg) rotateZ(265deg);
      }
      @include mobile {
        left: 27% !important;
        transform: rotateY(121deg) rotateZ(268deg);
      }
    }
    // .stage4path {
    //   top: -60%;
    //   left: 40%;
    //   transform: rotateX(180deg);
    //   @include noteBook {
    //     top: 100% !important;
    //     left: 0% !important;
    //     transform: rotateX(0deg) rotateZ(268deg) !important;
    //   }
    // }
    .stage5path {
      display: none;
    }
    .stage1 {
      margin-right: -60px;
    }
    .stage2 {
      align-self: flex-end;
      margin-right: -65px;
    }
    .stage4 {
      align-self: flex-end;
      margin-left: -65px;
    }
    .stage5 {
      margin-left: -70px;
    }
  }
}
.course-modal {
  &-card {
    border-radius: 50px;
    background: none;
    overflow: hidden;
    background: rgba(14, 36, 60, 0.8);
    .course-modal-container {
      max-height: 880px;
      padding: 2vh 4vw 5vh 4vw;
      .modal-info {
        color: #fff;
        > img {
          width: 20vw;
          height: 18vw;
        }
        &-text {
          h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 1.5625;
          }
          h4 {
            font-family: Nortar;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 3vh;
          }
          p {
            font-family: Nortar;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 140%;
            width: 48.1770833333vw;
          }
        }
      }
      .buttons {
        .addCourse {
          @include button();
          padding: 2vh 2.60416666667vw;
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          margin-right: 2.08333333333vw;
        }
        .prev-icon,
        .next-icon {
          width: 4.16666666667vw;
          height: 4.16666666667vw;
          transition: 1s;
        }
      }
    }
  }
}

.steps-list {
  height: 8vw;
  list-style: none;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 9vh;
  position: relative;
  li {
    .lines {
      position: absolute;
      width: 6.25vw;
    }
    .line1 {
      left: 12.5%;
    }
    .line2 {
      left: 35%;
    }
    .line3 {
      left: 58%;
    }
    .line4 {
      left: 81%;
    }
  }

  .line5 {
    display: none;
  }
}

.steps-item {
  width: 8vw;
  height: 8vw;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  position: absolute;

  img {
    width: 6.25vw;
    height: 5vw;
  }
}
.step1 {
  left: 0%;
}
.step2 {
  left: 22%;
}
.step3 {
  left: 45.5%;
}
.step4 {
  left: 68%;
}
.step5 {
  left: 91%;
}

.steps-item.active,
.steps-item.done {
  background: rgba(255, 255, 255, 0.9);
}

.steps-item.active {
  width: 9vw;
  height: 9vw;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
  transition: 0.8s;
}
</style>
