import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ChevronsRight } from "lucide-react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="r-container">
            <form onSubmit={(e) => handleSubmit(e)} className="register">
                <div className="info">
                    <h1>Team Tracker</h1>
                    <p>Bienvenue ! Veuillez entrer vos coordonées.</p>
                </div>
                <div className="details">
                    <label htmlFor="name">Entrez votre nom</label>
                    <input type="text" id="name" placeholder="Nom" />
                    <select>
                        <option value="Entraineur">Entraineur</option>
                        <option value="Joeur">Joueur</option>
                    </select>
                </div>
                <div className="next-step">
                    <button>
                        <ChevronsRight />
                    </button>
                </div>
                <div className="progress-bar">
                    <div className="range">
                        <div className="progress"></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
