import React from 'react';
import styles from './BillStyle.scss';
import { Table } from 'react-bootstrap'

export default function BillInfo({bill_name, primary_subject, bill_id}) {

  return (
    <div className={styles.billInfo}>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td><i className="far fa-lightbulb"></i> {primary_subject}</td>
            <td>ID Number: {bill_id}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
