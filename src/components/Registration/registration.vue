<template>
  <div class="registration column items-center">
    <h2>Գրանցում</h2>
    <div class="registration-container row justify-center">
      <img src="images/registration-person.png" alt="person" class="self-end" />
      <div class="registration-form row justify-center items-center self-start">
        <div class="inputs-container row justify-evenly">
          <input
            v-model="name"
            placeholder="Անուն *"
            class="inputForName inputs col-6"
          />
          <input
            v-model="surname"
            placeholder="Ազգանուն *"
            class="inputForSurname inputs col-6"
          />
          <input
            v-model="age"
            placeholder="Տարիք *"
            class="inputForAge inputs col-6"
          />
          <input
            v-model="phone"
            placeholder="Հեռախոսահամար *"
            class="inputForPhone inputs col-6"
            type="tel"
          />
          <input
            v-model="email"
            placeholder="Էլ․ հասցե *"
            class="inputForEmail inputs col-6"
            type="email"
          />
          <input
            v-model="education"
            placeholder="Կրթություն *"
            class="inputForeducation inputs col-6"
          />
        </div>
        <button @click="register">Գրանցվել</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "src/api";

export default {
  data() {
    return {
      name: "",
      surname: "",
      age: "",
      phone: "",
      email: "",
      education: "",
    };
  },
  inject: ["isOnRegistration", "isOffRegistration"],
  mounted() {
    this.isOnRegistration();
  },
  computed: {
    personInfo() {
      return {
        name: this.name,
        surname: this.surname,
        age: this.age,
        phone: this.phone,
        email: this.email,
        education: this.education,
      };
    },
  },
  unmounted() {
    this.isOffRegistration();
  },
  methods: {
    async register() {
      await Api.Register(this.personInfo);
      this.name = "";
      this.surname = "";
      this.age = "";
      this.phone = "";
      this.email = "";
      this.education = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.registration {
  h2 {
    margin-bottom: 3vw;
    @include noteBook {
      margin-bottom: 100px;
    }
    @include tablet {
      margin-bottom: 60px;
    }
  }
  .registration-container {
    width: 100%;

    img {
      width: 36vw;
      height: 32.2vw;
      @include afterNotebook {
        width: 30vw;
        height: 31.7vw;
      }

      @include noteBook {
        width: 40vw;
        height: 40vw;
        position: absolute;
        left: 0;
        bottom: 0%;
      }
      @include tablet {
        display: none;
      }
    }

    .registration-form {
      width: 750px;
      padding: 5vh 2vw;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      @include afterNotebook {
        width: 50%;
        // padding: 70px 20px;
      }
      @include noteBook {
        width: 640px;
        // padding: 50px 40px;
      }
      @include tablet {
        width: 570px;
        padding: 40px 20px;
      }
      @include mobile {
        width: 300px;
        border-radius: 30px;
        margin-bottom: 55px;
        margin-top: 0;
      }
      .inputs-container {
        margin-bottom: 7.40740740741vh;
        @include mobile {
          // margin-bottom: 40px;
        }
        .inputs {
          width: 45%;
          height: 60px;
          padding-left: 40px;
          font-family: Nortar;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 16px;
          color: #0e243c;
          border: 2px solid #004a5d;
          border-radius: 20px;
          margin-top: 40px;
          outline: none;
          z-index: 10;
          @include mobile {
            width: 240px;
            font-size: 12px;
          }
        }
        .inputForName,
        .inputForSurname {
          margin-top: 0px;
        }
        .inputForSurname {
          @include mobile {
            margin-top: 40px;
          }
        }
        .inputForName,
        .inputForAge,
        .inputForEmail {
          margin-left: 0px;
        }
      }
      > button {
        @include button();
        font-family: Nortar;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        padding: 22px 74px;
        z-index: 1000;
      }
    }
  }
}
</style>
