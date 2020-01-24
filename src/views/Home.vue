<template>
  <div class="product-list">
    <product
      v-for="(item, index) in products"
      :key="index"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :img="item.img"
      :color="item.color"
      :description="item.description"
      :category="item.category"
      :discount="item.discount"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
  },
  methods: {
    ...mapActions(["fetchProductList"])
  },
  mounted() {
    this.fetchProductList();
  }
};
</script>
