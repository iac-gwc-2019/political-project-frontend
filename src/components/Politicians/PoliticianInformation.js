import React from 'react';
import { Table } from 'react-bootstrap'

export default function PoliticianInfo({website, phone, party}) {

  function partyFullName({party}) {
    switch(party) {
      case 'D':
        return "Democratic";
      case 'R':
        return "Republican";
      case 'I':
        return "Independent";
      default:
        return null;
    }
  }
  return (
    <Table bordered size="sm">
      <tbody>
        <tr>
          <td>Affiliated Party: {partyFullName({party})}</td>
          <td><i class="fas fa-phone-alt"></i> {phone}</td>
          <td>Website: {website}</td>
        </tr>
      </tbody>
    </Table>
  )
}
