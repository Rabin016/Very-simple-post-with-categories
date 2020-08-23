<template>
    <div
        id="app"
        class="font-mon bg-gray-200 text-gray-800 font-medium min-h-screen transition-all ease-in-out duration-300 pb-5"
    >
        <Navbar />
        <router-view
            :all-categories="allCategories"
            @reloadCategory="loadCategories()"
        />
    </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar";

export default {
    name: "App",
    components: {
        Navbar,
    },
    data: () => ({
        allCategories: null,
    }),
    mounted() {
        this.loadCategories();
    },
    methods: {
        async loadCategories() {
            try {
                const { data } = await axios.get(
                    "http://localhost:5000/api/categories"
                );
                this.allCategories = data;
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.font-mon {
    font-family: "Montserrat", sans-serif;
}
.absolute-center2 {
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    margin-top: 2rem;
    margin-left: 0.3rem;
}
.absolute-center3 {
    left: 25%;
    top: 50%;
    transform: translateX(-50%);

    margin-top: 1.5rem;
}
</style>
