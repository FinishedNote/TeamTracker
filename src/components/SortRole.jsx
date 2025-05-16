const SortRole = () => {
  return (
    <form className="sort-role-container">
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
      <button type="submit">Trier</button>
    </form>
  );
};

export default SortRole;
