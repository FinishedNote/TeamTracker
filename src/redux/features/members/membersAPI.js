import supabase from "../../../supabaseClient";

const table = "team_members";

export async function fetchMembers() {
    const { data, error } = await supabase.from(table).select("*");
    if (error) throw error;
    return data;
}

export async function createMembers(
    { user_id, team_id, role, userId },
    { rejectWithValue }
) {
    console.log("test1");
    console.log("user id ", user_id);
    console.log("team id ", team_id);
    console.log("role ", role);
    console.log("UserId ", userId);

    const { data, error } = await supabase
        .from(table)
        .insert([{ user_id, team_id, role, added_by: userId }])
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
    const { error } = await supabase
        .from(table)
        .delete()
        .eq("user_id", user_id);
    if (error) throw error;
    return { id };
}
