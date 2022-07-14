<template>
  <div class="about-us">
    <div class="about-us-text column items-center">
      <h2>Մեր մասին</h2>
      <div class="info row justify-between items-center">
        <p>
          Կենտրոնի նպատակն է ապակենտրոնացնել ՏՏ ոլորտը և զարգացնել այն նաև
          մարզերում ստեղծելով ՏՏ էկոհամակարգ։ Կենտրոնը ընձեռում է բարձրորակ ՏՏ
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
    <div
      class="about-us-founders column items-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2>Հիմնադիրներ</h2>
      <div
        class="founders row items-center justify-center q-gutter-x-xl q-gutter-y-lg"
      >
        <person-info
          v-for="founder in founders"
          :speciality="founder.speciality"
          :name="founder.name"
          :inLink="founder.linkedIn"
          :image="`./images/${founder.image}`"
          :key="`founder${founder.id}`"
          :fbLink="founder.fbLink"
          class="founder"
          :data-aos="[founder.id === 1 ? 'fade-right' : 'fade-left']"
          data-aos-duration="1800"
        />
      </div>
    </div>
    <div
      class="about-us-trainers column items-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2>Դասընթացավարներ</h2>
      <div
        class="trainers row items-center justify-center q-gutter-x-xl q-gutter-y-lg"
      >
        <person-info
          v-for="trainer in trainers"
          :speciality="trainer.role"
          :name="trainer.fullname"
          :inLink="trainer.linkedin"
          :image="`${host}/${trainer.avatar}`"
          :key="`trainer${trainer.id}`"
          :fbLink="trainer.facebook"
          class="trainer"
          :data-aos="[trainer.id === 1 ? 'fade-right' : 'fade-left']"
          data-aos-duration="1800"
        />
      </div>
    </div>
    <Faq />
  </div>
</template>

<script>
import PersonInfo from "src/components/AboutUs/person-info.vue";
import Api from "src/api";
import { HOST } from "src/providers/constants";
import Faq from "src/components/AboutUs/faq.vue";
import AOS from "aos";
import "aos/dist/aos.css";
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
      trainers: [],
      host: HOST,
    };
  },
  mounted() {
    this.getTrainers();
    AOS.init();
  },

  methods: {
    async getTrainers() {
      const rsp = await Api.AboutUs.GetTrainers();
      this.trainers = rsp.data.items;
    },
  },
  components: { PersonInfo, Faq },
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
}
</style>
