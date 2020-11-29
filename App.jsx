import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Card from './Card'
import Button from './Button'
import Sale from './Sale'
import Scroll from './Scroll'
import Support from './Support'
import Footer from './Footer'
function App(){
    return(
    <>
    <Header />
    <Nav />
    <div className="box-3">
      	<div class="p-1">
          <Card />
        </div>
        <div className="p-2">
            <Card />
        </div>
    </div>
    <Button />
    <Sale />
    <p className="p-4"><strong>Shop on Paytm</strong></p>
    <div class="scroller">
     <div class='nav'>
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
       <Scroll />
    </div>
    </div>
    <Support />
    <Support />
    <Support />
    <Footer />
    <div className="box-9">
    	<p className="p-9">More About Paytm</p>
    </div>
    </>
    )
}
export default App;