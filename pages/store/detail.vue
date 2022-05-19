<template>
  <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="800"
        width="100%"
        :src="`${data[0].postscript.order.goods_img}`"
      >
  </v-img>
</template>

<script>
  export default {
    async asyncData(context) {
      
      const book = context.query.book
      const slug = context.query.slug
      console.log(book)
      const data  = await context.$axios.$get('/api/community/fit/goods/list?goods_id='+book+'&is_img=0&my_body=0&page=1');
      console.log(data);
      return data;
    }
  }
</script>