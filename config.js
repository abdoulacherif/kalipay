// CONFIGURATION SUPABASE - À GARDER SECRÈTE EN PRODUCTION
const SUPABASE_CONFIG = {
    url: 'https://oypihdbuovijjutuyqaj.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95cGloZGJ1b3Zpamp1dHV5cWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMjEwNzIsImV4cCI6MjA4NjU5NzA3Mn0.j3ZXmUYoXtV6rKh7f4_QdrttxSDCTE1khIkV0dHGp4s'
};

// Initialisation du client Supabase
const supabase = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
