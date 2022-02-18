<template>
  <div class="video row justify-between items-center">
    <video controls>
      <source :src="'videos/' + video" type="video/mp4" />
    </video>
    <div class="info">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: String,
    title: String,
    text: String,
    backgroundImg: String,
  },
};
</script>

<style lang="scss" scoped>
.video {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 4.53125vw 6.77083333333vw;
  video {
    border-radius: 20px;
    width: 25vw;
    height: 16vw;
    margin-right: 30px;
    background-color: black;
  }
  .info {
    h3 {
      font-family: Nortar;
      font-style: normal;
      font-weight: bold;
      font-size: 1.8vw;
      margin-bottom: 3vw;
      color: #004a5d;
    }
    p {
      color: #0e243c;
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      width: 39.0625vw;
    }
  }
}
</style>
