<template>
  <div class="stage">
    <img :src="image" :alt="title" />
    <h4>{{ title }}</h4>
    <p>Տևողությունը՝ {{ duration }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    image: String,
    title: String,
    duration: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.stage {
  width: 18.75vw;
  height: 18vw;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-sizing: border-box;
  @include noteBook {
    width: 215px;
    height: 207px;
  }
  @include mobile {
    width: 130px;
    height: 130px;
  }
  cursor: pointer;
  img {
    width: 65%;
    height: 60%;
  }
  h4 {
    font-size: 1.1vw;
    line-height: 24px;
    font-weight: bold;
    color: #0e243c;
    font-family: MontserratBold;
    margin-bottom: 0.5vw;
    @include noteBook {
      font-size: 16px;
    }
    @include mobile {
      font-size: 10px;
      line-height: 10px;
      margin-bottom: 0vw;
    }
  }
  p {
    font-weight: bold;
    font-size: 0.9vw;
    line-height: 16px;
    color: #004a5d;
    font-family: Nortar;
    @include noteBook {
      font-size: 12px;
    }
    @include mobile {
      font-size: 7px;
      width: 47px;
      text-align: center;
      line-height: 1.2;
      margin-top: 4px;
    }
  }
}
</style>
