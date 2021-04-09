import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function Header(props) {
  return (
    <>
    <section class="header py-5 text-white">
      <br/>
      <br/>
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h6 class="mb-4 welcome-to-aux">WELCOME TO AUXILLIUM</h6>
            <h1 class="title">Where Blockchain <br/> Meets Gaming</h1>
            <p class="mt-5 lead mb-0 description"> Auxillium is the next generation gaming NFT development, distribution and managment platform </p>
            <br></br>
              <br></br>


          <h3 class="mt-5 lead mb-0 countdown"> 30:18:54:16 </h3>
          <h6 class=" countdown-text lead mb-0 welcome-to-aux "> Time remaining to claim your tokens </h6>

          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default Header;
