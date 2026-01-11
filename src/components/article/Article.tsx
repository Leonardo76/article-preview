import DeviceTypes from "../../utils/DeviceTypes.tsx";
import "./article.css";
import PopupMobile from "../popupMobile/PopupMobile.tsx";
import {useEffect, useRef, useState} from "react";
import Popup from "../popup/Popup.tsx";
import imageDrawers from "/src/assets/images/drawers.jpg";
import imageMichelle from "/src/assets/images/avatar-michelle.jpg"

function Article() {
    //popup is visible or not
    const [visible, setVisible] = useState(false);
    //button change colors on click - detect if the button is clicked
    const [changeButtonColors, setChangeButtonColors] = useState(false);
    //save button position (maybe you resize the page)
    const [buttonPosition, setButtonPosition] = useState({left: 0, top: 0, width: 0});
    //reference to the button in order to be able to extract the position
    const refButton = useRef<HTMLButtonElement>(null);

    //region Close popup on window resize and set the original colors for the button
    useEffect(() => {

        function resizeHandler() {
            setVisible(false);
            setChangeButtonColors(false);
        }

        window.addEventListener('resize', resizeHandler, true);

        return () => window.removeEventListener('resize', resizeHandler);

    });
    //endregion

    //region If you want to close popup on click anywhere on page (not just on button).
    //If not (just the button is used), comment this useEffect
    useEffect(() => {
        function focusoutHandler() {
            setVisible(false);
            setChangeButtonColors(false);
        }

        window.addEventListener('focusout', focusoutHandler, true);

        return () => window.removeEventListener('focusout', focusoutHandler);
    });
    //endregion

    //get the device (if it is mobile or not)
    const isMobile = DeviceTypes() === "isMobile";

    //different popup depending on breakpoint
    const popup =
        visible ?
            isMobile
                ? <PopupMobile setIsOpen={setVisible}></PopupMobile>
                : <Popup
                    left={buttonPosition.left}
                    top={buttonPosition.top}
                    width={buttonPosition.width}>
                </Popup>

            : <></>;

    //region handle click
    //handle button click to show popup and to detect button position
    //I need the button position in order to show the popup at specific location on tablet and desktop size
    function handleClick() {
        //show popup
        setVisible(!visible);

        //change colors of button on any breakpoint (on mobile, the button is under the popup so doesn't matter)
        setChangeButtonColors(!changeButtonColors);

        //get the button position
        if (refButton.current) {
            setButtonPosition({
                left: refButton.current.getBoundingClientRect().left,
                top: refButton.current.getBoundingClientRect().top,
                width: refButton.current.getBoundingClientRect().width,
            });
        }
    }

    //endregion

    return (
        <>
            <article className="article">
                <img className="article__img"
                     src={imageDrawers}
                     alt="Image with furniture and a vase"/>
                <main className="article__main">
                    <header className="article__main--header">
                        <h1 className={"article__main--header-title"}>Shift the overall look and feel by
                            adding
                            these wonderful
                            touches to furniture in your home</h1>
                        <p className={"article__main--header-text"}>Ever been in a room and felt like
                            something was
                            missing? Perhaps
                            it felt slightly bare and uninviting. I’ve got some simple tips
                            to help you make any room feel complete.</p>
                    </header>
                    <footer className="article__main--footer">
                        <section className="article__main--footer-author">
                            <img className="article__main--footer-author-image"
                                 src={imageMichelle} alt="Image of Michelle Appleton"
                                 width={"40px"}
                                 height={"40px"}/>
                            <div className="article__main--footer-author-nameDate">
                                <h2 className="article__main--footer-author-nameDate-name">Michelle Appleton</h2>
                                <time className="article__main--footer-author-nameDate-date" dateTime="2020-06-28">
                                    28 Jun 2020
                                </time>
                            </div>
                        </section>
                        <button className="article__main--footer-popupButton" ref={refButton}
                                style={{
                                    backgroundColor: changeButtonColors ? "hsl(214, 17%, 51%)" : "hsl(210, 46%, 95%)"
                                }}
                                onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                                <path className="article__main--footer-popupButton-image"
                                      fill={changeButtonColors ? "hsl(0, 0%, 100%)" : "hsl(214, 17%, 51%)"}
                                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                            </svg>
                        </button>
                        {popup}
                    </footer>
                </main>
            </article>
        </>
    );
}

export default Article;