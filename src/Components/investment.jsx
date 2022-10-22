import React from "react";

import '../styles/invest.css'
import { createUseStyles } from "react-jss";



export default function Sinvestment()
{
    return(
        <>
        <div className="container-fluid inv invp">
            <div className="row">
                <div className="col col-6">
           <h3 className="fresh"> Fresh Investment<br></br> Solutions! </h3>
            <ul>
                <li class="moto" >
                  
                <i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                        Boutique Discretionary Investment<br></br> Management Stockbroking Services</li>
                        <li class="moto">
                        <i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                         Third Party Fund Investments</li>
                         <li class="moto"><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                            Bespoke Capital Protected Investments</li>
                            <li class="moto"><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                                Invest in Africa Rising</li>
                                <li class="moto"><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                                    Investment course
                                    </li></ul>
                                  <div className="lbtn" >
                                     <button className="inbtn btn-secondary">Learn More</button></div>
                                    </div>
                    <div className="col col-6 c" >
                    <h3 className="mh fresh"> Learning to Save<br></br> Money </h3>
                    <ul><li class="moto-right"> <i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                    Investment course</li>
                    <li class="moto-right"> <i class="fa-solid fa-gear"></i>&nbsp;&nbsp;
                    Marketing course</li>
                 
                    <li className="moto-right">
                    During the existence of the company, a lot of companies and starters have become our customers. Most of them are now prosperous and popular in the business sphere.
                    </li>
                    </ul>
                    <div className="rbtn" >
                                     <button className="btn btn-primary">Learn More</button></div>
                                 
                    </div>
            </div>
        </div>
        </>
    )
}