import { useEffect, useState } from "react";

function FeatureTable(props:any){
  const [headers, setHeaders] = useState<any>([])
  useEffect(()=>{
    console.log("In component")
    let json:any = props.data;
    setHeaders(Object.keys(json[Object.keys(json)[0]]));  
    
  },[]);

  return(
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg z-0'>
      <table className='w-full text-left text-gray-500 dark:text-gray-400' style={{
        fontSize: "10px"
      }}>
        <thead className='bg-neutral-900 text-neutral-400 uppercase'>
          <tr key='heading'>
          <th scope='col' className='px-2 py-3'>Sensor Image ID</th>
            {headers.map((item:any)=>{
              return(
                <th scope='col' className='px-2 py-3'>{item}</th>
              )
            })}
                
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.data).map((key:any)=>{
            return(
              <>
                <tr className="border-b bg-neutral-800 border-neutral-700">
                <th scope="row" className="px-2 py-3 font-medium text-white whitespace-nowrap">
                  {key}
                </th>
                {Object.keys(props.data[key]).map((i:any)=>{
                  return(
                    <td className="px-2 py-3">
                      {props.data[key][i]}
                    </td>
                  )
                  })}
                </tr>                  
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FeatureTable;