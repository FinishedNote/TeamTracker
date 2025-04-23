import supabase from '../../../supabaseClient';

const table = 'teams';

export async function fetchTeams() {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
}

export async function createTeam(newTeam) {
  const { data, error } = await supabase.from(table).insert([newTeam]).select().single();
  if (error) throw error;
  return data;
}

export async function updateTeam(id, updatedValues) {  
    const { data, error } = await supabase
      .from(table)
      .update(updatedValues)
      .eq('id', id)
      .select()
      .single();
  
    if (error) throw error;
    return data;
  }

export async function deleteTeam(id) {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
  return { id };
}
