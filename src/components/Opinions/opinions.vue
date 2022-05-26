<template>
  <div class="opinions" data-aos="fade-up" data-aos-duration="1800">
    <h2>Կարծիքներ</h2>
    <div class="opinion-container row justify-center">
      <q-carousel
        v-model="currentSlide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        height="max-content"
        padding
        thumbnails
        ref="carousel"
        class="option-slider row justify-center items-center"
      >
        <q-carousel-slide
          v-for="item in sliderItems"
          :key="item.id"
          :name="item.id"
          class="column no-wrap flex-center"
        >
          <div class="gt-md one-opinion">
            <div class="row">
              <div class="col-4">
                <img src="images/opinionPerson.png" alt="" />
              </div>
              <div class="col-8">
                <div class="person-info">
                  <h4>{{ item.fullname }}</h4>
                  <p>{{ item.role }}</p>
                </div>
                <p class="item-info">
                  {{ item.body }}
                </p>
              </div>
            </div>
          </div>
          <div class="lt-lg one-opinion">
            <div class="row">
              <div class="col-md-12">
                <div class="row items-center justify-center">
                  <div class="col-md-5">
                    <img src="images/opinionPerson.png" alt="" />
                  </div>
                  <div class="col-md-6">
                    <div class="person-info q-ml-md">
                      <h4>{{ item.fullname }}</h4>
                      <p>{{ item.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 q-mt-sm">
                <p class="item-info">
                  {{ item.body }}
                </p>
              </div>
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
import activeSlideMixin from "src/mixins/activeSlideMixin";
import Api from "src/api";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      sliderItems: [],
      currentSlide: 1,
    };
  },
  mounted() {
    this.getFeedbacks();
    AOS.init();
  },
  methods: {
    async getFeedbacks() {
      const rsp = await Api.Home.GetFeedbacks();
      this.sliderItems = rsp.data.items;
    },
  },
  mixins: [activeSlideMixin],
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.opinions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10.4166666667vw;
  margin-bottom: 100px;
  .opinion-container {
    .option-slider {
      width: 80vw;
      background: none;
      position: relative;

      .one-opinion {
        width: 75%;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 30px;
        padding: 4vw;
        align-items: center;
        @include tablet {
          width: 80%;
        }
        img {
          border-radius: 100%;
          min-width: 100px;
          min-height: 100px;
          @include tablet {
            width: 30vw;
            height: 30vw;
            margin-bottom: 5px;
          }
        }
        .person-info {
          color: #004a5d;
          margin-bottom: 10px;
          @include tablet {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
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
        .item-info {
          width: 100%;
          height: 120px;
          overflow: auto;
          font-family: Nortar;
          font-weight: normal;
          font-size: 16px;
          line-height: 140%;
          color: #0e243c;
          min-height: 120px;
          grid-area: personText;
          margin: 0;
          overflow: auto;
          @include tablet {
            font-size: 14px;
            text-align: center;
            height: 100px;
            min-height: 120px;
            margin-top: 0px;
          }
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
        @include tablet {
          display: none;
        }
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
@media screen and (max-width: 1150px) {
  .option-slider {
    width: 85vw !important;
  }
}
</style>
