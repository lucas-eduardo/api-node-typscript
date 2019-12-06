import { Request, Response } from 'express';
import { Document } from 'mongoose';
import userModel from '../models/user.model';

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: Document[] = await userModel.find();
        
        res.json({
            status: true,
            result: users
        });
    } catch (error) {
        res.json({
            status: false
        });
        console.error('Ocorreu algum erro', error);
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const {
            name,
            age,
            email
        }: {
            name: string,
            age: number,
            email: string
        } = req.body;

        if (!!name && !!age && !!email) {
            const body: {
                name: string,
                age: number,
                email: string
            } = {
                name: name,
                age: age,
                email: email
            }

            const user: Document = await userModel.create(body);

            res.json({
                status: true,
                result: user
            });
        } else {
            res.json({
                status: false,
                result: 'parametros invalidos'
            });
        }
    } catch (error) {
        res.json({
            status: false
        });
        console.error('Ocorreu algum erro', error);
    }
}

const getIdUser = async (req: Request, res: Response) => {
    try {
        const {
            idUser
        } = req.params;

        const user: Document = await userModel.findById(idUser);

        res.json({
            status: true,
            result: user
        });
    } catch (error) {
        res.json({
            status: false
        });
        console.error('Ocorreu algum erro', error);
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const {
            idUser
        } = req.params;

        await userModel.updateOne({ _id: idUser }, req.body);

        res.json({
            status: true
        });
    } catch (error) {
        res.json({
            status: false
        });
        console.error('Ocorreu algum erro', error);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const {
            idUser
        } = req.params;

        await userModel.deleteOne({ _id: idUser });

        res.json({
            status: true
        });
    } catch (error) {
        res.json({
            status: false
        });
        console.error('Ocorreu algum erro', error);
    }
}

export default {
    getAllUsers,
    createUser,
    getIdUser,
    updateUser,
    deleteUser
}