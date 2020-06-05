import { ITEMS_PER_PAGE, DEFAULT_PAGE } from '~/consts/items'

export const state = () => ({
  isLoaded: false,
  lastID: null,
  items: [],
  currentItem: {},
  currentItems: [],
  pagination: {
    page: DEFAULT_PAGE,
    itemsPerPage: ITEMS_PER_PAGE,
    prevDisabled: false,
    nextDisabled: false
  }
})

export const mutations = {
  SET_ITEMS(state, { items, lastID }) {
    const { page, itemsPerPage } = state.pagination
    const startSlice = (page - 1) * itemsPerPage
    const stopSlice = (page - 1) * itemsPerPage + itemsPerPage

    state.items = Object.assign(state.items, items)
    state.currentItems = state.items.slice(startSlice, stopSlice)
    state.isLoaded = true
    state.lastID = lastID

    this.commit("SET_PAGINATION_STATE")
  },

  NEXT_PAGE(state, payload) {
    const page = state.pagination.page + 1
    this.commit("CHANGE_PAGE", { page })
  },

  PREV_PAGE(state, payload) {
    const page = state.pagination.page - 1
    this.commit("CHANGE_PAGE", { page })
  },

  CHANGE_PAGE(state, { page }) {
    const { itemsPerPage } = state.pagination
    const startSlice = (page - 1) * itemsPerPage
    const stopSlice = (page - 1) * itemsPerPage + itemsPerPage
    const itemsLen = state.items.length

    state.currentItems = state.items.slice(startSlice, stopSlice)
    state.pagination.page = page

    this.commit("SET_PAGINATION_STATE")
  },

  SET_PAGINATION_STATE(state, payload) {
    const currrentLen = state.pagination.page * state.pagination.itemsPerPage
    const maxLen = state.items.length
    const { itemsPerPage } = state.pagination

    state.pagination.nextDisabled = (currrentLen >= maxLen) ? true : false
    state.pagination.prevDisabled = (currrentLen - itemsPerPage <= 0) ? true : false
  },

  REMOVE_ITEM(state, { itemID }) {
    state.items = state.items.filter(item => item.id !== itemID)
    this.commit("CHANGE_PAGE", { page: state.pagination.page })
  },

  ADD_ITEM(state, { name, price }) {
    state.items.push({
      id: ++state.lastID,
      name,
      price,
      date: (new Date()).toJSON()
    })

    alert("Item successfully added!")
    this.commit("CHANGE_PAGE", { page: state.pagination.page })
    this.$router.push('/');
  },

  EDIT_ITEM(state, updatedItem) {
    state.items = state.items.map(item => {
      if(item.id !== updatedItem.id) return item

      return updatedItem
    })
    
    alert("Item successfully edited!")
    this.commit("CHANGE_PAGE", { page: state.pagination.page })
    this.$router.push('/');
  },

  GET_ITEM_BY_ID(state, { id }) {
    state.currentItem = state.items.find(item => {
      if(item.id === parseInt(id)) return true
    })
  }
}

export const getters = {

}
