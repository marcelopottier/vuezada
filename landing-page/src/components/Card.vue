<template>
    <div class="product">
        <div :class="'product-inner ' + product.color">
            <div class="product-text-wrap">
                <h2 class="bg-text">{{ product.bgText }}</h2>
            </div>
            <div class="product-image-wrap">
                <img :src="product.src" class="image"/>
            </div>
            <div class="product-detail">
                <h2>{{ product.title }}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ex est sunt iure temporibus aperiam perspiciatis possimus, consectetur numquam aliquid sint quisquam accusamus officiis dignissimos, sit fuga pariatur, perferendis voluptatibus?</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'card',
    props: ['product']
}
</script>

<style>
    .product{
        flex: 1 1 33.333%;
        width: 100%;
        padding: 25px;
    }

    .product-inner {
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .product-inner.green {
        background-image: linear-gradient(to bottom right, #24D484, #116432);
    }
    .product-inner.red {
        background-image: linear-gradient(to bottom right, #24D484, #116432);
    }
    .product-inner.blue {
        background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
    }
    .product-image-wrap .image {
        width: 100%;

    }

</style>