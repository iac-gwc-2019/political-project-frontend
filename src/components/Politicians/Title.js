import React from 'react';

export default function Title({short_title, first_name, middle_name, last_name}) {

  return (
    <div>
      <h3>{short_title} {first_name} {middle_name} {last_name}</h3>
    </div>
  )
}
