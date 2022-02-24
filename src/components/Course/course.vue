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
              class="steps-item row items-center justify-center"
              v-for="(stage, idx) in courseStages"
              :key="stage.title"
              :class="{
                active: idx === activeIndex,
                done: idx < activeIndex,
              }"
              @click="setActive(idx)"
            >
              <img :src="`images/${stage.image}`" alt="" />
            </li>
          </ul>
          <div class="modal-info row items-center justify-center">
            <img :src="`images/${activeStep.image}`" alt="activeStep.img" />
            <div class="steps">
              <div class="modal-info-text">
                <h3>{{ activeStep.title }}</h3>
                <h4>{{ activeStep.subTitle }}</h4>
                <p>{{ activeStep.text }}</p>
              </div>
            </div>
          </div>
          <div class="buttons">
            <div v-if="isActive">
              <button class="btn" :disabled="prevDisabled" @click="prev">
                Назад
              </button>
              <button class="btn primary" @click="nextOfFinish">
                {{ isLastStep ? "Закончить" : "Вперед" }}
              </button>
            </div>
            <div v-else>
              <button class="btn" @click="reset">Начать заного</button>
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
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          id: 2,
          title: "Javascript",
          subTitle: "2-րդ փուլ",
          image: "JS.png",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          id: 3,
          title: "Advanced JS",
          subTitle: "3-րդ փուլ",
          image: "AdvancedJS.png",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },

        {
          id: 4,
          title: "Front-End / React JS",
          subTitle: "4-րդ փուլ",
          image: "React.png",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          id: 5,
          title: "Back-End / Node. JS",
          subTitle: "5-րդ փուլ",
          image: "NodeJS.png",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
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
      if (this.activeIndex !== this.steps.length - 1) {
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
    isLastStep() {
      return this.activeIndex === this.courseStages.length - 1;
    },
  },
  components: { Stage },
};
</script>

<style lang="scss" scoped>
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
    .course-modal-container {
      padding: 50px 90px 60px 90px;
      background: rgba(14, 36, 60, 0.8) !important;
    }
  }
}
.primary {
  color: #42b983;
}

.danger {
  color: #e53935;
}

.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  background: #eee !important;
  border: #ddd !important;
  color: #aaa !important;
  cursor: not-allowed;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}

.btn.danger {
  background: #e53935;
  color: #fff;
  border-color: #e53935;
}

.steps {
  position: relative;
}

.steps-list {
  list-style: none;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 110px;
}

.steps-item {
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;

  img {
    width: 120px;
    height: 94px;
  }
}

.steps-content {
  margin-bottom: 1rem;
}

.steps-item.active,
.steps-item.done {
  background: rgba(255, 255, 255, 0.9);
}

.steps-item.active {
  width: 180px;
  height: 180px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
}
</style>
