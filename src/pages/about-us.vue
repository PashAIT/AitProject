<template>
  <div class="about-us">
    <div class="about-us-text column items-center">
      <h2>Մեր մասին</h2>
      <div class="info row justify-between items-center">
        <p>
          Կենտրոնի նպատակն է ապակենտրոնացնել ՏՏ ոլորտը և զարգացնել այն նաև
          մարզերում ստեղծով ՏՏ էկոհամակարգ։ Կենտրոնը ընձեռում է բարձրորակ ՏՏ
          կրթության հնարավորություն Արարատի բնակչությանը։ 2022 թվականից մենք
          ստեղծեցինք նաև մեր օնլայն կրթության մոդելը, ընձեռելով հնարավորություն
          ՀՀ բոլոր մարզերի և Արցախի բնակչությանը ստանալու բարձրորակ և մատչելի ՏՏ
          կրթություն։<br /><br />
          Կենտրոնին կից գործում է նաև Fantasy Space ծրագրավորման ընկերությունը,
          որը մասնագիտացված է WEB և Mobile ծրագրավորման մեջ։ AIT այն
          ուսանողները, ովքեր նպատակասլաց են և զարգացմանը պատրաստ հնարավորություն
          են ստանում մուտք գործել ՏՏ աշխարհ՝ միանալով մեր հզոր և ստեղծարար
          թիմին։ Այսպիսով՝ ձեռք են բերում աշխատանք և փորձ ապագայի ոլորտում։
          Կրթության կազմակերպման գործում մեզ համար կարևորագույն է ինքնակրթության
          գաղափարը։ Ուսանողը պետք է գիտակցի ինքնազարգացման կարևորությունը, ուժը
          և տեսնի նրա ընձեռած անթիվ հնարավորությունները։ Կենտրոնը նաև
          կազմակերպում է միջոցառումներ ոլորտի տարբեր ճյուղերի իրազեկման համար՝
          բարձրացնելով բնակչության հետաքրքրությունը տեղեկատվական տեխնոլոգիաների
          նկատմամբ։<br /><br />
          Մենք գիտակցում ենք, որ Հայաստանի զարգացումը մեր ուսերին է, իսկ
          Հայաստանը չի ավարտվում Երևանով։ Նաև հավատում ենք, որ ՏՏ ոլորտի
          զարագացումը կարևորագույն լուծում է Հայաստանի համար, որը նպատակ է դրել
          տնտեսության էքսպոնենցիալ զարգացման։<br /><br />
          Աշխարհը քայլում է դեպի թվայնացում, իսկ տեղեկատվական տեխնոլոգիաները
          կերտում են այդ ճանապարհը։
        </p>
      </div>
    </div>
    <div class="about-us-founders column items-center">
      <h2>Հիմնադիրներ</h2>
      <div
        class="founders row items-center justify-center q-gutter-x-xl q-gutter-y-lg"
      >
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
      <div
        class="trainers row items-center justify-center q-gutter-x-xl q-gutter-y-lg"
      >
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
          :dense-toggle="false"
          :header-class="{ 'my-custom-class': true }"
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
          linkedIn: "yervand-tadevosyan-89a53114a/",
          image: "Yero.jpg",
        },
        {
          id: 2,
          name: "Ռաֆայել Ջամալյան",
          speciality: "CTO",
          fbLink: "raf.raf.798",
          linkedIn: "rafayel-jamalyan-2901261b2/",
          image: "Rafo.jpg",
        },
      ],
      trainers: [
        {
          id: 1,
          name: "Էրիկ Մուրադյան",
          speciality: "Front-End Developer",
          fbLink: "erik.muradyan.50",
          linkedIn: "",
          image: "Erik.jpg",
        },
        {
          id: 2,
          name: "Պարույր Կարապետյան",
          speciality: "Front-End Developer",
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
@import "../css/mixins.scss";

.about-us {
  &-text {
    padding: 0 10.4166666667vw;
    .info {
      width: 80vw;
      padding: 5.6% 8.6%;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      margin-bottom: 200px;
      @include noteBook {
        margin-bottom: 150px;
        border-radius: 30px;
      }
      @include mobile {
        margin-bottom: 80px;
      }
      p {
        width: 100%;
        margin: 0;
        color: #0e243c;
        font-family: Nortar;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        @include noteBook {
          text-align: center;
        }
        @include mobile {
          font-size: 12px;
        }
      }
    }
  }
  &-founders {
    margin-bottom: 100px;
    @include mobile {
      margin-bottom: 80px;
    }
  }
  &-trainers {
    margin-bottom: 200px;
    @include mobile {
      margin-bottom: 80px;
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
        @include noteBook {
          padding: 30px 100px;
          font-size: 16px;
        }
        @include mobile {
          border-radius: 20px;
          font-size: 12px;
          padding: 10px 20px;
        }
        .answer {
          background: rgba(255, 255, 255, 0.1);
          margin-top: 20px;
          font-family: Nortar;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 150%;
          color: #0e243c;
          @include noteBook {
            font-size: 14px;
          }

          @include mobile {
            font-size: 10px;
            margin: 0;
            padding: 0;
          }
          > div {
            @include mobile {
              padding-top: 10px;
            }
          }
        }
      }
      .my-custom-class {
        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
      :first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
