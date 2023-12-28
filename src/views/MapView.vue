<template>
    <div class="mb-1 d-print-none">
        <button class="btn btn-secondary text-light" @click="showMapSettings()">
            <img src="@/assets/gear-solid.svg" alt="share icon" class="filter-white" /> Map Settings
        </button>
        <div ref="uploadProgress">

        </div>
    </div>
    <div class="map-container m-0 p-0" v-if="map.mapFile">
        <div class="map" @click="addLocation($event)">
            <img :src="mapUrl" alt="map image" v-if="mapUrl" />
        </div>
        <div class="overlay" :class="{'showTip': steadingInfo !== null}" v-for="location in map.locations" :key="location.id"
            :style="{ left: location.x + 'px', top: location.y + 'px' }"
           >
            <div class="">
                <div class="">
                    <div @click.stop="location.showtools=!location.showtools">
                        <img height="50" :src="`/maps/${getLocationTypeIconName(location)}.png`" />
                    </div>
                    <div v-if="location.showtools" class="toolbar">
                        <button class="btn btn-link" type="button" @click.stop="editLocation(location.id)">
                            <img src="@/assets/pencil-solid.svg" alt="edit description"/>
                        </button>
                        <button class="btn btn-link" type="button" @click.stop="deleteLocation(location.id)">
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
            <h5 class="modal-title" id="locationSelectionModalLabel">Location Settings</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="locationType">Location Type</label>
                    <select class="form-select" v-model="locationModalType">
                        <option v-for="locationType in LocationType" :key="locationType" :value="locationType">
                            {{ locationType }}
                        </option>
                    </select>
                </div>

                <div class="form-group" v-if="locationModalType !== LocationType.Steading">
                    <label for="locationType">Location Name</label>
                    <input type="text" class="form-control" v-model="locationModalName" placeholder="Location Name">
                </div>

                <div class="form-group" v-if="locationModalType === LocationType.Steading">
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
            <button type="button" class="btn btn-secondary" @click="closeLocationModal()">Close</button>
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
                        <label for="locationType">Map Name</label>
                        <input type="text" class="form-control" v-model="map.name" placeholder="Map Name">
                    </div>
                    <div class="form-group">
                        <label for="mapFileUpload">SVG Map</label>
                        <input type="file" id="mapFileUpload" ref="mapFileUpload" />
                        <div id="svgHelp" class="small form-text text-muted">
                            Upload an SVG file of your map. <br/> You can create and export SVG maps at
                            <a href="https://watabou.itch.io/perilous-shores" target="blank">
                                Perilous Shores <img src="@/assets/up-right-from-square-solid.svg" alt="plus icon" height="12" class="filter-blue" />
                            </a>
                        </div>
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
    import { LocationType } from '@/enums/locationType';
    import { toast } from 'vue3-toastify';
    import { uploadData, getUrl, remove } from '@aws-amplify/storage'

    const globalStore = useGlobalStore();
    const map = ref<any>({"id": "blahblah", "name": "New Map", "mapFile": null, "locations": []});

    const mapUrl = ref();
    const steadingInfo = ref<any>(null);
    const steadings = ref<any>();
    const selectedLocationId = ref();
    const selectedSteadingId = ref();
    const locationSelectionModalEl = ref();
    const locationSelectionModal = ref();
    const locationX = ref();
    const locationY = ref();
    const locationModalType = ref(LocationType.Danger);
    const locationModalName = ref();

    const uploadProgress = ref();
    const mapSettingsModalEl = ref();
    const mapSettingsModal = ref();

    const mapFileUpload = ref();


    onMounted(() => {
        locationSelectionModal.value = new Modal(locationSelectionModalEl.value, {
            keyboard: false
        });

        mapSettingsModal.value = new Modal(mapSettingsModalEl.value, {
            keyboard: false
        });

        fetchSteadings();
        getSvg();
    });

    function addLocation(event: any) {
        const x = event.offsetX;
        const y = event.offsetY;

        locationX.value = x;
        locationY.value = y;
        
        locationSelectionModal.value.show();
    }

    function editLocation(locationId: string) {
        const location = getMapLocationById(locationId);
        locationModalName.value = location.name;
        locationModalType.value = location.type as LocationType;
        selectedLocationId.value = locationId;
        selectedSteadingId.value = location?.steading_id;

        locationSelectionModal.value.show();
    }

    function deleteLocation(locationId: string) {
        const confirmed = confirm("Are you sure you want to delete this location?");

        if (confirmed) {
            const idx = getMapLocationIndexById(locationId);
            if (idx > -1) {
                map.value.locations.splice(idx, 1);
                saveMap();
            }
        }
    }

    async function saveMap() {
        alert("not implementd");
    }

    async function fetchSteadings() {
        const userId = await globalStore.getUserId();
        if (userId) {
            steadings.value = await getSteadings(userId);
        }
    }

    function getLocationTypeIconName(location: any) {
        if (location.type == LocationType.Steading) {
            return location.steading_type.toLowerCase();
        }
        else {
            return location.type.toLowerCase();
        }
    }
    
    function saveLocation() {
        if (locationModalType.value !== LocationType.Steading && !locationModalName.value) {
            toast("Location must have a name.");
            return;
        }

        const selectedSteading = steadings.value.find( (x: any) => x.id === selectedSteadingId.value);

        if (selectedLocationId.value) {
            const mapLocationIdx = getMapLocationIndexById(selectedLocationId.value);
            if (mapLocationIdx > -1) {
              
                map.value.locations[mapLocationIdx].name = locationModalName.value;
                map.value.locations[mapLocationIdx].type = locationModalType.value;
            
                if (locationModalType.value === LocationType.Steading) {
                    if (selectedSteading) {
                        map.value.locations[mapLocationIdx].name = selectedSteading.name;
                        map.value.locations[mapLocationIdx].steading_id == selectedSteading.id ?? null;
                        map.value.locations[mapLocationIdx].steading_type = selectedSteading.type;
                    }
                    else {
                        toast("You must choose a Steading.");
                        return;
                    }
                }
            }
        }
        else {
            const location = {
                "id": uuid.generate(), 
                "name": locationModalName.value, 
                "steading_id": null, 
                "steading_type": null, 
                "type": locationModalType.value,
                "x": locationX.value, 
                "y": locationY.value,
                "notes": "",
            }
            
            if (locationModalType.value === LocationType.Steading) {
                if (selectedSteading) {
                    location.name = selectedSteading.name;
                    location.steading_id = selectedSteading.id;
                    location.steading_type = selectedSteading.type;
                }
                else {
                    toast("You must choose a Steading.");
                    return;
                }
            }
        
            map.value.locations.push(location);
        }
      
        closeLocationModal();
    }

    function closeLocationModal() {
      locationSelectionModal.value.hide();
      selectedLocationId.value = null;
      selectedSteadingId.value = null;
      locationX.value = null;
      locationY.value = null;
      locationModalName.value = null;
      locationModalType.value = LocationType.Danger;
    }

    function showMapSettings() {
        mapSettingsModal.value.show();
    }

    async function saveMapSettings() {
        if (!map.value.name) {
            toast("Map must have a name");
            return;
        }

        if (mapFileUpload.value.files.length > 0) {
            const file = mapFileUpload.value.files[0];
            if (map.value.mapFile && map.value.mapFile !== file.name) {
                await deleteSvg(map.value.mapFile);
            }
            await uploadFile();
        }

        //save map

        closeMapSettings();
    }

    function closeMapSettings() {
        mapSettingsModal.value.hide();
    }

    function getMapLocationById(id: string) {
        return map.value.locations.find( (x: any) => x.id == id);
    }

    function getMapLocationIndexById(id: string) {
        return map.value.locations.findIndex( (x: any) => x.id == id);
    }

    
    const getSvg = async () => {
        if (!map.value.mapFile) {
            showMapSettings();
            return;
        }

        try {
            const result = await getUrl({
                key: map.value.mapFile,
            });

            mapUrl.value = result.url.href;
        } catch (error) {
            console.error('Error retrieving file:', error);
        }
    }

    const uploadFile = async () => {
        const file = mapFileUpload.value.files[0];
        let fileNotExists = false;

        //check if this map already exists
        // To check for existence of a file

        try {
            const result = await getUrl({
                key: file.name,
                options: {
                    validateObjectExistence: true // defaults to false
                }
            });
        }
        catch(ex) {
            fileNotExists = true;
        }

        if (!fileNotExists) {
            map.value.mapFile = file.name;
            await getSvg();
        }
        else {
            try {
                const result = await uploadData({
                    key: file.name,
                    data: file,
                    options:  {
                        contentType: "image/svg+xml", 
                        onProgress: ({ transferredBytes, totalBytes }) => {
                            if (totalBytes) {
                                uploadProgress.value = 
                                    `Upload progress ${
                                    Math.round(transferredBytes / totalBytes) * 100
                                    } %`;
                            }
                        }
                    }
                });

                waitForTransferComplete(result, 
                    (completedResult: any) => {
                        map.value.mapFile = completedResult.result.key;
                        getSvg();
                        toast(`Uploaded Map`);
                    },
                    (error: any) => {
                        toast(`Error uploading map: ${error}`);
                    }
                );
            } catch (error) {
                console.error('Error uploading file:', error);
                toast(`Error uploading file: ${error}`);
            }
        }
    }

    function waitForTransferComplete(result:any , callback: any, errorCallback: any) {
        if (result.state !== 'IN_PROGRESS') {
            // If the transfer is no longer in progress, invoke the callback with the result
            if (result.state === 'SUCCESS') {
                callback(result);
            } else {
                errorCallback(new Error('Transfer failed with state: ' + result.state));
            }
        } else {
            // If the transfer is still in progress, check again after a delay
            setTimeout(() => waitForTransferComplete(result, callback, errorCallback), 1000);
        }
    }


    const deleteSvg = async (fileName: string) => {
        try {
            const result = await remove({ key: fileName });
            mapUrl.value = null;
        } catch (error) {
            console.error('Error retrieving file:', error);
        }
    }


</script>

<style lang="scss">
.map-container {
  position: relative;
  overflow: scroll;
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
