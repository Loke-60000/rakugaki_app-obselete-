import React, { useState } from "react";
import { BrowserRouter as Router, createBrowserRouter, RouterProvider , Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Modal.css';
import { useNavigate } from 'react-router-dom';


function Modal({closeModal}){
    const navigate = useNavigate();
    return(
        <>  
            <div id="modal_login">
                <div id='modal_box'>
                    <button id="CloseButton" onClick={() => closeModal(false)}>X</button>
                    <form>
                        <label for='usename'><b>Username</b></label>
                        <input type='text' placeholder="Enter username" name='usename'></input>
                        <label for='mdp'><b>Password</b></label>
                        <input type='password' placeholder="Enter password" name='mdp'></input>
                        <button onClick={() => navigate('MainApp')}>Login</button>
                        <button type='submit' id="login">Login</button>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Modal

// https://www.youtube.com/watch?v=ZCvemsUfwPQ