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
  .welome-text {
    h1 {
      letter-spacing: 0.02em;
      font-size: 8.33333333333vw;
      line-height: 12vw;
      font-family: MonserratAlternates;
      color: #004a5e;
    }
    h3 {
      font-weight: bold;
      font-size: 4.16666666667vw;
      font-family: Montserrat;
      color: #0e243c;
      padding-left: 8px;
      margin-top: -20px;
      margin-bottom: 5.55555555556vh;
    }

    p {
      font-weight: normal;
      font-size: 1.25vw;
      line-height: 24px;
      padding-left: 8px;
      font-family: NorTar;
      margin-bottom: 5.55555555556vh;
    }
    button {
      @include button();
      padding: 27px 50px;
      border: none;
      font-family: NorTar;
      font-weight: bold;
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
    img {
      width: 24vw;
      height: 33vw;
    }
  }
  > img {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
@media screen and (max-width: 1150px) {
  .welcome-content {
    flex-direction: column-reverse !important;
    .welome-text {
      align-items: center !important;
      display: flex;
      flex-direction: column;
      h1 {
        letter-spacing: 0.02em;
        font-size: 12vw;
        line-height: 12vw;
        font-family: MonserratAlternates;
        color: #004a5e;
      }
      h3 {
        font-size: 6vw !important;
        font-family: MontserratBold !important;
        margin-top: 5px !important;
        margin-bottom: 2vh;
      }

      p {
        font-size: 2vw;
        margin-bottom: 3.3vh;
      }
      button {
        padding: 24px 43px;
      }
    }
    .man {
      width: 49vw;
      height: 49vw;
      img {
        width: 70%;
        height: 42vw;
      }
    }
  }
}
</style>
