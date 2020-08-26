import { LocalStorageService } from "@/services/LocalStorageService";

/**
 * @typedef Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Local storage key for todos
 * @type {string}
 */
export const STORAGE_KEY = "todoItems";

const state = {
  /** @type Todo[] */
  todos: []
};

const getters = {
  allUndoneTodos: state => state.todos.filter(todo => !todo.completed),
  allDoneTodos: state => state.todos.filter(todo => todo.completed)
};

const actions = {
  async fetchTodos({ commit }) {
    const todos = LocalStorageService.getItem(STORAGE_KEY, []);

    commit("setTodos", todos);
  },
  async persistTodos({ state }) {
    LocalStorageService.setItem(STORAGE_KEY, state.todos);
  },
  async addTodo({ commit, dispatch }, title) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    commit("newTodo", newTodo);
    dispatch("persistTodos");
  },
  async deleteTodo({ commit, dispatch }, id) {
    commit("removeTodo", id);
    dispatch("persistTodos");
  },
  async updateTodo({ commit, dispatch }, updatedTodo) {
    commit("updateTodo", updatedTodo);
    dispatch("persistTodos");
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
