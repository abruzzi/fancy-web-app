import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import styled from 'styled-components';

import people from "./people.json";

import './Table.css';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: people
    };
  }
  render() {
    const { data } = this.state;
    return (
      <TableContainer>
        <h3>Some meaningless table</h3>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          showPagination={false}
          className="-striped -highlight"
        />
      </TableContainer>
    );
  }
}

const TableContainer = styled.div`
  h3 {
    color: #333333;
    text-align: center;
  }
`;

export default Table;