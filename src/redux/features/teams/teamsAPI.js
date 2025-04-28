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

export async function createTeam({ name, coach_id }, { rejectWithValue }) {
  const { data, error } = await supabase
    .from(table)
    .insert([{ name, coach_id }])
    .select()
    .single();

  if (error) {
    return rejectWithValue(error.message);
  }
  return data;
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
