<template>
    <div class="product">
        <div :class="'product-inner ' + product.color">
            <div class="product-text-wrap">
                <h2 class="bg-text" id="bg-text">{{ product.bgText }}</h2>
            </div>
            <div class="product-image-wrap">
                <img :src="product.src" class="image rounded-md opacity-85"/>
            </div>
            <div class="product-detail">
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
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
    @media screen and (min-width: 1024px) and (max-width:  1200px) {
        #bg-text{
            font-size: 30px;
        }
    }
    .product{
        flex: 1 1 33.333%;
        padding: 25px;
    }

    .product-inner {
        border: 0px; 
        border-radius: 10px;
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .product-inner.green {
        background-image: linear-gradient(to top left, #29b476, #84c5dd);
    }
    .product-inner.red {
        background-image: linear-gradient(to bottom right, #84c5dd, #29b476 70%);
    }
    .product-inner.blue {
        background-image: linear-gradient(to bottom left, #24D484, #84c5dd, #457eb8 70%);
    }
    .product-text-wrap {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        overflow: hidden;
    }

    .product-image-wrap{
        position: relative;
        z-index: 0;
        transform-origin: center;
    }

    .product-image-wrap .image{
        height: 219px;
        width: 339px;
        filter: drop-shadow(0px 0px 12px rgba(0,0,0,0.25));

    }
    .product-text-wrap h2{
        color: #313131;
        font-size: 45px;
        font-weight: 900;
        opacity: 0.25;
        transform-origin: center;
    }

    .product-detail{
        
        border-bottom: 0px; 
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #FFF;
        padding: 25px;
        margin: 0px -25px -25px;
    }

    .product-detail h2{
        font-size: 24px;
        font-weight: 700;
        color: #676767;
        margin-bottom: 15px;
    }
    .product-detail p{
        font-size: 14px;
        line-height: 1.5;
        font-weight: 300;
        color: #676767;
    }

</style>