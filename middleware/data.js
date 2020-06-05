import items from '~/data/items.json';

export default function ({ params, store }) {
  if(!store.state.isLoaded) {
    store.commit("SET_ITEMS", items);
  }
}