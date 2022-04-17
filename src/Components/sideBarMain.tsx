import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faFloppyDisk, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { detailsHandellerContext } from '../contexts/detailsHandellerContext';
import FeatureTable from '../Components/featureTable';
import {locationContext} from "../contexts/locationContext";
import { editContext } from '../contexts/editContext';

function SideBarMain(props:any){
  const { selectedLocation } = useContext(locationContext);
  const {showDetails, setShowDetails} = useContext(detailsHandellerContext);
  const {setControlVisibiltiy} = useContext(editContext);

  

  return (
    <div className='col-span-3 row-span-4 p-4 transition-all duration-600' style={{ 
      backgroundColor: "Black"
    }}>
      <button 
        type="button" 
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-neutral-900 transition-all duration-400 hover:bg-slate-700 focus:outline-none focus:ring-neutral-400 disabled:opacity-50"
        disabled={!selectedLocation ? true : false}
        onClick={()=> setControlVisibiltiy(true)}
      ><FontAwesomeIcon icon={faPen} /> Draw Area</button>

      <button 
        type="button" 
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-neutral-900 transition-all duration-400 hover:bg-slate-700 focus:outline-none focus:ring-neutral-400 disabled:opacity-50"
        onClick={()=>setShowDetails(true)}
        disabled={props.geometry ? Object.keys(props?.geometry).length > 0 ? false : true : true}
      ><FontAwesomeIcon icon={faMagnifyingGlass} /> Search details</button>

      <button 
        type="button" 
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-neutral-900 transition-all duration-400 hover:bg-slate-700 focus:outline-none focus:ring-neutral-400 disabled:opacity-50"
        onClick={()=>{
          localStorage.setItem('data', JSON.stringify(props.geometry));
          console.log("Data from localstorage", localStorage.getItem('data'));
        }}
        disabled={props.geometry ? Object.keys(props?.geometry).length > 0 ? false : true : true}
      ><FontAwesomeIcon icon={faFloppyDisk} /> Save Geometry</button>
      {showDetails && (
        <FeatureTable
        data={props.data}
        />
      )}
    </div>
  )
}

export default SideBarMain;