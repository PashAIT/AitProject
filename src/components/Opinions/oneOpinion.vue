<template>
  <div class="one-opinion">
    <img src="images/opinionPerson.png" alt="" />
    <div class="person-opinion">
      <div class="person-info">
        <h4>Արման Սարգսյան</h4>
        <p>CEO Aranea</p>
      </div>
      <p>
        Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝
        տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների
        ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին
        է, առանց որոնց անհնար է միասնական լեզվական:
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.one-opinion {
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  padding: 90px;
  > img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin-right: 60px;
  }
  .person-opinion {
    .person-info {
      color: #004a5d;
      margin-bottom: 30px;
      h4 {
        font-family: Nortar;
        font-weight: bold;
        font-size: 18px;
        line-height: 140%;
      }
      p {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
      }
    }
    > p {
      width: 31.25vw;
      overflow: auto;
      font-family: Nortar;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>