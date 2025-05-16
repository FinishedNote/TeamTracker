import supabase from "../../../supabaseClient";

const table = "team_members";

export async function fetchMembers() {
  const { data, error } = await supabase.from(table).select("*");
  console.log(data);
  if (error) throw error;
  return data;
}

export async function createMembers(
  { user_id, team_id, role },
  { rejectWithValue }
) {
  const { data, error } = await supabase
    .from(table)
    .insert([{ user_id, team_id, role }])
    .select()
    .single();

  if (error) {
    return rejectWithValue(error.message);
  }
  return data;
}

export async function updateMembers(user_id, updatedValues) {
  const { data, error } = await supabase
    .from(table)
    .update(updatedValues)
    .eq("user_id", user_id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteMembers(user_id) {
  const { error } = await supabase.from(table).delete().eq("user_id", user_id);
  if (error) throw error;
  return { id };
}
