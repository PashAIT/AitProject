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
    };
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
</style>
