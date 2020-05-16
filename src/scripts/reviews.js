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
        this.checkButtons();
      },
      
      previous() {
        this.$refs.flickity.previous();
        this.checkButtons();
      },

      checkButtons() {
        const FlickityIndex = this.$refs.flickity.selectedIndex();
        const thisBtnPrev = document.querySelector(".reviews__btns-prev");
        const thisBtnNext = document.querySelector(".reviews__btns-next");
        if(FlickityIndex == 0){
          thisBtnPrev.classList.add("disabled");
          thisBtnNext.classList.remove("disabled");
          this.$el.querySelector(".reviews__btns-prev").disabled = true;
          this.$el.querySelector(".reviews__btns-next").disabled = false;
        }else if (FlickityIndex == this.$refs.flickity.slides().length - 1){
          this.$el.querySelector(".reviews__btns-next").disabled = true;
          this.$el.querySelector(".reviews__btns-prev").disabled = false;
          thisBtnNext.classList.add("disabled");
          thisBtnPrev.classList.remove("disabled");
        }else{
          thisBtnPrev.classList.remove("disabled");
          thisBtnNext.classList.remove("disabled");
          this.$el.querySelector(".reviews__btns-next").disabled = false;
          this.$el.querySelector(".reviews__btns-prev").disabled = false;
        }
      }
    }
  });