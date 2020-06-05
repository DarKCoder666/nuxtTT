<template>
  <div>
    <form class="form" v-on:submit.prevent="submit">
      <input required placeholder="NAME" type="text" v-model="name">
      <input required placeholder="PRICE" type="text" v-model="price">
      <button>Create</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: function() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    ...mapMutations(["ADD_ITEM"]),
    submit() {
      this.ADD_ITEM({
        name: this.name,
        price: this.price
      })
    }
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
}
</style>