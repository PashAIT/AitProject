<template>
  <div class="footer row items-center justify-center">
    <div class="footer-menu" data-aos="fade-up" data-aos-duration="1500">
      <ul>
        <li>Գլխավոր</li>
        <li>Դասընթաց</li>
        <li>Մեր մասին</li>
        <li>AIT բլոգ</li>
        <li>Կապ</li>
        <li>Մուտք</li>
      </ul>
    </div>
    <div class="footer-contact" data-aos="fade-up" data-aos-duration="1500">
      <ul>
        <li>Կոնտակտներ</li>
        <li>
          <img src="images/PhoneIcon.png" alt="" /> +374 (77) - 01 - 02 - 03
        </li>
        <li><img src="images/instagramIcon.png" alt="" /> ararat_itcenter</li>
        <li>
          <img src="images/facebookIconfooter.png" alt="" /> Ararat IT Center
        </li>
        <li>
          <img src="images/linkedinIconfooter.png" alt="" /> Ararat IT Center
        </li>
        <li><img src="images/MailIconfooter.png" alt="" /> ait@gmail.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.footer {
  height: 470px;
  background: #0e243c;
  color: #fff;
  @include mobile {
    flex-direction: column;
    height: 770px;
    justify-content: space-around;
  }
  ul {
    li {
      list-style-type: none;
      font-family: Nortar;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      margin-top: 30px;
    }
    :first-child {
      margin-top: 0px;
    }
  }
  div {
    margin-left: 10vw;
    @include mobile {
      margin-left: 20vw;
      align-self: flex-start;
    }
  }
  > :first-child {
    margin-left: 0;
    @include mobile {
      margin-left: 20vw;
    }
  }
  .footer-contact {
    ul {
      li {
        display: flex;
        align-items: center;
        img {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
