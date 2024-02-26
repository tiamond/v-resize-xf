# 侦听插件

一个侦听dom元素的自定义hook插件,仅支持vue3

## 使用方式

### 安装依赖
`npm i v-resize-xf`

### 方式一：局部引入使用
```ts
import { onMounted, ref } from 'vue';
import useResize from 'v-resize-xf'

onMounted(() => {
  useResize(document.querySelector('.wrap'), (entry: any)=> {
    console.log(entry);
  })
})
```

### 方式二：全局引入
```ts
import useResize from 'v-resize-xf'
// ...
app.use(useResize)
```

组件中直接使用
```html
<template>
  <div class="wrap" v-resize="listenResize">
    <img id="base" src="../assets/images/1.jpg" alt="">
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import toBase64 from '../hooks/toBase64';
// import useResize from 'v-resize-xf'

// onMounted(() => {
//   useResize(document.querySelector('.wrap'), (entry: any)=> {
//     console.log(entry);
//   })
// })
const listenResize = (entry: any) => {
  console.log(entry);
}

</script>
```