import mapView from '../../shares/map-view/map-view.component.vue'
export default {
  name: 'listPage',
  components: {
    mapView
  },
  data () {
    return {
      address: null,
      addressList: null
    }
  },
  mounted () {
    // console.log('mounted...')
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList
    })
  }
}
