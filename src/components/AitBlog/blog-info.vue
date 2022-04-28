<template>
  <div class="blog-info-container row justify-center items-center">
    <div class="blog-info row justify-center items-center">
      <img src="images/ilonmask.png" alt="ilon mask" class="person-img" />
      <div class="blog-text">
        <h2>Իլոն Մասկ</h2>
        <p>
          Իր առաջին խաղը ստեղծել է 12 տարեկանում և վաճառել 500 դոլարով։ Նա ամեն
          օր ամենաքիչը 5 ժամ նվիրել է ընթերցանությանը։ Դպրոցում նրան ծաղրում էին
          «գիրք կրծող» անվանելով։ Համալսարանում սովորելու տարիներին Մասկը ապրում
          էր օրը 1 դոլարով։ Երկու անգամ ամուսնացել է նույն կնոջ հետ և երկու
          անգամ էլ բաժանվել։ Մասկի նպատակն է Մարսը բնակեցնելը, նա անգամ
          խոստովանել է, որ ցանկանում է մեռնել Մարսի վրա։ Նա միակ մարդն է, որի
          կարողությունը գերազանցել է 300 միլիարդ դոլարը։ Մասկի տարեկան
          աշխատավարձը 1 դոլար է։ Եվ վերջում հավելենք, որ Մասկը ինքն իր մասին
          գրում է. «Որոշ մարդկանց թվում է, թե ես այնքան փող ունեմ, որ կարող եմ
          ընդհանրապես չաշխատել և ողջ օրը պառկել լողափին։ Բայց ես աշխատում եմ,
          շատ եմ աշխատում՝ առանց շաբաթ ու կիրակի օրերի հանգստի»:
          Մեկնաբանություններում կարող եք ավելացնել Մասկի մասին հետաքրքիր փաստեր։
        </p>
      </div>
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
export default {
  inject: ["isOnRegistration", "isOffRegistration"],
  mounted() {
    this.isOnRegistration();
  },
  unmounted() {
    this.isOffRegistration();
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.blog-info-container {
  padding: 0 10.4166666667vw 0;
  background: #f8f8f8;
  @include noteBook {
    padding-bottom: 50px;
  }
  .blog-info {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    padding: 13.25925925926vh 5vw 9.25925925926vh;
    position: relative;
    @include noteBook {
      padding: 60px;
      width: 750px;
    }
    @include mobile {
      padding: 80px 20px 40px 20px;
      width: 300px;
      border-radius: 30px;
    }
    .person-img {
      width: 26vw;
      height: 20vw;
      object-fit: cover;
      border-radius: 30px;
      margin-right: 4.6875vw;
      @include afterNotebook {
        width: 335px;
        object-fit: contain;
        margin-right: 3vw;
      }
      @include noteBook {
        width: 460px;
        height: auto;
        margin-right: 0;
        margin-bottom: 40px;
      }
      @include mobile {
        width: 250px;
        margin-bottom: 20px;
      }
    }
    h2 {
      margin-bottom: 40px;
      @include noteBook {
        font-size: 30px;
        margin-bottom: 20px;
      }
      @include mobile {
        font-size: 24px;
        text-align: center;
      }
    }
    p {
      width: 37vw;
      height: 33vh;
      overflow: auto;
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 140%;
      color: #000000;
      margin: 0;
      @include noteBook {
        width: 460px;
        height: auto;
        font-size: 14px;
      }
      @include mobile {
        width: 250px;
        font-size: 10px;
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .arrowBack {
    position: absolute;
    top: 10%;
    right: 40px;
    cursor: pointer;
    @include noteBook {
      width: 40px;
      height: 40px;
      right: 20px;
    }
    @include mobile {
      width: 50px;
      height: 50px;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
