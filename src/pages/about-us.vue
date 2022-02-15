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
      <div class="founders row">
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
      <div class="trainers row">
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
        width: 750px;
        margin-right: 8vw;
        color: #0e243c;
        font-family: Nortar;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
      }
    }
  }
  &-founders {
    margin-bottom: 100px;
    .founders {
      > :first-child {
        margin-right: 30px;
      }
    }
  }
  &-trainers {
    margin-bottom: 200px;
    .trainers {
      > :first-child {
        margin-right: 30px;
      }
    }
  }
}
</style>
