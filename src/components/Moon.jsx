import React from "react";
import {css} from "@emotion/core";

const Moon = () => {
    return (
        <svg css = {css`
            path{
                transition: fill 0.5s;
            } 
            :hover{
                path{
                    fill: #ADADAD;
                }
            }
        `}width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.88 40.7002C49.4 48.9101 40.82 54.0002 31.49 54.0002C17.43 54.0002 6 42.5702 6 28.5102C6 19.1802 11.09 10.6002 19.3 6.12017C19.69 5.91015 20.17 5.98016 20.48 6.29015C20.8 6.61016 20.87 7.09014 20.65 7.48016C18.76 10.9202 17.77 14.8102 17.77 18.7502C17.77 31.7002 28.3 42.2302 41.25 42.2302C45.19 42.2302 49.08 41.2402 52.52 39.3502C52.91 39.1302 53.39 39.2002 53.71 39.5201C54.02 39.8301 54.09 40.3102 53.88 40.7002Z" fill="#C5C6C6" />
        </svg>


    );
}

export default Moon;