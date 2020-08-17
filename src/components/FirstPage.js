import React from 'react';
import Styles from  "./FirstPage.module.css";
import Card from "./Card";
import Grid from "./Grid";
import {FaImages ,FaAcquisitionsIncorporated ,Fa500Px ,FaTwitter ,FaFacebook ,FaInstagram ,FaLinkedinIn} from "react-icons/fa";
const FirstPage = () => {
        return(
            <React.Fragment>
                <img src={process.env.PUBLIC_URL + "/banner.jpg"} alt="First Page"></img>
                <div className={Styles.banner_content}>
                    <h1>THIS IS ION</h1>
                    <p>A free responsive template by <strong>TEMPLATED</strong></p>
                    <button className={Styles.button1}>SIGN UP</button>
                    <button className={Styles.button2}>LEARN MORE</button>
                </div>
                <div className={Styles.second_part}>
                    <h1>IPSUM FEUGIAT CONSEQUAT</h1>
                    <p>Tempus adipiscing commodo ut aliquam blandit</p>
                    <div className={Styles.card_flex}>
                        <Card name="JUSTO PLACERAT" logo={<FaImages/>}/>
                        <Card name="BLANDIT QUIS CURAE" logo={<FaAcquisitionsIncorporated/>}/>
                        <Card name="AMET SED ACCUMSAN" logo={<Fa500Px/>}/>
                    </div>
                </div>
                <div className={Styles.commodo}>
                    <h1>COMMODO ACCUMSAN ALIQUAM</h1>
                    <p>Amet nisi nunc lorem accumsan</p>
                    <div className={Styles.flex_use}>
                        <p><Grid path="./pic01.jpg" name="MOLLIS ADIPISCING NISL"/></p>
                        <p><Grid path="./pic02.jpg" name="NEQUE ORNARE ADIPISCING"/></p>
                    </div>
                </div>
                <div className={Styles.fourPart}>
                    <div className={Styles.onediv}>
                        <div className={Styles.mollis_col}>
                            <h3>MOLLIS UT ADIPISCING</h3>
                            <img src={process.env.PUBLIC_URL + "./pic03.jpg"} alt="Frist Page"></img>
                            <p>Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit accumsan sapien blandit ac amet faucibus aliquet placerat commodo. Interdum ante aliquet commodo accumsan vis phasellus adipiscing. Ornare a in lacinia. Vestibulum accumsan ac metus massa tempor. Accumsan in lacinia ornare massa amet. Ac interdum ac non praesent. Cubilia lacinia interdum massa faucibus blandit nullam. Accumsan phasellus nunc integer. Accumsan euismod nunc adipiscing lacinia erat ut sit. Arcu amet. Id massa aliquet arcu accumsan lorem amet accumsan commodo odio cubilia ac eu interdum placerat placerat arcu commodo lobortis adipiscing semper ornare pellentesque.</p>
                        </div>
                        <div className={Styles.seconddiv}>
                            <div className={Styles.magna_row}>
                                <h4>MAGNA MASSA BLANDIT</h4>
                                <p>Feugiat amet accumsan ante aliquet feugiat accumsan. Ante blandit accumsan eu amet tortor non lorem felis semper. Interdum adipiscing orci feugiat penatibus adipiscing col cubilia lorem ipsum dolor sit amet feugiat consequat.</p>
                                <button>LEARN MORE</button>
                            </div>
                            <div className={Styles.ante_col}>
                                <h4>ANTE SED COMMODO</h4>
                                <a href="/">Erat blandit risus vis adipiscing</a><br/><br/>
                                <a href="/">Tempus ultricies faucibus amet</a><br/><br/>
                                <a href="/">Arcu commodo non adipiscing quis</a><br/><br/>
                                <a href="/">Accumsan vis lacinia semper</a><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.last}>
                    <div className={Styles.lastdiv}>
                        <div className={Styles.lastdivinner}>
                            <div className={Styles.accumsan}>
                                <h3>ACCUMSAN</h3>
                                <a href="/">Nascetur nunc varius</a><br/><br/>
                                <a href="/">Vis faucibus sed tempor</a><br/><br/>
                                <a href="/">Massa amet lobortis vel</a><br/><br/>
                                <a href="/">Nascetur nunc varius</a><br/><br/>
                            </div>
                            <div className={Styles.faucibus}>
                                <h3>FAUCIBUS</h3>
                                <a href="/">Nascetur nunc varius</a><br/><br/>
                                <a href="/">Vis faucibus sed tempor</a><br/><br/>
                                <a href="/">Massa amet lobortis vel</a><br/><br/>
                                <a href="/">Nascetur nunc varius</a><br/><br/>
                            </div>
                            <div className={Styles.ali}>
                                <h3>ALIQUAM INTERDUM</h3>
                                <p>Blandit nunc tempor lobortis nunc non. Mi accumsan. Justo aliquet massa adipiscing cubilia eu accumsan id. Arcu accumsan faucibus vis ultricies adipiscing ornare ut. Mi accumsan justo aliquet.</p>
                                <a href="/"><FaTwitter className="twitter"/></a>
                                <a href="/"><FaFacebook className="twitter"/></a>
                                <a href="https://www.instagram.com/__name__.syntax_error/"><FaInstagram className="twitter"/></a>
                                <a href="/"><FaLinkedinIn className="twitter"/></a>  
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
export default FirstPage;