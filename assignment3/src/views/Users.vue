<template>
  <div>
    <h1 class="mt-5">{{ header }}</h1>

    <p>
      <button @click="toggleUsersDisplay" v-tooltip.right="tooltip" type="button" class="btn btn-primary">
        {{ toggleButtonText }}
      </button>
    </p>

    <user-list :users="users" :display-users="displayUsers" />
  </div>
</template>

<script>
import { VTooltip } from "v-tooltip"

import axios from "@/axios.js"
import UserList from "@/components/UserList.vue"

export default {
  directives: {
    tooltip: VTooltip
  },
  components: {
    UserList
  },
  data() {
    return {
      header: "Users",
      users: [],
      displayUsers: true
    }
  },
  computed: {
    toggleButtonText() {
      return this.displayUsers ? "Hide" : "Show"
    },
    tooltip() {
      return `Click the button to ${this.toggleButtonText.toLowerCase()} users list`
    }
  },
  watch: {
    users: "usersUpdated"
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    toggleUsersDisplay() {
      this.displayUsers = !this.displayUsers
    },
    loadUsers() {
      axios
        .get("/users")
        .then(response => (this.users = response.data))
        .catch(error => console.log(error))
    },
    usersUpdated() {
      console.log("users changed: ", this.users)
    }
  }
}
</script>

<style>
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 4px;
  padding: 5px 6px 4px;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
