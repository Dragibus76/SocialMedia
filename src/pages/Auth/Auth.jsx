import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>CodeDragiMedia</h1>
                <h6>Explore le reseau social en toute liberté!</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        <LogIn/>
    </div>
  )
}

function SignUp() {
    return(
        <div className="a-right">
            <form className="infoForm authForm">
                <h3>Inscription</h3>
                <div>
                    <input type="text" placeholder='Prénom' className='infoInput' name='firstname' />
                    <input type="text" placeholder='Nom' className='infoInput' name='lasttname' />
                </div>

                <div>
                    <input type="text" placeholder='Pseudo' className='infoInput' name='username'/>
                </div>

                <div>
                    <input type="password" placeholder='Mot de passe' className='infoInput' name='password' />
                    <input type="password" placeholder='Confirmer mot de passe' className='infoInput' name=' confirm password' />
                </div>

                <div>
                        <span style={{ fontSize: "12px"}}>Déjà un compte? Connexion !</span>
                </div>
                <button className="button infoButton" type='submit'>Inscription</button>

            </form>
        </div>
    )
}

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Connexion</h3>
  
          <div>
            <input
              type="text"
              placeholder="Pseudo"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Mot de passe"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Vous n'avez pas de compte? s'inscrire
              </span>
            <button className="button infoButton">Connexion</button>
          </div>
        </form>
      </div>
    );
  }

export default Auth