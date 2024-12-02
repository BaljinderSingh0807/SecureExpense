import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const registerUser = async (req: any, res: any) => {
    const {name, email, password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({
                message: "User Already exists",
            })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({
            message: "User Created Successfully",
            user: newUser,
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
} 

export const loginUser = async(req: any, res: any) => {
    const {email, password} = req.body;
    try {

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: 'Invalid Credentials'
            })
        }

        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET as string, {expiresIn: '1h'})

        res.status(200).json({ message: 'Login successful', token });

    } catch(error) {
        res.status(500).json({ message: 'Server error' });
    }
}