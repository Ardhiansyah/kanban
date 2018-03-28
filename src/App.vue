<template>
  <div id="app">
    <h2 style="position:absolute;left:10%;top:1%;">Kanban</h2>
    <a class="button is-primary" style="position:absolute;right:10%;top:1%;" @click="openModal">
      Add
    </a>
    <div class="columns is-desktop">
      <card-board color="card-back-log" title="Back-Log" :dataCard="cardBackLog"></card-board>
      <card-board color="card-to-do" title="To-Do" :dataCard="cardToDo"></card-board>
      <card-board color="card-doing" title="Doing" :dataCard="cardDoing"></card-board>
      <card-board color="card-done" title="Done" :dataCard="cardDone"></card-board>
    </div>
    <modal-form></modal-form>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import CardBoard from '@/components/CardBoard';
import ModalForm from '@/components/ModalForm';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CardBoard,
    ModalForm,
  },
  methods: {
    openModal() {
      this.$store.commit('changeModalStatusActive', true);
    },
  },
  computed: {
    ...mapGetters([
      'cardBackLog',
      'cardToDo',
      'cardDoing',
      'cardDone',
    ]),
  },
  created() {
    this.$store.dispatch('listenCardData');
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.columns {
  justify-content:center;
}
</style>
