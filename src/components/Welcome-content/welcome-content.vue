<template>
  <div class="welcome-content">
    <div class="welome-text">
      <div>
        <h1>Ararat</h1>
        <h2>IT Center</h2>
        <p>IT հնարավորություններն արդեն Արարատում են.</p>
        <button>Գրանցվել դասընթացին</button>
      </div>
    </div>
    <div class="man">
      <img src="images/Man.png" alt="" />
    </div>
    <img src="images/Ellipse2.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../css/mixins.scss';
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
    h2 {
      font-weight: bold;
      font-size: 4.16666666667vw;
      // line-height: 98px;
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
</style>
