import './App.css';
import Header from './Header';
import NavbarComp from './Navbar';
import Email from './Email'
import React, { useState, useEffect, Component } from "react";
import Web3 from 'web3';
import axios from "axios"
import Querystring from "query-string"
import { useParams } from "react-router";

function Home(props) {

  useEffect(() => {
    console.log(props.match.params.refCode)
    if (props.match.params.refCode) props.setRefCode(props.match.params.refCode)
  });

  return (
    <>
    <NavbarComp connectAccount={props.connectAccount} user={props.user} account={props.account}/>
    <Header/>
    <Email
      verificationCode={props.verificationCode}
      setVerificationCode={props.setVerificationCode}
      connectAccount={props.connectAccount}
      setEmail={props.setEmail}
      email={props.email}
      codeSent={props.codeSent}
      user={props.user}
      account={props.account}
      claimTokens={props.claimTokens}
      refCode={props.refCode}
      sendCode={props.sendCode}
      setCodeSent={props.setCodeSent}
      setRefCode={props.setRefCode}
      verifyCode={props.verifyCode}
      />
    </>
  );
}

export default Home;
