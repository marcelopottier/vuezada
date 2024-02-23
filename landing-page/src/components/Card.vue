<template>
    <div class="product">
        <div class="product-inner">
            <div class="product-text-wrap">
                <h2 class="bg-text">{{ product.bg-text }}</h2>
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
    props: ['card']
}
</script>

<style>
</style>