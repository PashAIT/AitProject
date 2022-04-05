<template>
  <div class="video row">
    <video controls>
      <source :src="'videos/' + videoData.video" type="video/mp4" />
    </video>
    <div class="info">
      <h3>{{ videoData.title }}</h3>
      <p>{{ videoData.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.video {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 87px 130px;
  @include afterNotebook {
    padding: 45px 55px;
  }
  @include noteBook {
    padding: 70px;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
  }
  @include tablet {
    padding: 20px;
  }
  video {
    border-radius: 20px;
    width: 490px;
    height: 325px;
    margin-right: 30px;
    background-color: black;
    @include afterNotebook {
      width: 470px;
      height: 305px;
    }
    @include noteBook {
      width: 380px;
      height: 253px;
      margin-right: 0;
      margin-bottom: 30px;
    }
    @include tablet {
      width: 300px;
      height: 195px;
      margin-bottom: 20px;
    }
    @include mobile {
      width: 250px;
      height: 180px;
    }
  }
  .info {
    @include noteBook {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    h3 {
      font-family: Nortar;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 80px;
      color: #004a5d;
      @include noteBook {
        font-size: 28px;
        margin-bottom: 30px;
      }
      @include tablet {
        font-size: 22px;
      }
      @include mobile {
        display: none;
      }
    }
    p {
      color: #0e243c;
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      width: 40vw;
      @include noteBook {
        margin: 0;
        width: 560px;
        text-align: center;
      }
      @include tablet {
        fon-size: 15px;
        width: 425px;
      }
      @include mobile {
        font-size: 12px;
        width: 250px;
      }
    }
  }
}
</style>
