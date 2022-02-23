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
  <div class="q-pa-xl q-gutter-sm">
    <q-dialog v-model="bar" persistent full-width>
      <q-card>
        <q-bar>
          <q-space></q-space>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="card">
            <ul class="steps-list">
              <li
                class="steps-item"
                v-for="(step, idx) in steps"
                :key="step.title"
                :class="{
                  active: idx === activeIndex,
                  done: idx < activeIndex,
                }"
              >
                <span @click="setActive(idx)">{{ idx + 1 }}</span>
                {{ step.title }}
              </li>
            </ul>
            <h1>План по изучению Vue.js</h1>

            <div class="steps">
              <div class="steps-content">
                {{ activeStep.text }}
              </div>

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
        </q-card-section>
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
        },
        {
          id: 2,
          title: "Javascript",
          subTitle: "2-րդ փուլ",
          image: "JS.png",
        },
        {
          id: 3,
          title: "Advanced JS",
          subTitle: "3-րդ փուլ",
          image: "AdvancedJS.png",
        },

        {
          id: 4,
          title: "Front-End / React JS",
          subTitle: "4-րդ փուլ",
          image: "React.png",
        },
        {
          id: 5,
          title: "Back-End / Node. JS",
          subTitle: "5-րդ փուլ",
          image: "NodeJS.png",
        },
      ],
      bar: false,
      activeIndex: 0,
      isActive: true,
      steps: [
        {
          title: "Основы",
          text: "В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.",
        },
        {
          title: "Компоненты",
          text: "Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.",
        },
        {
          title: "Роутер",
          text: "В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.",
        },
        {
          title: "Vuex",
          text: "В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.",
        },
        {
          title: "Composition",
          text: "Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.",
        },
      ],
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
      return this.steps[this.activeIndex];
    },
    prevDisabled() {
      return this.activeIndex === 0;
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1;
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.courseModal {
  width: 800px;
}
body {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  background: #2c3e50;
}

hr {
  margin: 1rem 0;
}

[v-cloak] {
  display: none;
}

strong,
.bold {
  font-weight: 500;
}

ol,
p,
ul {
  line-height: 1.7;
}

a {
  color: #3eaf7c;
  font-weight: 500;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.45;
}

h1 {
  font-size: 2.2rem;
  font-weight: 600;
}

h2 {
  font-size: 1.65rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

h3 {
  font-size: 1.35rem;
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

.container {
  margin: 0 auto;
  max-width: 1000px;
}

.pt-5 {
  padding-top: 5rem;
}

.form-control {
  position: relative;
  margin-bottom: 0.5rem;
}

.form-control input {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
}

.form-control label {
  display: block;
  margin: 0 0 0.3rem 0.3rem;
  font-weight: 500;
}

.form-control input:active,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}

.card {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}

.card.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
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
}

.steps-item span {
  cursor: pointer;
  border-radius: 50%;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  background: #cccccc;
}

.steps-content {
  margin-bottom: 1rem;
}

.steps-item.active span,
.steps-item.done span {
  background: #42b983;
}

.steps-item.active span {
  font-weight: bold;
  color: #ffffff;
}
</style>
