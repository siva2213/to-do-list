import React from "react";

function ItemsList(props) {
  return props.itemList && props.itemList.length ? (
    props.itemList.map((item) => {
      return (
        <div className="item-container" key={item.id}>
          <div>
            <input
              type="checkbox"
              onChange={() => props.onDone(item, props.actionOn)}
            />
          </div>
          <div>{item.text}</div>
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
