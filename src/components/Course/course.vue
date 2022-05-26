<template>
  <div
    class="course after-animated"
    id="course"
    ref="courseContainer"
    data-aos="fade-up"
    data-aos-duration="1800"
  >
    <h2 class="course-header">Դասընթացի փուլեր</h2>
    <div class="stage-container">
      <div
        class="course-stages"
        v-for="(stage, i) in sliderItems"
        :key="`stage${stage.id}`"
        :class="`course-stage${stage.id}`"
      >
        <Stage
          :image="`${host}/${stage.image}`"
          :subtitle="stage.subtitle"
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

  <q-dialog v-model="bar" persistent full-width class="gt-xs course-modal">
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
            v-for="(stage, idx) in modalSliderItems"
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
              <img :src="`${host}/${stage.image}`" alt="" />
            </div>
            <img
              :src="
                courseModalSmallLine
                  ? 'images/smallLineInCourseModal.png'
                  : 'images/Line.png'
              "
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
            v-for="item in modalSliderItems"
            :key="item + item.id"
            :name="item.id"
          >
            <div class="modal-info row items-center justify-center q-mr-xl">
              <img :src="`${host}/${item.image}`" alt="activeStep.img" />
              <div class="steps">
                <div class="modal-info-text">
                  <h3>{{ item.title }}</h3>
                  <h4>{{ item.subtitle }}</h4>
                  <p>{{ item.description }}</p>
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

  <q-dialog v-model="bar" persistent full-width class="lt-sm course-modal">
    <q-card class="course-modal-card">
      <img
        src="images/Esc.png"
        alt="Esc"
        v-close-popup
        class="cursor-pointer close"
      />
      <div class="course-modal-container">
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
            v-for="item in modalSliderItems"
            :key="item + item.id"
            :name="item.id"
          >
            <div class="modal-info row items-center justify-center q-mr-xl">
              <div class="steps-item-active">
                <img :src="`images/${item.image}`" alt="activeStep.img" />
              </div>
              <div class="steps">
                <div class="modal-info-text">
                  <h3>{{ item.title }}</h3>
                  <h4>{{ item.subtitle }}</h4>
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
</template>

