<template>
    <div class="address" v-show="popupVisible">
      <v-distpicker class="picker" type="mobile" @selected='selected'>
      </v-distpicker>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  data() {
    return {
      popupVisible: true,
      agentArea : ''
    }
  },
  components: {
    VDistpicker 
  },
  methods: {
    selected(data){
     console.log(data);
     this.popupVisible = false;
     this.agentArea = data.province.value + data.city.value + data.area.value
     console.log(this.agentArea)
    },
  }
}
</script>

<style lag="scss" scoped>

</style>
