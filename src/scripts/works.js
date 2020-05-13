
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

    methods: {
        handleSlide(direction){
            switch(direction){
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
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