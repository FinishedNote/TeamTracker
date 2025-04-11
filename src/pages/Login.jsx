import React, { useState } from "react";
import supabase from "../supabaseClient";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.log(error);
        } else {
            if (isCheck) {
                supabase.auth.setSession({ persistSession: true });
            } else {
                supabase.auth.setSession({ persistSession: false }); // TODO: debug cette ligne <---
            }
            navigate("/dashboard");
        }
    };
    const handleGoogleLogin = async () => {
        // TODO: A Finir <---
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    access_type: "offline",
                    prompt: "consent",
                    redirectTo: "http://localhost:5173/dashboard",
                },
            },
        });
    };

    return (
        <div className="l-container">
            <form onSubmit={(e) => handleSubmit(e)} className="login">
                <h1>Bon retour</h1>
                <p>Bon retour ! Veuillez saisir vos coordonnées.</p>
                <div className="inputs">
                    <label htmlFor="email">Entrez votre email</label>
                    <input
                        type="email"
                        defaultValue={email}
                        id="email"
                        placeholder="Email"
                        onChange={(prev) => setEmail(prev.currentTarget.value)}
                        required
                    />
                    <label htmlFor="password">Entrez votre mot de passe</label>
                    <input
                        type="password"
                        defaultValue={password}
                        id="password"
                        placeholder="Password"
                        onChange={(prev) =>
                            setPassword(prev.currentTarget.value)
                        }
                        required
                    />
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            value={isCheck}
                            id="rememberme"
                            onChange={() => setIsCheck(!isCheck)}
                        />
                        <label
                            htmlFor="rememberme"
                            className="checkmark"
                        ></label>
                        <label htmlFor="rememberme">Se souvenir de moi</label>
                    </div>
                    <span>
                        Mot de passe oublié ?
                        <NavLink to="/reset-password"> Cliquez ici</NavLink>
                    </span>
                </div>
                <button type="submit" className="login-btn">
                    Se connecter
                </button>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="google-login-btn"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="google-img"
                    />
                    Se connecter avec Google
                </button>
            </form>
        </div>
    );
};

export default Login;
