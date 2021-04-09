import './App.css';
import Header from './Header';
import NavbarComp from './Navbar';
import Email from './Email'
import React, { useState, useEffect, Component } from "react";
import Web3 from 'web3';
import axios from "axios"
import Querystring from "query-string"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';

function App() {
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState(null)
  const [verificationCode, setVerificationCode] = useState(null);
  const [refCode, setRefCode] = useState(null);
  const [codeSent, setCodeSent] = useState(false);

  useEffect(() => {
    if (account){
      getUser();
    }
  }, [account]);


  function getUser(){
    axios.get(`/user/${account}`)
    .then(res => {
      console.log(res.data.user)
      setUser(res.data.user)
    })
    .catch(error => {
      setUser(null)
    })
  }

  function verifyCode(){
    console.log("verifying")
    axios.post(`/verifyEmail/${account}`, Querystring.stringify({verificationCode: verificationCode}))
    .then(res => {
      setUser(res.data.user)
    })
    .catch(error => {
      //GIVE ERROR
    })
  }

  function sendCode(){
    axios.post(`/sendVerificationCode/${account}`, Querystring.stringify({email: email}))
    .then(res => {
      setCodeSent(true)
    })
    .catch(error => {
      //GIVE ERROR
    })
  }

  function claimTokens(){
    axios.post(`/claimAirDrop/${account}`, Querystring.stringify({refCode: refCode}))
    .then(res => {
      setUser(res.data.user)
    })
    .catch(error => {
      //GIVE ERROR
    })
  }

  function connectAccount(){
    let web3;
    console.log("use effect")
    // Modern DApp Browsers
    if (window.ethereum) {
       web3 = new Web3(window.ethereum);
       try {
          window.ethereum.enable().then(function() {
            web3.eth.getAccounts()
            .then(e => {
              setAccount(e[0])
            })
          });
       } catch(e) {
          // User has denied account access to DApp...
       }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        web3.eth.getAccounts()
        .then(e => {
          setAccount(e[0])
        })
    }
    // Non-DApp Browsers
    else {
        alert('You have to install MetaMask !');
    }
  }

  return (
    <Router className="app">
      <Route path="/:refCode?" exact render={(props) => (<Home {...props}
        verificationCode={verificationCode}
        setVerificationCode={setVerificationCode}
        connectAccount={connectAccount}
        setEmail={setEmail}
        email={email}
        codeSent={codeSent}
        user={user}
        account={account}
        claimTokens={claimTokens}
        refCode={refCode}
        sendCode={sendCode}
        setCodeSent={setCodeSent}
        setRefCode={setRefCode}
        verifyCode={verifyCode}
      />)}/>
    </Router>
  );
}

export default App;
