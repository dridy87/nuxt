<template>
<div>
  <v-carousel>
    <v-carousel-item 
      v-for="(item) in items"
      :key="item.idx"
      :src="item.image"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>


  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in goods"
          :key="n.display_idx"
          cols="12"
          md="3"
        >
        <v-item-group multiple> 
         
          <v-item multiple>
            <nuxt-link :to="{path:'store/detail', query:{book:`${n.id}`,slug:2},hash: `#${n.id}`}">
            <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="200"
                  min-width="200"
                  :src="`${n.imgs}`"
                  :id="`${n.id}`"
                >
            </v-img>
            </nuxt-link>  
          </v-item>
          
          {{n.seller_name}}
          <v-subheader>{{n.title}}</v-subheader>
          <div v-show="n.use_discount === 1">
          {{disCount(n.promotion_price, n.price)}}% {{n.promotion_price}} {{n.price}}
          </div>
          <div v-show="n.use_discount === 0">
          {{n.price}}
          </div>

         
          </v-item-group>

          
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>


  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import {AxiosResponse} from 'axios'
export default Vue.extend({
  meta: {
    scrollPos: {
      x: 0,
      y: 0
    }
  },
  
  data () {
    return {
      items: [],
      goods: [],
      bottom: false,
      page: 1,
      init: true,
    }
  },
  
  created() {
    console.log('created');
    this.$axios.get('/api/service/bannerv2?bnPosition=store_st_t').then((res:AxiosResponse)=>{
      console.log(res.data.data)
      this.items = res.data.data
    })

    this.$axios.get('/api/store/home/v2/store?page=1').then((res:AxiosResponse)=>{
      console.log(res.data)
      this.goods = res.data.data
    })
    
    
  },
  mounted() {
    console.log('mounted');
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },

    disCount(promotionPrice: number, price: number) {
      return Math.ceil(((price - promotionPrice)/price)* 100)
    }
  
  },
  watch: {
    bottom(bottom: number) {
      if (bottom) {
        this.page++
        this.$axios.get('/api/store/home/v2/store?page='+this.page).then((res:AxiosResponse)=>{
          console.log(res.data.data);
          // this.goods = [...this.goods, ...res.data.data]
          this.goods = this.goods.concat(res.data.data)

          console.log('this.goods', this.goods)
        })
      }
    }
  }   
})
</script>

<style>

</style>
