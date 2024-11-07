<template>
  <Html lang="zh-CN">

  <Head>
    <Meta charset="UTF-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta name="theme-color" content="#1191ff" />
    <meta name="color-scheme" content="light" />

    <Meta httpEquiv="x-ua-compatible" content="IE=edge" />
    <Meta httpEquiv="x-ua-compatible" content="IE=7" />

    <Meta name="description" content="乌鲁木齐 麻辣烫, Astana 最好吃的麻辣烫!!" />
    <Meta name="keywords" content="乌市麻辣烫 Astana" />
    <Meta name="author" content="https://github.com/YernarT" />

    <Meta property="og:title" content="乌市麻辣烫 | Astana" />
    <Meta property="og:description" content="乌市麻辣烫 | Astana" />
    <Meta property="og:image" content="/favicon.ico" />
    <Meta property="og:site_name" content="乌市麻辣烫 | Astana" />
    <Meta property="og:type" content="website" />
    <Meta property="og:locale" content="zh_CN" />

    <Link rel="icon" href="/hot-pot.png" />

    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />

    <Title>乌市麻辣烫 | Astana</Title>
  </Head>

  <Body>
    <NuxtLayout>
      <ConfigProvider :theme="ANTD_THEME">
        <NuxtPage />
      </ConfigProvider>
    </NuxtLayout>
  </Body>

  </Html>
</template>

<script setup lang="ts">
// Antd
import { ConfigProvider } from "ant-design-vue";
import { ANTD_THEME } from "@/constants/antd";
// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

defineOptions({ name: "App" });

const firebaseConfig = {
  apiKey: "AIzaSyBGTiX7qh7O9vgyE2LWcSIQsYDQSMU18gs",
  authDomain: "urumqi-hotpot.firebaseapp.com",
  projectId: "urumqi-hotpot",
  storageBucket: "urumqi-hotpot.firebasestorage.app",
  messagingSenderId: "846069488761",
  appId: "1:846069488761:web:cff1f59bd36a793a9288a8",
  measurementId: "G-9XNWX5WF23"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity var(--transition), filter var(--transition);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
}
</style>
