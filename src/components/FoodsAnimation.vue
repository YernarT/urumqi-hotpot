<template>
    <div class="foods-animation" @mouseenter="pauseSlideshow" @mouseleave="resumeSlideshow" @click="pauseOnClick">
        <img v-for="i in range" alt="食物" :draggable="false" :key="i" :src="useAssetsImage(`image/food-${i}.svg`)"
            :class="{ 'visible': currentIndex === i }" />
    </div>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted, onBeforeUnmount } from 'vue';
// Hooks
// @ts-ignore
import { useAssets } from '~/hooks/useAssets';

const { useAssetsImage } = useAssets();
const currentIndex = ref(0);
const isPaused = ref(false);
let intervalId: NodeJS.Timeout | null = null;

const range = Array.from({ length: 88 }, (_, i) => i + 1);

// 切换到下一张图片
function nextImage() {
    currentIndex.value = (currentIndex.value + 1) % range.length;
}

// 启动幻灯片轮播
function startSlideshow() {
    intervalId && clearInterval(intervalId);
    intervalId = setInterval(() => !isPaused.value && nextImage(), 300);
}

// 暂停轮播
function pauseSlideshow() {
    isPaused.value = true;
}

// 恢复轮播
function resumeSlideshow() {
    isPaused.value = false;
}

// 点击事件，用于暂停轮播（移动端支持）
function pauseOnClick() {
    isPaused.value = true;

    // 在移动端点击后两秒恢复轮播
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setTimeout(() => {
            isPaused.value = false;
        }, 2000);
    }
}

onMounted(startSlideshow);
onBeforeUnmount(() => clearInterval(intervalId!));
</script>


<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.foods-animation {
    user-select: none;
    @include positionCenter;
    top: 30%;

    div {
        font-size: calc(calc(1vw + 1vh) * 1.6);
    }

    img {
        will-change: opacity;
        opacity: 0;
        transition: opacity var(--transition);
        @include positioned;

        &.visible {
            opacity: 1;
        }
    }

    @media screen and (max-width: 880px) {
        top: 72%;
        left: 4%;
    }
}
</style>