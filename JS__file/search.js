Vue.component("search", {
  template: `
  <form name="search" action="#" @submit.prevent="$parent.filter">
  <input type="text" placeholder="Поиск" v-model="$parent.userSearch"><button type="submit" class="search__button">Найти  <i class='fas fa-search'></i></button>
  </form>
`,
});
