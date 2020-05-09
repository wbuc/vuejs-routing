<template>
     <div>
          <h3>Some User Details</h3>
          <p>User loaded has ID: {{ id }}</p>
          <!-- <p>User loaded has ID: {{ $route.params.id }}</p> -->
          <router-link tag="button" :to="userDetailLink" class="btn btn-secondary">Edit User</router-link>
     </div>
</template>
<script>
export default {
     props: ["id"],
     data() {
          return {
               userDetailLink: {
                    name: "userEdit",
                    params: {
                         id: this.id //this.$route.params.id
                    },
                    query: {
                         locale: "en-gb",
                         q: 150
                    }
               }
          };
     },
     beforeRouteEnter(to, from, next) {
          /* #region[red]
          Config before route enter here, or on routing configure.
          
          Check if user is authenticated, then call next, else, next(false);
          #endregion        
          */
          if (true) {
               next();
          } else {
               next(false);
          }

          //next(); -> component will not be loaded if this is not called. this is not availabled in this method.
     }
};
</script>