<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import {ethers} from 'ethers';

const notReadableABI = ref<string>('');

const notread = ref(null);
const readable = ref(null);

const convert = () => {
  // @ts-ignore
  const rea = new ethers.utils.Interface((notread.value as HTMLTextAreaElement).value);
  // @ts-ignore
  (readable.value as HTMLTextAreaElement).value = JSON.stringify(rea.format(ethers.utils.FormatTypes.full), null, 2) ;
}
</script>

<template>
  <div class="flex items-center justify-center space-x-5 p-10 w-full h-[500px]">
    <textarea 
      class="block p-2.5 w-full h-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
      placeholder="Paste your ABI here!"
      v-model="notReadableABI"
      ref="notread"
      />
      <button @click="convert">CLICK</button>
    <textarea 
      class="block p-2.5 w-full h-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left"
      placeholder="Copy your ABI from here!"
      ref="readable"
      />
  </div>
</template>

<style scoped>

</style>
