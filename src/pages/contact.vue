<template>
  <div class="contact-page column items-center">
    <h2>Կապ</h2>
    <div class="contact-container row items-center">
      <div class="contacts column items-center">
        <ul class="column justify-evenly">
          <li><span></span>Կոնտակտներ</li>
          <li>
            <span> <img src="images/Phone.png" alt="Phone" /></span>+374 (77)-
            01 - 02 - 03
          </li>
          <li>
            <span><img src="images/Instagram.png" alt="instagram" /></span
            >ararat_itcenter
          </li>
          <li>
            <span><img src="images/FacebookIcon.png" alt="facebook" /></span
            >Ararat IT Center
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
      <div class="chat column justify-center items-center">
        <div
          v-if="true"
          class="inputs-content column justify-evenly items-start"
          :class="{ animationInputs: activeclass }"
        >
          <input type="mail" name="text" id="mail" placeholder="Էլ․ փոստ" />
          <textarea
            type="text"
            name="text"
            id="messageText"
            placeholder="Գրեք ձեր հարցը"
          ></textarea>
          <img
            src="images/messageArrow.png"
            alt="message arrow"
            @click="issendMessage"
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
export default {
  data() {
    return {
      sendMessage: true,
      mailValid: false,
      testValid: false,
      activeclass: false,
    };
  },
  methods: {
    issendMessage() {
      this.activeclass = true;
      setTimeout(() => {
        this.sendMessage = false;
        setTimeout(() => {
          this.sendMessage = true;
          this.activeclass = false;
        }, 3000);
      }, 2000);
    },
  },
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
.contact-page {
  overflow: hidden;
  h2 {
    margin-bottom: 3vw;
  }
  .contact-container {
    .contacts {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      width: 46vw;
      height: 59vh;
      margin-right: 30px;
      ul {
        width: max-content;
        height: 100%;
        span {
          margin-right: 40px;
        }
        li {
          display: flex;
          align-items: center;
          list-style-type: none;
          font-family: Montserrat;
          font-style: normal;
          font-weight: normal;
          font-size: 1.25vw;
          line-height: 29px;
          color: #0e243c;
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
          }
        }
      }
    }
    .chat {
      width: 31vw;
      height: 59.3vh;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      padding-left: 40px;
      position: relative;
      z-index: 2;
      .inputs-content {
        position: absolute;
        width: 31vw;
        height: 59.3vh;
        background: none;
        border-radius: 50px;
        padding-left: 40px;
        #mail {
          width: 78%;
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
        }
        #messageText {
          height: 70%;
          width: 78%;
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
        img {
          width: 3.6vw;
          height: 3.6vw;
          position: absolute;
          bottom: 40px;
          right: 21px;
          cursor: pointer;
        }
        .sendError1,
        .sendError2 {
          border: 2px solid red !important;
          color: red !important;
        }
      }
      .animationInputs {
        animation-name: inputAnimation;
        animation-duration: 2s;
        top: -100%;
        opacity: 0;
        z-index: 1;
      }
      .sendMessage {
        width: 20.8333333333vw;
        height: 21.4814814815vh;
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
        animation-duration: 2s;
        position: absolute;
        bottom: 30%;
      }
    }
  }
}
@keyframes sendMessage {
  0% {
    bottom: -100%;
  }

  100% {
    bottom: 30%;
  }
}
@keyframes inputAnimation {
  0% {
    top: 0%;
    opacity: 0.7;
  }

  100% {
    top: -100%;
    opacity: 0;
  }
}
</style>
