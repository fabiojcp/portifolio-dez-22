// function handleUserKeyPress(event) {
//     const yOffSet = window.self.pageYOffset;
//     const yHeight = window.innerHeight;
//     // window.scrollTo(0, 2 * yHeight);
//     if (yOffSet < yHeight / 6) window.scrollTo({ top: 0, behavior: "smooth" });

//     if (yOffSet > 1.75 * yHeight && yOffSet < 2.25 * yHeight)
//       window.scrollTo({ top: 2 * yHeight, behavior: "smooth" });

//     if (yOffSet > 2.75 * yHeight && yOffSet < 3.25 * yHeight)
//       window.scrollTo({ top: 3 * yHeight, behavior: "smooth" });
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", (event) => handleUserKeyPress(event));
//     return () => {
//       window.removeEventListener("scroll", (event) =>
//         handleUserKeyPress(event)
//       );
//     };
//   }, [handleUserKeyPress]);
