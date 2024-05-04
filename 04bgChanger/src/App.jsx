import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  const changeColor = (e) => {
    setColor(e.target.getAttribute("color"))
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl">
          <button
          onClick={changeColor}
          color="red"
          style={{ backgroundColor: "red" }} // Inline style for background color
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Red</button>
          <button
          onClick={changeColor}
          color="green"
          style={{ backgroundColor: "green" }}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Green</button>
          <button
          onClick={changeColor}
          color="blue"
          style={{ backgroundColor: "blue"}} 
          className="bg-blue outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
