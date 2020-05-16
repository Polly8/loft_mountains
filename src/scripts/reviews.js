import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
    el: '.reviews',
    components: {
      Flickity
    },
    
    data() {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: false,
          pageDots: false,
          wrapAround: false,
          groupCells: true,
          freeScroll: false,
          contain: true,

        }
      }
    },
    
    methods: {
      next() {
        this.$refs.flickity.next();
      },
      
      previous() {
        this.$refs.flickity.previous();
      }
    }
  });