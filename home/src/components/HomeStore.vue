<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { useCounter } = await(() => import('counter-store/CounterStore'))();
const { counter, hasItems } = useCounter();
</script>

<template>
  <div>
    <h1>This is a home component with store</h1>
    <p>Counter: {{ counter }} {{ hasItems }}</p>
  </div>
</template>
