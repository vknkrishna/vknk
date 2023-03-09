import React from 'react';
import Course from './components/course/Course';
import Navbar from './components/layout/navigation/navbsr';
import Name from './components/Useeffects';
import Name1 from './components/Useref';
import Crudtable from './components/course/CrudApp';
import Name2 from './components/Usememo';
import Game from './components/Usereduser';
import Name3 from './components/Api';
function App() {
  return (
     <div className="App">
      <Navbar value="Its my Code"/>
      <Course/>
      <Name/>
      <Name1/>
      <Crudtable/>
      <Name2/>
      <Game/>
      <Name3/>
     </div>
  );
}
export default App;