
import { createClient } from '@supabase/supabase-js'

let URI = 'https://qrqgvflhpbbyneleslev.supabase.co'
let AUTH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFycWd2ZmxocGJieW5lbGVzbGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNjc0NzgsImV4cCI6MjAyMzk0MzQ3OH0.rqIUsbBDRa91dsxHS0JWgmOsCoFVUFlgzALGgORO2SU'

// Create a single supabase client for interacting with your database
// const supabase = createClient(URI, AUTH_KEY)


const createSupabaseClient = () => {
    return createClient(URI, AUTH_KEY)
}

export default createSupabaseClient