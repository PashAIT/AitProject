<template>
  <div class="person-info column items-center">
    <div
      alt="person"
      class="person-image"
      :style="{ 'background-image': `url('${image}')` }"
    ></div>
    <h4>{{ name }}</h4>
    <h5>{{ speciality }}</h5>
    <div class="icons row">
      <a :href="`https://www.facebook.com/${fbLink}`" target="blank"
        ><img src="images/facebook.png" alt="facebook"
      /></a>
      <a :href="`https://www.linkedin.com/in/${inLink}`" target="blank"
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
@import "../../css/mixins.scss";

.person-info {
  width: 500px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  padding: 60px 30px;
  @include noteBook {
    width: 380px;
    border-radius: 30px;
    padding: 40px 50px;
  }
  @include mobile {
    width: 280px;
    padding: 25px 29px;
  }
  > .person-image {
    width: 280px;
    height: 280px;
    margin-bottom: 30px;
    border-radius: 100%;
    background-size: cover;
    background-position: top right;
    @include noteBook {
      width: 240px;
      height: 240px;
      margin-bottom: 20px;
    }
    @include mobile {
      width: 150px;
      height: 150px;
    }
  }
  h4 {
    color: #0e243c;
    font-family: Nortar;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    @include noteBook {
      font-size: 24px;
    }
    @include mobile {
      font-size: 17px;
    }
  }
  h5 {
    margin-bottom: 20px;
    color: #004a5d;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    @include noteBook {
      font-size: 14px;
    }
  }
  .icons {
    > :first-child {
      margin-right: 20px;
    }
  }
}
</style>
