import React,{ Component} from "react";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/home.css';

export default class AdviceCard extends Component
{
  
    constructor(props)
    {
        super(props)
        this.state = {det :[ ]}   
       
    }

 
    componentDidMount()
    {
        fetch("https://localhost:7020/api/CardDatums").then
        (
            response=>response.json()
        ).then(det=>this.setState({det:det}))
    }
    render()
    {
        return(
            
               <>
             
                {this.state.det.filter((data) =>
                    data.title.includes('A')).map(t=>
                 
                    <div key={t.id}>
                    <h5 className="card-title" >{t.title}</h5>
                        <p className="card-text">{t.details}</p>
                        </div>
                     )}  
                  
                </>
     
        

        )
    }
}

//  export default class AdviceCard extends Component {
//     state = { det: [] }

//     componentDidMount() {
//         axios.get('https://localhost:7020/api/CardDatums/1').then(
//             res => {
//                 const det = res.data;
//                 this.setState({ det });
//             }
//         )
//     }
//     render()
// {
//     return(
//         <>
//         <div className="col col-md-4">
//         <div className="card">
//                 <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" className="card-img-top cimg" alt="..."></img>
//                 {/* <div className="card-body">
//                     <h5 className="card-title" >Assets of investors</h5>
//                         <p className="card-text">All operations of the company's projects are maintained at the expense of assets of investors.</p>
                          
//                             <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
//                 </div> */}
//                 <div className="card-body">
//                  {this.state.det.map(t=>
//                     <div key={t.cid}>
//               <h5 className="card-title" >{t.title}</h5>
//                         <p className="card-text">{t.details}</p>
//                         </div>
//                      )}  
//                             <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
          
             
            
//             </div>
//         </div>
//         </div>
//          {/* <div className="card-body">
//             {this.state.det.map(t=>
//                     <div key={t.id}>
//                     <h5 className="card-title" >{t.title}</h5>
//                         <p className="card-text">{t.details}</p>
//                         </div>
//                      )}  
                           
//                 </div> */}
        
//         </>
                      
        

//     )
// }
// }

//Set a BaseURL
// const productdetails=axios.create({
//     baseURL:"https://localhost:7020/api/CardDatums"
// })
// export default function AxiosAwaitAsync() {
//     const [post, setPost] = useState('');

//     useEffect(() => {
//         async function getPost() {
//             const response = await productdetails.get("/1");
//             setPost(response.data)
//         }
//         getPost();
//     }
//     );

//     return(
//         <>
//        <div className="col col-md-4">
//         <div className="card">
//                  <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" className="card-img-top cimg" alt="..."></img>
//                 <div className="card-body">
//                      {/* <h5 className="card-title" >Assets of investors</h5>
//                         <p className="card-text">All operations of the company's projects are maintained at the expense of assets of investors.</p>
                          
//                             <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
//                </div> */}
                
//                <h5 className="card-title" >{post.title}</h5>
//                          <p className="card-text">{post.details}</p>
//                         </div>
                    
//                             <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
          
            
//            </div>
//         </div>
//      </>
//     )
// }


// export default class Afoot extends Component {
//     state = { cdetails: [] }
  
//     componentDidMount() {
//         axios.get('https://localhost:7020/api/CardDatums').then(
//             res => {
//                 const cdetails = res.data;
//                 this.setState({ cdetails });
//             }
//         )
//     }

// render()
// {
//     return(
//         <>
//         <div className="col col-md-4">
//             <div className="card">
//                     <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" className="card-img-top cimg" alt="..."></img>
        
//                 <div className="card-body">
//             {this.state.cdetails.map(det =>
//                 <div  key={det.cid}>
//                     <h5 className="card-title" >{det.title}</h5>
//                         <p className="card-text">{det.details}</p>
//                         </div>
//                      )}  
//                     <Link><i className="fa-solid fa-circle-arrow-right"></i></Link> 
//                 </div>
//                     </div>
//                 </div>
            
       
//         </>
//     )
// }
// }


       

// export default class TraineeDetails extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={trainees:[]}    
//     }

   
//     componentDidMount()
//     {
//         fetch('https://localhost:7020/api/CardDatums').then
//         (
//             response=>response.json()
//         ).then(trainees=>this.setState({trainees:trainees}))

//     }
//     render()
//     {
//         return(<>
//             // <div className="col col-md-4">
//             // <div className="card">
//             //         <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" className="card-img-top cimg" alt="..."></img>
        
//                  <div className="card-body">
//                 {this.state.trainees.map(t=>
//             <div key={t.cid}>
//                     <h5 className="card-title" >{t.title}</h5>
//                         <p className="card-text">{t.details}</p>
//                        </div>
//                        </div>
//                 //      )}  
//                 //     <Link><i className="fa-solid fa-circle-arrow-right"></i></Link> 
//                 // </div>
//                 //     </div>
//                 // </div>
//                 </>
                
//         )
//     }

// }
    


      

// export default class ParaDetails extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={trainees:[]}    
//     }

//     componentDidMount()
//     {
//         fetch('https://localhost:7020/api/CardDatums/3').then
//         (
//             response=>response.json()
//         ).then(trainees=>this.setState({trainees:trainees}))

//     }
//     render()
//     {
//         return(
//             <>
//             {this.state.trainees.map(t=>
//             <div key={t.cid}>
//              Name:{t.details}
//              </div>
            
     
           
//             )}
//             </>
//         )
//     }

// }

// export default class ParaDetails extends Component {
//     state = { details: [] }

//     componentDidMount() {
//         axios.get('https://localhost:7020/api/CardDatums').then(
//             res => {
//                 const cdetails = res.data;
//                 this.setState({ cdetails });
//             }
//         )
//     }

// render()
// {
//     return(
//       <>
//             {this.state.cdetails.map(det =>
//                 <div key={det.id}>
                 
//                           {det.details} 
                      
//                     </div>
//             )}
//         </>
//     )
// }
// }