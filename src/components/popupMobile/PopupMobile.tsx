import './popupMobile.css';

/**
 * Popup for mobile devices
 * @param setIsOpen - callback function in order to be able to close the popup
 */
function PopupMobile({setIsOpen}: { setIsOpen: (isOpen: boolean) => void; }) {
    return (
        <>
            <div className="popupMobile">
                <div className="popupMobile__content">
                    <p className="popupMobile__content-text">Share</p>
                    <div className="popupMobile__content-icons">
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
                <button className="popupMobile__btn" onClick={() => setIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12.97">
                        <path className="popupMobile__btn-image"
                              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default PopupMobile;