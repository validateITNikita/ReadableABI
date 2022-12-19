<script setup lang="ts">
import { ref } from 'vue';
import {ethers} from 'ethers';

const notread = ref<HTMLTextAreaElement>();
const readable = ref<HTMLTextAreaElement>();

const convert = () => {
  if(notread.value && readable.value){
    let temp = new ethers.utils.Interface(notread.value.value);
    let formated = temp.format(ethers.utils.FormatTypes.full);
    
    readable.value.value = JSON.stringify(formated, null, 2) ;
  }
}

const areaStyle = "block p-2.5 w-full h-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-left";
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5 p-10 w-full h-[500px]">
    <textarea 
      :class="areaStyle"
      placeholder="Paste your ABI here!"
      ref="notread"
      />
      <button @click="convert" class="text-white">CLICK</button>
    <textarea 
      :class="areaStyle"
      placeholder="Copy your ABI from here!"
      ref="readable"
      />
  </div>
</template>

<style scoped>

</style>
