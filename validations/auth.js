import {body} from 'express-validator';

export const registerValidation = [
    body('email', 'Incorrect mail format').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({min:5}),
    body('fullName', 'Specify the name').isLength({min:3}),
    body('avatarUrl', 'Incorrect avatar link').optional().isURL(),
];