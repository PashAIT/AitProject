<template>
  <div
    class="questions-container column items-center"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <h2>Հաճախ տրվող հարցեր</h2>
    <div class="questions">
      <q-expansion-item
        v-for="item in questions"
        :key="`question${item.id}`"
        class="overflow-hidden header-acordion"
        style="border-radius: 50px"
        :label="item.question"
        :dense-toggle="false"
        :header-class="{ 'my-custom-class': true }"
        :data-aos="[founder.id % 2 === 0 ? 'fade-right' : 'fade-left']"
        data-aos-duration="1800"
      >
        <q-card class="answer">
          <q-card-section>
            {{ item.answer }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
import Api from "src/api";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    this.getFaq();
    AOS.init();
  },
  methods: {
    async getFaq() {
      const rsp = await Api.AboutUs.GetFaq();
      this.questions = rsp.data.items;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

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
        border-radius: 20px !important;
        font-size: 12px;
        padding: 10px 20px;
      }
      .answer {
        background: rgba(255, 255, 255, 0.01);
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
        background: rgba(255, 255, 255, 1);
      }
    }
    :first-child {
      margin-top: 0;
    }
  }
}
</style>
