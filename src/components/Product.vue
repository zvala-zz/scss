<template>
  <div class="product" :class="{ 'product--dark' : discount }">
    <span class="product__price">{{price}}</span>
    <img :src="img" alt class="product__image" />
    <p class="product__title">{{name}}</p>
    <span>{{color}}</span>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: String,
    price: Number,
    color: String,
    img: String,
    description: String,
    category: String,
    discount: Boolean
  }
};
</script>
