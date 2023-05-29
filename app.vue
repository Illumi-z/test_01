<template>
  <div>
    
    <!-- header -->
    <div class="header">
      <h1>Header</h1>
    </div>

    <!-- body -->
    <div class="body">
      <div v-for="userName in MainStore.userNames">
        <SampleBody :userName="userName" />  
      </div>
    </div>

  </div>
</template>

<script>

  import SampleBody from "./components/SampleBody.vue"
  import { useMainStore } from "./stores/MainStore";

  export default {
    components: { SampleBody },
    setup () {
      const MainStore = useMainStore()
      return { MainStore}
    }
  }

</script>
