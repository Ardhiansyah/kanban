<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ detailCard.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <h5>Description</h5>
        <p>{{ detailCard.description }}</p>
        <br>
        <h5>Assign To</h5>
        <p>{{ detailCard.assign }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="left(detailCard.status, detailCard.key)" class="card-footer-item">Left</a>
      <a href="#" class="card-footer-item">Delete</a>
      <a @click="right(detailCard.status, detailCard.key)" class="card-footer-item">Right</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['detailCard'],
  name: 'CardItem',
  methods: {
    right(value, key) {
      this.$store.dispatch('changeStatusCard', { data: value + 1, key });
    },
    left(value, key) {
      this.$store.dispatch('changeStatusCard', { data: value - 1, key });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

  .card {
    width: 100%;
  }

  h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
</style>
