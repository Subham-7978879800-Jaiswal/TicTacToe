import React from "react";

export const Box = React.memo(({ value, i, j, onClickBox, id }) => {
  const handleClick = (event) => {
    if (value !== 0) {
      return;
    }
    const { i, j } = event.target.attributes;

    const posi = Number(i.value);
    const posj = Number(j.value);

    onClickBox(posi, posj, value);
  };

  return (
    <div
      key={id}
      onClick={handleClick}
      i={i}
      j={j}
      value={value}
      style={{
        boxShadow: "0 -1px 0 0 red,1px 0 0 0 red,0 1px 0 0 red,-1px 0 0 0 red ",
        height: 100,
        width: 100,
        display: "inline-block",
      }}
    >
      {value === 1 && (
        <img
          style={{ height: 100, width: 100, padding: 0 }}
          alt={"X"}
          src={
            "https://emojipedia-us.s3.amazonaws.com/source/skype/289/cross-mark_274c.png"
          }
        ></img>
      )}
      {value === 2 && (
        <img
          style={{ height: 100, width: 100, padding: 0 }}
          alt={"O"}
          src={
            "https://smallimg.pngkey.com/png/small/205-2056222_tic-tac-toe-o.png"
          }
        ></img>
      )}
    </div>
  );
});
