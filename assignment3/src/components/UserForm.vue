<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input v-model="formData.firstName" type="text" id="firstName" class="form-control">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input v-model="formData.lastName" type="text" id="lastName" class="form-control">
    </div>
    <div class="form-group">
      <label for="picture">Avatar</label>
      <input @change="handlePictureUpdate" type="file" id="picture" class="form-control-file">
      <img :src="formData.picture || defaultPicture" alt="avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {},
      defaultPicture: "@/assets/default.png"
    }
  },
  watch: {
    formData: {
      deep: true,
      handler: "updateUser"
    }
  },
  mounted() {
    this.formData = this.user
  },
  methods: {
    handlePictureUpdate(e) {
      let reader = new FileReader()
      reader.onload = e => {
        this.formData.picture = e.target.result
      }
      reader.readAsDataURL(e.target.files[0])
    },
    updateUser() {
      this.$emit("update-user", { ...this.formData })
    }
  }
}
</script>
