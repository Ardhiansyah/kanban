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
      <a id="left-footer"
        @click="left(detailCard.status, detailCard.key)" class="card-footer-item" v-if="button !== 'Back-Log'">
        <i class="fa fa-chevron-left" style="color: black;"></i>
      </a>
      <a id="middle-footer" @click="remove(detailCard.key)" class="card-footer-item">
        <i class="fa fa-remove" style="color: red;"></i>
      </a>
      <a id="right-footer"
        @click="right(detailCard.status, detailCard.key)" class="card-footer-item" v-if="button !== 'Done'">
        <i class="fa fa-chevron-right" style="color: black;"></i>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['detailCard', 'button'],
  name: 'CardItem',
  methods: {
    right(value, key) {
      this.$store.dispatch('changeStatusCard', { data: value + 1, key });
    },
    remove(key) {
      this.$store.dispatch('removeCard', key);
    },
    left(value, key) {
      this.$store.dispatch('changeStatusCard', { data: value - 1, key });
    },
  },
  created() {
      console.log(this.button);
      // document.getElementById('left-footer').style.visibility = 'hidden';
    if (this.button === 'Back-Log') {
    }
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
