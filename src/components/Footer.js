import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <StyledFooter>
            <div className="footer" id="footer">
                <div className="ft-home">
                    <Link to='/' className='social-logo'>
                        Tender Wema
                    </Link>
                </div>
                <div className="copy">Copyright &copy; 2023 Tender Wema</div>
                <div className="socials">
                    <FontAwesomeIcon className="icon" icon={faFacebook} size="xl" />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} size="xl" />
                    <FontAwesomeIcon className="icon" icon={faTwitter} size="xl" />
                </div>
            </div>
        </StyledFooter>
    );
}

        const StyledFooter = styled.footer`
        margin-top: 50px;
        height: 100px;
        width: 100%;
        background: #ECF7FF;
        bottom: 0;
        .footer {
        display: flex;
        width: 90%;
        height: 100%;
        justify-content: space-between;
        margin-inline: auto;
        align-items: center;
        }
        .copym {
        display: none;
        }
        .copy {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        }
        .ft-home{
        font-weight: 700;
        }
        .socials {
        display: flex;
        gap: 50px;
        }
        .icons {
        }
        }
        .logo {
        display: flex;
        h1,
        span {
        color: #000;
        font-size: 30px;
        font-weight: 700;
        }
        h1 span {
        color: #95290b;
        margin-right: 10px;
        }
        }
        @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        .footer {
        width: 95%;
        }
        .socials {
        gap: 20px;
        color: #000;
        }
        .copy {
        display: none;
        }
        .copym {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        display: block;
        align-self: center;
        margin-bottom: 10px;
        }
        }
        `;

export default Footer