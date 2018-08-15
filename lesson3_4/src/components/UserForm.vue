<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="localUser.firstName">
    </div>

    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="localUser.lastName">
    </div>

    <div class="form-group">
      <label>About</label>
      <textarea class="form-control" v-model="localUser.about" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'megaevent'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUser: {} // TODO: change to null!
    }
  },
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = this.user // passed by reference
  },
  methods: {
    updateUser() {
      // an object can be copied upon save/before being sent
      this.$emit('megaevent', Object.assign({}, this.localUser))
    }
  }
}
</script>
