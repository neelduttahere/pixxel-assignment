
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { useState} from 'react';
import LocationSearch from './Components/locationSearch';
import { detailsHandellerContext } from './contexts/detailsHandellerContext';
import SideBarMain from './Components/sideBarMain';
import Data from "./data.json";
import { locationContext } from "./contexts/locationContext";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";
import { editContext } from './contexts/editContext';

function App() {
  const [data, setData] = useState<any>(Data);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showControls, setControlVisibiltiy] = useState(false)
  const [geometry, setGeometry] = useState<any>({});

  // creating shape
  const _created = (e:any) => {
    const { layerType, layer } = e;
    if(layerType === "rectangle"){
      const {_leaflet_id} = layer;
      let obj:any = {
        id: _leaflet_id,
        coordinates: layer.getLatLngs()[0]
      };
      setGeometry(obj);
    }
  }

  // editing
  const _editing = (e:any) => {
    console.log("edited", e)
  }

  // deleting
  const _deleted = (e:any) => {
    console.log("deleted", e)
  }
  return (
      <div className='h-screen bg-slate-700 grid grid-rows-1 grid-flow-col'>  
        {/* map container */}
        <div className=' col-span-4'>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <FeatureGroup>
            {showControls && (
              <EditControl 
              position='topright' 
              onCreated={_created} 
              onEdited={_editing} 
              onDeleted={_deleted}
              draw={{
                rectangle: true,
                polygon: false,
                polyline: false,
                circle: false,
                circlemarker: false,
                marker: false,
              }}
            />
            )}
          </FeatureGroup>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        </div>
        {/* sidebar */}
        <div className='col-span-1 grid grid-rows-6 grid-flow-col' style={{
          backgroundColor: "black",
        }}> 
          <locationContext.Provider value={{selectedLocation, setSelectedLocation}}>
            <LocationSearch/>
            <detailsHandellerContext.Provider value={{showDetails, setShowDetails}}>
              <editContext.Provider value={{showControls, setControlVisibiltiy}}>
                <SideBarMain data={data} geometry={geometry}/>
              </editContext.Provider>              
            </detailsHandellerContext.Provider>  
          </locationContext.Provider>             

          <div className='col-span-3' style={{ 
            backgroundColor: "#1f1f1f"
          }}>
            {selectedLocation && (
              <div className="mt-1.5 text-xs p-4">
                <span className="text-white font-light flex-1 block break-words"
                  style={{
                    width: "200px"
                  }}
                ><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;{selectedLocation}</span>
                <span className="float-right mr-3 cursor-pointer" style={{color: "#4695f0", marginTop: "-12px"}}  onClick={()=>setSelectedLocation("")}>Clear</span>
              </div>
            )}
          </div>
        </div>
      </div>
    
   
    
  );
}

export default App;
