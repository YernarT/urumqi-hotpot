<template>
    <div class="countdown">
        <div class="countdown__title">
            距离开业还有:
        </div>
        <Statistic.Countdown :value="deadline" @finish="onFinish" />
    </div>
</template>

<script setup lang="ts">
// Components
import { Statistic } from 'ant-design-vue';

defineOptions({ name: "CountDown" });

const deadline = (new Date('2024-11-07 17:00:00')).getTime();

const onFinish = () => {
    console.log('finished!');
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