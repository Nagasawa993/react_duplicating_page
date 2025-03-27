import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const handleAdd = () => {
//     setCount(prev => prev + 1)
//   }
//   return (
//     <div className="App">
//       <button onClick={handleAdd}>{count}</button>      
//     </div>
//   );
// }
// export default App;


// const members = ["Araki", "Ibata", "Fukutome", "Woods", "Alex", "Tatsunami"];
// function App() {
// const dragons_2006_members = members.map((a, b) => {
//   return `${b + 1}番目は${a}`;
// });
// console.log(dragons_2006_members);
// }
// export default App;


// const number = "0"
// const result=number ? "true" : "false";
// function App() {
//   return (
//     console.log(result)
//   )
// }
// export default App;


function App() {
  const [integer, setInteger] = useState(["aaa", "bbb", "ccc"]);
  return (
    console.log(integer),
    setInteger(prev => [...prev, "ddd"]),
    console.log(integer)
  )
}
export default App;


// function App() {
//   return(
// ["apple", "banana", "orange"].map(kind => (
//   <button
//     key={kind}
//     onClick={() => toggleKind(kind)}
//     style={{
//       backgroundColor: selectedKinds.includes(kind) ? "lightgreen" : "white"
//     }}
//   >
//     {kind}
//   </button>
// )))
// }
// export default App;
