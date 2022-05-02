<template>
  <section class="app-main">
    <div>

      <WorkflowOpenIndex></WorkflowOpenIndex>  


    </div> 
  </section>
</template>



<script>
import WorkflowOpenIndex from '@/components/WorkflowOpenIndex.vue';

 export default {
        name: 'AppMain',
        data() {
            return {
                List: []
            }
        },
        components: {
            WorkflowOpenIndex
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
