import React, { useState } from 'react';
import './Styles/Skin_type.css'
import img from './Styles/resizedimage.jpg'

function SkinType() {
    const [answer, setAnswer] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    function handleClick() {
        if (answer === '') {
            setErrorMsg('Please enter your answer');
        } else {
            const skinTypeFactory = factorySkinType();
            const input = answer.toLowerCase(); // convert input to lowercase
            const message = skinTypeFactory.Msg(input);
            setErrorMsg(message);
        }
    }

    return (
        <>
            <h1 style={{color:"white"}}> What is your skin type?</h1>
            <img style={{width: '50%'}} src={img} alt="" />
            

            <h4>
                <u>
                    <b style={{ color:"white"}}> Instructions before you use the app:</b>
                </u>
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold",color:"white" }}>How To:</div>
                    <div className="howTo" style={{ marginTop: "20px" }}>
                        <ul>
                            <li style={{ listStyle:"none", textAlign: "center", marginBottom: "10px",color:"white" }}>WASH your face with just a face bar the night before,</li>
                            <li style={{ listStyle:"none", textAlign: "center", marginBottom: "10px",color:"white" }}>pat it dry,</li>
                            <li style={{ listStyle:"none", textAlign: "center", marginBottom: "10px",color:"white" }}>DO NOT apply any night/facial cream</li>
                        </ul>
                    </div>
                </div>

            </h4>
            <div style={{ textAlign: "center",color:"white" }}>
                <h3 style={{ color:"white" }}>Please choose a face of which your skin feels like eg: 'first, second....' and enter your answer below:</h3>
                <input
                    type="text"
                    name="answer"
                    id="faceAnswer"
                    className="faceType"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "300px", marginBottom: "20px" }}
                />
                <h3 className="ChangeMSg" style={{ color: "white" }}></h3>
                <div className="submit">
                    <input
                        type="button"
                        name="faceSub"
                        value="Submit"
                        id="submitFace"
                        className="faceBtn"
                        onClick={handleClick}
                        style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", cursor: "pointer", border: "none" }}
                    />
                </div>
            </div>

            <div className="error"  style={{ padding: "10px", borderRadius: "5px", color: "white", cursor: "pointer", border: "none" }} id="errMsg">
                {errorMsg}
            </div>
        </>
    );
}

function factorySkinType() {
    var faceColor = [];
    var Message = '';
    var isValidReg = /[!@#$%^&*(),.'?":+`?~{}|0-9<>]/gi;
    var link = ' ';

    function Msg(Input) {
        var name = Input.toLowerCase(); // convert input to lowercase
        var regEx = isValidReg.test(name);
      
        if (regEx === false && name.length > 0 && name.length <= 7) {
          faceColor.push(name);
          return skinTypeCheck(name); // pass the lowercase input to skinTypeCheck
        } else {
          console.log(name);
          return 'Invalid input!';
        }
      }
      

    function skinTypeCheck(skinType) {
        if (skinType === 'first') {
            return 'you have normal skin!';
        }
        if (skinType === 'second') {
            return 'you have dry skin!';
        }
        if (skinType === 'third') {
            return 'you have oily skin!';
        }
        if (skinType === 'fourth') {
            return 'you have combination(normal/oily) skin!';
        }
        if (skinType === 'fifth') {
            return 'you have very dry / sensitive skin!';
        }
    }

    console.log(faceColor);

    function appropriateMsg() {
        return Message;
    }

    function getAll() {
        return faceColor;
    }

    return {
        Msg,
        appropriateMsg,
        getAll,
        skinTypeCheck,
    };
}


export default SkinType;
