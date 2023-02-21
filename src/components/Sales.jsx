import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item';

const Sales = ({endpoint : {title,items}}) => {
  console.log(title);
  console.log(items);
  return (
    <>
      <div>
        <Title title={title}/>
        <div>
          {
            items.map((val,i) => {
              return (<Item {...val} key={i}/>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Sales
