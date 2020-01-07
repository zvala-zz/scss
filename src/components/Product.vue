<template>
    <div class="product" :class="{'product--dark': discount}">
        <img :src="url" alt="" class="product__image">
        <p class="product__title">{{title}}</p>
        <span class="product__price">{{price}}</span>
    </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        url: {
            type: String
        },
        title: {
            type: String
        },
        price: {
            type: Number
        },
        discount: Boolean
    }
}
</script>