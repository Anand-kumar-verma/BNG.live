import { Box } from "@mui/material";
import React, { useState } from "react";
import pr0 from "../../../../assets/trximage/0.png";
import pr1 from "../../../../assets/trximage/1.png";
import pr2 from "../../../../assets/trximage/2.png";
import pr3 from "../../../../assets/trximage/3.png";
import pr4 from "../../../../assets/trximage/4.png";
import pr5 from "../../../../assets/trximage/5.png";
import pr6 from "../../../../assets/trximage/6.png";
import pr7 from "../../../../assets/trximage/7.png";
import pr8 from "../../../../assets/trximage/8.png";
import pr9 from "../../../../assets/trximage/9.png";
import a from "../../../../assets/trximage/a.png";
import b from "../../../../assets/trximage/b.png";
import c from "../../../../assets/trximage/c.png";
import d from "../../../../assets/trximage/d.png";
import e from "../../../../assets/trximage/e.png";
import f from "../../../../assets/trximage/f.png";
import g from "../../../../assets/trximage/g.png";
import h from "../../../../assets/trximage/h.png";
import i from "../../../../assets/trximage/i.png";
import j from "../../../../assets/trximage/j.png";
import k from "../../../../assets/trximage/k.png";
import l from "../../../../assets/trximage/l.png";
import m from "../../../../assets/trximage/m.png";
import n from "../../../../assets/trximage/n.png";
import o from "../../../../assets/trximage/o.png";
import p from "../../../../assets/trximage/p.png";
import q from "../../../../assets/trximage/q.png";
import r from "../../../../assets/trximage/r.png";
import s from "../../../../assets/trximage/s.png";
import t from "../../../../assets/trximage/t.png";
import u from "../../../../assets/trximage/u.png";
import v from "../../../../assets/trximage/v.png";
import w from "../../../../assets/trximage/w.png";
import x from "../../../../assets/trximage/x.png";
import y from "../../../../assets/trximage/y.png";
import z from "../../../../assets/trximage/z.png";
import { changeImagesTRX } from "../../../../services/schedular";
import { useSelector } from "react-redux";
const ShowImages = () => {
  const [return_image_index, setReturn_index] = useState([1, 2, 3, 4, 5]);

  const image_array_of_image = [
    pr0,
    pr1,
    pr2,
    pr3,
    pr4,
    pr5,
    pr6,
    pr7,
    pr8,
    pr9,
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];

  const trx_game_image_index = useSelector(
    (state) => state.aviator.trx_game_image_index
  );

  React.useEffect(() => {
    const result = changeImagesTRX(trx_game_image_index);
    setReturn_index(result);
  }, [trx_game_image_index]);
   
  return (
    <>
      <div className="grid grid-cols-5 gap-2 my-2">
        <Box
          component="img"
          className=""
          src={image_array_of_image[return_image_index[0]]}
        ></Box>
        <Box
          component="img"
          src={image_array_of_image[return_image_index[1]]}
        ></Box>
        <Box
          component="img"
          src={image_array_of_image[return_image_index[2]]}
        ></Box>
        <Box
          component="img"
          src={image_array_of_image[return_image_index[3]]}
        ></Box>
        <Box
          component="img"
          src={image_array_of_image[return_image_index[4]]}
        ></Box>
      </div>
    </>
  );
};

export default ShowImages;
