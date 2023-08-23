import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { Areatext } from "./components/04-textArea/AreaText"
import { State } from "./components/05-state/state"
import { PapelOtijeraOpiedra } from "./components/PiedraPapelotijera/PiedraPapeloTijera"
function App() {
  
  return (
    <div className='w-full h-96 bg-zinc-700 flex flex-col justify-center items-center'>
      {/* <Counter /> */}
       {/* <InputText /> */}
      {/* <ToogleState /> */} 
      {/* <State/> */}
      <PapelOtijeraOpiedra/>
      {/* <Areatext/> */}
    </div>
  )
}

export default App
