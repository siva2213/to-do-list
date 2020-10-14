import React from "react";

function ItemsList(props) {
  debugger;
  return props.itemList && props.itemList.length ? (
    props.itemList.map((item) => {
      return (
        <div className="item-container" key={item}>
          <div>
            <input
              type="checkbox"
              onChange={() => props.onDone(item, props.actionOn)}
            />
          </div>
          <div>{item}</div>
          <div>
            <button onClick={() => props.onDelete(item, props.actionOn)}>
              delete
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <div></div>
  );
}

export default ItemsList;
