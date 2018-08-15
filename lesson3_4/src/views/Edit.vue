<template>
  <div>
    Editing User with ID {{ id }}

    <div v-if="!user">
      Loading...
    </div>
    <template v-else>
      <user-form v-model="user" />

      <button type="submit" class="btn btn-primary" @click="save">
        Update
      </button>

      <pre>{{ user }}</pre>
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'
import UserForm from '@/components/UserForm'

export default {
  name: 'Edit',
  components: {
    UserForm
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10)
    },
    restUrl() {
      return `/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.restUrl)
        .then(response => (this.user = response.data))
        .catch(error => console.error(error))
    },
    updateUser() {
      console.log('user')
    },
    save() {
      axios
        .patch(this.restUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.error(error))
    },
    redirectToList() {
      this.$router.push('/users')
    }
    // remove button
  }
}
</script>
