import logo from './logo.svg';

import './App.css';
import Profile from './Profile/Profile';


function App() {
  const handleName =(x) =>{
    /* <FullName name="Marwa kilani" />*/
    alert(x)
     }
  return (
<div>
  <Profile handleName={handleName}/>
</div>

  );
}

export default App;
