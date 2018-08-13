<template>
  <div>
    <h2>User List</h2>

    <div v-if="loading" class="alert alert-warning">
      Loading...
    </div>
    <div v-else-if="!users.length">
      There are no users
    </div>
    <user-list v-else :users="users"/>

    <button type="button" class="btn btn-primary" @click="loadData">
      Refresh
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    UserList
  },
  data() {
    return {
      users: [],
      loading: true
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.loading = true

      axios
        .get('http://localhost:3000/users')
        .then(response => (this.users = response.data))
        .catch(error => console.error(error))
        .finally(() => (this.loading = false)) // in case of an error, e.g. Error: "Network Error"
    }
  }
}
</script>
