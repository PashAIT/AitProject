<template>
  <div class="person-info column items-center">
    <div
      alt="person"
      :style="`background-image: url('../../../public/images/${image}')`"
    ></div>
    <h4>{{ name }}</h4>
    <h5>{{ speciality }}</h5>
    <div class="icons row">
      <a :href="`https://www.facebook.com/${fbLink}`"
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
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  padding: 60px 156px 30px 156px;
  > img {
    width: 280px;
    height: 280px;
    margin-bottom: 30px;
    border-radius: 100%;
    object-fit: contain;
    background-position: center center;
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
    :first-child {
      margin-right: 20px;
    }
  }
}
</style>
