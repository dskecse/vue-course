<template>
  <div>
    <h1 class="mt-5">{{ header }}</h1>

    <div v-if="errored" class="alert alert-danger">User could not be loaded.</div>
    <div v-else-if="loading" class="alert alert-primary">Loading...</div>
    <template v-else>
      <user-form :user="user" @update-user="updateUser" />
      <button type="submit" class="btn btn-primary" @click="save">Update</button>
    </template>
  </div>
</template>

<script>
import axios from "@/axios.js"
import UserForm from "@/components/UserForm.vue"

export default {
  name: "Edit",
  components: {
    UserForm
  },
  data() {
    return {
      header: "Edit User",
      user: null,
      loading: true,
      errored: false
    }
  },
  computed: {
    id() {
      return Number(this.$route.params.id)
    },
    editUserUrl() {
      return `/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.editUserUrl)
        .then(response => (this.user = response.data))
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => (this.loading = false))
    },
    updateUser(user) {
      console.log("user changed: ", user)
    },
    save() {
      axios
        .patch(this.editUserUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.log(error))
    },
    redirectToList() {
      this.$router.push("/users")
    }
  }
}
</script>
