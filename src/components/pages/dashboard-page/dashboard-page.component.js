export default {
  name: 'dashboardPage',
  data () {
    return {
      hijohn: true,
      message: this.$store.getters.USER
    }
  }
}
