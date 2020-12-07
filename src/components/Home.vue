<template>
  <div class="home">
    <router-link class="button start" to="/main"><img src="/img/go.png" /></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="sass" scoped>
.button
  display: block
  width: 10vw
  height: 10vw

.start
  position: absolute
  bottom: 2vw
  right: 2vw
</style>
