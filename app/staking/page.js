'use client'
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"


export default function Staking() {

    const [targetDate, setTargetDate] = useState(new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)); // Target date 3 days from now
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timerId);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Time's up
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [targetDate]);

    const pad = (number) => number.toString().padStart(2, '0');
    const timeString = `${pad(timeLeft.days)}:${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`;


    const handleChange = (event) => {
        console.log("Selected Value:", event.target.value);
      };

      const baseColumnStyle = {
        backgroundColor: '#1E2835',
        borderRadius: '20px',
        padding: '26px 28px',
        border: '1px solid rgba(255, 255, 255, 0.0784313725)',
        margin: '0 auto 30px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      };

      const boxColumnStyle = {
            
        boxSizing: 'border-box',   // Converts CSS property name from 'box-sizing' to camelCase 'boxSizing'
        display: 'flex',
        flexFlow: 'wrap',          // Maintains the same, as the property name doesn't change
        marginTop: '-18px',        // Negative values are specified as strings
        width: 'calc(100% + 18px)',// Use 'calc' directly in the string
        marginLeft: '-18px'       // Negative values are specified as strings        
      };

      // Determine the appropriate width for each column based on the number of columns in the row
        const getRowStyle = (numColumns) => ({
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginBottom: '5px',
            // Each column takes equal part of the row, minus margins
            // Adjust margin and padding values as needed to fit your design
        });
    
        

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Staking">
                <div>

                

                <div className="tf-section tf-contact pt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="flat-tabs aos-init aos-animate">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* First Row with 3 Columns */}
                                <div style={getRowStyle(3)}>
                                    <div style={{ ...baseColumnStyle, width: 'calc(33.333% - 40px)' }}>                                                             
                                        <form action="#">
                                            <div className="project-info-form forget-form no-style">
                                                {/* <h4 className="title">Total Value Locked</h4> */}
                                                    <div className="form-inner">
                                                        <fieldset>
                                                            <label>Total Value Locked</label>
                                                            <input placeholder="$77.51" required="" type="text"/>
                                                        </fieldset>
                                                    </div>                                            
                                            </div>
                                        </form>
                                    </div>
                                    <div style={{ ...baseColumnStyle, width: 'calc(33.333% - 40px)' }}>
                                    
                                    <form action="#">
                                        <div className="project-info-form forget-form no-style">
                                            {/* <h4 className="title">Total Value Locked</h4> */}
                                                <div className="form-inner">
                                                    <fieldset>
                                                        <label>APY Rate</label>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                            <h4 style={{
                                                                margin: 0,   
                                                                fontSize: '1.5rem',   
                                                                // color: '#666',   
                                                                fontWeight: 'bold',  
                                                                width:"40%"
                                                            }}>
                                                                22%
                                                            </h4>
                                                            <select 
                                                                style={{
                                                                width: '60%',
                                                                padding: '4px',
                                                                fontSize: '11px',  
                                                                border: '0.2px solid rgb(235, 235, 235)',
                                                                color: 'rgb(157, 157, 157)',
                                                                borderRadius: '5px', backgroundColor:"#171F29;",
                                                                border: '0.2px solid #171F29;',
                                                                }} 
                                                                
                                                            >
                                                                <option value="0">30 Days</option>
                                                                <option value="1">90 Days</option>
                                                                <option value="2">180 Days</option>
                                                            </select>
                                                        </div>

                                                    </fieldset>
                                                </div>                                        
                                        </div>
                                    </form>
                                    
                                    </div>
                                    <div style={{ ...baseColumnStyle, width: 'calc(33.333% - 40px)' }}>
                                    
                                        <form action="#">
                                            <div className="project-info-form forget-form no-style">
                                                {/* <h4 className="title">Total Value Locked</h4> */}
                                                    <div className="form-inner">
                                                        <fieldset>
                                                            <label>Stakers</label>
                                                            <input placeholder="25" required="" type="text"/>
                                                        </fieldset>
                                                    </div>
                                                        
                                            </div>
                                        </form>                       
                                    </div>
                                </div>

                                {/* Second Row with 1 Column */}
                                <div style={getRowStyle(1)}>     

                                    <div style={{ ...baseColumnStyle, width: 'calc(100%)', display:'flex',  }}>
                                    {/* Single Column */}
                                     
                                    <div className="row" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                        <div style={{ flex: 0, marginRight: '5px' }}>  
                                            <label style={{
                                            fontFamily: 'resobot-bold',
                                            lineHeight: '1.4',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            marginBottom: '6px',
                                            whiteSpace: 'nowrap' // Ensures label text stays on one line
                                            }}>
                                            Lock Period
                                            </label>
                                        </div>
                                        <div style={{ flex: 0, marginRight: '5px' }}>  
                                            <label style={{
                                            lineHeight: '1.4',
                                            fontWeight: '700',
                                            fontSize: '16px',
                                            marginBottom: '6px',
                                            whiteSpace: 'nowrap' // Ensures label text stays on one line
                                            }}>
                                            |
                                            </label>
                                        </div>
                                        <div style={{ flex: 0 }}>  
                                            <select 
                                            style={{
                                                padding: '8px 12px', // Adds padding to increase the size and improve text visibility
                                                fontSize: '16px',  // Increases font size for better readability
                                                color: 'rgb(157, 157, 157)', // Text color
                                                backgroundColor: "#171F29", // Background color
                                                border: '2px solid #171F29', // Solid, more visible border
                                                borderRadius: '5px', // Rounded corners
                                                minWidth: '150px', // Minimum width to ensure it doesn't appear too small
                                            }} 
                                            >
                                            <option value="0">30 Days</option>
                                            <option value="1">90 Days</option>
                                            <option value="2">180 Days</option>
                                            </select>
                                        </div>
                                    </div>

                                   
                                    <div className="row">                                    
                                    <div style={getRowStyle(1)}><label style={{ fontFamily:'resobot-bold', lineHeight:'1.4', fontWeight:'700', fontSize:'16px', marginBottom:'6px' }}>Sunday, May 15, 2024</label>   </div>
                                    <div style={{...getRowStyle(1)}}>                             
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',                                     
                                            
                                        }}>
                                                {timeString.split(':').reduce((acc, part, index, arr) => {
                                                // Add the time part styled in an h4 tag
                                                acc.push(
                                                    <h4 key={index} style={{
                                                        background: '#171F29',
                                                        margin: '0 10px',
                                                        padding: '10px',
                                                        borderRadius: '10px',
                                                        display: 'inline-block'
                                                    }}>
                                                        {part}
                                                    </h4>
                                                );
    
                                                // Add a colon separator if it's not the last element
                                                if (index < arr.length - 1) {
                                                    acc.push(<h4 key={`colon-${index}`}>:</h4>);
                                                }
    
                                                return acc;
                                            }, [])}
                                        
                                        </div>
                                    </div>
                                    </div>
                                 
                                    <div className="row" style={{ display: 'flex', width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.0784313725)', marginTop:'10px' }}>
                                        {/* First Column */}
                                        <div style={{ flex: 1, textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                                             
                                        </div>

                                        {/* Middle Column with Two Sub-Columns */}
                                        <div style={{ display: 'flex', flex: 1, textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>                                            
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '10px', margin: 0 }}>Token Staked: &nbsp;</span>
                                                    <h6 style={{ fontSize: '12px', fontWeight: 'bold', color: 'white', margin: 0 }}>0 BUB</h6>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <span style={{ fontSize: '10px', margin: 0 }}>Rewards Earned: &nbsp;</span>
                                                    <h6 style={{ fontSize: '12px', fontWeight: 'bold', color: 'white', margin: 0 }}>0.0000 BUB</h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Last Column with Logo */}
                                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                                         
                                            <img src="assets/images/logo/logo.png" alt="Logo" style={{marginTop:'10px'}}  />
                                        </div>
                                        </div>                                  
                                    </div>
                                </div>

                                {/* Third Row with 2 Columns */}
                                <div style={getRowStyle(2)}>
                                <div style={{ 
                                    backgroundColor: '#1E2835', 
                                    borderRadius: '20px', 
                                    padding: '26px 28px', 
                                    border: '1px solid rgba(255, 255, 255, 0.0784313725)', 
                                    margin: '0 auto 30px auto', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    width: 'calc(50% - 40px)' 
                                }}>
                                    {/* First Row with Two Columns */}
                                    <div style={{ 
                                        display: 'flex', 
                                        flexFlow: 'wrap', 
                                        marginBottom: '18px' 
                                    }}>
                                        {/* First Column, 60% Width */}
                                        <div style={{ 
                                            flex: '60%', 
                                            padding: '18px' 
                                        }}> 
                                        
                                        
                                        <fieldset>
                                            <label style={{width: '100%',margin: '0px 0px 14px',borderBottom: '1px solid rgba(255, 255, 255, 0.0784313725)', color: 'white',}}>Amount to Stake</label>
                                            <input placeholder="$77.51" required="" type="text" style={{backgroundColor:'#171F29',  color: 'white', padding: '19px 18px'}}/>
                                        </fieldset>
 
                                         


                                        </div>

                                        {/* Second Column, 40% Width */}
                                        <div style={{ 
                                            flex: '40%', 
                                            padding: '18px' 
                                        }}>
                                        
                                        <fieldset>
                                            <label style={{width: '100%',margin: '0px 0px 14px',borderBottom: '1px solid rgba(255, 255, 255, 0.0784313725)', color: 'white',}}>Timeframe</label>
                                            <select 
                                            style={{
                                                 
                                                fontSize: '16px',  // Increases font size for better readability
                                                color: 'rgb(157, 157, 157)', // Text color
                                                backgroundColor: "#171F29", // Background color
                                                border: '2px solid #171F29', // Solid, more visible border
                                                borderRadius: '5px', // Rounded corners
                                                
                                            }} 
                                            >
                                            <option value="0">30 Days</option>
                                            <option value="1">90 Days</option>
                                            <option value="2">180 Days</option>
                                            </select>
                                        </fieldset>


                                        </div>
                                    </div>

                                    {/* Second Row with Three Equal Columns */}
                                    <div style={{ 
                                        display: 'flex', 
                                        width: '100%' 
                                    }}>
                                        {/* Individual Columns */}
                                        <div style={{ 
                                            flex: '1', 
                                            padding: '18px', 
                                            textAlign: 'center' 
                                        }}>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style1">
                                                Stake
                                            </button>
                                        </div>
                                        </div>
                                        <div style={{ 
                                            flex: '1', 
                                            padding: '18px', 
                                            textAlign: 'center' 
                                        }}>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style1">
                                                Unstake
                                            </button>
                                        </div>
                                        </div>
                                        <div style={{ 
                                            flex: '1', 
                                            padding: '18px', 
                                            textAlign: 'center' 
                                        }}>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style1">
                                                Claim
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                    {/* </div> */}
                                    <div style={{ ...baseColumnStyle, width: 'calc(50% - 40px)' }}>
                                    
                                        {/* First Row */}
                                        <div style={{
                                            display: 'flex',
                                            width: '100%', // Ensuring the row takes full width
                                            marginBottom: '5px'
                                        }}>
                                            <div style={{ flex: '1', padding: '0px' }}><label style={{width: '100%',margin: '0px 0px 14px',borderBottom: '1px solid rgba(255, 255, 255, 0.0784313725)', color: 'white',}}>Token Rate</label></div>
                                            
                                        </div>

                                        {/* Second Row */}
                                        <div style={{
                                            display: 'flex',
                                            width: '100%', // Ensuring the row takes full width
                                            marginBottom: '5px'
                                        }}>
                                            <div style={{ flex: '1', padding: '0px' }}>


                                        <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        }}>
                                        {/* First Column */}
                                        <div style={{
                                            height: '55px',
                                            width: '55px',
                                            background: 'rgb(11, 12, 19)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* SVG content */}
                                            </svg>
                                        </div>

                                        {/* Second Column */}
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginLeft: '27px',
                                        }}>
                                            {/* Top Row (Three columns inside) */}
                                            <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between', // To distribute the inner columns
                                            alignItems:'center'
                                            }}>
                                            <span style={{ display: 'flex', alignItems: 'center', marginRight:'10px', fontSize:'11px',  }}>USDT</span>
                                            <div style={{ width: '1px', height: '10px', background: 'rgb(199, 200, 204)' , marginRight:'10px'}}></div>
                                            <span style={{ display: 'flex', alignItems: 'center',fontSize:'11px', }}>Tether USD</span>
                                            </div>

                                            {/* Bottom Row */}
                                            <span style={{ marginTop: '4px', color:'white', fontWeight:'700'}}>$ 1.00 USD</span>
                                        </div>
                                        </div>




                                            </div>
                                        </div>

                                        {/* Third Row */}
                                        <div style={{
                                            display: 'flex',
                                            width: '100%', // Ensuring the row takes full width
                                            marginBottom: '0'
                                        }}>
                                            <div style={{ flex: '1', padding: '0px' }}>


                                            <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        }}>
                                        {/* First Column */}
                                        <div style={{
                                            height: '55px',
                                            width: '55px',
                                            background: 'rgb(11, 12, 19)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* SVG content */}
                                            </svg>
                                        </div>

                                        {/* Second Column */}
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginLeft: '27px',
                                        }}>
                                            {/* Top Row (Three columns inside) */}
                                            <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between', // To distribute the inner columns
                                            alignItems:'center'
                                            }}>
                                            <span style={{ display: 'flex', alignItems: 'center', marginRight:'10px', fontSize:'11px',  }}>BUBU</span>
                                            <div style={{ width: '1px', height: '10px', background: 'rgb(199, 200, 204)' , marginRight:'10px'}}></div>
                                            <span style={{ display: 'flex', alignItems: 'center',fontSize:'11px', }}>BUBU</span>
                                            </div>

                                            {/* Bottom Row */}
                                            <span style={{ marginTop: '4px', color:'white', fontWeight:'700'}}>$ $ 0.000125 USD</span>
                                        </div>
                                        </div>




                                            </div>
                                        </div>
                                         
                                    </div>

                                    {/* </div> */}
                                </div>

                            </div>
                                     
                                 
                                


                                </div>



                            </div>
                        </div>
                             
                    </div>
                     
                            
                     

                </div>


               
                     
                </div>

            </Layout>
        </>
    )
}