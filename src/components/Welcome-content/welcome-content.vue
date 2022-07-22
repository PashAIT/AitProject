<template>
  <div class="welcome-content">
    <div class="welome-text">
      <h1>Ararat</h1>
      <h3>IT Center</h3>
      <p>IT հնարավորություններն արդեն Արարատում են.</p>
      <button @click="$router.push('/registration')">
        Գրանցվել դասընթացին
      </button>
    </div>
    <div class="man">
      <img src="images/Man.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";
.welcome-content {
  padding: 0 10.4166666667vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 194px;
  @include mobile {
    margin-bottom: 80px;
  }
  @include noteBook {
    flex-direction: column-reverse !important;
  }
  .welome-text {
    @include noteBook {
      align-items: center !important;
      display: flex;
      flex-direction: column;
    }
    h1 {
      letter-spacing: 0.02em;
      font-size: 8.33333333333vw;
      line-height: 12vw;
      font-family: MonserratAlternates;
      color: #004a5e;
      @include tablet() {
        font-size: 120px;
      }
      @include mobile() {
        font-size: 80px;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 4.16666666667vw;
      font-family: MontserratBold;
      color: #0e243c;
      padding-left: 8px;
      margin-top: -20px;
      margin-bottom: 5.55555555556vh;
      @include tablet() {
        font-size: 60px;
        margin: 20px 0;
      }
      @include mobile() {
        font-size: 40px;
      }
    }

    p {
      font-weight: normal;
      font-size: 1.25vw;
      line-height: 24px;
      padding-left: 8px;
      font-family: NorTar;
      margin-bottom: 5.55555555556vh;
      @include tablet() {
        font-size: 20px;
      }
      @include mobile() {
        font-size: 16px;
        text-align: center;
      }
    }
    button {
      @include button();
      padding: 25px 36px;
      border: none;
      font-family: NorTar;
      font-weight: bold;
      font-size: 15px;
    }
  }
  .man {
    width: 35vw;
    height: 35vw;
    border-radius: 500px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    @include tablet {
      width: 550px;
      height: 550px;
      margin-bottom: 20px;
    }
    @include mobile {
      width: 280px;
      height: 280px;
    }
    img {
      width: 24vw;
      height: 33vw;
      @include tablet {
        width: 360px;
        height: 490px;
      }
      @include mobile {
        width: 170px;
        height: 230px;
      }
    }
  }
  > img {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
</style>
