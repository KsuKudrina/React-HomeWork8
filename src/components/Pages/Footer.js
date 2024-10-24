import FooterIconFive from "../Icons/FooterIcons/FooterIconFive"
import FooterIconFour from "../Icons/FooterIcons/FooterIconFour"
import FooterIconOne from "../Icons/FooterIcons/FooterIconOne"
import FooterIconThree from "../Icons/FooterIcons/FooterIconThree"
import FooterIconTwo from "../Icons/FooterIcons/FooterIconTwo"
import logotype from "../Icons/Logotype"

export const Footer =() => {
    return (
        <footer className="footer">
            <section className="subscribe center">
                <div className="subscribe-cont">
                    <figure className="subscribe-left">
                        <img src="img/subscrabe_img.svg" alt="" className="subscribe-left-img"/>
                        <div className="subscribe-left-content">
                            <p className="subscribe-left-textItalic">
                                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                                sed pretium”
                            </p>
                            <p className="subscribe-left-text">
                            <span className="subscribe-left-textColor">Bin Burhan</span> <br />
                            Dhaka, Bd</p>
                            <div className="subscribe-left-carusel">
                                <img className="subscribe-left-carusel-img"
                                src="img/logo/subscribe_vector.svg"
                                alt="img subscrabe"/>
                                <img className="subscribe-left-carusel-imgColor"
                                src="img/logo/subsribe_vector_col.svg"
                                alt="img subscrabe"/>
                                <img className="subscribe-left-carusel-img"
                                src="img/logo/subscribe_vector.svg"
                                alt="img subscrabe"/>
                            </div>
                        </div>
                    </figure>
                <div className="subscribe-right">
                    <p className="subscribe-right-title">SUBSCRIBE</p>
                    <p className="subscribe-right-subtitle">
                    FOR OUR NEWLETTER AND PROMOTION
                    </p>
                    <form className="subscribe-right-forma">
                        <input
                            className="subscribe-right-inputEmail"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                        <div className="subscribe-but">
                            <input
                            type="submit"
                            className="button subscribe-but__button button_hover"
                            value="Subscribe"
                            />
                        </div>
                    </form>
                </div>
                </div>
            </section>
            <section className="aside center">
                <div className="aside-content">
                    <div className="aside-left">
                        <div className="aside__logo">
                        <a href="index.html" className="header-logotype"
                            >{logotype()}</a>

                        <a className="header-left-textlogo" href="index.html"
                            >BRAN<span className="header-left-colortext">D</span></a>
                        </div>
                        <article className="aside-description">
                            Objectively transition extensive data rather than cross functional
                            solutions. Monotonectally syndicate multidisciplinary materials
                            before go forward benefits. Intrinsicly syndicate an expanded
                            array of processes and cross-unit partnerships. Efficiently
                            plagiarize 24/365 action items and focused infomediaries.
                            Distinctively seize superior initiatives for wireless
                            technologies. Dynamically optimize.
                        </article>
                    </div>
                    <nav className="aside-right">
                        <div className="aside-right-box">
                            <p className="aside-right-boxTitle">COMPANY</p>
                            <div className="aside-right-linkbox">
                                <a href="/#" className="aside-right-link">Home</a>
                                <a href="/#" className="aside-right-link">Shop</a>
                                <a href="/#" className="aside-right-link">About</a>
                                <a href="/#" className="aside-right-link">How&nbsp;It&nbsp;Works</a>
                                <a href="/#" className="aside-right-link">Contact</a>
                            </div>
                        </div>
                        <div className="aside-right-box">
                            <p className="aside-right-boxTitle">INFORMATION</p>
                            <div className="aside-right-linkbox">
                                <a href="/#" className="aside-right-link"
                                >Tearms&nbsp;&&nbsp;Condition</a>
                                <a href="/#" className="aside-right-link">Privacy&nbsp;Policy</a>
                                <a href="/#" className="aside-right-link">How&nbsp;to&nbsp;Buy</a>
                                <a href="/#" className="aside-right-link">How&nbsp;to&nbsp;Sell</a>
                                <a href="/#" className="aside-right-link">Promotion</a>
                            </div>
                        </div>
                        <div className="aside-right-box">
                            <p className="aside-right-boxTitle">SHOP&nbsp;CATEGORY</p>
                            <div className="aside-right-linkbox">
                                <a href="/#" className="aside-right-link">Men</a>
                                <a href="/#" className="aside-right-link">Women</a>
                                <a href="/#" className="aside-right-link">Child</a>
                                <a href="/#" className="aside-right-link">Apparel</a>
                                <a href="/#" className="aside-right-link">Brows&nbsp;All</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="footer-bottom">
                <p className="footer-text">&copy;&nbsp;2021 Brand All Rights Reserved.</p>
                <nav className="footer-icons">
                    <div className="footer-icons-icon">{FooterIconOne()}</div>
                    <div className="footer-icons-icon">{FooterIconTwo()}</div>
                    <div className="footer-icons-icon">{FooterIconThree()}</div>
                    <div className="footer-icons-icon">{FooterIconFour()}</div>
                    <div className="footer-icons-icon">{FooterIconFive()}</div>
                </nav>
            </section>
        </footer>
    )
}