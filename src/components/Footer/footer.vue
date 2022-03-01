<template>
  <div class="footer">
    <div class="footer-menu">
      <ul>
        <li>Գլխավոր</li>
        <li>Դասընթաց</li>
        <li>Մեր մասին</li>
        <li>AIT բլոգ</li>
        <li>Կապ</li>
        <li>Մուտք</li>
      </ul>
    </div>
    <div class="footer-stages">
      <ul>
        <li>Փուլեր</li>
        <li>HTML&CSS</li>
        <li>javascript</li>
        <li>Advaced JS</li>
        <li>Front-End / React JS</li>
        <li>Back-End / Node. JS</li>
      </ul>
    </div>
    <div class="footer-contact">
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
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 470px;
  background: #0e243c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

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
    margin-left: 5vw;
  }
  :first-child {
    margin-left: 0;
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
