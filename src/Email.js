import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {TextField, IconButton} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function Email(props) {
  useEffect(() => {
    console.log(props)
  });

  return (
    <>
    <div className="container pl-5 pr-5">
      <div className="email row">
          <div className="align-self-center col text-left">
            <h1 className="airdrop-title">AUX Airdrop</h1>
              {props.user ?
                <>
                  {(props.user.verified) ?
                    <>
                    {props.user.tokens === 0 ?
                    <>
                    <div className="border-wrap" style={{width: "18rem", height: "5rem"}}>
                      <Button onClick={props.claimTokens}style={{width: "100%", height: "100%"}} >
                        Claim Tokens
                      </Button>
                      <br></br>
                      <br></br>
                      <TextField value={props.refCode} onChange={(e) => props.setRefCode(e.target.value)} id="standard-basic" label="Referrel code" />
                    </div>
                    </>
                    :
                    <>
                      <h5 className="tokens-claimed-text mb-4 mt-3 airdrop-info">Tokens claimed: {props.user.tokens}/y</h5>
                      <h5 className="tokens-claimed-text mt-3 airdrop-info">Referred: {props.user.referred}</h5>
                      <h5 style={{display: "inline-block"}} className=" airdrop-info tokens-claimed-text mb-4 mt-3">Referrel Code: {props.user.referrelCode}</h5> <button className="copy-button" style={{background: "none", border: "none", color: "#383D51"}} ><FileCopyIcon className="file-icon"></FileCopyIcon></button>
                      <h5 className="referrel-desc mb-4 mt-4">Refer someone for another x AUX for upto a maximum of y AUX</h5>
                    </>
                    }
                    </>
                  :
                    <>
                    <h5 className="aux-airdrop-desc mb-4 mt-4">Claim your stake in the 2 billion dollar movement</h5>
                    {!props.codeSent ?
                      <>
                      <div className="pt-2 pb-1" style={{overflow: "hidden", position: "relative", width: "100%"}}>
                        <TextField value={props.email} onChange={(e) => props.setEmail(e.target.value)} style={{width: "16rem"}} id="outlined-basic" label="Email" variant="outlined" />
                        <div className="border-wrap ml-4" style={{position: "absolute", width: "200px", height: "80%", display: "inline-block"}}>
                          <Button onClick={props.sendCode} style={{height: "100%", width: "100%"}} >
                            Send code
                          </Button>
                        </div>
                      </div>
                      </>
                    :
                      <>
                      <p style={{display: "inline-block", margin: "0", color: "#ABABAB"}} >{props.email}</p>
                      <IconButton aria-label="delete" onClick={(e) => props.setCodeSent(false)}>
                        <EditIcon />
                      </IconButton>

                      <div className="pt-2 pb-1" style={{overflow: "hidden", position: "relative", width: "100%"}}>
                        <TextField value={props.verificationCode} onChange={(e) => props.setVerificationCode(e.target.value)} style={{width: "16rem"}} id="standard-basic" label="Code" />
                          <div className="border-wrap ml-4" style={{position: "absolute", width: "200px", height: "80%", display: "inline-block"}}>
                            <Button onClick={props.verifyCode} style={{height: "100%", width: "100%"}} >
                              Submit
                            </Button>
                          </div>
                      </div>
                      </>
                    }
                    </>
                  }
                </>
              :
              <>
              <div className="border-wrap" style={{width: "18rem", height: "5rem"}}>
                <Button onClick={props.connectAccount}style={{width: "100%", height: "100%"}} >
                  Connect wallet
                </Button>
              </div>
              </>
              }
          </div>
          <div className="col align-self-center text-right">
            <div className="align-self-center col text-right">
              <h1 className="airdrop-stat-title">4,435</h1>
              <h5 className="aux-airdrop-desc mb-4 mt-4">People claimed their tokens</h5>
            </div>
            <div className="align-self-center col text-right">
              <h1 className="airdrop-stat-title">34</h1>
              <h5 className="aux-airdrop-desc mb-4 mt-4">Days remaining</h5>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Email;
