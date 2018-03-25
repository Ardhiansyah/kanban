<template>
  <div class="modal" :class="{ 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Title</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input id="title" class="input" type="text" placeholder="Title">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Description</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input id="description" class="input" type="text" placeholder="Description">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Point</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input id="point" class="input" type="number" placeholder="Point">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Assigned to</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input id="assign" class="input" type="text" placeholder="Assigned to">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary" @click="insertNewCard">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  methods: {
    closeModal() {
      this.$store.commit('changeModalStatusActive', false);
    },
    insertNewCard() {
      this.$store.dispatch('insertNewCard', {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        point: document.querySelector('#point').value,
        assign: document.querySelector('#assign').value,
        status: 0,
      });

      document.querySelector('#title').value = '';
      document.querySelector('#description').value = '';
      document.querySelector('#point').value = '';
      document.querySelector('#assign').value = '';
    },
  },
  computed: {
    isModalActive() {
      return this.$store.state.modalActive;
    },
  },
};
</script>

<style>
.modal-content {
  background-color: wheat;
  padding: 8px;
}

/* .field {
  margin: 8px;
} */
</style>
