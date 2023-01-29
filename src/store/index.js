import Vue from 'vue'
import Vuex from 'vuex'
import cocktailIDs from "../utils/drinkNames";
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    cocktails: [],
    currentCocktail: null,
    offline: false
  },
  getters: {
  },
  mutations: {
    setCocktails(state, data) {
      state.cocktails = data;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
    setCurrentCocktail(state, item) {
      state.currentCocktail = item;
    },
    setOffline(state, bool) {
      state.offline = bool;
    }
  },
  actions: {
    async fetchCocktails({ commit }) {
      commit("setLoading", true);

      const results = [];

      cocktailIDs.forEach(id => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

        axios
          .get(url)
          .then(({ data }) => {
            const item = data.drinks[0];

            const rawIngredients = [
              item.strIngredient1,
              item.strIngredient2,
              item.strIngredient3,
              item.strIngredient4,
              item.strIngredient5,
              item.strIngredient6,
              item.strIngredient7,
              item.strIngredient8,
              item.strIngredient9,
              item.strIngredient10,
              item.strIngredient11,
              item.strIngredient12,
              item.strIngredient13,
              item.strIngredient14,
              item.strIngredient15
            ];
  
            return {
              id: item.idDrink,
              name: item.strDrink,
              tags: item.strTags.split(","),
              category: item.strCategory,
              glass: item.strGlass,
              description: item.strInstructions,
              ingredients: rawIngredients.filter(Boolean),
              image: `${item.strDrinkThumb}`
            };
          })
          .then(item => {
            results.push(item);
          })
          .catch(e => {
            console.error(e);
          });
      })

      commit("setCocktails", results);
      commit("setLoading", false);
    },
    async fetchCocktail({ commit }, id) {
      commit("setLoading", true);
      
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

      axios
        .get(url)
        .then(({ data }) => {
          const item = data.drinks[0];

          const rawIngredients = [
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
            item.strIngredient6,
            item.strIngredient7,
            item.strIngredient8,
            item.strIngredient9,
            item.strIngredient10,
            item.strIngredient11,
            item.strIngredient12,
            item.strIngredient13,
            item.strIngredient14,
            item.strIngredient15
          ];

          return {
            id: item.idDrink,
            name: item.strDrink,
            tags: item.strTags.split(","),
            category: item.strCategory,
            glass: item.strGlass,
            description: item.strInstructions,
            ingredients: rawIngredients.filter(Boolean),
            image: `${item.strDrinkThumb}`
          };
        })
        .then(item => {
          commit("setCurrentCocktail", item);
        })
        .catch(e => {
          console.error(e);
        });
      
      commit("setLoading", false);
    }
  },
  modules: {}
});
