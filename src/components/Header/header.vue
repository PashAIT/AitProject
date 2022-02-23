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
          @click="$router.push(navItem.path)"
        >
          {{ navItem.title }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
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
    };
  },
  props: {
    isNoScrollPages: Boolean,
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
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.noScrollPages {
  padding-right: 10.9895833334vw;
}
</style>
