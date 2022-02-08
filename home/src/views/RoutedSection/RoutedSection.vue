<template>
  <nav>
    <router-link :to="{ name: 'home' }">Go to home</router-link>
    <router-link :to="{ name: 'other' }">Go to other</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>
