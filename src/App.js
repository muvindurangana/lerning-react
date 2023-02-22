
import './App.css';
const courseContent =[{
  status:'completed',
  text :'git hub'
},
{
  status:'completed',
  text :'key frame'
},
{
  status:'completed',
  text :'ex 6'
},
{
  status:'completed',
  text :'smell react'
},
{
  status:'completed',
  text :'webpack'
},
{
  status:'on-going',
  text :'key frame'
},{
  status:'not started',
  text :'file system'
}
];


function App() {
  return (
    
    <div className='app'>
    {courseContent.map((val,key)=>{
      return <MyApp key={key} status={val.status} text={val.text} />
    })}
      
    </div>
  );
}

export default App;
   
function MyApp({status,text}){
  
  return <p style={{fontSize:'20px', color:status==='completed'?'green':status==='on-going'?'red':'yellow'}}>{text}</p>
}