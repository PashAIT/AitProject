<template>
  <div class="logIn">login</div>
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

<style></style>
