<template>
     <div>
          <h3>Edit the User</h3>
          <p>Edit For {{ id }}</p>
          <hr />
          <p>
               Locale Query:
               <b>{{$route.query.locale}}</b>
          </p>
          <p>
               q:
               <b>{{$route.query.q}}</b>
          </p>
          <button class="btn btn-danger" @click="confirmed = true">Confirm</button>
     </div>
</template>
<script>
export default {
     props: ["id"],
     data() {
          return {
               confirmed: false
          };
     },
     methods: {},
     beforeRouteLeave(to, from, next) {
          // Always ensures the user confirms to navigate away from the component.
          if (this.confirmed) {
               next();
          } else {
               if (confirm("Are you sure?")) {
                    next();
               } else {
                    next(false);
               }
          }
     }
};
</script>