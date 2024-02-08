
<template>
  <div id="app1">
    <ToDoHeader></ToDoHeader>
    <ToDoInput ></ToDoInput>
    <ToDoList v-bind:todoItems="todoItems" ></ToDoList>
    <ToDoFooter ></ToDoFooter>
    <ajaxTest v-bind:ajax="ajax"></ajaxTest>
  </div>
</template>

<script>

// 1. 각각의 컴포넌트를 import 해온다.
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoFooter from './components/ToDoFooter.vue';
import ToDoInput from './components/ToDoInput.vue';
import ToDoList from './components/ToDoList.vue';
import ajaxTest from './components/ajaxTest.vue';
import axios from 'axios'

export default {
    // 2. 컴포넌트를 등록한다.  
    components: {
      ToDoHeader,
      ToDoInput,
      ToDoList,
      ToDoFooter,
      ajaxTest
    },
    // 3. App.vue에서 사용할 데이터를 선언한다. 여기서는 todoItems라는 배열을 선언  
    data () {
        return {
            todoItems: [],
            ajax:[]
        }
    },
    // 4. App.vue 인스턴스가 마운트 되면 호출될 함수를 만든다.
    // created는 인스턴스가 처음 생성되면 호출되는 api.
    // App.vue 컴포넌트가 마운트가 되면 아래 created가 호출된다.
    // created 내부에서는 로컬 스토리지에서 데이터를 가져와 todoItems라는 배열에 담고 있다.
    created () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            // .then(resp => console.log(resp.data))
            .then(resp => this.ajax = (resp.data))
        
        
        // if(localStorage.length>0) {
        //     for(let i = 0; i< localStorage.length; i++) {
        //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        //     }
        // }
    },
    // 5. App.vue에서 사용할 메서드
    // 현재 App.vue는 Root 컴포넌트 이기 때문에 아래 메서드를 하위 컴포넌트에 전달해
    // 하위 컴포넌트로 부터 이벤트를 넘겨 받아야 한다.
    methods : {
      // 새로운 ToDo를 등록하는 메서드
      // addToDoItems (newToDoItem) {
      //   const obj = {completed : false, item: newToDoItem}
      //   localStorage.setItem( newToDoItem , JSON.stringify(obj))
      //   this.todoItems.push(obj)
      // },
      // ToDo를 삭제하는 메서드
      // removeToDoItem (todoItem, index) {
      //   localStorage.removeItem(todoItem.item)
      //   this.todoItems.splice(index,1)
      // },
      // ToDo의 완료 버튼을 클릭했을 때 사용되는 메서드
      // toggleCompleted (todoItem, index) {
      //   // todoItem.completed = !todoItem.completed 처럼 전달 받은 props를 다시 올려서 값을 수정하는 것은 안티 패턴이다.
      //   // 따라서 아래와 같이 컨테이너 역할을 하는 App.vue의 todoItems를 수정하는 것이 좋다.
      //   this.todoItems[index].completed = !this.todoItems[index].completed
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      // },
      // 전체 ToDo 삭제 메서드
      // allClearTodos () {
      //   localStorage.clear();
      //   this.todoItems = []
      // }
    }

}
</script>

<style >
  body{
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
