<template>
  <!-- <div class="column" :class="[ color ]">{{ color }}</div> -->
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" :class="[ color ]">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content" v-for="(data, i) in dataCard" :key="i">
        <card-item :detailCard="data" :button="title"></card-item>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  props: ['color', 'title', 'dataCard'],
  name: 'CardBoard',
  components: {
    CardItem,
  },
};
</script>

<style scoped>
.card {
  min-width: 20%;
  margin: 0 4px;
}
.card-header-title {
  color: white;
  display: block;
}
.card-back-log {
  background-color: #9c3848;
}
.card-to-do {
  background-color: #ffad69;
}
.card-doing {
  background-color: #266dd3;
}
.card-done {
  background-color: #20bf55;
}
</style>
