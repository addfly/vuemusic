<template>
  <div id="banner">
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item class="swiper-item" v-for="(item,index) in json" :key="index">
        <router-link to="/">
          <img :src="item.sound.pic_640" alt="">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <mt-button type="default">default</mt-button>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>

<style lang='stylus' scoped>
$banner_height = toRem(160);
#banner {
    width: 100%;
    padding: toRem(10);
    height: $banner_height;
    background-color: #e8e8e8;
    .swiper {
        width: 100%;
        height: 156px;
    }
    .swiper-item {
        width: 100%;
        height: 100%;
        a {
            display: block;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
