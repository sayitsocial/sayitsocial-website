import React from "react";
import '../Styles/Landing/SignUp.css'


import sayItSocial from '../../assets/navbar/sayitsocial.svg'
import chooseIdentityModal from '../../assets/register/choose-identity-model.png'
import ngoIcon from '../../assets/register/ngo-icon.svg'
import companyIcon from '../../assets/register/company-icon.svg'
import socialGroupIcon from '../../assets/register/social-group-icon.svg'
const SignUp = () => {
  return (
    <>
      <div className="styleOne"></div>
      <div className="styleTwo"></div>
      <div>
        <ul className="Nav-Bar">
          <div className="left">
            <img src={sayItSocial} alt="left" className="left_img" />
            <div className="nav-bar-text">SayItSocial</div>
          </div>
          <div className="right">
            <li className="nav-bar-li">About Us</li>
            <li className="nav-bar-li">Contact</li>
            <li className="nav-bar-li">Pricing</li>
            <li className="nav-bar-li">Policy</li>
          </div>
        </ul>
      </div>
      <div className="dollImgDiv">
        <div>
          <img src={chooseIdentityModal} alt="dollImg" className="doll_img" />
        </div>
        <div className="sup_info">
          <div className="info">
            <div className="info_divs">
              <div className="number" id="one">
                <div className="round">1</div>
              </div>
              <div className="text">CHOOSE IDENTITY</div>
            </div>
            <div className="br_div"></div>
            <div className="info_divs">
              <div className="number">
                <div className="round">2</div>
              </div>
              <div className="text">ABOUT YOU</div>
            </div>
            <div className="br_div"></div>
            <div className="info_divs">
              <div className="number">
                <div className="round">3</div>
              </div>
              <div className="text">LAUNCH!</div>
            </div>
          </div>
          <div className="welcome">
            <div className="w">Welcome, </div>Choose your Identity
          </div>
          <div className="buttons">
            <label className="container">
              Individual
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">
              Organisation
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="choose" id="choose_one">
          <div className="choose_img">
            <img src={ngoIcon} alt="ngo" className="n_img"/>
          </div>
        <div className="img-text">
          NGO
        </div>
          </div>
          <div className="choose">
          <div className="choose_img">
            <img src={companyIcon} alt="company" className="n_img"/>
          </div>
        <div className="img-text">
          Company
        </div>
          </div>
          <div className="choose">
          <div className="choose_img">
            <img src={socialGroupIcon} alt="social " className="n_img"/>
          </div>
        <div className="img-text">
          Social Group
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