<script>
import activeSlideMixin from "src/mixins/activeSlideMixin";
import Stage from "./stage.vue";
import Api from "src/api";
import { HOST } from "src/providers/constants";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      currentSlide: 1,
      sliderItems: [
        {
          id: 1,
          title: "HTML & CSS",
          subtitle: "1-ին փուլ",
          image: "HTMLCSS.png",
          // text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 2,
          title: "Javascript",
          subtitle: "2-րդ փուլ",
          image: "JS.png",
          // text: "Պահանջված Front-end մասնագետ դառնալու համար, պետք է տիրապետել JavaScriptի խորը գիտելիքների։ Այս փուլում կուսումնասիրվեն Խորացված JavaScript, OOP-ն JavaScript-ում, անսիխրոն ծրագրավորում, JavaScript-ում հիմնական տվյալների տիպերը, JavaScript-ի framework-ները։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 3,
          title: "Advanced JS",
          subtitle: "3-րդ փուլ",
          image: "AdvancedJS.png",
          // text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },

        {
          id: 4,
          title: "Front-End / React JS",
          subtitle: "4-րդ փուլ",
          image: "React.png",
          // text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 5,
          title: "Back-End / Node. JS",
          subtitle: "5-րդ փուլ",
          image: "NodeJS.png",
          // text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
      ],
      modalSliderItems: [
        {
          id: 1,
          title: "HTML & CSS",
          subtitle: "1-ին փուլ",
          image: "HTMLCSS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 2,
          title: "Javascript",
          subtitle: "2-րդ փուլ",
          image: "JS.png",
          text: "Պահանջված Front-end մասնագետ դառնալու համար, պետք է տիրապետել JavaScriptի խորը գիտելիքների։ Այս փուլում կուսումնասիրվեն Խորացված JavaScript, OOP-ն JavaScript-ում, անսիխրոն ծրագրավորում, JavaScript-ում հիմնական տվյալների տիպերը, JavaScript-ի framework-ները։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 3,
          title: "Advanced JS",
          subtitle: "3-րդ փուլ",
          image: "AdvancedJS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },

        {
          id: 4,
          title: "Front-End / React JS",
          subtitle: "4-րդ փուլ",
          image: "React.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
        {
          id: 5,
          title: "Back-End / Node. JS",
          subtitle: "5-րդ փուլ",
          image: "NodeJS.png",
          text: "Ուսանողը կծանոթանա համացանցի աշխատանքին և վեբ կայքերի ստեղծման սկզբունքներին, կսովորի HTML5, CSS3 վեբ դիզայնի տեխնոլոգիաները, որոնք հանդիսանում են հիմնարար միջոց web ծրագրավորման համար։ Ուսանողը կսովորի նաև էջի դիզայնի կազմակերպման flexbox և grid մոտեցումներին։Դասընթացի տևողությունը՝ 2 ամիս։ 30.000 ՀՀ դրամ՝ 1 ամսվա արժեքը։",
        },
      ],
      // sliderItems: [],
      // modalSliderItems: [],
      bar: false,
      activeIndex: this.currentSlide - 1,
      isActive: true,
      courseModalSmallLine: false,
      host: HOST,
    };
  },
  mounted() {
    // this.getCourses();
    AOS.init();
  },
  methods: {
    openModal(i) {
      if (this.modalSliderItems.length === 0) {
        // this.getCoursesDetailed();
      }
      this.smallLineChange();
      this.bar = true;
      this.activeIndex = i;
      this.currentSlide = this.modalSliderItems[i].id;
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
      if (this.activeIndex !== this.modalSliderItems.length - 1) {
        this.activeIndex++;
      } else {
        this.isActive = false;
      }
      this.$refs.carousel.next();
    },
    setActive(idx) {
      this.activeIndex = idx;
      this.currentSlide = this.modalSliderItems[idx].id;
    },
    smallLineChange() {
      if (window.screen.width < 1150) {
        this.courseModalSmallLine = true;
      } else {
        this.courseModalSmallLine = false;
      }
    },
    // async getCourses() {
    //   const rsp = await Api.Home.GetCourses();
    //   this.sliderItems = rsp.data.items;
    // },
    // async getCoursesDetailed() {
    //   const rsp = await Api.Home.GetCoursesDetailed();
    //   this.modalSliderItems = rsp.data.items;
    //   console.log(this.modalSliderItems);
    // },
  },
  computed: {
    activeStep() {
      return this.modalSliderItems[this.activeIndex];
    },
    prevDisabled() {
      return this.currentSlide - 1 === 0;
    },
    nextDisabled() {
      return this.currentSlide - 1 === this.modalSliderItems.length - 1;
    },
    isLastStep() {
      return this.activeIndex === this.modalSliderItems.length - 1;
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
    @include mobile {
      border-radius: 30px;
      possition: relative;
    }
    .close {
      position: absolute;
      width: 40px;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
    .modal-header {
      @include noteBook {
        padding: 14px 17px 10px 0;
      }
    }

    .course-modal-container {
      max-height: 880px;
      padding: 2vh 4vw 5vh 4vw;
      @include noteBook {
        padding: 1vw 4.5vw 5vh 1.5vw;
      }
      @include mobile {
        padding: 0 4vw 8vw 4vw;
      }
      .modal-info {
        color: #fff;
        @include noteBook {
          margin-right: 0;
        }
        @include tablet {
          flex-direction: column;
        }
        > img {
          width: 20vw;
          height: 18vw;
          @include tablet {
            width: 38vw;
            height: 30vw;
          }
        }
        .steps-item-active {
          img {
            @include mobile {
              width: 170px;
              margin-top: 20px;
            }
          }
        }
        &-text {
          @include tablet {
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            @include noteBook {
              font-size: 33px;
            }
            @include tablet {
              font-size: 25px;
              font-family: MontserratBold;
            }
            @include mobile {
              font-size: 20px;
              margin-bottom: -10px;
              margin-top: -20px;
            }
          }
          h4 {
            font-family: Nortar;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 3vh;
            @include noteBook {
              font-size: 25px;
            }
            @include tablet {
              font-size: 24px;
              margin-bottom: 20px;
            }
            @include mobile {
              font-size: 18px;
              margin-bottom: 0px;
            }
          }
          p {
            font-family: Nortar;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 140%;
            width: 48.1770833333vw;

            @include noteBook {
              font-size: 16px;
              overflow: auto;
              height: 180px;
              text-align: center;
              margin-bottom: 30px;
            }
            @include mobile {
              min-height: 180px;
              margin-bottom: 3vw;
              width: 65vw;
              font-size: 12px;
            }
          }
          ::-webkit-scrollbar {
            display: none !important;
          }
        }
      }
      .buttons {
        @include tablet {
          justify-content: center;
        }
        @include mobile {
          flex-direction: column-reverse;
        }
        .addCourse {
          @include button();
          padding: 2vh 2.60416666667vw;
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          margin-right: 2.08333333333vw;
          @include noteBook {
            padding: 27px 57px;
          }
          @include mobile {
            padding: 4vw 7vw;
            font-size: 13px;
          }
        }
        .prev-icon,
        .next-icon {
          width: 4.16666666667vw;
          height: 4.16666666667vw;
          transition: 1s;
          @include noteBook {
            width: 8.7vw;
            height: 8.7vw;
          }
          @include mobile {
            margin-bottom: 2vw;
            width: 11vw;
            height: 11vw;
          }
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
  @include tablet {
    margin-bottom: 5vh;
  }
  li {
    .lines {
      position: absolute;
      width: 6.25vw;
      @include noteBook {
        width: 4.25vw;
      }
    }
    .line1 {
      left: 12.5%;
      @include noteBook {
        left: 17%;
      }
    }
    .line2 {
      left: 35%;
      @include noteBook {
        left: 38.5%;
      }
    }
    .line3 {
      left: 58%;
      @include noteBook {
        left: 59.6%;
      }
    }
    .line4 {
      left: 81%;
    }
  }
  .step1 {
    left: 0%;
    @include noteBook {
      left: 2%;
    }
  }
  .step2 {
    left: 22%;
    @include noteBook {
      left: 24%;
    }
  }
  .step3 {
    left: 45.5%;
    @include afterNotebook {
      left: 45%;
    }
  }
  .step4 {
    left: 68%;
    @include noteBook {
      left: 66%;
    }
  }
  .step5 {
    left: 91%;
    @include noteBook {
      left: 88%;
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
  @include afterNotebook {
    width: 9vw;
    height: 9vw;
  }
  @include noteBook {
    width: 11vw;
    height: 11vw;
  }
  img {
    width: 6.25vw;
    height: 5vw;
    @include afterNotebook {
      width: 8.25vw;
      height: 6vw;
    }
    @include noteBook {
      width: 10.25vw;
      height: 8.2vw;
    }
  }
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
  @include afterNotebook {
    width: 10vw;
    height: 10vw;
  }
  @include noteBook {
    width: 12vw;
    height: 12vw;
  }
}
.after-animated {
  opacity: 0;
}

.animate-bounce {
  animation: q-bounce 2s infinite;
}

@keyframes q-bounce {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.before-animated {
  opacity: 1;
}
</style>
