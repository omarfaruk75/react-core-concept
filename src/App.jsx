
import './App.css'
import './Count'
import Counter from './Count';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  
function handleClick(){
  alert('buttton clicked');
}
function handleClick2(){
  alert('buttton clicked2');
}
function Four(num){
  alert(num+5);
}
  return (
    <>
      <h3>React Core Concepts</h3>
    <Friends></Friends>
      <Users></Users>
      <Team></Team>
  

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Two</button>
      <button onClick={()=>{alert('third clicked')}}>Click Third</button>
      <button onClick={()=>{Four(4)}}>Click Four</button>
      <Counter>{}</Counter>
     
    </>
  )
}

export default App
