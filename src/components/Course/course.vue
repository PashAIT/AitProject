<template>
  <div class="course" id="course">
    <h2 class="course-header">Դասընթացի փուլեր</h2>
    <div class="stage-container">
      <div
        class="course-stages"
        v-for="stage in courseStages"
        :key="`stage${stage.id}`"
      >
        <Stage
          :image="stage.image"
          :subTitle="stage.subTitle"
          :title="stage.title"
          class="stage"
          :class="`stage${stage.id}`"
          @click="bar = true"
        >
          <img
            src="images/path.png"
            alt=""
            :class="`stage${stage.id}path`"
            class="path"
        /></Stage>
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
              v-for="(stage, idx) in courseStages"
              :key="stage.title"
              class="row items-center"
            >
              <div
                class="steps-item row items-center justify-center"
                :class="{
                  active: idx === activeIndex,
                  done: idx < activeIndex,
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
          <div class="modal-info row items-center justify-center q-mr-xl">
            <img :src="`images/${activeStep.image}`" alt="activeStep.img" />
            <div class="steps">
              <div class="modal-info-text">
                <h3>{{ activeStep.title }}</h3>
                <h4>{{ activeStep.subTitle }}</h4>
                <p>{{ activeStep.text }}</p>
              </div>
            </div>
          </div>
          <div class="buttons row justify-end items-center">
            <button class="addCourse">Գրանցվել դասընթացին</button>
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
import Stage from "./stage.vue";
export default {
  data() {
    return {
      courseStages: [
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
      activeIndex: 0,
      isActive: true,
    };
  },
  methods: {
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--;
      }
    },
    reset() {
      this.activeIndex = 0;
      this.isActive = true;
    },
    nextOfFinish() {
      if (this.activeIndex !== this.courseStages.length - 1) {
        this.activeIndex++;
      } else {
        this.isActive = false;
      }
    },
    setActive(idx) {
      this.activeIndex = idx;
    },
  },
  computed: {
    activeStep() {
      return this.courseStages[this.activeIndex];
    },
    prevDisabled() {
      return this.activeIndex === 0;
    },
    nextDisabled() {
      return this.activeIndex === this.courseStages.length - 1;
    },
    isLastStep() {
      return this.activeIndex === this.courseStages.length - 1;
    },
  },
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
    .course-stages {
      height: 100%;
      display: flex;
      .stage {
        position: relative;
        img {
          position: absolute;
          width: 28%;
          height: 10vw;
        }
      }
    }
    .stage1path {
      bottom: -60%;
      left: 52%;
    }
    .stage2path {
      top: -60%;
      left: 50%;
      transform: rotateX(170deg);
    }
    .stage3path {
      bottom: -60%;
      left: 43%;
    }
    .stage4path {
      top: -60%;
      left: 40%;
      transform: rotateX(180deg);
    }
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
      margin-left: -90px;
    }
  }
}
.course-modal {
  .modal-header {
    background: rgba(14, 36, 60, 0.8) !important;
  }
  &-card {
    border-radius: 50px;
    background: none;
    overflow: hidden;
    .course-modal-container {
      max-height: 880px;
      padding: 4vh 4vw 5vh 4vw;
      background: rgba(14, 36, 60, 0.8) !important;
      .modal-info {
        color: #fff;
        margin-bottom: 5vh;
        > img {
          width: 20.8vw;
          height: 18vw;
        }
        &-text {
          h3 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
          }
          h4 {
            font-family: Nortar;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 30px;
            margin-bottom: 40px;
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
          padding: 2.5vh 2.60416666667vw;
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          margin-right: 40px;
        }
        .prev-icon,
        .next-icon {
          width: 80px;
          height: 80px;
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
  margin-bottom: 9.25925925926vh;
  li {
    position: relative;
    .lines {
      position: absolute;
      right: -93%;
      width: 6.25vw;
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

  img {
    width: 6.25vw;
    height: 5vw;
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
}
</style>
