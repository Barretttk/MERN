import React, {useState} from 'react'
import BoxDisplay from './Components/BoxDisplay'
import BoxForm from './Components/BoxForm'


const App = () => {
  const [boxes, setBoxes] = useState([])


return (
<div className="container">
  <div className="row mt-3">
    <div className="col">
      <BoxForm setBoxes={setBoxes} boxes={boxes}
      />
      </div>
      <div className="col">
        <BoxDisplay boxes={boxes}
        />
    </div>
  </div>
</div>  )
}

export default App