<template>
  <div
    class="course"
    id="course"
    ref="courseContainer"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <h2 class="course-header">Դասընթացներ</h2>
    <div class="stage-container row">
      <div
        class="course-stages col-lg-2 col-md-2 col-sm-6 col-xs-6"
        v-for="(stage, i) in sliderItems"
        :key="`stage${stage.id}`"
        :class="`course-stage${stage.id}`"
      >
        <Stage
          :image="`${host}/${stage.image}`"
          :duration="stage.duration"
          :title="stage.title"
          class="stage"
          :class="`stage${stage.id}`"
          @click="openModal(i, stage.id)"
        >
        </Stage>
      </div>
    </div>
  </div>

  <q-dialog
    v-model="webCourseModal"
    persistent
    full-width
    class="gt-xs course-modal"
  >
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
              :src="'images/Line.png'"
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
          <button
            class="addCourse"
            @click="$router.push(`/registration?${item.id}`)"
          >
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

  <q-dialog
    v-model="webCourseModal"
    persistent
    full-width
    class="lt-sm course-modal"
  >
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
                <img :src="`${host}/${item.image}`" alt="activeStep.img" />
              </div>
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
          <button
            class="addCourse"
            @click="$router.push(`/registration?${item.id}`)"
          >
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
  <q-dialog
    v-model="otherCourseModal"
    persistent
    full-width
    class="course-modal"
  >
    <q-card class="course-modal-card">
      <div class="modal-header row justify-end items-center q-pt-lg q-pr-xl">
        <img
          src="images/Esc.png"
          alt="Esc"
          class="cursor-pointer"
          v-close-popup
        />
      </div>
      <div class="course-modal-container">
        <div class="modal-info row items-center justify-center q-mr-xl">
          <img
            :src="`${host}/${modalSliderItems.image}`"
            alt="activeStep.img"
          />
          <div class="steps">
            <div class="modal-info-text">
              <h3>{{ modalSliderItems.title }}</h3>
              <h4>{{ modalSliderItems.subtitle }}</h4>
              <p>{{ modalSliderItems.description }}</p>
            </div>
          </div>
          <div class="buttons row justify-end items-end full-width">
            <button
              class="addCourse"
              @click="$router.push(`/registration?${modalSliderItems.id}`)"
            >
              Գրանցվել դասընթացին
            </button>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import Stage from "./stage.vue";
import Api from "src/api";
import { HOST } from "src/providers/constants";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      currentSlide: 1,
      sliderItems: [],
      modalSliderItems: [],
      webCourseModal: false,
      activeIndex: 0,
      isActive: true,
      host: HOST,
      otherCourseModal: false,
    };
  },
  watch: {
    currentSlide() {
      this.activeIndex = this.currentSlide - 1;
    },
  },
  mounted() {
    this.getCourses();
    AOS.init();
  },
  methods: {
    openModal(i, id) {
      this.getCoursesDetailed(id);

      if (id === 1) {
        this.webCourseModal = true;
      } else {
        this.otherCourseModal = true;
      }
    },
    prev() {
      this.activeIndex--;
      this.$refs.carousel.previous();
    },
    nextOfFinish() {
      this.activeIndex++;
      this.$refs.carousel.next();
    },
    setActive(idx) {
      this.activeIndex = idx;
      this.currentSlide = idx + 1;
    },
    async getCourses() {
      const rsp = await Api.Home.GetCourses();
      this.sliderItems = rsp.data.items;
    },
    async getCoursesDetailed(id) {
      this.$q.loading.show();
      const rsp = await Api.Home.GetCoursesDetailed(id);
      this.$q.loading.hide();
      if (id !== 1) {
        this.modalSliderItems = rsp.data[0];
      } else {
        this.modalSliderItems = rsp.data.items;
      }
    },
  },
  computed: {
    activeStep() {
      return this.modalSliderItems[this.activeIndex];
    },
    prevDisabled() {
      return this.activeIndex === 0;
    },
    nextDisabled() {
      return this.activeIndex === this.modalSliderItems.length - 1;
    },
    isLastStep() {
      return this.activeIndex === this.modalSliderItems.length - 1;
    },
  },
  components: { Stage },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.course {
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 160px;
  @include mobile {
    margin-bottom: 0px;
  }
}
.stage-container {
  height: 40vw;
  margin-left: 5.20833333333vw;
  @include noteBook {
    height: 45vw;
  }
  @include forCourseStage {
    height: 1235px;
  }
  @include mobile {
    margin: 0;
    height: 770px;
  }
  .course-stage2,
  .course-stage4 {
    align-self: flex-end;
  }
  .course-stage1,
  .course-stage3,
  .course-stage5 {
    @include forCourseStage {
      display: flex;
      justify-content: flex-end;
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
</style>
