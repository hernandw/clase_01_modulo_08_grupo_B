import pg from 'pg'
import 'dotenv/config'
const { Pool } = pg

const {DB_USER, DB_DATABASE, DB_PASSWORD, DB_HOST, DB_PORT} = process.env

const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    allowExitOnIdle: true
})

/* const getDate = async()=>{
    const { rows} = await pool.query("select NOW()")
    console.log(rows[0])
}

getDate() */
export default pool