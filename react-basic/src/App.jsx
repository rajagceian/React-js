import Card from './components/Card.jsx'

const App = () => {
  const name = "Raja";
  const age = 21;
  return (
    <div className="parent">
      <Card user="Raja kumar" age={21}/>
      <Card user="Prabal Shekhar" age={27}/>
      <Card user="Sumit Jha" age={21}/>
      <Card user="Vivek kumar" age={21}/>
    </div>
  )
}

export default App
