<!-- template에 들어가는 html 태그는 한개만 존재 해야 한다. -->
<template>
    <div class="inputBox shadow">
        <!--  v-model을 통해 인스턴스의 데이터와 input창을 연결하고, input창 칩력후 엔터 누르면 AddToDo 메서드 실행 -->
        <input type="text" v-model="newToDoItem" v-on:keyup.enter="addToDo">
        <span class="addContainer" v-on:click="addToDo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                newToDoItem: ""
            }
        },
        methods: {
            addToDo () {
                if(this.newToDoItem != "") {
                    this.$store.commit("addToDoItems", this.newToDoItem)
                    // this.$emit("addToDoItems", this.newToDoItem)
                    this.clearInput()
                }                
            },
            clearInput () {
                this.newToDoItem = " "
            }
            

        }
    }
</script>

<style scoped>
    input :focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 1rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB,#8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    button {
        margin-left: 1rem;
    }
</style>

