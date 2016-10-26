<template>

  <section class="content">
    <swiper class="my-swipe" :options="swiperOption">
    </swiper>
    <div class="movie">
      <coming-soon :films="comingSoonFilms"></coming-soon>
    </div>
  </section>

</template>
<style lang="less">

  .my-swipe {
    height: 9rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img {
    width: 100%;
  }

  .movie ul {
    padding-top: 18px;
  }
</style>
<script>
  import NowPlaying from './now-playing'
  import ComingSoon from './coming-soon'
  import ImagePlaceholder from '../../components/image-placeholder'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'

  export default{
    computed: {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true
      },
      ...mapGetters({
        comingSoonFilms: 'getComingSoonFilms',
        nowPlayingFilms: 'getNowPlayingFilms',
        billboards: 'getBillboards'
      })
    },
    created () {
    },
    components: {
      NowPlaying, ComingSoon, ImagePlaceholder, swiper, swiperSlide
    }
  }
</script>
