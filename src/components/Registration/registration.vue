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
        <button>Գրանցվել</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  unmounted() {
    this.isOffRegistration();
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

.registration {
  h2 {
    margin-bottom: 3vw;
  }
  .registration-container {
    width: 100%;
    img {
      width: 32vw;
      height: 30vw;
    }
    .registration-form {
      width: 39.0625vw;
      padding: 4vh 1vw;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
      margin-bottom: 5vh;
      .inputs-container {
        margin-bottom: 5vh;
        .inputs {
          width: 15.625vw;
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
        }
        .inputForName,
        .inputForSurname {
          margin-top: 0px;
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
      }
    }
  }
}
</style>
