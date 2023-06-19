import React from "react";

const ShowNames = (props) => {
  return props.names.map((baby) => {
    return <div className={baby.sex}> {baby.name} </div>;
  });
};

export default ShowNames;

//another attempt---> to use seperate useState for the search word
// return props.names
//   .filter(
//     (baby) =>
//       baby.name?.toLowerCase()?.indexOf(props?.filter?.toLowerCase()) !== -1
//   )
//   .map((oneName) => {
//     return <div className={oneName.sex}>{oneName.name}</div>;
//   });
