import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembers } from "../redux/features/members/membersSlice";
import supabase from "../supabaseClient";

const AddMember = ({ id }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [err, setErr] = useState("");

    const handleAddMember = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.rpc("get_user_by_email", {
            user_email: email,
        });
        if (error) {
            setErr(error.message);
        } else {
            setErr(null);
        }

        console.log(id);
        dispatch(
            addMembers({
                user_id: data[0].id,
                team_id: id,
                role: role,
                userId: user.id,
            })
        );
        console.log("done");
    };

    if (err) return <p>{err}</p>;

    return (
        <form className="add-member" onSubmit={(e) => handleAddMember(e)}>
            <input
                type="text"
                className="email"
                name="email"
                placeholder="Email"
                onChange={(prev) => setEmail(prev.target.value)}
            />
            <select
                type="text"
                className="role"
                name="role"
                onChange={(prev) => setRole(prev.target.value)}
            >
                <option value="goalkeeper">Gardien</option>
                <option value="defender">Défensseur</option>
                <option value="attacker">Attaquant</option>
            </select>
            <button type="submit">
                Envoyer <SendHorizontal width={14} height={14} />
            </button>
        </form>
    );
};

export default AddMember;
