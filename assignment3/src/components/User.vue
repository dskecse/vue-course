<template>
  <tr>
    <td>
      <router-link :to="editUrl">
        <img :src="user.picture || defaultPicture" alt="avatar">
      </router-link>
    </td>
    <td>
      <router-link :to="editUrl">
        {{ user.firstName | uppercase }}
      </router-link>
    </td>
    <td>
      <router-link :to="editUrl">
        {{ user.lastName | uppercase }}
      </router-link>
    </td>
    <td>
      <button v-copy="fullName" v-copy:callback="handleCopied" type="button" class="btn btn-outline-primary btn-sm">
        Copy
      </button>
      <span v-show="nameCopied">Copied!</span>
    </td>
  </tr>
</template>

<script>
import { copy } from "v-copy"

export default {
  filters: {
    uppercase(value) {
      return !value ? "" : value.toUpperCase()
    }
  },
  directives: {
    copy
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      nameCopied: false,
      defaultPicture: "@/assets/default.png"
    }
  },
  computed: {
    fullName() {
      return `${this.user.lastName} ${this.user.firstName}`
    },
    editUrl() {
      return `/users/${this.user.id}`
    }
  },
  methods: {
    handleCopied() {
      this.nameCopied = true
      setTimeout(() => (this.nameCopied = false), 1000)
    }
  }
}
</script>
