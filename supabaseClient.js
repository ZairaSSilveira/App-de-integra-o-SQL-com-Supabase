// supabaseClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eodhgqwuazahjrgsxpgl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZGhncXd1YXphaGpyZ3N4cGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzU3MjcsImV4cCI6MjAzODQ1MTcyN30.g4AnQKJXc1gQtMA7HVvb47r00Ns24hhtYdLqeBd044M';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});
