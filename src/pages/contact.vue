<template>
  <div class="contact-page column items-center">
    <h2>Կապ</h2>
    <div class="contact-container row items-center">
      <div
        class="contacts column items-center"
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        <ul class="column justify-evenly">
          <li><span></span>Կոնտակտներ</li>
          <li>
            <span> <img src="images/Phone.png" alt="Phone" /></span
            ><a href="tel:+37477676762">+374 (77)- 67 - 67 - 62</a>
          </li>
          <li>
            <span><img src="images/Instagram.png" alt="instagram" /></span
            ><a href="https://www.instagram.com/ararat_itcenter/"
              >ararat_itcenter</a
            >
          </li>
          <li>
            <span><img src="images/FacebookIcon.png" alt="facebook" /></span
            ><a href="https://www.facebook.com/AraratITCenter/" target="blank"
              >Ararat IT Center</a
            >
          </li>
          <li>
            <span><img src="images/LinkedinIcon.png" alt="liked in" /></span
            >Ararat IT Center
          </li>
          <li>
            <span><img src="images/Mail.png" alt="mail" /></span>ait@gmail.com
          </li>
          <li>
            <span><img src="images/Location.png" alt="location" /></span>Ararat,
            Khanjyan 1
          </li>
        </ul>
      </div>
      <div
        class="chat row justify-evenly"
        data-aos="fade-left"
        data-aos-duration="1800"
      >
        <div
          v-if="true"
          class="inputs-content column justify-evenly items-start"
          :class="{ animationInputs: activeclass }"
        >
          <input
            type="mail"
            name="text"
            id="mail"
            placeholder="Էլ․ փոստ"
            v-model="email"
          />
          <textarea
            type="text"
            name="text"
            id="messageText"
            placeholder="Գրեք ձեր հարցը"
            v-model="question"
          ></textarea>
        </div>
        <div class="arrow-image-container">
          <img
            src="images/messageArrow.png"
            alt="message arrow"
            @click="sedQuestion"
          />
        </div>
        <div
          v-if="activeclass"
          class="sendMessage row q-px-xl justify-center items-center"
        >
          <p>
            Շնորհակալություն, Ձեր նամակը ուղարկված է, մեք Ձեզ կպատասխանենք էլ.
            փոստով
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Api from "src/api";

export default {
  data() {
    return {
      email: "",
      question: "",
      sendMessage: true,
      mailValid: false,
      testValid: false,
      activeclass: false,
    };
  },
  computed: {
    sendingQuestion() {
      return {
        email: this.email,
        question: this.question,
      };
    },
  },
  methods: {
    async sedQuestion() {
      await Api.SendQuestion(this.sendingQuestion);
      this.email = "";
      this.question = "";
      this.activeclass = true;
      setTimeout(() => {
        setTimeout(() => {
          this.sendMessage = true;
          this.activeclass = false;
        }, 2000);
      }, 1000);
    },
  },
  inject: ["isOnRegistration", "isOffRegistration"],
  mounted() {
    this.isOnRegistration();
    AOS.init();
  },
  unmounted() {
    this.isOffRegistration();
  },
};
</script>

