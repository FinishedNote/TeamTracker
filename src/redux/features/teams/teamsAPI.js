import supabase from "../../../supabaseClient";

const table = "teams";
const teamLimit = {
  free: 1,
  essential: 3,
  premium: Infinity,
};

export async function fetchTeams() {
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw error;
  return data;
}

export async function createTeam(
  { newTeam, coach_id, subscriptionTier },
  { rejectWithValue }
) {
  const { count, error: countError } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true });

  if (countError) {
    return rejectWithValue("Erreur lors de la vérification des équipes.");
  }

  const maxTeams = teamLimit[subscriptionTier] || 0;

  // const { data, error } = await supabase
  //   .from(table)
  //   .insert([newTeam])
  //   .select()
  //   .single();
  // if (error) throw error;
  // return data;
}

export async function updateTeam(id, updatedValues) {
  const { data, error } = await supabase
    .from(table)
    .update(updatedValues)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteTeam(id) {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
  return { id };
}
