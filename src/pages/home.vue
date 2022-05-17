<template>
  <main>
    <welcome-content />
    <course />
    <Path />
    <Opinions />
  </main>
</template>

<script>
import Course from "../components/Course/course.vue";
import Opinions from "../components/Opinions/opinions.vue";
import Path from "../components/Path/path.vue";
import welcomeContent from "../components/Welcome-content/welcome-content.vue";
import Api from "src/api";

export default {
  components: { welcomeContent, Course, Path, Opinions },
};
</script>

<style lang="scss" scoped></style>
