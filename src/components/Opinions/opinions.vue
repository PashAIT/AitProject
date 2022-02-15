<template>
  <div class="opinions">
    <h2>Կարծիքներ</h2>
    <div class="opinion-container">
      <img src="images/LeftButton.png" />
      <one-opinion
        v-for="opinion in opinions"
        :key="opinion.id"
        :info="opinion.info"
        :name="opinion.name"
        :speciality="opinion.speciality"
      />
      <img src="images/RightButton.png" />
    </div>
  </div>
</template>

<script>
import oneOpinion from "./oneOpinion.vue";
export default {
  components: { oneOpinion },
  data() {
    return {
      opinions: [
        {
          id: 1,
          speciality: "CEO Aranea",
          name: "Արման Սարգսյան",
          info: "Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական:",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.opinions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 100px;
  h2 {
    margin-bottom: 100px;
  }
  .opinion-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
