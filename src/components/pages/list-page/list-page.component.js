import mapView from '../../shares/map-view/map-view.component.js'
export default {
  name: 'listPage',
  components: {
    mapView
  },
  data () {
    return {
      address: null
    }
  },
  mounted () {
    // console.log('mounted...')
    this.$store.dispatch('GET_ADDRESS_LIST'.then(adddressList => {
      this.adddressList = adddressList
    }))
  }
}
