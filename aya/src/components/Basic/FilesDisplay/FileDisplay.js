import React, { Component } from 'react';
function FileDisplay(props){
    var display=[];        
    // files is a FileList of File objects. List some properties.
    if(props.files) {
      for (let i = 0, f; (f = props.files[i])&&i<4; i++) {
        console.log(f.type)
        //var allowed=props.allowedTypes.map((t)=>f.type===t).reduce((a,b)=>a+b)>0
        var allowed=true;
        if(allowed){ 
          display.push(
            <li key={'f'+i.toString()+'_'+f.name}>
                <strong> 
                    {escape(f.name)}
                </strong> 
                ( {f.type || 'n/a'} ) - {f.size} bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
            </li>
          )
        };
      }; 
    }
    return <div>
        {display}
    </div>
}

export default FileDisplay