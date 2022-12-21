import './component/style.css';
import React, {useState} from 'react';


function App() {
   const [inputList , setInputList] = useState('');
   const [Items ,setItems] = useState([]);


   const itemEvent  = (event) =>{
      setInputList(event.target.value);
   }
   
   const listOfItems = () =>{
      setItems((oldItems ) =>{
         return [...oldItems, inputList]
      })
   }
   
   return(
      <>
         <div className="main_div">
            <div className="center_div">
               <br/>
               <h1>TODO </h1>
               <br/>
               <div className='pp'>
               <input type='text' placeholder="Add a Items" value ={inputList} onChange={itemEvent}></input>
               <button onClick={listOfItems}>+</button>
               </div>
               <ol>
                  {
                     Items.map((itemval) =>{
                        const deleteItems = () =>{
                           console.log('deltede')
                        }
                        return(
                           <>
                           <div className='todo_style'>
                           <i className="fa fa-times" aria-hidden="true" onClick={deleteItems}/>
                           <li>{itemval}</li>
                           </div>
                           </>
                        )                                          
                     })
                  }
               </ol>
            </div>            
         </div>
      </>
   )
}

export default App;
