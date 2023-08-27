import React, { useState } from "react";
import FeedbackForm from "./feedback";
import FeedbackAnalytics from "./Analytics";
import Footer from "./footer";

export default function SkincareRoutine() {
    const [showAnalytics, setShowAnalytics] = useState(false);
    const [passkey, setPasskey] = useState("");
    const [isPasskeyValid, setIsPasskeyValid] = useState(false);

    const passkeyFromEnv = process.env.REACT_APP_PASSKEY || "0009"; // Default passkey is "0009"

    const toggleAnalytics = () => {
        if (isPasskeyValid) {
            setShowAnalytics(!showAnalytics);
        }
    };

    const validatePasskey = () => {
        if (passkey === passkeyFromEnv) {
            setIsPasskeyValid(true);
        } else {
            setIsPasskeyValid(false);
        }
    };

    return (
        <>
            <FeedbackForm />
    
            <div className="container">
                {/* ...Accordion content... */}
            </div>

            <div className="text-center my-4">
                <button
                    className="btn btn-primary"
                    onClick={toggleAnalytics}
                >
                    {showAnalytics ? "Close Analytics" : "View Analytics"}
                </button>
            </div>

            {showAnalytics && <FeedbackAnalytics />}

            {!isPasskeyValid && !showAnalytics && (
                <div className="passkey-input">
                    <input
                    style={{color:'black'}}
                        type="password"
                        placeholder="Enter Passkey"
                        value={passkey}
                        onChange={(e) => setPasskey(e.target.value)}
                    />
                    <button style={{color:'black'}} onClick={validatePasskey}>Submit</button>
                    {passkey && !isPasskeyValid && <p style={{color:'black'}}>Incorrect passkey. Please try again.</p>}
                </div>
            )}
            <br />
            <br />
            <br />
            <br />
            <hr />
            {
                <Footer/>
            }
        </>
    );
}
