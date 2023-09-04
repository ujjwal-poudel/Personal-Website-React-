import React from "react";

const Hamburger = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        width="32" height="32" viewBox="0 0 32 32" style={{color: "#FFFFFF", margin: "0px 16px" }}>
        <path fill="#FFFFFF" stroke="currentColor"
        stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2" d="M5 8h22M5 16h22M5 24h22"/>
        </svg>

        // <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
        // <g opacity="0.85">
        // <path d="M25 1H0.833374H25ZM25 9.5H0.833374H25ZM25 18H0.833374H25Z" fill="white" style={{margin: "0px 2px"}}/>
        // <path d="M25 1H0.833374M25 9.5H0.833374M25 18H0.833374" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        // </g>
        // </svg>
    );
};

export default Hamburger;