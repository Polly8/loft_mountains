
import Vue from "vue";

const skill = {
    template: "#skill",
    props: ["skill"],
    mounted() {
        const circle = this.$refs["circle"];
        circle.style.animationDelay = this.skill[1];
    }
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill,
    },
    props: ["category"]
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow,
    },

    data(){
        return{
            skills: []
        }
    },

    created(){
        const data = require("../data/skills.json");
        this.skills = data;
    }
});

