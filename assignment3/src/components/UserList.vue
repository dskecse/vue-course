<template>
  <table v-show="displayUsers" class="table table-striped">
    <caption># of Users: {{ usersCount }}</caption>

    <thead>
      <tr>
        <th />
        <th>First Name</th>
        <th>Last Name</th>
        <th />
      </tr>
    </thead>

    <tbody>
      <user v-for="user in users" :key="user.id" :user="user" />
    </tbody>
  </table>
</template>

<script>
import User from "@/components/User.vue"

export default {
  components: {
    User
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    displayUsers: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    usersCount() {
      return this.users.length
    }
  }
}
</script>

<style scoped>
caption {
  caption-side: top;
}
</style>
