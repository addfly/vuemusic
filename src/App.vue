<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang='stylus'>
#app {
    position: relative;
    &.musicBar-on {
        padding-bottom: $musicBarHeight;
    }
    a {
        color: $linkColor;
    }
}
</style>
