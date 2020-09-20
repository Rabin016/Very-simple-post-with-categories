<template>
    <div class="bg-black bg-opacity-75 fixed inset-0 z-10">
        <div class="z-20 bg-white w-10/12 md:w-6/12 mx-auto my-10 rounded-xl">
            <div class="p-5">
                <div class="flex justify-between items-center">
                    <h3 class="font-semibold text-lg">Edit Post</h3>
                    <button
                        class="text-4xl hover:text-indigo-600"
                        @click="closeModal()"
                    >
                        &times;
                    </button>
                </div>
                <form class="py-5" @submit.prevent="submitPost()">
                    <div>
                        <label class="font-semibold text-sm pl-1" for="title"
                            >Title</label
                        >
                        <input
                            v-model="newPost.title"
                            class="py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300"
                            type="text"
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div class="my-5">
                        <label class="font-semibold text-sm pl-1" for="title"
                            >Description</label
                        >
                        <input
                            v-model="newPost.msg"
                            class="py-2 px-4 bg-gray-300 w-full rounded-lg placeholder-gray-700 border-2 border-transparent focus:bg-white focus:border-indigo-600 transition-all ease-in-out duration-300"
                            name="title"
                            type="text"
                            placeholder="Enter your post description"
                            required
                        />
                    </div>
                    <div class="py-5">
                        <div class="flex items-center">
                            <p>Categories</p>
                            <div class="relative">
                                <button
                                    class="font-bold w-6 h-6 bg-gray-300 rounded-full ml-3 text-center hover:text-indigo-600 hover:bg-indigo-100 transition-all ease-in-out duration-300"
                                    @click.prevent="show = !show"
                                >
                                    &#43;
                                </button>
                                <Addcategory
                                    v-if="show"
                                    class="absolute absolute-center2"
                                    @closeCategories="closeCategories"
                                    @reloadCategory="reloadCategory()"
                                />
                            </div>
                        </div>
                        <div
                            style="max-height:7rem"
                            class="flex items-center flex-wrap overflow-y-auto"
                        >
                            <label
                                v-for="category in allCategories"
                                :key="category._id"
                                class="inline-flex items-center m-5"
                            >
                                <input
                                    v-model="newPost.category_id"
                                    type="checkbox"
                                    class="form-checkbox h-5 w-5 text-indigo-600 border-2 border-indigo-600"
                                    :value="category._id"
                                /><span
                                    class="ml-2 text-gray-700 transition-all ease-in-out duration-300"
                                    >{{ category.type }}</span
                                >
                            </label>
                        </div>
                    </div>
                    <button
                        class="px-5 py-2 mr-5 bg-indigo-600 text-gray-200 font-semibold rounded-xl justify-between hover:bg-indigo-800 transition-all ease-in-out duration-300"
                        type="submit"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Addcategory from "./Addcategory";

export default {
    name: "Editpost",
    components: {
        Addcategory,
    },
    props: {
        allCategories: Array,
        editableID: String,
    },
    data: () => ({
        newPost: {
            title: null,
            msg: null,
            category_id: [],
        },
        show: false,
    }),
    async mounted() {
        if (this.editableID) {
            const { data } = await axios.get(
                `http://localhost:5000/api/posts/${this.editableID}`
            );
            this.newPost.title = data.title;
            this.newPost.msg = data.msg;
            this.newPost.category_id.push(...data.category_id);
        }
    },
    methods: {
        async submitPost() {
            try {
                if (this.newPost.category_id != []) {
                    const { data } = await axios.patch(
                        `http://localhost:5000/api/posts/${this.editableID}`,
                        this.newPost
                    );
                    this.$emit("postAlart", data);
                    this.closeModal();
                } else {
                    this.$emit("postAlart", {
                        dangerMsg: "Category can't be empty",
                    });
                }
            } catch (error) {
                this.$emit("postAlart", {
                    dangerMsg: "Something went wrong",
                    error,
                });
            }
        },
        closeModal() {
            this.$emit("closeModal", "edit");
        },
        closeCategories() {
            this.show = false;
        },
        reloadCategory() {
            this.$emit("reloadCategory");
        },
    },
};
</script>

<style></style>
