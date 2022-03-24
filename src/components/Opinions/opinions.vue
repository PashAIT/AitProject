<template>
  <div class="opinions">
    <h2>Կարծիքներ</h2>
    <div class="opinion-container row justify-center">
      <q-carousel
        v-model="currentSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        padding
        ref="carousel"
        class="option-slider row justify-center items-center"
      >
        <q-carousel-slide
          v-for="item in sliderItems"
          :key="item.id"
          :name="item.id"
          class="column no-wrap flex-center"
        >
          <div class="one-opinion">
            <img src="images/opinionPerson.png" alt="" />
            <div class="person-info">
              <h4>{{ item.name }}</h4>
              <p>{{ item.speciality }}</p>
            </div>
            <p>
              {{ item.info }}
            </p>
          </div>
        </q-carousel-slide>
        <template v-slot:control>
          <q-carousel-control class="q-gutter-xs controls items-center">
            <q-btn
              push
              round
              dense
              icon="img:images/LeftButton.png"
              class="arrows arrow1"
              @click="$refs.carousel.previous()"
            ></q-btn>
            <q-btn
              push
              round
              dense
              icon="img:images/RightButton.png"
              @click="$refs.carousel.next()"
              class="arrows arrow2"
            ></q-btn>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import activeSlideMixin from "src/mixins/activeSlideMixin";

export default {
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          speciality: "CEO Aranea",
          name: "Արման Սարգսյան",
          type: "first",
          info: "Տեքստի մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական:",
        },
        {
          id: 2,
          speciality: "CTO Aranea",
          name: "Կարեն Արամյան",
          type: "second",
          info: "Մասին ուսմունքի առանցքային հասկացություններից մեկն է կոհեզիան՝ տեքստի տարբեր մասերի՝ միմյանց կապակցման յուրահատուկ միջոցների ամբողջականությունը։ Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական:",
        },
        {
          id: 3,
          speciality: "Meneger",
          name: "Աշոտ Սարգսյան",
          type: "tirth",
          info: "Խոսքը տեքստային կապակցությունների տարբեր ձևերի մասին է, առանց որոնց անհնար է միասնական լեզվական:",
        },
      ],
      currentSlide: 1,
    };
  },
  mixins: [activeSlideMixin],
};
</script>

<style lang="scss" scoped>
.opinions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 100px;
  .opinion-container {
    .option-slider {
      width: 79vw;
      background: none;
      position: relative;

      .one-opinion {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50px;
        padding: 4.7vw;
        display: grid;
        align-items: center;
        z-index: 2;
        grid-template-areas:
          "personImg personName personName"
          "personImg personText personText"
          "personImg personText personText";
        > img {
          // width: 10vw;
          // height: 10vw;
          border-radius: 100%;
          margin-right: 60px;
          grid-area: personImg;
          min-width: 100px;
          min-height: 100px;
        }
        .person-info {
          color: #004a5d;
          margin-bottom: 10px;
          grid-area: personName;
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
          width: 32.25vw;
          height: 140px;
          overflow: auto;
          font-family: Nortar;
          font-weight: normal;
          font-size: 16px;
          line-height: 140%;
          color: #0e243c;
          min-height: 140px;
          grid-area: personText;
          margin: 0;
          overflow: auto;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      }
      .controls {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 96.5%;
        top: 0% !important;
        left: 0% !important;
        .arrows::before {
          box-shadow: 0 0 0;
        }
        .arrows::before {
          border-bottom: none;
        }
        .arrows {
          font-size: 1.9em;
        }
      }
    }
  }
}
@media screen and (max-width: 1350px) {
  .menu {
    .navBar {
      display: none !important;
    }
    > img {
      display: block !important;
    }
  }
}
@media screen and (max-width: 1150px) {
  .option-slider {
    width: 85vw !important;
    .one-opinion {
      width: 72%;
      border-radius: 15% !important;
      grid-template-areas:
        "personImg personName personName"
        "personText personText personText"
        "personText personText personText" !important;
      > img {
        margin-bottom: 30px;
      }
      > p {
        height: 100px !important;
        width: 100% !important;
      }
    }
  }
}
</style>
