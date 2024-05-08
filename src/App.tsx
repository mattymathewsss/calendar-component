import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Datepicker from './components/Datepicker'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  text-align: center;
`

function App() {
  const [date, setDate] = useState('')

  return (
    <Container>
      <h1>Datepicker Component</h1>
      <Datepicker
        onSelect={(date) => {
          setDate(date)
        }}
      />
      <p>Sample Output:</p>
      <p>{date}</p>
    </Container>
  )
}

export default App
