<template>
    <div class="address">
        <div class="phone">电话: +7-747-458-19-24</div>
        <div class="2gis">地址: Улица Балкантау, 95а</div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "Address" });
</script>


<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.address {
    width: 100%;
    margin-inline-start: 4%;
    margin-block: auto 4%;
    user-select: none;
    @include flex($direction: column, $gap: 8px);

    div {
        font-size: calc(calc(1vw + 1vh) * 1.6);
    }

    @media screen and (max-width: 880px) {
        margin-block: 8%;
        align-items: center;

        div {
            font-size: calc(calc(1vw + 1vh) * 2);
        }
    }
}
</style>