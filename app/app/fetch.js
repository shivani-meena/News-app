// import React,{useState,useEffect} from 'react';

// const Home1=()=>{
//     const[info,setInfo]=useState({
//         name:"loading !!",
//         temp:"loading",
//         humidity:"loading",
//         desc:"loading",
//     })

//     const [inputValue , setInputValue] = useState("");
//     useEffect(()=>
//     {
//         getWeather("chennai")
//     })
//     const getWeather=(value)=>
//     {
//         fetch(`http://api.openweathermap.org/data/2.5/weather?=${value}&appid=bd2d67a73f2dc8279......`)
//         .then(data=>data.json())
//         .then(results=>{
//            setInfo({
//                name:results.name,
//                temp:results.main.temp,
//                humidity:results.main.humidity,
//                desc:results.weather[0].description,
//            })
//         })
//     }

//   const handleInputChange = event =>{
//         let inputValue = event.target.value;
//         console.log(event.target.value);
//         setInputValue(inputValue);
//         getWeather(inputValue);
//     }

//     return(
//         <div>
//             <h1>Weather API</h1>
//             <div>
//                  Place:{info.name} <br/>
//                  Temperature:{info.temp} <br/>
//                  Humidity:{info.humidity} <br/>
//                  Description: {info.desc}
//             </div>
//         </div>
//     )
// }

// export default Home1;