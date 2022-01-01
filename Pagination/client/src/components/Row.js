import React from 'react'
import {useQuery, gql} from "@apollo/client";
const GET_DATA = gql `
  query{
    ViewData{
      id,
      title
    }
  }
`;
function Row({index,style}) {
    const {data , loading , error } = useQuery(GET_DATA);
    if(error){return(`loi roi ${error.message}`)}
    if(loading){return('loading...')}

    return (
        <React.Fragment>
                <div
                className={index % 2
                ? "ListItemOdd"
                : "ListItemEven"}
                style={style}>
                Row {index}
            </div>
        </React.Fragment>
    )
}

export default Row
