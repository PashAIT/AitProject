<template>
  <div class="logIn column items-center">
    <h2>Մուտք</h2>
    <div class="input-container column items-center justify-center">
      <input
        type="text"
        name="login"
        id="login"
        class="inputs"
        placeholder="Մուտքանուն"
      />
      <input
        type="password"
        name="password"
        class="inputs"
        id="password"
        placeholder="Գաղտնաբառ"
      />
      <button>Մուտք</button>
    </div>
  </div>
</template>

<script>
export default {
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
@import "../css/mixins.scss";

.logIn {
  @include tablet {
    padding-top: 10%;
  }
  @include noteBook {
    padding-top: 6%;
  }
  h2 {
    margin-bottom: 4vw;
    @include tablet {
      margin-bottom: 60px;
    }
  }
  .input-container {
    width: 39.0625vw;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
    padding: 4vw 5vw;
    @include tablet {
      width: 280px;
      border-radius: 30px;
      padding: 30px;
    }

    .inputs {
      width: 90%;
      border: 2px solid #004a5d;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 6% 0 6% 8%;
      font-family: Nortar;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #0e243c;
      outline: none;
      @include mobile {
        border-radius: 10px;
        font-size: 12px;
      }
      @include noteBook {
        width: 100%;
      }
    }
    > :first-child {
      margin-bottom: 40px;
      @include mobile {
        margin-bottom: 20px;
      }
    }
    #password {
      margin-bottom: 60px;
      @include mobile {
        margin-bottom: 30px;
      }
    }
  }
  button {
    @include button();
    padding: 22px 89px;
    font-style: normal;
    font-weight: bold;
    @include mobile {
      padding: 18px 75px;
    }
  }
}
</style>
