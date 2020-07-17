<template>
    <div>
        <div v-for="x in blogs" :key="x.id">
            <header>{{x.title}}</header>
            <div>
                {{x.id}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "MainPage",
        data() {
            return {};
        },
        computed: {
            ...mapState(["blogs"])
        },
        created() {
            this.loadBlogs();
        },
        methods: {
            ...mapActions(["loadBlogs"])
        }
    };
</script>