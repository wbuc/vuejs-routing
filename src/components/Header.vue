<template>
     <ul class="nav nav-pills">
          <router-link to="/" tag="li" class="nav-link" active-class="active" exact>
               <a>Home</a>
          </router-link>
          <router-link to="/user" tag="li" class="nav-link" active-class="active" exact>
               <a>User</a>
          </router-link>
          <router-link to="/person/10" tag="li" class="nav-link" active-class="active">
               <a>User Id 10</a>
          </router-link>
          <router-link to="/person/20" tag="li" class="nav-link" active-class="active">
               <a>User Id 20</a>
          </router-link>
     </ul>
</template>


<style scoped>
.active a {
     color: white;
}
</style>
<!-- 
***** NOTE *****
Check the 'exact' prop to overwrite default 'active-class' behaviour on the home root.
****************



Original Link:
  <router-link class="nav-link" to="/user">User</router-link>
-->

