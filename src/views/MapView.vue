<template>
    <div class="map-container">
        <div class="map" v-html="svgContent" @click="addLocation($event)">
        </div>
        <div class="overlay" :class="{'showTip': steadingInfo !== null}" v-for="location in locations" :key="location.id"
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
    <div class="modal fade" id="steadingModal" ref="steadingModalElement" tabindex="-1" aria-labelledby="steadingModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="steadingModalLabel">Select a Steading</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <select class="form-select" v-model="selectedSteadingId">
              <option v-for="steading in steadings" :key="steading.id" :value="steading.id">
                {{ steading.name }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmSelection">Select</button>
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

    const globalStore = useGlobalStore();
    const locations = ref<any>([{"id":1,"steading_id":"rWdvPuTC9LYuGhCS5hJW2U", "type": "town", "name":"swamp","x":434,"y":529}]);
    const svgContent = ref<any>();
    const steadingInfo = ref<any>(null);
    const steadings = ref<any>();
    const selectedSteadingId = ref();
    const steadingModalElement = ref();
    const steadingModal = ref();
    const locationX = ref();
    const locationY = ref();


    onMounted(() => {
        fetchSteadings();
        loadSvg();

        steadingModal.value = new Modal(steadingModalElement.value, {
            keyboard: false
        });
    });

    function addLocation(event: any) {
        const x = event.offsetX;
        const y = event.offsetY;

        locationX.value = x;
        locationY.value = y;
        
        steadingModal.value.show();
    }

    async function loadSvg() {
        fetch('/maps/galmoth_lake.svg')
            .then(response => response.text())
            .then(svgData => {
                svgContent.value = svgData;
            });
    }

    async function fetchSteadings() {
        const userId = await globalStore.getUserId();
        if (userId) {
            steadings.value = await getSteadings(userId);
        }
    }
    
    function confirmSelection() {
      const selectedSteading = steadings.value.find( (x: any) => x.id === selectedSteadingId.value);
      if (selectedSteading) {
        console.log('Selected Steading:', selectedSteading);

        const location = { 
            "id": uuid.generate(), 
            "name": selectedSteading.name, 
            "steading_id": selectedSteading.id, 
            "type": selectedSteading.type, 
            "x": locationX.value, 
            "y": locationY.value,
            "notes": "",
        };
        locations.value.push(location);
      }
      closeModal();
    }

    function closeModal() {
      steadingModal.value.hide();
      selectedSteadingId.value = null;
      locationX.value = null;
      locationY.value = null;
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
