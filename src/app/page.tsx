"use client";
import { useState, useEffect } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


export default function CoinMarket() {
  const API_KEY = "";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);
      });
  }, []);

  return (
   
    <>
     <div>
     <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bg-pic.jpeg')"}}>
      <div className="main">
      <h1>CRYPTO CURRENCIES</h1>
        
        BTC: {data?.rates?.BTC}
        <br/>
        BNB: {data?.rates?.BNB}
      <br/>
        ETH: {data?.rates?.ETH}
        <br/>
        LTC: {data?.rates?.LTC}
        <br/>
        XRP: {data?.rates?.XRP}
        <br/>
        DOGE: {data?.rates?.DOGE}
        <br/>
        USDT: {data?.rates?.USDT}
        <br/>
        BCH: {data?.rates?.BCH}
        <br/>
        XLM: {data?.rates?.XLM}
        <br/>
        ADA: {data?.rates?.ADA}
        <br/>
        SOL: {data?.rates?.SOL}
        </div>
        <section id="footer">
        <a href="https://www.instagram.com/ersa_rani?igsh=bHoydmptOXMyOGM0" target="_blank" >
        <FaSquareInstagram className="insta"/></a>

        <a href="https://www.linkedin.com/in/ersa-rani-b4b4842b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
        <IoLogoLinkedin className="linkedin" /></a>
       
        <a href="https://github.com/ersa-rani" target="_blank">
        <FaGithub className="github"/> </a>
       
      </section>
        </div>
        </div>
     
    </>
  );
}



