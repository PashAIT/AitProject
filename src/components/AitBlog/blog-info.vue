<template>
  <div class="blog-info-container justify-center items-center">
    <div class="blog-info">
      <img src="images/ilonmask.png" alt="ilon mask" class="person-img" />
      <h2>Իլոն Մասկ</h2>
      <p>
        Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։ Նա ամեն օր
        ամենաքիչը 5 ժամ նվիրել է ընթերցանությանը։ Դպրոցում նրան ծաղրում էին
        «գիրք կրծող» անվանելով։ Համալսարանում սովորելու տարիներին Մասկը ապրում
        էր օրը 1 դոլարով։ Երկու անգամ ամուսնացել է նույն կնոջ հետ և երկու անգամ
        էլ բաժանվել։ Մասկի նպատակն է Մարսը բնակեցնելը, նա անգամ խոստովանել է, որ
        ցանկանում է մեռնել Մարսի վրա։ Նա միակ մարդն է, որի կարողությունը
        գերազանցել է 300 միլիարդ դոլարը։ Մասկի տարեկան աշխատավարձը 1 դոլար է։ Եվ
        վերջում հավելենք, որ Մասկը ինքն իր մասին գրում է. «Որոշ մարդկանց թվում
        է, թե ես այնքան փող ունեմ, որ կարող եմ ընդհանրապես չաշխատել և ողջ օրը
        պառկել լողափին։ Բայց ես աշխատում եմ, շատ եմ աշխատում՝ առանց շաբաթ ու
        կիրակի օրերի հանգստի»: Մեկնաբանություններում կարող եք ավելացնել Մասկի
        մասին հետաքրքիր փաստեր։
      </p>
      <img
        class="arrowBack"
        src="images/blogInfoArrow.png"
        alt=""
        @click="$router.push('/aitblog')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blog-info-container {
  padding: 0 10.4166666667vw;
  margin-bottom: 100px;

  .blog-info {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    padding: 9.25925925926vh 6.77083333333vw;
    position: relative;
    .person-img {
      width: 100%;
      margin-bottom: 60px;
      height: 40vh;
      object-fit: cover;
      border-radius: 30px;
    }
    h2 {
      margin-bottom: 40px;
    }
    p {
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 140%;
      color: #000000;
    }
  }
  .arrowBack {
    position: absolute;
    top: 89px;
    right: 40px;
    cursor: pointer;
  }
}
</style>
