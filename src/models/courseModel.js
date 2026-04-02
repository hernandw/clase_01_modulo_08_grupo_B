import pool from "../config/db.js";

const Course = {
  findAll: async () => {
    try {
      const res = await pool.query(`
                SELECT courses.*, categories.name AS category_name
                FROM courses
                JOIN categories ON courses.category_id = categories.id
            `);
      return res.rows;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
  create: async (title, description, price, category_id) => {
    try {
      await pool.query(
        "INSERT INTO courses (title, description, price, category_id) VALUES ($1, $2, $3, $4)",
        [title, description, price, category_id],
      );
    } catch (error) {
      console.error("Error creating course:", error);
      throw error;
    }
  },
};

const Category = {
  findAll: async () => {
    try {
      const { rows } = await pool.query("SELECT * FROM categories");
      return rows;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
  create: async (name) => {
    try {
      await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },
};

export { Course, Category };
