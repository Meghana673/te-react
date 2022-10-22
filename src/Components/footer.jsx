import React from "react";

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66005762987!2d77.35072729597826!3d12.954517019779304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1663597700468!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

export default function foot()
{
    return(
        <>
        <div className="container-fluid contact">
            <div className="row">
                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png"></img>
                    </div>
                    <div className="col col-8 p">
                        <p>NEW YORK 9870 ST <br></br>VINCENT GLASGOW</p>
                    </div>

                </div>

                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png"></img>
                    </div>
                    <div className="col col-8 p" style={{marginTop:-60,marginLeft:40}}>
                        <p>CONTACT@DEMOLINK.ORG</p>
                    </div>

                </div>

                <div className="col col-md-4">
                    <div className="row col-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-phone.png"></img>
                    </div>
                    <div className="col col-8 p">
                        <p>CALL US: <br></br>+1 800 603 6035</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="container-fluid footer">
            <div className="row">
                <div className="col col-6">
                    <div className="fohead">
                    <h2 style={{display:"inline-block"}}>HABER</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{display:"inline-block",fontSize:18}}>&copy; 2015 Privacy policy</p>  
                    </div>
               
                    <div  className="ficon">
                    <i class="fa-brands fa-facebook" style={{padding:8}}></i>
                     <i class="fa-brands fa-google-plus-g" style={{padding:8}} ></i>
                    <i class="fa-brands fa-square-twitter"style={{padding:8}} ></i>
                    <i class="fa-brands fa-pinterest" style={{padding:8}}></i>
                     <i class="fa-brands fa-linkedin"style={{padding:8}}></i>   
                     <i class="fa-brands fa-instagram" style={{padding:8}}></i>
                    </div>
                </div>

                <div className="col col-6">
                <iframe data-zoom="10" data-address="Glasgow"  style={{border: '0px', width: '100%', height: '200px'}} src="//maps.google.com/maps?q=Glasgow&amp;z=10&amp;t=m&amp;output=embed" frameborder="0" height="200" width="100">
                </iframe>
               
                </div>
            </div>
        </div>
        
        </>
    )
}