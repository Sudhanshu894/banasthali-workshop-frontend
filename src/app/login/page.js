"use client";

import {useRouter} from "next/navigation";
import {useState} from "react";
import "../../app/auth.css";
import Link from "next/link";
import { Mail, Lock, LogIn } from 'lucide-react';

const Loginpage = () => {
    const router = useRouter();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({email, password});
    }

  return (
    <div className="auth-container">
        <div
            className="glass-card auth-card"
        >
            <div className="auth-header">
                <h1>Welcome Back</h1>
                <p>Sign in to manage your projects</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="label">Email Address</label>
                    <div className="input-relative">
                        <Mail className="input-icon" />
                        <input
                            type="email"
                            required
                            className="input input-with-icon"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label className="label">Password</label>
                    <div className="input-relative">
                        <Lock className="input-icon" />
                        <input
                            type="password"
                            required
                            className="input input-with-icon"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full"
                    style={{ marginTop: '1.5rem' }}
                >
                    Sign In
                </button>
            </form>

            <p className="auth-footer">
                Don't have an account?{' '}
                <Link href="/signup" className="auth-link">
                    Create an account
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Loginpage;