import React, { useEffect, useState } from 'react';
import '../RosterView/RosterPage.css';
import Card from './RosterCard/Card'

function RosterPage({data}) {

  useEffect(() => {
    console.log(data)
  })

  
  const roster = data.map(roster => {
    
    if (data.length > 0) {
      return (
        <Card data={roster}/>
      )
    }

    return (
      <div>No Data Found</div>
    )
  })

  return (
    <div>
      <h1 className="container-title">ROSTER</h1>
    <div className="roster-grid">
      {roster}
    </div>
    </div>
  );
}

export default RosterPage;
