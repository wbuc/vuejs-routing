<template>
     <div>
          <h3 class="bg-danger text-white p-2">The User Page</h3>
          <hr />
          <div v-if="this.$route.params.id">
               <p>User Id PROP: {{ id }}</p>
               <p>User Id $route.params.id: {{ this.$route.params.id }}</p>
               <hr />
          </div>

          <button @click="navigateHome">Go back home!</button>

          <div class="mt-3">
               <router-view></router-view>
          </div>
          <div class="mt-3 mb-3">
               <router-view name="header-bottom"></router-view>
          </div>
     </div>
</template>
<script>
export default {
     // The id prop gets passed in through the URL route. configurable through the route setup.
     props: ["id"],
     data() {
          return {
               // old way of using the route. New way is using the component props.
               //id: this.$route.params.id
          };
     },
     watch: {
          $route(to, from) {
               // OLD - New way to use the comp props.
               // Setup watch to check if the route updates and use that update values.
               // In cases where same components is used, with different id's.
               //this.id = to.params.id;
          }
     },
     methods: {
          navigateHome() {
               // nav to specific route
               this.$router.push({ name: "home" });
          }
     }
};
</script>