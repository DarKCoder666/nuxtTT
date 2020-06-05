<template>
  <div>
    <a class="addItem" href="/addItem">ADD ITEM</a>
    <ul>
      <Item v-for="(item, index) in currentItems" v-bind:item="item" :key="index" />
    </ul>

    <Pagination />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Item from "~/components/Item";
import Pagination from "~/components/Pagination";

export default {
  components: {
    Item,
    Pagination
  },
  computed: mapState(["currentItems"])
};
</script>

<style>
.addItem {
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
