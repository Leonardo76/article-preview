import './popup.css';

/**
 * Popup for tablet and desktop devices
 * @param left - the left position for the button that trigger the popup
 * @param top - the top position for the button that trigger the popup
 * @param width - the width of the button that trigger the popup (default 32)
 * @constructor
 */
function Popup({left, top, width = 32}: { left: number, top: number, width?: number }) {
    left = left - 248 / 2 + width / 2; //248 = popup width;
    top = top - 55 - 17 - 12; //55 = popup height; 17 = distance between button and triangle; 12 = triangle height

    return (
        <div className="popup" style={{left: left, top: top}}>
            <div className="popup__content">
                <p className="popup__content-text">Share</p>
                <div className="popup__content-icons">
                    <img src="/src/assets/images/icon-facebook.svg" alt="Facebook icon"
                         className="popup__content-icons-icon"
                         width="20"
                         height="16.25"
                    />
                    <img src="/src/assets/images/icon-twitter.svg" alt="Twitter icon"
                         className="popup__content-icons-icon"
                         width="20"
                         height="16.25"
                    />
                    <img src="/src/assets/images/icon-pinterest.svg" alt="Pintest icon"
                         className="popup__content-icons-icon"
                         width="20"
                         height="16.25"
                    />
                </div>
            </div>
        </div>
    )
}

export default Popup;