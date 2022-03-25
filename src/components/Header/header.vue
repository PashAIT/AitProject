<template>
  <header :class="{ noScrollPages: isNoScrollPages }">
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
      <q-card class="bg-white text-black menu-modal-container">
        <div class="modal-header row justify-between items-center">
          <img src="images/aitModalLogo.png" alt="ait logo" />
          <img src="images/closeMenuModal.png" alt="close" v-close-popup />
        </div>
        <div class="modal-menu-items row justify-center items-center">
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
      </q-card>
    </q-dialog>
  </header>
</template>

<script>
import { COURSES } from "../../providers/constants";
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
          path: "",
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
          window.scrollTo(0, 920);
        }, 400);
      } else {
        this.$router.push(path);
      }
      this.headerModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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

  .logo {
    z-index: 1;
    cursor: pointer;
  }
  .menu {
    .navBar {
      display: flex;
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
  height: 100vh;
  display: grid;
  grid-template-rows: 18vh auto;
  .modal-header {
    height: max-content;
  }
  .modal-menu-items {
    .modal-navBar {
      font-family: "Nortar";
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 51px;
      color: #004a5d;
      height: 100%;
      li {
        list-style-type: none;
      }
    }
  }
}
.noScrollPages {
  padding-right: 10.9895833334vw;
}
@media screen and (max-width: 1300px) {
  .menu {
    .navBar {
      display: none !important;
    }
    > img {
      display: block !important;
    }
  }
}
@media screen and (min-width: 1299px) {
  .menu-modal-container {
    display: none;
  }
}
</style>
