<template>
    <section class="main-section">
        <div class="main-section__title">
            <div>乌鲁木齐 麻辣烫</div>
            <div>阿斯塔纳 独家</div>
        </div>

        <Countdown />
        <Address></Address>
        <FoodsAnimation />

        <canvas ref="clickAnimationRef" width="1" height="1"></canvas>
    </section>
</template>

<script setup lang="ts">
// Vue
import { onMounted, ref } from 'vue';
// Hooks
// @ts-ignore
import useClickAnimation from '~/hooks/useClickAnimation';

defineOptions({ name: "MainSection" });

const clickAnimationRef = ref();

onMounted(() => useClickAnimation(clickAnimationRef.value));
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.main-section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('~/assets/image/main-background.png');
    background-color: rgb(13, 13, 15);
    @include flex($direction: column);

    &__title {
        margin-block-end: 10%;
        transform: rotate(-8deg) translate(4%, 20%);

        div {
            user-select: none;
            font-size: calc(calc(1vw + 1vh) * 4);
            color: transparent;
            background: -webkit-linear-gradient(#f1f1f1, #515151);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 880px) {
            margin-block-end: 24%;
            transform: rotate(-8deg) translate(8%, 36%);
        }
    }

    canvas {
        @include positioned($top: 0, $right: 0);
    }
}
</style>
