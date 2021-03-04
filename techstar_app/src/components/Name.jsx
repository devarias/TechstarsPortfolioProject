import React from "react";
import { Data } from "../data";
import Survey from './Survey';

function Name(){
  return (
    <>
      <div className="name-container">
        {
          Data.map((item)=>
            <div>
              <div>{item.name}</div>
                <ul>
                  {Object.values(item.Slots).map((sub)=>
                    {return(sub ?
                        <Survey company={sub}/>
                        : <></>
                    )}
                  )}
                </ul>
            </div>
          )
        }
      </div>
    </>
  );
}
export default Name;