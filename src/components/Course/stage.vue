<template>
  <div class="stage">
    <img :src="'images/' + image" :alt="title" />
    <h4>{{ title }}</h4>
    <p>{{ subTitle }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    subTitle: String,
  },
};
</script>

<style lang="scss" scoped>
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
  }
  p {
    font-weight: bold;
    font-size: 0.9vw;
    line-height: 16px;
    color: #004a5d;
    font-family: Nortar;
  }
}
@media screen and (max-width: 1150px) {
  .stage {
    h4 {
      font-size: 16px !important;
    }
    p {
      font-size: 12px !important;
    }
  }
}
</style>
