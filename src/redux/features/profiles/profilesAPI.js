import supabase from "../../../supabaseClient";

const table = "profiles";

export async function fetchProfiles() {
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw error;
  return data;
}

export async function createProfiles(
  { user_id, email, username, role },
  { rejectWithValue }
) {
  const { data, error } = await supabase
    .from(table)
    .insert([{ user_id, email, username, role }])
    .select()
    .single();

  if (error) {
    console.log(error);
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
