export default{
  name: 'formAddAddress',
  data () {
    return {
      showForm: false,
      place: null,
      formData: {},
      rules: {},
      isFormValidated: false
    }
  },
  method: {
    submit () {
    },
    toggleForm (showForm) {
      this.showForm = showForm
    },
    setPlace (place) {
      const {address_components, geometry} = place
      const address = this.buildAddressData(address_components, geometry)

      if (address) {
        this.place = address
        this.formData.street = `${address.streetNumber} ${address.streetName}`
        this.formData.city = address.city
        this.formData.province = address.province
        this.formData.postalCode = address.postalCode
        this.formData.lat = address.lat
        this.formData.lng = address.lng
      }
    },
    buildAddressData (components, geometry) {
      const address = {}
      address.lat = geometry.location.lat().toString()
      address.lng = geometry.location.lng().toString()
      components.forEach(component => {
        if (component.types[0] === 'locality') {
          address.city = component.short_name
        }
        if (component.types[0] === 'stree_numbert') {
          address.streetNumber = component.short_name
        }
        if (component.types[0] === 'route') {
          address.streetNumber = component.short_name
        }
        if (component.types[0] === 'administrative_area_level_1') {
          address.province = component.short_name
        }
        if (component.types[0] === 'postal_code') {
          address.postalCode = component.short_name
        }
      }
      )
    }
  }
}
