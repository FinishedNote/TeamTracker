import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="r-container">
            <form onSubmit={(e) => handleSubmit(e)} className="register">
                <h1>Bon retour</h1>
                <p>Bon retour ! Veuillez saisir vos coordonnées.</p>
                <div className="inputs">
                    <label htmlFor="name">Entrez votre nom</label>
                    <div className="inp">
                        <input
                            type="text"
                            placeholder="Name"
                            id="name"
                            required
                        />
                        <select name="default">
                            <option value="coach">Entraîneur</option>
                            <option value="player">Joueur</option>
                        </select>
                    </div>
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
                        Vous avez déjà un compte ?
                        <NavLink to="/reset-password"> Cliquez ici</NavLink>
                    </span>
                </div>
                <button type="submit" className="register-btn">
                    S'incrire
                </button>
                <button type="button" className="google-register-btn">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="google-img"
                    />
                    S'inscrire avec Google
                </button>
            </form>
        </div>
    );
};

export default Register;
