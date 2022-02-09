<template>
  <div class="hello">
    <h1>Product Categories</h1>
    <ul v-if="categories.length" class="categories">
      <li v-for="category in categories" :key="category.id" class="category">
        <h3>{{ category.name }}</h3>
        <ul v-if="category.products && category.products.length">
          <template v-for="product in category.products">
            <li v-if="product" :key="product.id" class="product">
              <img :src="product.image" :alt="product.name" />
              {{ product.name }}
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import getCategories  from "../services/categories";
// import getCategories  from "../services/categories-products";
export default {
  name: "CategoriesList",
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    this.categories = await getCategories();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

li.category {
  display: inline-block;
  margin: 0 10px;
}

li.product {
  width: 300px;
  height: 300px;
  margin: 0 0 10px;
}
li.product img {
  height: calc(100% - 20px);
}

a {
  color: #42b983;
}
</style>
