<template>
  <div>
    <form class="form" v-on:submit.prevent="submit">
      <input required placeholder="NAME" type="text" v-model="name">
      <input required placeholder="PRICE" type="text" v-model="price">
      <button>Edit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  mounted() {
    this.GET_ITEM_BY_ID({id: this.$route.params.id})
    this.name = this.currentItem.name
    this.price = this.currentItem.price
  },
  data: function() {
    return {
      name: '',
      price: ''
    }
  },
  methods: {
    ...mapMutations(["GET_ITEM_BY_ID", "EDIT_ITEM"]),
    submit() {
      this.EDIT_ITEM({
        id: this.currentItem.id,
        name: this.name,
        price: this.price,
        date: this.currentItem.date
      })
    }
  },
  computed: {
    ...mapState(["currentItem"])
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