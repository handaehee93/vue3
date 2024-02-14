<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in this.getToDoItems" v-bind:key="todoItem" class="shadow">
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

    import {mapGetters} from "vuex"

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
        },
        // template코드에서 {{}}를 사용하면 데이터의 속성 값을 표현할 수 있는데 추가적으로
        // 여기서 자바스크립트의 내장 Api를 사용하여 간단한 계산을 할 수가 있다.
        // 하지만 이렇게 계산까지 들어가면 가독성이 떨어지므로 computed에 선언하여 {{}}에는 compute에 선언한 함수를 호출하여 값을 사용한다.
        // 아래와 같이 해 두면 html 코드의 가독성을 늘릴 수 있다.
        computed : {
            // getToDoItems () {
            //     return this.$store.getters.getToDoItems
            // }
            ...mapGetters(["getToDoItems"])
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