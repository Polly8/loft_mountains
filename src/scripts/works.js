
import Vue from "vue";

const btns = {
    template: "#works-slider-btns",
};

const thumbs = {
    template: "#works-slider-thumbs",
    props: ["works", "currentWork"],
};


const left = {
    template: "#works-slider-left",
    components: { thumbs, btns },
    props: ["currentWork", "works", "currentIndex"],
    computed: {
        reversedWorks(){
            const works = [...this.works];
            return works.reverse();
        }
    }
};

const tags = {
    template: "#works-slider-tags",
    props: ["tags"]
};

const right = {
    template: "#works-slider-right",
    components: { tags },
    props: ["currentWork"],
    computed: {
        tagsArray(){
            return this.currentWork.skills.split(",");
        }
    }
};



new Vue({
    el: "#works-slider-component",
    template: "#works-slider-container",
    components: { left, right },
    data(){
        return {
            works: [],
            currentIndex: 0,
        };
    },
    
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },

    watch: {
        currentIndex(value){
            
            
        }
    },

    methods: {
        handleSlide(direction){
            const maxLength = this.works.length - 1;
            const nextBtn = document.querySelector(".projects__slider-prev");
            const prevBtn = document.querySelector(".projects__slider-next");
            switch(direction){
                case "next":
                    if(this.currentIndex < maxLength) this.currentIndex++;  
                    break;
                case "prev":
                    if(this.currentIndex > 0) this.currentIndex--;
                    break;
            }

            if(this.currentIndex === maxLength){
                nextBtn.classList.add("disabled");
            }else{
                if(nextBtn.classList.contains("disabled")){
                    nextBtn.classList.remove("disabled");
                }
            }

            if(this.currentIndex === 0){
                prevBtn.classList.add("disabled");
            }else{
                if(prevBtn.classList.contains("disabled")){
                    prevBtn.classList.remove("disabled");
                }
            }
        },

        makeArrWithRequireImages(array){
            return array.map(item => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;

                return item;
            })
        }
    },

    created(){
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequireImages(data);
        
    }
});