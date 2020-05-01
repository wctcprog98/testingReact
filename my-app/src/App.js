import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Time from './components/Time'
import ToDo from './components/ToDo'
import Pictures from './components/Pictures'
import todoData from './todoData'

function App() {
  // const date = new Date()
  const toDoComponent = todoData.map(item=> <ToDo key={item.id} item={item} />)
    return(
    <div>

      {/* <Navbar />
      <MainContent />
      <Footer />
      <Time /> */}
    {toDoComponent}
       {/* <ToDo />
      <Pictures
    
        name="Mr.Whiskerson"
        imgUrl="http://placekitten.com/300/300"
        phone="(212)500-1234"
        email="mr.whiskerson.com"
        />
      <Pictures
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="(212)500-1234"
        email="fluffykins@me.com"/>
      
      <Pictures
        name="Destroyer"
        imgUrl="http://placekitten.com/400/300"
        phone=" (312)120-5151"
        email="destroyer@gmail.com"/>
      <Pictures
        name="Felix"
        imgUrl="http://placekitten.com/400/100"
        phone="(312)500-5151
        email="felix@outlook.com"/>  */}
      </div>
    )
}
export default App;
