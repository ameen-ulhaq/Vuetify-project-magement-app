<template>
  <v-app class="grey">
    <Navbar />
    <v-main class="ma-4 grey lighten-4">
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
