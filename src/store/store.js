import {createStore} from "vuex"


const storage = {

 fetch () {
        const arr = []
        if(localStorage.length>0) {
            for(let i = 0; i< localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
        return arr;
    }
}

const store = createStore({
    // state () {
    //     return {
    //          todoItems: storage.fetch(),
    //          headerText: "hello"
    //     }
    // },
    state : {
        todoItems: storage.fetch(),
        headerText: "hello"
    },
    getters : {
        getToDoItems (state) {
            return state.todoItems
        }
    },
    mutations : {
        // 새로운 todo를 등록하는 메서드
        addToDoItems (state, newToDoItem) {
            const obj = {completed : false, item: newToDoItem}
            localStorage.setItem( newToDoItem , JSON.stringify(obj))
            state.todoItems.push(obj)
          },
        // ToDo를 삭제하는 메서드
        removeToDoItem (state, payload) {
            localStorage.removeItem(payload.todoItem.item)
            state.todoItems.splice(payload.index,1)
        },
        toggleCompleted (state, payload) {
            console.log(payload.index)
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
        },
        allClearTodos (state) {
            localStorage.clear();
            state.todoItems = []
        }
    }
})



export default store;