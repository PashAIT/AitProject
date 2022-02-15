<template>
  <div class="path">
    <h2>Ինչ կտա ձեզ AIT-ն</h2>
    <div class="path-item-container">
      <div class="paths">
        <path-item
          v-for="item in pathItems"
          :key="`item${item.id}`"
          :id="item.id"
          :info="item.info"
          :title="item.title"
          class="path-items"
          :class="`path${item.id}`"
        />
      </div>
      <img src="images/globus.png" alt="globus" />
    </div>
  </div>
</template>

<script>
import pathItem from "./path-item.vue";
export default {
  components: { pathItem },
  data() {
    return {
      pathItems: [
        {
          id: 1,
          title: "Կրթություն",
          info: "Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ:",
        },
        {
          id: 2,
          title: "Պրակտիկա",
          info: "Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։",
        },
        {
          id: 3,
          title: "Աշխատանք",
          info: "Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.path {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 125px;
  h2 {
    margin-bottom: 64px;
  }
  .path-item-container {
    display: flex;
    align-items: center;

    .paths {
      width: 39.1vw;
      display: flex;
      flex-direction: column;
      margin-right: 0;
      .path-items {
        margin-top: 60px;
      }
      :first-child {
        margin-top: 0;
      }
      .path1 {
        align-self: flex-start;
      }
      .path2 {
        align-self: flex-end;
      }
      .path3 {
        align-self: flex-start;
      }
    }
    > img {
      width: 39vw;
      height: 39vw;
    }
  }
}
</style>
