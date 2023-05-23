'use strict';
import nodemailer from "nodemailer"
import { InterfaceEmailRegister } from "../interfaces/InterfaceEmailRegister";
import { alguienPostulo } from "./models/Alguien_Postulo";
import dotenv from 'dotenv';

dotenv.config();
const {
    MAILUSER,
    MAILPSSWD,
    EMAIL_DESTINY
} = process.env;




export function sendEmail (newEmail: InterfaceEmailRegister){
    console.log("*********************");
    console.log(EMAIL_DESTINY);
    console.log(newEmail);
    console.log("*********************");


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MAILUSER,
            pass: MAILPSSWD
        }
    });

    let response:any = alguienPostulo("Fray", newEmail.email, newEmail.message)

    let mailOptions = {
        from: `${MAILUSER}`,
        to: `${EMAIL_DESTINY}`,
        subject: `${newEmail.email} te contacta por tu PORTAFOLIO`,
        html: response
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo se envió con éxito: ' + info.response);
        }
    });
}
