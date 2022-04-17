import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {locationContext} from "../contexts/locationContext";

function LocationSearch(props:any){
  const [searchPrefix, setPrefix] = useState("");
  const [searchSuggestions, setSuggestions] = useState<any>([]);
  const { setSelectedLocation } = useContext(locationContext)

  function locationSearch(prefix:any){
    if(prefix){
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${prefix}.json?access_token=pk.eyJ1IjoibmVlbGR1dHRhMTkiLCJhIjoiY2tweG9mN3F4MThrNTJ4cDk0enVjcTN4dCJ9.uxa_h0rjqumTxFMI1QELKQ&autocomplete=true`)
        .then((res:any)=>{
          // console.log(res.data.features);
          setSuggestions(res.data.features);
        })
        .catch((err:any)=> console.log(err));
    }     
  }

  useEffect(()=>{
    if(!searchPrefix){
      setSuggestions([]);
    }
  },[searchPrefix]);

  return(
    <div className='col-span-3 p-8' style={{ 
      backgroundColor: "#1f1f1f"
    }}>
      <input
        type="text"
        name="location-search"
        placeholder='search for location...'
        value={searchPrefix}
        onChange={(a)=>{
          setPrefix(a.target.value)
          locationSearch(a.target.value);
        }}
        className='bg-black text-white placeholder-gray-500 w-full rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out hover:outline-gray-50'
      />
      {searchSuggestions.length > 0 ? (
        <div className='w-auto h-auto bg-black rounded-md p-4 flex flex-col z-10'
          style={{
            position: "absolute",
            marginTop: "8px"
          }}
        >
          {searchSuggestions.map((feature:any)=>{
            return(
              <p className='w-96 h-auto text-gray-500 transition-all duration-600 hover:text-white' style={{
                cursor: "pointer",
                marginBottom: "5px"
              }} onClick={()=>{
                setSelectedLocation(feature.place_name);
                setSuggestions([]);
                setPrefix("");
              }}>{feature.place_name}</p>   
            )
          })}            
        </div>
      ):(<></>)}
      
    </div>
    )
}

export default LocationSearch;