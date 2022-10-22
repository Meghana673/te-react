import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css';
import Investment from './investment'; 
import AdviceCard from "./cards";
import Footer from './footer';
import Form from './form';
import Tcard from './axios'

export default function Slides(){

      return(
            <>
          
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg" className="d-block w-100" style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
                
                <h3 className="h3"> <i class="fa-solid fa-angle-left" style={{float:"left",position:"relative",right:80,top:24}}></i>WE WILL HELP TO CREATE YOUR WEALTH<i class="fa-solid fa-angle-right" style={{float:"right",position:"relative",left:70,top:-1}}></i></h3>
               </div>
              </div>
              <div class="carousel-item">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg" className="d-block w-100"  style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
                {/* <i class="fa-solid fa-angle-left"></i> */}
                <h3 className="h3"><i class="fa-solid fa-angle-left" style={{float:"left",position:"relative",right:80,top:24}}></i>SIMPLE INVESTING PROSPEROUS FUTURE<i class="fa-solid fa-angle-right" style={{float:"right",position:"relative",left:70,top:-1}}></i></h3>
        
              </div>
              </div>
              <div class="carousel-item">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg" className="d-block w-100"  style={{height:'470px',marginTop:'50px'}} ></img>
                <div className="carousel-caption">
                {/* <i class="fa-solid fa-angle-left"></i> */}
                <h3 className="h3"><i class="fa-solid fa-angle-left" style={{float:"left",position:"relative",right:80,top:24}}></i>WE MEET YOUR FINANCIAL INVESTMENT NEEDS<i class="fa-solid fa-angle-right" style={{float:"right",position:"relative",left:70,top:-1}}></i></h3>
               </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span  aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>


          </div>
          <Topcard></Topcard>
          <Cards></Cards>
          <Investment></Investment>
      <Imagecareousal></Imagecareousal>

        <Form></Form>
          <Footer></Footer>
          </>
    );}

class Topcard extends React.Component{
    render()
    {
        return(
            <>
            <br></br>
            <p class="phead">OUR FOCUS IS OUR CLIENTS' SUCCESS</p>
            <div className="container ">
   
                <div className="row">
                    <div className="col col-3">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus1.png"></img>
                        <p className="text-dark head">PRIVATE<br></br>BANKING</p>
                        <p className="desc" >
                            {/* <AdviceCard/> */}
                            This is a banking service for wealthy individuals, which involves operations with client's money, preserving and increasing his state.
                            </p>
                        <button className="cbtn btn-secondary">Read More</button>
                    </div>
                    <div className="col col-3">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus2.png"></img>
                        <p className="text-dark head">TIME SAVING<br></br>TIPS</p>
                        <p className="desc" >If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income.</p>
                        <button className="cbtn btn-secondary">Read More</button>
                    </div>
                    <div className="col col-3">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus3.png"></img>
                        <p className="text-dark head">BUDGETING<br></br>TIPS</p>
                        <p className="desc" >Investment analysis and appraisal of investment projects (evaluation of ROI analysis of investment attractiveness of assets and branches)</p>
                        <button className="cbtn btn-secondary">Read More</button>
                    </div>
                    <div className="col col-3">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus4.png"></img>
                        <p className="text-dark head">MONEY SAVING<br></br>IDEAS</p>
                        <p className="desc" >Business planning: drafting and elaboration of business plans and investment memorandums, technical-economic justification, financial modeling.</p>
                        <button className="cbtn btn-secondary">Read More</button>
                    </div>
                </div>
            </div>

            </>
        
        )
    }
} 

class Cards extends React.Component{
  render()
  {
    return(
      <>
      <div className="container-fluid cont">
        <div className="row">
        <p class="phead" >ADVICE ON HOW TO MAKE WISE INVESTMENTS</p>
        <p class="pdesc1" >If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals. <br></br></p>
        </div>
        <div className="row">
        <div className="col col-md-4">
        <div className="card">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" className="card-img-top cimg" alt="..."></img>
                {/* <div className="card-body">
                    <h5 className="card-title" >Assets of investors</h5>
                        <p className="card-text">All operations of the company's projects are maintained at the expense of assets of investors.</p>
                          
                            <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
                </div> */}
                <div className="card-body">
                <AdviceCard></AdviceCard>
                </div>
            
              <Link><i className="fa-solid fa-circle-arrow-right"></i></Link><br></br>
            
            </div>
        </div>
      
       
        <div className="col col-md-4">
        <div className="card">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice2.jpg" className="card-img-top cimg" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title" >Directions</h5>
                        <p className="card-text">The team works in two directions: portfolio investment, where is the lowest risk, and investments in startups.</p>
                        
                            <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
                </div>
            </div>
        </div>

        <div className="col col-md-4">
        <div className="card">
                <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice3.jpg" className="card-img-top cimg" alt="..."></img>
                {/* <div className="card-body">
                    <h5 className="card-title" >Support</h5>
                        <p className="card-text">If you have a question, you can always call our hotline, and operators will be happy to help you!</p>
                          
                            <Link><i className="fa-solid fa-circle-arrow-right"></i></Link>
                </div> */}
                   <div className="card-body">
                <Tcard></Tcard>
                </div>
            
              <Link><i className="fa-solid fa-circle-arrow-right"></i></Link><br></br>

            </div>
        </div>
      </div>
      </div>
     
      </>
    )
  }
}

class Imagecareousal extends React.Component{
  render()
  {
    return(
      <>
      <div className="container" style={{padding:30,paddingRight:100}}>
        <div className="row">
        <i class="fa-solid fa-angle-left" style={{float:"left",position:"relative",right:560,top:58,fontSize:30}}></i>
          <div className=" col col-md-2">

            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner5.jpg"></img>
          </div>

          <div className=" col col-md-2">

            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner6.jpg"></img>
          </div>

          <div className=" col col-md-2">

            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner11.jpg"></img>
          </div>

          <div className=" col col-md-2">

            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner4.jpg"></img>
          </div>

          <div className=" col col-md-2">

            <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-partner2.jpg"></img>
          </div>
          <div className=" col col-md-2">

          <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/12/mt-0239-home-partner13.jpg"></img>
          </div>

          <i class="fa-solid fa-angle-right" style={{position:"relative",float:"right",paddingLeft:1150,top:-50,fontSize:30}}></i>
          </div>


 </div>


      </>
   

 )}
}
