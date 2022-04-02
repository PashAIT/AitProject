<template>
  <div class="path-item items-center row">
    <span class="number">0{{ id }}</span>
    <div class="path-text">
      <h3>{{ title }}</h3>
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    info: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.path-item {
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  z-index: 1;
  @include noteBook {
    padding: 18px;
  }
  @include mobile {
    border-radius: 30px;
  }
  .number {
    // margin-right: 40px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 120px;
    line-height: 146px;
    color: #004a5d;
    @include noteBook {
      width: 114px;
      height: 110px;
      font-size: 90px;
      margin-right: 10px;
      font-family: MontserratBold;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    @include mobile {
      width: 102px;
      height: 98px;
      font-size: 80px;
    }
  }
  .path-text {
    color: #0e243c;
    font-family: Nortar;
    h3 {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      @include noteBook {
        font-size: 24px;
        font-family: NorTarBold;
      }
      @include mobile {
        font-size: 20px;
        margin-bottom: 5px;
      }
    }
    p {
      max-width: 350px;
      font-size: 14px;
      line-height: 140%;
      @include noteBook {
        width: 140px;
        font-size: 10px;
        margin: 0;
      }
    }
  }
}
</style>
