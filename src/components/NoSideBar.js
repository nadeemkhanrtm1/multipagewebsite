import React from 'react';
import Styles from "./NoSideBar.module.css";
import { FaTwitter,FaFacebook,FaInstagram,FaLinkedinIn,} from "react-icons/fa";
import Grid from "./Grid";
const NoSideBar = () => {
        return (
            <React.Fragment>
                 <div className={Styles.firstdiv}>
                    <h1>NO SIDEBAR</h1>
                    <p>Tempus adipiscing commodo ut aliquam blandit.</p>
                </div>
                <div className={Styles.fourPart}>
                    <div className={Styles.onediv}>
                        <div className={Styles.mollis_col}>
                            <h3>MOLLIS UT ADIPISCING</h3>
                            <img src={process.env.PUBLIC_URL + "./pic03.jpg"} alt="No Side Bar"></img>
                            <p>Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan commodo odio cubilia ac eu interdum placerat placerat arcu commodo lobortis adipiscing semper ornare pellentesque.</p>
                            <p>Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum massa massa primis. Tempus condimentum tempus non ac varius cubilia adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum. Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet magna non interdum volutpat porttitor metus a ante ac neque. Nisi turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante adipiscing commodo integer arcu amet blandit adipiscing arcu ante.</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.commodo}>
                    <div className={Styles.flex_use}>
                        <p><Grid path="./pic01.jpg" name="MOLLIS ADIPISCING NISL"/></p>
                        <p><Grid path="./pic02.jpg" name="NEQUE ORNARE ADIPISCING"/></p>
                    </div>
                </div>
                <div className={Styles.last}>
                    <div className={Styles.lastdiv}>
                        <div className={Styles.lastdivinner}>
                            <div className={Styles.accumsan}>
                                <h3>ACCUMSAN</h3>
                                <a href="/nosidebar">Nascetur nunc varius</a><br/><br/>
                                <a href="/nosidebar">Vis faucibus sed tempor</a><br/><br/>
                                <a href="/nosidebar">Massa amet lobortis vel</a><br/><br/>
                                <a href="/nosidebar">Nascetur nunc varius</a><br/><br/>
                            </div>
                            <div className={Styles.faucibus}>
                                <h3>FAUCIBUS</h3>
                                <a href="/nosidebar">Nascetur nunc varius</a><br/><br/>
                                <a href="/nosidebar">Vis faucibus sed tempor</a><br/><br/>
                                <a href="/nosidebar">Massa amet lobortis vel</a><br/><br/>
                                <a href="/nosidebar">Nascetur nunc varius</a><br/><br/>
                            </div>
                            <div className={Styles.ali}>
                                <h3>ALIQUAM INTERDUM</h3>
                                <p>Blandit nunc tempor lobortis nunc non. Mi accumsan. Justo aliquet massa adipiscing cubilia eu accumsan id. Arcu accumsan faucibus vis ultricies adipiscing ornare ut. Mi accumsan justo aliquet.</p>
                                <a href="/nosidebar"><FaTwitter className="twitter"/></a>
                                <a href="/nosidebar"><FaFacebook className="twitter"/></a>
                                <a href="https://www.instagram.com/__name__.syntax_error/"><FaInstagram className="twitter"/></a>
                                <a href="/nosidebar"><FaLinkedinIn className="twitter"/></a>  
                            </div>
                        </div>
                    <ul className={Styles.copyright}>
						<li>&copy; Untitled. All rights reserved.</li>
						<li>Design: <a href="http://templated.co">TEMPLATED</a></li>
						<li>Images: <a href="http://unsplash.com">Unsplash</a></li>
                        <li><name>Made by:<strong>NADEEM KHAN</strong></name></li>
					</ul>
                    </div>
                </div>
            </React.Fragment>
        )
}
export default NoSideBar;