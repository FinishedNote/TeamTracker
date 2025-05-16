import { SendHorizontal } from "lucide-react";

const AddMember = () => {
  return (
    <form className="add-member">
      <input type="text" className="email" name="email" placeholder="Email" />
      <input type="text" className="role" name="role" placeholder="Rôle" />
      <button type="submit">
        Envoyer <SendHorizontal width={16} height={16} />
      </button>
    </form>
  );
};

export default AddMember;
