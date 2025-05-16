import { SendHorizontal } from "lucide-react";

const AddMember = () => {
  return (
    <form className="add-member">
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="role" placeholder="Rôle" />
      <button type="button">
        Envoyer <SendHorizontal />
      </button>
    </form>
  );
};

export default AddMember;
