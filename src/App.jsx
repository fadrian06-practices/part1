import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => setValue(0)

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default App
