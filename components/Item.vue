<template>
  <li>
    {{ `${item.name} - ${item.price} - ${date}`}}
    <button v-on:click="remove">Remove</button>  
    <button v-on:click="edit">Edit</button>  
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: Object
  },
  computed: {
    date() {
      const date = new Date(this.item.date)
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
  },
  methods: {
    ...mapMutations(["REMOVE_ITEM"]),
    remove() {
      this.REMOVE_ITEM({ itemID: this.item.id })
    },
    edit() {
      this.$router.push(`/editItem/${this.item.id}`)
    }
  }
}
</script>

<style>

</style>