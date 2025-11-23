import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieAlert.css';

const CookieAlert = () => {
    const [showCookieAlert, setShowCookieAlert] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setShowCookieAlert(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowCookieAlert(false);
    };

    const handleDeclineCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setShowCookieAlert(false);
        // possible feature of disable contact through page if declined.
    };

    if (!showCookieAlert) {
        return null;
    }

    return (
        <div className="cookie-alert">
            <p>
                This website uses cookies to ensure you get the best experience. By continuing to use this site, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <div className="cookie-alert-buttons">
                <button onClick={handleAcceptCookies} className="btn btn-primary">
                    Accept
                </button>
                <button onClick={handleDeclineCookies} className="btn btn-secondary">
                    Decline
                </button>
            </div>
        </div>
    );
}

export default CookieAlert;