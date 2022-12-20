function MoveItem({ pos, setTz, setOpct, setImages }) {
  let valorOpct = 0.19;
  let counter = 0;
  const timer = setInterval(() => {
    setTz(valor);
    setOpct(valorOpct);
    valor = valor + 0.00999;
    valorOpct += 0.0001;

    if (counter >= 100) {
      const newArr = [
        images[5],
        images[0],
        images[1],
        images[2],
        images[3],
        images[4],
      ];

      setImages(newArr);
      //   valor = -20;
      valorOpct = 0.19;
      counter = 0;
    }
    counter++;
  }, velocity);
}

// setTz(valor);
// setOpct(valorOpct);
// setImages(newArr);

// let valor = -20;
//

// key={index}
// bck={element}
// style={{
//   transform: `rotateX(${rx}deg) rotateY(${ry}deg) 
// rotatez(${rz}deg) translate3d(${tx}px, ${
//     ty * (7 - index)
//   }vh, ${tz - 70 + (index + 1) * 10}vw)`,
//   opacity: `${opct + (index + 1) * 0.15}`,
// }}