<style lang="scss" scoped>
@import "../css/mixins.scss";
.contact-page {
  overflow: hidden;

  h2 {
    margin-bottom: 3vw;
    @include noteBook {
      margin-bottom: 60px;
    }
  }
  .contact-container {
    @include noteBook {
      flex-direction: column;
      align-items: center;
      padding-bottom: 100px;
    }
    @include tablet {
      padding-bottom: 80px;
    }

    .contacts {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      width: 44vw;
      height: 57vh;
      margin-right: 30px;
      @include afterNotebook {
        width: 670px;
        height: 460px;
      }
      @include noteBook {
        width: 750px;
        height: 508px;
        margin-bottom: 80px;
        margin-right: 0;
      }
      @include tablet {
        width: 550px;
        height: 450px;
        margin-bottom: 70px;
      }
      @include mobile {
        width: 290px;
        height: 390px;
        border-radius: 30px;
      }
      ul {
        width: max-content;
        height: 100%;
        span {
          margin-right: 40px;
          img {
            width: 20px;
            height: 20px;
          }
        }
        li {
          display: flex;
          align-items: center;
          list-style-type: none;
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 29px;
          @include afterNotebook {
            font-size: 20px;
          }
          @include tablet {
            font-size: 18px;
          }
          @include mobile {
            font-size: 15px;
          }
          a {
            text-decoration: none;
            color: #0e243c;
          }
        }
        :first-child {
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 30px;
          color: #0e243c;
          span {
            margin-right: 66px;
            @include mobile {
              margin-right: 30px;
            }
          }
          @include mobile {
            font-size: 20px;
          }
        }
      }
    }
    .chat {
      width: 28vw;
      height: 57vh;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      padding: 0 0 0 40px;
      position: relative;
      @include afterNotebook {
        width: 420px;
        height: 450px;
      }
      @include noteBook {
        width: 740px;
        height: 429px;
        margin-bottom: 80px;
        padding: 0;
      }
      @include tablet {
        width: 540px;
        height: 429px;
      }
      @include mobile {
        width: 290px;
        height: 449px;
        border-radius: 30px;
        flex-direction: column;
        margin-bottom: 0;
      }

      z-index: 2;
      .inputs-content {
        width: 75%;
        height: 100%;
        background: none;
        // border-radius: 50px;
        @include tablet {
          padding: 20px 0px;
        }
        @include mobile {
          height: 78%;
          width: 100%;
          padding: 0px;
          padding: 0px 20px 0 20px;
        }
        #mail {
          width: 100%;
          border: 2px solid #004a5d;
          box-sizing: border-box;
          border-radius: 20px;
          padding: 4% 0 4% 8%;
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 150%;
          color: #0e243c;
          @include noteBook {
            padding: 2% 0 2% 8%;
            border-radius: 15px;
          }
          @include tablet {
            padding: 3% 0 3% 8%;
          }
        }
        #messageText {
          height: 70%;
          width: 100%;
          padding: 5% 0 0 6%;
          border: 2px solid #004a5d;
          box-sizing: border-box;
          border-radius: 20px;
          display: flex;
          align-items: flex-start;
          color: #0e243c;
          font-family: Nortar;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 150%;
          resize: none;
        }
      }
      .arrow-image-container {
        align-self: flex-end;
        img {
          width: 70px;
          height: 70px;
          margin-bottom: 30px;
          cursor: pointer;
          @include afterNotebook {
            width: 50px;
            height: 50px;
          }
          @include noteBook {
            width: 60px;
            height: 60px;
          }
          @include mobile {
            margin: 0px;
          }
        }
        @include mobile {
          align-self: center;
        }
      }
      .animationInputs {
        animation-name: inputAnimation;
        animation-duration: 1s;
        top: -100%;
        // position: absolute;
        opacity: 0;
        z-index: 1;
      }
      .sendMessage {
        width: 400px;
        height: 232px;
        background: #004a5d;
        border-radius: 20px;
        font-family: Nortar;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        color: #ffffff;
        animation-name: sendMessage;
        animation-duration: 1s;
        position: absolute;
        bottom: 30%;
        left: 15%;
        @include afterNotebook {
          width: 290px;
          height: 172px;
        }
        @include noteBook {
          width: 380px;
          height: 220px;
        }
        @include mobile {
          width: 210px;
          // bottom: 40%;
          height: 150px;
          font-size: 12px;
        }
      }
    }
  }
}
@keyframes sendMessage {
  0% {
    bottom: -90%;
  }

  100% {
    bottom: 30%;
    @include mobile {
      bottom: 50%;
    }
  }
}
@keyframes inputAnimation {
  0% {
    top: 0%;
    opacity: 0.1;
  }

  100% {
    top: -100%;
    opacity: 0;
  }
}
</style>
