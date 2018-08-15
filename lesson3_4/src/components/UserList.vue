<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Active</th>
        <th>Balance</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Registered</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>
          <router-link :to="'/edit/' + item.id"># {{ item.id }}</router-link>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.isActive }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.registered }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Total Users: {{ total }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total() {
      return this.users.length
    }
  }
}
</script>
