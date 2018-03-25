import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);
const db = firebase.initializeApp(
  {
    databaseURL: 'https://kanban-d89dd.firebaseio.com/',
    projectId: 'kanban-d89dd',
  },
).database().ref('task');

export default new Vuex.Store({
  state: {
    modalActive: false,
    card: [],
  },
  getters: {
    cardBackLog(state) {
      return state.card.filter(e => e.status === 0);
    },
    cardToDo(state) {
      return state.card.filter(e => e.status === 1);
    },
    cardDoing(state) {
      return state.card.filter(e => e.status === 2);
    },
    cardDone(state) {
      return state.card.filter(e => e.status === 3);
    },
  },
  mutations: {
    changeModalStatusActive(state, value) {
      state.modalActive = value;
    },
    setCard(state, value) {
      state.card = value;
    },
  },
  actions: {
    insertNewCard(context, value) {
      db.push(value);
    },
    changeStatusCard(context, value) {
      db.child(value.key).update({ status: value.data });
    },
    listenCardData(context) {
      db.on('value', (snapshot) => {
        const array = [];
        snapshot.forEach((e) => {
          const item = e.val();
          item.key = e.key;

          array.push(item);
        });
        context.commit('setCard', array);
      });
    },
  },
});
