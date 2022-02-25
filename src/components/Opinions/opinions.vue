<template>
  <div class="opinions">
    <h2>Կարծիքներ</h2>
    <div class="opinion-container row justify-center">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        padding
        height="max-content"
        ref="carousel"
        class="option-slider"
      >
        <q-carousel-slide
          v-for="item in opinions"
          :key="item.id"
          :name="item.type"
          class="column no-wrap flex-center"
        >
          <div class="one-opinion row items-center">
            <img src="images/opinionPerson.png" alt="" />
            <div class="person-opinion">
              <div class="person-info">
                <h4>{{ item.name }}</h4>
                <p>{{ item.speciality }}</p>
              </div>
              <p>
                {{ item.info }}
              </p>
            </div>
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
export default {
  data() {
    return {
      opinions: [
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
      slide: "first",
    };
  },
  computed: {
    activeOpinions() {
      if (this.slide === this.opinions[0].type) {
        return [this.opinions[0], this.opinions[1]];
      } else if (this.slide === this.opinions[this.opinions.length - 1].type) {
        return [
          this.opinions[this.opinions.length - 2],
          this.opinions[this.opinions.length - 1],
        ];
      } else {
        return [
          this.opinions[this.opinions.indexOf(this.slide) - 1],
          this.opinions[this.opinions.indexOf(this.slide)],
          this.opinions[this.opinions.indexOf(this.slide) + 1],
        ];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.opinions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 100px;
  h2 {
    margin-bottom: 100px;
  }
  .opinion-container {
    width: 100%;
    .option-slider {
      width: 79vw;
      background: none;
      position: relative;
      .one-opinion {
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
            color: #0e243c;
            min-height: 140px;
            ::-webkit-scrollbar {
              display: none;
            }
          }
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
</style>
