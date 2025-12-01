#!/bin/bash

SUPABASE_URL="https://lroflxhpaswkxlnqugzd.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb2ZseGhwYXN3a3hsbnF1Z3pkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Mjg1ODM3MywiZXhwIjoyMDc4NDM0MzczfQ.NjpmeLjNVNNEz97f_J-Y3ZR33GwT4T1q41qlvwX8tJA"

# Criar tabelas via SQL direto no Postgres
psql "postgresql://postgres.lroflxhpaswkxlnqugzd:${SERVICE_KEY}@aws-0-us-east-1.pooler.supabase.com:6543/postgres" -f supabase-schema.sql 2>&1

