<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in this.$store.getters.getToDoItems" v-bind:key="todoItem" class="shadow">
                <i v-bind:class="{checkBtnCompleted: todoItem.completed}" class="fa-regular fa-circle-check checkBtn" v-on:click="toggleComplete(todoItem,index)"></i>
                <!-- todoItem.completed가 true면 textCompleted라는 클래스가 존재하게 되고 false면 사라진다. -->
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        // props: ['todoItems'],
        methods:{
            removeTodo (todoItem, index) {
                this.$store.commit("removeToDoItem", {todoItem, index})
                // this.$emit("removeToDoItem", todoItem, index)
            },
            toggleComplete (todoItem, index) {
                const obj = {
                    todoItem,
                    index
                }
                console.log(index)
                this.$store.commit("toggleCompleted", obj)
                // this.$emit("toggleCompleted", todoItem,index)
            }
        }
    }
</script>

<style scoped>
    .nonChecked {
        display: none;
    }
    .checked {
        display: none;
    }

    .checked1 {
        display: block;
    }

    ul{
        list-style: none;
        padding-left: 0px;
        margin-top: 0px;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted {
        color: #b3adad;
    }
    .textCompleted {
        text-decoration: line-through;
        color: #b3adad;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>