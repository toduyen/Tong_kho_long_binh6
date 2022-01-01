import "./App.css";
import { useQuery, gql } from "@apollo/client";
import React from "react";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const Row = ({ index, style, data }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {data[index].title}
  </div>
);

const GET_DATA = gql`
  query {
    ViewData {
      id
      title
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_DATA);
  if (error) {
    return `loi roi ${error.message}`;
  }
  if (loading) {
    return "loading...";
  }
  return (
    <div className="App">
      <h1>Misss you</h1>
      <AutoSizer style={{ height: 140 }}>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={data.ViewData.length}
            itemSize={35}
            itemData={data.ViewData}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}

export default App;
