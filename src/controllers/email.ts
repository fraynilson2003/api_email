import { Request, Response } from "express"
import { handleHttp } from '../utils/error.handler';
import { InterfaceEmailRegister } from "../interfaces/InterfaceEmailRegister";
import { trimObject } from "../helpers/trimProperties";
import { sendEmail } from "../services/nodemailerServ";
import EmailRegister from "../models/EmailRegister";

export const setEmail = async(req: Request, res: Response)=>{
  try {
    
    let objEmail = req.body as InterfaceEmailRegister

    //limpiamos
    trimObject(objEmail)


    //enviamos email
    sendEmail(objEmail)
   
    let ressult = EmailRegister.create({...objEmail})

    return res.status(202).json({
      status: "sucess",
      ressult: objEmail
    })
  } catch (error) {
    let {message}: any = error
    handleHttp(res, message)
  }
}