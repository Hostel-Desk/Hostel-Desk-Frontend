import React from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
export const Loading=()=>{
    return(
        <div className="col-12 loader">
            <CircleToBlockLoading  color={"#0000FF"}/>
        </div>
    );
}