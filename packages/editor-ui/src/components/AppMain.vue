<template>
  <section class="app-main">
    <div>


      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
    <!--  <router-view/>  -->

     <ExecutionsListIn>      </ExecutionsListIn> 


    </div> 
  </section>
</template>



<script>
import ExecutionsListIn from '@/components/ExecutionsListIn.vue';
import About from '@/components/AboutTest.vue';
import mixins from 'vue-typed-mixins';

 export default {
        name: 'AppMain',
        data() {
            return {
                imgsList: []
            }
        },
        components: {
            About, // <<== 2
            ExecutionsListIn
        }
    }

</script>

<style scoped>
.app-main {
  /*30 = navbar 5- = navbartop  */
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
}
</style>
