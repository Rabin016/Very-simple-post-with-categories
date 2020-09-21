<template>
    <div class="w-10/12 md:w-8/12 mx-auto bg-gray-100 p-5 rounded-xl">
        <Alart v-if="alartMsg" :alart-msg="alartMsg" />
        <Addpost
            v-if="show"
            :all-categories="allCategories"
            @closeModal="closeModal()"
            @postAlart="alartFunc($event)"
            @reloadCategory="reloadCategory"
        />
        <Editpost
            v-if="editableID"
            :editable-i-d="editableID"
            :all-categories="allCategories"
            @closeModal="closeModal($event)"
            @postAlart="alartFunc($event)"
            @reloadCategory="reloadCategory"
        />
        <div class="flex justify-between items-center">
            <h2 class="text-lg font-semibold">List of Posts</h2>
            <div class="flex">
                <button
                    class="flex items-center px-3 py-2 mr-5 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300"
                    @click="show = !show"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                        ></path></svg
                    ><span class="px-1 hidden md:inline-block">Add post</span>
                </button>
                <router-link
                    to="/categories"
                    class="flex items-center px-3 py-2 bg-indigo-600 text-gray-200 no-underline font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300"
                >
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="view-list w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path></svg
                    ><span class="px-1 hidden md:inline-block"
                        >View category</span
                    >
                </router-link>
            </div>
        </div>
        <Postlist
            :all-posts="allPosts"
            @triggerDelPost="deletePost($event)"
            @triggerEdit="editPostID($event)"
        />
    </div>
</template>

<script>
import axios from "axios";
import Postlist from "../components/Postlist";
import Addpost from "../components/Addpost";
import Editpost from "../components/Editpost";
import Alart from "../components/Alart";

export default {
    name: "Home",
    components: {
        Postlist,
        Addpost,
        Alart,
        Editpost,
    },
    props: {
        allCategories: Array,
    },
    data() {
        return {
            allPosts: null,
            show: false,
            alartMsg: null,
            editableID: null,
        };
    },

    created() {
        this.loadPosts();
    },
    methods: {
        async loadPosts() {
            try {
                const { data } = await axios.get(
                    "https://post-category-life-rc.herokuapp.com/api/posts"
                );
                this.allPosts = data;
            } catch (err) {
                this.alartMsg = { dangerMsg: "Post not loaded", err };
            }
        },
        async deletePost(id) {
            try {
                const { data } = await axios.delete(
                    `https://post-category-life-rc.herokuapp.com/api/posts/${id}`
                );
                this.alartMsg = data;
                this.loadPosts();
                this.clearAlart();
            } catch (err) {
                this.alartMsg = { dangerMsg: "Post not deleted" };
            }
        },
        closeModal(e) {
            if (e == "edit") {
                this.editableID = null;
            } else {
                this.show = !this.show;
            }
        },
        alartFunc(data) {
            this.alartMsg = data;
            this.loadPosts();
            this.clearAlart();
        },
        clearAlart() {
            setTimeout(() => (this.alartMsg = null), 3000);
        },
        editPostID(id) {
            this.editableID = id;
        },
        reloadCategory() {
            this.$emit("reloadCategory");
        },
    },
};
</script>
