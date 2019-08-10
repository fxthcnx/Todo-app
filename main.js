var app = new Vue({
    el: '#app',
    data: {
      todos: [],
     newTodoName: ""
    },
    methods: {
    addTodo: function() {
        const newTodo = {
            name: this.newTodoName,
            isDone: false
        };
        
        this.todos.unshift(newTodo);

        this.newTodoName = "";
    },
    deleteTodo: function(index) {
        this.todos.splice(index, 1);
    },
    toggleDone: function(index) {
        this.todos[index].isDone = !this.todos[index].isDone;
    }
 }
  });