<template>
    <div class="mb-1">
        <button class="btn btn-secondary text-light" @click="showMapSettings()">
            <img src="@/assets/gear-solid.svg" alt="share icon" class="filter-white" /> Map Settings
        </button>
    </div>
    <div class="map-container">
        <div class="map" v-html="map.svg" @click="addLocation($event)">
        </div>
        <div class="overlay" :class="{'showTip': steadingInfo !== null}" v-for="location in map.locations" :key="location.id"
            :style="{ left: location.x + 'px', top: location.y + 'px' }"
           >
            <div class="">
                <div class="">
                    <div @click.stop="location.showtools=!location.showtools">
                        <img height="50" :src="`/maps/${location.type.toLowerCase()}.png`" />
                    </div>
                    <div v-if="location.showtools" class="toolbar">
                        <button class="btn btn-link" type="button" @click.stop="alert('edit')">
                            <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                        </button>
                        <button class="btn btn-link" type="button" @click.stop="alert('delete')">
                            <img src="@/assets/trash-solid.svg" alt="delete item"/>
                        </button>
                    </div>
                </div>
                <div class="location-label">
                    <span v-if="!location.steading_id">{{ location.name }}</span>
                    <a v-else target="blank" :href="`/steading/${location.steading_id}`">
                        {{ location.name }} <img src="@/assets/up-right-from-square-solid.svg" alt="plus icon" class="" />
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" ref="locationSelectionModalEl" tabindex="-1" aria-labelledby="locationSelectionModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="locationSelectionModalLabel">Add a Location</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="locationType">Location Type</label>
                    <select class="form-select" id="locationType">
                        <option value="steading">
                            Steading
                        </option>
                        <option value="danger">
                            Danger
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="steadingSelect">Choose a Steading</label>
                    <select class="form-select" id="steadingSelect" v-model="selectedSteadingId">
                        <option v-for="steading in steadings" :key="steading.id" :value="steading.id">
                            {{ steading.name }}
                        </option>
                    </select>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveLocation()">Save</button>
          </div>
        </div>
      </div>
    </div>

        
    <!-- Modal -->
    <div class="modal fade" ref="mapSettingsModalEl" tabindex="-1" aria-labelledby="mapSettingsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="mapSettingsModalLabel">Map Settings</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">SVG Map</label>
                    <textarea class="form-control" v-model="map.svg" aria-describedby="svgHelp" placeholder="SVG">
                    </textarea>
                    <small id="svgHelp" class="form-text text-muted">
                        Copy the contents of an SVG file here. You can make an export SVG maps at
                        <a href="https://watabou.itch.io/perilous-shores" target="blank">
                            Perilous Shores <img src="@/assets/up-right-from-square-solid.svg" alt="plus icon" height="12" class="filter-blue" />
                        </a>
                    </small>
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="saveMapSettings()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { getSteadings } from '@/services/steadingService';
    import Modal from 'bootstrap/js/dist/modal';
    import { onMounted, ref } from 'vue';
    import { useGlobalStore } from '@/stores/globalStore';
    import * as uuid from 'short-uuid';
    import { sampleMapSvg } from '@/services/svgSample';

    const globalStore = useGlobalStore();
    const map = ref<any>({"id": "blahblah", "svg": sampleMapSvg, "locations": [{"id":1,"steading_id":"rWdvPuTC9LYuGhCS5hJW2U", "type": "town", "name":"swamp","x":434,"y":529}]})

    const steadingInfo = ref<any>(null);
    const steadings = ref<any>();
    const selectedSteadingId = ref();
    const locationSelectionModalEl = ref();
    const locationSelectionModal = ref();
    const locationX = ref();
    const locationY = ref();

    const mapSettingsModalEl = ref();
    const mapSettingsModal = ref();


    onMounted(() => {
        locationSelectionModal.value = new Modal(locationSelectionModalEl.value, {
            keyboard: false
        });

        mapSettingsModal.value = new Modal(mapSettingsModalEl.value, {
            keyboard: false
        });

        fetchSteadings();
        loadSvg();
    });

    function addLocation(event: any) {
        const x = event.offsetX;
        const y = event.offsetY;

        locationX.value = x;
        locationY.value = y;
        
        locationSelectionModal.value.show();
    }

    function editLocation(event: any) {
        locationSelectionModal.value.show();
    }

    async function loadSvg() {
        if (!map.value.svg) {
            showMapSettings();
        }
    }

    async function fetchSteadings() {
        const userId = await globalStore.getUserId();
        if (userId) {
            steadings.value = await getSteadings(userId);
        }
    }
    
    function saveLocation() {
      const selectedSteading = steadings.value.find( (x: any) => x.id === selectedSteadingId.value);
      if (selectedSteading) {

        const location = { 
            "id": uuid.generate(), 
            "name": selectedSteading.name, 
            "steading_id": selectedSteading.id, 
            "type": selectedSteading.type, 
            "x": locationX.value, 
            "y": locationY.value,
            "notes": "",
        };
        map.value.locations.push(location);
      }
      closeLocationModal();
    }

    function closeLocationModal() {
      locationSelectionModal.value.hide();
      selectedSteadingId.value = null;
      locationX.value = null;
      locationY.value = null;
    }

    function showMapSettings() {
        mapSettingsModal.value.show();
    }

    function saveMapSettings() {
        alert("not implemented");

        closeMapSettings();
    }

    function closeMapSettings() {
        mapSettingsModal.value.hide();
    }

</script>

<style lang="scss">
.map-container {
  position: relative;
  width: 100%; /* Adjust based on your SVG size */
  height: 100%; /* Adjust based on your SVG size */
}

.overlay {
  position: absolute;
  cursor: pointer;
  .location-label {
    border: 1px solid #000;
    padding: 5px;
    border-radius: 3px;
    background-color: #fff;
  }
  .toolbar {
    background-color: #fff;
  }
}

</style>
