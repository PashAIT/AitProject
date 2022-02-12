<template>
  <div class="path-item">
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
.path-item {
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  .number {
    margin-right: 40px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 120px;
    line-height: 146px;
    color: #004a5d;
  }
  .path-text {
    color: #0e243c;
    font-family: Nortar;
    h3 {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }
    p {
      max-width: 350px;
      font-size: 14px;
      line-height: 140%;
    }
  }
}
</style>