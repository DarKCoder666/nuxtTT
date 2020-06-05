<template>
  <div>
    <button v-bind:class="{ disabled: isPrevDisabled }" v-on:click="prev"><<</button>
    <button>{{ pagination.page }}</button>
    <button v-bind:class="{ disabled: isNextDisabled }" v-on:click="next">>></button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["pagination"]),
    isNextDisabled() {
      return this.pagination.nextDisabled
    },
    isPrevDisabled() {
      return this.pagination.prevDisabled
    }
  },
  methods: {
    ...mapMutations(["NEXT_PAGE", "PREV_PAGE"]),
    next() {
      if(!this.isNextDisabled) this.NEXT_PAGE()
    },
    prev() {
      if(!this.isPrevDisabled) this.PREV_PAGE()
    }
  }

}
</script>

<style>
.disabled {
  cursor: not-allowed;
}
</style>