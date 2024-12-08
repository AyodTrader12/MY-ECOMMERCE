import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../model/userModel";
export const createAccount = async (req: Request, res: Response) => {
  try {
    const { email, password, name, age } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const acc = crypto.randomBytes(4).toString("hex");
    const token = crypto.randomBytes(2).toString("hex");

    const user = await userModel.create({
      name,
      email,
      age,
      password: hashed,
      token,
    });

    return res.status(201).json({
      message: "account created successfully",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error creating account",
      status: 404,
    });
  }
};

export const loginAccount = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.params;
    const getUser = await userModel.findOne({ email });
  } catch (error) {
    return res.status(404).json({
      message: "error logging in your account",
      status: 404,
    });
  }
};
