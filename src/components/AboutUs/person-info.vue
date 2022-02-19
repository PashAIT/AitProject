<template>
  <div class="person-info column items-center">
    <div
      alt="person"
      class="person-image"
      :style="{ 'background-image': `url('images/${image}')` }"
    ></div>
    <h4>{{ name }}</h4>
    <h5>{{ speciality }}</h5>
    <div class="icons row">
      <a :href="`https://www.facebook.com/${fbLink}`" target="blank"
        ><img src="images/facebook.png" alt="facebook"
      /></a>
      <a :href="`https://www.facebook.com/${inLink}`"
        ><img src="images/linkedIn.png" alt="linkedin"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    speciality: String,
    fbLink: String,
    inLink: String,
  },
};
</script>

<style lang="scss" scoped>
.person-info {
  width: 32.2916666667vw;
  max-width: 620px;
  min-width: 500px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  padding: 60px 0 30px 0;
  > .person-image {
    width: 280px;
    height: 280px;
    margin-bottom: 30px;
    border-radius: 100%;
    background-size: cover;
    background-position: top right;
  }
  h4 {
    color: #0e243c;
    font-family: Nortar;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  h5 {
    margin-bottom: 20px;
    color: #004a5d;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
  .icons {
    > :first-child {
      margin-right: 20px;
    }
  }
}
</style>
