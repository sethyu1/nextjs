'use server';

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import createUser, { getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function singup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    if (!email.includes('@')) {
        errors.email = 'Please enter a valide email address'
    }

    if (password.trim().length < 8 ) {
        errors.password = 'Password must be at least 8 character long'
    }

    if (Object.keys(errors).length > 0) {
        return {errors,}
    }

    // store it in the database (create a new user)
    const hashedPassword = hashUserPassword(password)
    try {
        const id = createUser(email, hashedPassword);
        await createAuthSession(id);
        redirect('/training');
    }   catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors: {
                    email:'It seems like an account for the chose email already exist.'
                }
            }
        }
        throw error;
    } 
}

export async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password'); 

    const existingUser = getUserByEmail(email);
    
    if (!existingUser) {
        return {
            errors: {
                email: 'Could not authenticate user, please checkk your crediential'
            }
        }
    }

    const isVerifiedPassword = verifyPassword(existingUser.password, password);

    if (!isVerifiedPassword) {
        return {
            errors: {
                password: 'Could not authenticate user, please checkk your crediential'
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/training');
}

export async function auth(mode, prevState, formData) {
    if (mode === 'login') {
        return login(prevState, formData);
    }
    return singup(prevState, formData)
    
}

export async function logout() {
    await destroySession();
    redirect('/')
}