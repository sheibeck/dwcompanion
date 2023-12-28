<template>
    <div class="mb-1 d-print-none d-flex">
        <h1 v-if="map">{{ map.name }}</h1>
        <button v-if="isOwner" class="btn btn-secondary text-light ms-auto" @click="showMapSettings()">
            <img src="@/assets/gear-solid.svg" alt="share icon" class="filter-white" /> Map Settings
        </button>
    </div>
   
    <div v-if="isLoadingMap">
        Loading map ...
    </div>
    <div v-if="!map?.mapFile && !isGuest">
        Upload an SVG file in the Map Settings to get started!
    </div>
    <div class="d-flex text-muted" v-if="map?.mapFile && !isGuest">
        <div>Click anywhere on the map to add a point of interest.</div>
        <div class="ms-auto">Click an existing location icon to edit it.</div>
    </div>
    <div class="map-container m-0 p-0" v-if="map">
        <div class="map" @click="addLocation($event)">
            <img :src="mapUrl" alt="map image" v-if="mapUrl && !isLoadingMap" />
        </div>
        <div class="overlay" :class="{'showTip': steadingInfo !== null}" v-for="location in map.locations" :key="location.id"
            :style="{ left: location.x + 'px', top: location.y + 'px' }"
           >
            <div class="">
                <div class="d-flex justify-content-center align-items-center">
                    <div @click.stop="toggleLocationTools(location)">
                        <img height="60" :src="`/maps/${getLocationTypeIconName(location)}.png`" />
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
            <h5 class="modal-title" id="locationSelectionModalLabel"><span v-if="isEditingLocation">Edit</span><span v-else>Add</span> Location</h5>
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
                    <label for="steadingSelect">Choose a Steading / <a href="/steading/new-steading" target="blank">Create a Steading</a></label>
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
                <div class="modal-body" v-if="map">
                    <div class="form-group pb-1">
                        <label for="locationType">Map Name</label>
                        <input type="text" class="form-control" v-model="map.name" placeholder="Map Name">
                    </div>
                    <div class="form-group" v-if="mapId !== 'new-map'">
                        <label for="mapFileUpload">SVG Map</label>
                        <input type="file" id="mapFileUpload" ref="mapFileUpload" />
                        <div id="svgHelp" class="small form-text text-muted">
                            Upload an SVG file of a map. <br/> You can create and export SVG maps at
                            <a href="https://watabou.itch.io/perilous-shores" target="blank">
                                Perilous Shores <img src="@/assets/up-right-from-square-solid.svg" alt="plus icon" height="12" class="filter-blue" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeMapSettings()">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveMapSettings()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { getSteadings } from '@/services/steadingService';
    import Modal from 'bootstrap/js/dist/modal';
    import { computed, onMounted, ref, watch } from 'vue';
    import { useGlobalStore } from '@/stores/globalStore';
    import * as uuid from 'short-uuid';
    import { LocationType } from '@/enums/locationType';
    import { toast } from 'vue3-toastify';
    import { uploadData, getUrl, remove } from '@aws-amplify/storage'
    import { useRoute, useRouter } from 'vue-router';
    import { createMap, getMap, updateMap } from '@/services/mapService';

    const globalStore = useGlobalStore();
    const route = useRoute();
    const router = useRouter();

    const map = ref<any>();
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

    const isLoadingMap = ref(false);

    const mapId = computed(() => route.params.id.toString() );

    const isAuthenticated = ref(false);
    const userId = ref<null|String>(null);

    const isOwner = computed(()=> {  
        return userId.value !== null && (map.value?.userId === userId.value || mapId.value == "new-map");
    });

    const isGuest = computed(()=> {
        return userId.value == null;
    });


    const isEditingLocation = ref(false);

    onMounted(async () => {
        isAuthenticated.value = await globalStore.isAuthenticated();
        userId.value = await globalStore.getUserId();

        locationSelectionModal.value = new Modal(locationSelectionModalEl.value, {
            keyboard: false
        });

        mapSettingsModal.value = new Modal(mapSettingsModalEl.value, {
            keyboard: false
        });

        steadings.value = await listSteadings();
        await setupMap();
    });

    watch(route, async (to, from) => {
        await setupMap();
    });
        
    async function setupMap() {
        const userId = await globalStore.getUserId();

        if (mapId.value === "new-map") {
            const newMap = {
                name: "",
                userId: userId,
                locations: [],
                mapFile: "",
            }

            map.value = newMap;

            showMapSettings();
            return;
        }
        
        map.value = await getMap(mapId.value);

        if (!map.value.mapFile) {
            showMapSettings();
        }
        else {
            await getSvg();
        }
    } 

    function addLocation(event: any) {
        if (!isOwner.value) {
            return;
        }

        const x = event.offsetX;
        const y = event.offsetY;

        locationX.value = x;
        locationY.value = y;
        
        locationSelectionModal.value.show();
    }

    function editLocation(locationId: string) {
        isEditingLocation.value = true;

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
                save();
            }
        }
    }

    async function save() {
        const authenticated = await globalStore.isAuthenticated();
        if (authenticated && mapId.value === "new-map") {
            const userId = await globalStore.getUserId();
            map.value.userId = userId;

            if (!map.value.name || map.value.name.trim().length === 0) {
                toast("Map must have a name.")
                return;
            }

            const newMapId = await createMap(map.value);
            if (newMapId) {
                toast(`Created map: ${map.value.name}.`)

                setTimeout(async () => {
                    await router.push({ name: "map", params: { id: newMapId }, replace: true });
                }, 2000);
                
            }
            else {
                toast(`Failed to create map!`);
            }
        }

        else {
            await update();
        }
    }

    async function update() {
        const updatedMap = await updateMap(map.value);

        if (updatedMap) {
            toast(`Map saved.`);
        }
        else {
            toast('There was a problem saving map!');
        }
    }

    async function listSteadings() {
        const userId = await globalStore.getUserId();
        if (userId) {
            const steadingList = await getSteadings(userId);
            return steadingList;
        }
        return null;
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
        
            if ('showtools' in location) {
                delete location.showtools;
            }
            
            map.value.locations.push(location);
        }
        //save map
        save();
        closeLocationModal();
    }

    function closeLocationModal() {
      locationSelectionModal.value.hide();
      selectedLocationId.value = null;
      selectedSteadingId.value = null;
      locationX.value = null;
      locationY.value = null;
      locationModalName.value = null;
      locationModalType.value = LocationType.Unknown;
      isEditingLocation.value = false;
    }

    function showMapSettings() {
        if (!isGuest.value) {
            mapSettingsModal.value.show();
        }
    }

    async function saveMapSettings() {
        if (!map.value.name) {
            toast("Map must have a name");
            return;
        }

        if (mapFileUpload.value?.files?.length > 0) {
            const file = mapFileUpload.value.files[0];

            const fileType = file.type;
            if (fileType !== 'image/svg+xml') {
                toast('File must be an SVG');
                return;
            }

            if (map.value.mapFile && map.value.mapFile !== getUniqueMapFileName(file.name)) {
                await deleteSvg(map.value.mapFile);
            }
            await uploadFile();
        }

        //save map
        save();
        closeMapSettings();
    }

    function getUniqueMapFileName(fileName: string) {
        return `${map.value.id}_${fileName}`;
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
        isLoadingMap.value = true;

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

        isLoadingMap.value = false;
    }

    const uploadFile = async () => {
        const file = mapFileUpload.value.files[0];
        try {
            const result = await uploadData({
                key: getUniqueMapFileName(file.name),
                data: file,
                options:  {
                    contentType: "image/svg+xml", 
                    onProgress: async ({ transferredBytes, totalBytes }) => {
                        if (totalBytes) {
                            uploadProgress.value = 
                                `Upload progress ${
                                Math.round(transferredBytes / totalBytes) * 100
                                } %`;
                        }
                    }
                }
            });

            await waitForTransferComplete(result, 
                async (completedResult: any) => {
                    const result = await completedResult.result;
                    map.value.mapFile = result.key;
                    toast(`Uploaded map file.`);
                    save();
                    getSvg();
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

    async function waitForTransferComplete(result:any , callback: any, errorCallback: any) {
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

    function toggleLocationTools(location: any) {
        if (!isOwner.value) {
            return;
        }
        
        location.showtools=!location.showtools;
    }

</script>

<style lang="scss">
.map-container {
  position: relative;
  overflow: scroll;
  min-height: 200px;
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
