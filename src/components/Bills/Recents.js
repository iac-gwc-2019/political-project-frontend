import React from 'react';

export default function Recent ({latest_major_action_date, latest_major_action}) {
  return (
    <div>
      <h4>Recent</h4>
      <p>Latest Action Date: {latest_major_action_date}</p>
      <p>Latest Action: {latest_major_action}</p>
    </div>
  )
}
