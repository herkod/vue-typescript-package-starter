<template>
  <main>
    <div class="container">
      <div class="markdown-body">
        <readme />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pkg from '../package.json';
import Readme from '../src/README.md';

export default defineComponent({
  components: {
    Readme,
  },

  data() {
    return pkg;
  },

  mounted() {},
});
</script>

<style lang="scss"></style>
