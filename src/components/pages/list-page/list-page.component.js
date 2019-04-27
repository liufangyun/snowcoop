import mapView from '../../shares/map-view/map-view.component.vue'
import formAddAddress from './form-add-address/form-add-address.component.vue'

export default {
  name: 'listPage',
  components: {
    mapView,
    formAddAddress
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
  },
  methods: {
    showForm () {
      this.Srefs.formAddAddress.toggleForm(true)
    }
  }
}
