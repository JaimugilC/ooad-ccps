import React from "react";

var stylingObject = {
    th: {
      width: "150px",
      textalign: "center",
      border: "1px solid black",
      padding: "5px"
    }, td: {
        width: "150px",
        textalign: "center",
        border: "1px solid black",
        padding: "5px"
    }
  }

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th style={stylingObject.th}>{" "+ heading.toUpperCase()+" "}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td style={stylingObject.td}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}