<template>
  <header
    :class="{ noScrollPages: isNoScrollPages }"
    data-aos="fade-down"
    data-aos-duration="1600"
  >
    <div class="logo">
      <img
        src="images/HeaderLogo.png"
        alt="header logo"
        @click="$router.push('/')"
      />
    </div>
    <div class="menu">
      <ul class="navBar">
        <li
          class="li"
          v-for="navItem in navBar"
          :key="navItem.id"
          @click="changePage(navItem.id, navItem.path)"
        >
          {{ navItem.title }}
        </li>
      </ul>
      <img src="images/Menu.png" alt="" @click="headerModal = true" />
    </div>
    <q-dialog
      v-model="headerModal"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white text-black menu-modal-container row">
        <div class="modal-header col-12">
          <div class="row justify-between items-center">
            <img class="aitLogo" src="images/aitModalLogo.png" alt="ait logo" />
            <img
              class="closeModal"
              src="images/closeMenuModal.png"
              alt="close"
              v-close-popup
            />
          </div>
        </div>
        <div class="modal-menu-items col-12">
          <div class="row justify-center items-center">
            <ul class="modal-navBar column justify-evenly items-center">
              <li
                class="li"
                v-for="navItem in navBar"
                :key="navItem.id"
                @click="changePage(navItem.id, navItem.path)"
              >
                {{ navItem.title }}
              </li>
            </ul>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </header>
</template>

<script>
import { COURSES } from "../../providers/constants";
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      navBar: [
        {
          id: 1,
          title: "Գլխավոր",
          path: "/",
        },
        {
          id: 2,
          title: "Դասընթաց",
          path: "#course",
        },
        {
          id: 3,
          title: "Մեր մասին",
          path: "/aboutUs",
        },
        {
          id: 4,
          title: "AIT բլոգ",
          path: "/aitblog",
        },
        {
          id: 5,
          title: "Կապ",
          path: "/contact",
        },
        {
          id: 6,
          title: "Մուտք",
          path: "/logIn",
        },
      ],
      headerModal: false,
    };
  },
  props: {
    isNoScrollPages: Boolean,
  },
  methods: {
    changePage(id, path) {
      if (id === COURSES) {
        this.$router.push("/");
        setTimeout(() => {
          this.handleScroll();
        }, 400);
      } else {
        this.$router.push(path);
      }
      this.headerModal = false;
    },
    handleScroll() {
      const ele = document.getElementById("course"); // You need to get your element here
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop;
      const duration = 0;
      setVerticalScrollPosition(target, offset, duration);
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";
header {
  font-family: NorTar;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5625vw 10.4166666667vw 0 10.4166666667vw;
  margin-bottom: 1.5vw;
  color: #004a5d;
  position: relative;
  @include afterNotebook {
    margin-bottom: 0;
  }
  .logo {
    z-index: 1;
    cursor: pointer;
    img {
      @include mobile {
        width: 80px;
        height: 80px;
      }
    }
  }
  .menu {
    .navBar {
      display: flex;
      @include noteBook {
        display: none;
      }
      .li {
        list-style-type: none;
        margin-left: 60px;
        cursor: pointer;
        font-size: 16px;
        line-height: 16px;
        color: #004a5d;
        text-decoration: none;
      }
      :first-child {
        margin-left: 0;
      }
    }
    > img {
      display: none;
      cursor: pointer;
      @include mobile {
        width: 40px;
        height: 23px;
      }
      @include noteBook {
        display: block;
      }
    }
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.menu-modal-container {
  padding: 1.5625vw 10.4166666667vw 0 10.4166666667vw;
  .modal-header {
    .aitLogo {
      @include mobile {
        width: 80px;
        height: 80px;
      }
    }
    .closeModal {
      @include mobile {
        width: 28px;
        height: 25px;
      }
    }
  }
  .modal-menu-items {
    height: 70%;
    > div {
      height: 100%;
    }
    .modal-navBar {
      font-family: "Nortar";
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 51px;
      color: #004a5d;
      height: 100%;
      @include mobile {
        justify-content: space-between;
      }
      li {
        list-style-type: none;
        @include mobile {
          font-size: 30px;
        }
      }
    }
  }
}
.noScrollPages {
  padding-right: 10.9895833334vw;
}
@media screen and (min-width: 1299px) {
  .menu-modal-container {
    display: none;
  }
}
</style>
