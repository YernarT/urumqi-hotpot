<template>
    <div class="countdown">
        <div class="countdown__title">
            {{ isFinish ? '已开业时长: ' : '距离开业还有:' }}
        </div>
        <Statistic.Countdown v-if="!isFinish" :value="deadline" @finish="onFinish" />
        <div v-else class="opening-time">{{ openingTime }}</div>
    </div>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted, onBeforeUnmount } from 'vue';
// Components
import { Statistic } from 'ant-design-vue';

defineOptions({ name: "CountDown" });

const now = (new Date()).getTime();
const deadline = (new Date('2024-11-11 11:11:11')).getTime();
const isFinish = ref(deadline - now < 0);
// 已开业的时间
const openingTime = ref("00:00:00");

// 格式化时间为 hh:mm:ss
function formatTime(seconds: number) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
}


// 定时更新已开业的时间
function updateOpeningTime() {
    // 当前的时间（以秒为单位）
    const now = (new Date()).getTime();
    // 过去的时间（以秒为单位）
    const elapsedTime = Math.floor((now - deadline) / 1000);
    openingTime.value = formatTime(elapsedTime);
    isFinish.value = deadline - now < 0;
}


let intervalId: NodeJS.Timer | undefined;

// 初始化定时器
onMounted(() => {
    updateOpeningTime();
    intervalId && clearInterval(intervalId);
    intervalId = setInterval(updateOpeningTime, 1000);
});

// 清理定时器
onBeforeUnmount(() => {
    intervalId && clearInterval(intervalId);
});

const onFinish = () => {
    isFinish.value = true;
};

</script>


<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.countdown {
    width: 100%;
    margin-inline-start: 4%;
    user-select: none;
    @include flex($direction: column);

    &__title {
        font-size: calc(calc(1vw + 1vh) * 2);
    }

    .opening-time {
        line-height: 1;
        color: var(--c-text);
        font-size: calc(calc(1vw + 1vh) * 6);
    }

    :deep(.ant-statistic) {
        .ant-statistic-content-value {
            line-height: 1;
            color: var(--c-text);
            font-size: calc(calc(1vw + 1vh) * 6);
        }
    }

    @media screen and (max-width: 880px) {
        margin-inline-start: 0;
        align-items: center;
        gap: 8px;
    }
}
</style>