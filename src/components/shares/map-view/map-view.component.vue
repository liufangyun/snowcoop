<template>
  <div id="mapView">
    <div class="map-view-wrapper">
      <div class="address-list-wrapper" v-if="showList">some list</div>
      <div class="map-wrapper">
        <GmapMap :center="{lat:10, lng:10}" :zoom="7" style="width: 500px; height: 300px">
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>
<script src="/map-view.component.js"></script>
<style src="/map-view.component.css" scoped></style>
