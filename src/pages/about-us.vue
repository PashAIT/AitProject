<template>
  <div class="about-us">
    <div class="about-us-text column items-center">
      <h2>Մեր մասին</h2>
      <div class="info row justify-between items-center">
        <p>
          Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝
          տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների
          ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի
          մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական
          գործընթացի իրականացումը։ Տեքստի տարբեր մասերը, որոնք երբեմն նշանակալից
          հեռավորության վրա են գտնվում միմյանցից, այս կամ այն կերպ կապակցված են
          լինում։ Կապի այդ միջոցների, ձևերի նշանակման համար գործածվում է վերջերս
          շրջանառության մեջ մտած կոհեզիա եզրույթը։ (Լատիներեն – կապակցված,
          կցվածություն, անգլերեն - կապակցում)։ Կոհեզիան կապի հատուկ տեսակներ են,
          որոնք ապահովում են առանձին հաղորդումների, փաստերի, գործողությունների և
          այլնի շարունակականությունը , այսինքն՝ տրամաբանական հաջորդականությունը,
          փոխկապվածությունը։ Կոհեզիան տեքստի տարբեր կառուցվածքային
          բաղադրատարրերի կապակցման հատկությունն է և հիմնվում է այդ էլեմենտների՝
        </p>
        <img src="images/AIT.png" alt="" />
      </div>
    </div>
    <div class="about-us-founders column items-center">
      <h2>Հիմնադիրներ</h2>
      <div class="founders row items-center justify-between">
        <person-info
          v-for="founder in founders"
          :speciality="founder.speciality"
          :name="founder.name"
          :inLink="founder.linkedIn"
          :image="founder.image"
          :key="`founder${founder.id}`"
          :fbLink="founder.fbLink"
          class="founder"
        />
      </div>
    </div>
    <div class="about-us-trainers column items-center">
      <h2>Դասընթացավարներ</h2>
      <div class="trainers row items-center justify-between">
        <person-info
          v-for="trainer in trainers"
          :speciality="trainer.speciality"
          :name="trainer.name"
          :inLink="trainer.linkedIn"
          :image="trainer.image"
          :key="`trainer${trainer.id}`"
          :fbLink="trainer.fbLink"
          class="trainer"
        />
      </div>
    </div>
    <div class="questions-container column items-center">
      <h2>Հաճախ տրվող հարցեր</h2>
      <div class="questions">
        <q-expansion-item
          v-for="item in questions"
          :key="`question${item.id}`"
          class="overflow-hidden header-acordion"
          style="border-radius: 50px"
          :label="item.request"
          header-class=" "
          expand-icon-class=""
        >
          <q-card class="answer">
            <q-card-section>
              {{ item.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </div>
</template>

<script>
import PersonInfo from "src/components/AboutUs/person-info.vue";
export default {
  data() {
    return {
      founders: [
        {
          id: 1,
          name: "Երվանդ Թադևոսյան",
          speciality: "CEO",
          fbLink: "YervandSamvelichTadevosyan",
          linkedIn: "",
          image: "Yero.jpg",
        },
        {
          id: 2,
          name: "Ռաֆայել Ջամալյան",
          speciality: "CTO",
          fbLink: "raf.raf.798",
          linkedIn: "",
          image: "Rafo.jpg",
        },
      ],
      trainers: [
        {
          id: 1,
          name: "Էրիկ Մուրադյան",
          speciality: "FROND/END Developer",
          fbLink: "erik.muradyan.50",
          linkedIn: "",
          image: "Erik.jpg",
        },
        {
          id: 2,
          name: "Պարույր Կարապետյան",
          speciality: "FROND/END Developer",
          fbLink: "paruyr.karapetyan",
          linkedIn: "",
          image: "Pash.jpg",
        },
      ],
      questions: [
        {
          id: 1,
          request: "Որքա՞ն արժե այս դասընթացը:",
          answer:
            " Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեքստի տարբեր մասերը, որոնք երբեմն նշանակալից հեռավորության վրա են գտնվում միմյանցից, այս կամ այն կերպ կապակցված են լինում։ Կապի այդ միջոցների, ձևերի նշանակման համար գործածվում է վերջերս շրջանառության մեջ մտած կոհեզիա եզրույթը։",
        },
        {
          id: 2,
          request: "Կարո՞ղ եք ավելին պատմել այս դպրոցի մասին:",
          answer:
            " Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեքստի տարբեր մասերը, որոնք երբեմն նշանակալից հեռավորության վրա են գտնվում միմյանցից, այս կամ այն կերպ կապակցված են լինում։ Կապի այդ միջոցների, ձևերի նշանակման համար գործածվում է վերջերս շրջանառության մեջ մտած կոհեզիա եզրույթը։",
        },
        {
          id: 3,
          request: "Նոր ուսանողներ ընդունու՞մ եք։",
          answer:
            " Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեքստի տարբեր մասերը, որոնք երբեմն նշանակալից հեռավորության վրա են գտնվում միմյանցից, այս կամ այն կերպ կապակցված են լինում։ Կապի այդ միջոցների, ձևերի նշանակման համար գործածվում է վերջերս շրջանառության մեջ մտած կոհեզիա եզրույթը։",
        },
        {
          id: 4,
          request: "Որտե՞ղ եք գտնվում:",
          answer:
            " Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական հաղորդակցական գործընթացի իրականացումը։ Տեքստի տարբեր մասերը, որոնք երբեմն նշանակալից հեռավորության վրա են գտնվում միմյանցից, այս կամ այն կերպ կապակցված են լինում։ Կապի այդ միջոցների, ձևերի նշանակման համար գործածվում է վերջերս շրջանառության մեջ մտած կոհեզիա եզրույթը։",
        },
      ],
    };
  },
  components: { PersonInfo },
};
</script>

<style lang="scss" scoped>
.about-us {
  &-text {
    padding: 0 10.4166666667vw;
    .info {
      padding: 9vh 5vw;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      margin-bottom: 200px;
      p {
        width: 39.0625vw;
        margin-right: 5vw;
        color: #0e243c;
        font-family: Nortar;
        font-style: normal;
        font-weight: normal;
        font-size: 0.9vw;
        line-height: 150%;
      }
      img {
        width: 20vw;
        height: 18vw;
      }
    }
  }
  &-founders {
    margin-bottom: 100px;
    .founders {
      box-sizing: border-box;
      width: 66.1458333333vw;
    }
  }
  &-trainers {
    margin-bottom: 200px;
    .trainers {
      box-sizing: border-box;
      width: 66.1458333333vw;
    }
  }
  .questions-container {
    margin-bottom: 100px;
    .questions {
      .header-acordion {
        background: rgba(255, 255, 255, 0.5);
        color: #004a5d;
        font-family: Nortar;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
        padding: 40px 100px;
        width: 79.6875vw;
        margin-top: 40px;
        .answer {
          background: rgba(255, 255, 255, 0.1);
          margin-top: 20px;
          font-family: Nortar;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 150%;
          color: #0e243c;
        }
      }
      :first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
