<template>
  <div>
    <div class="product-list">
      <product
        v-for="(item, index) in products"
        :key="index"
        :url="item.url"
        :title="item.title"
        :price="item.price"
        :discount="item.discount"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Product from "../components/Product";

export default {
  name: "home",
  components: {
    Product
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  }
};
</script>
