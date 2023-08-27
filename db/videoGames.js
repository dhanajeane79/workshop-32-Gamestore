const client = require("./client");
const util = require("util");

const REPLACE_ME = "SELECT * FROM videoGames ORDER BY id ASC";

// GET - /api/video-games - get all video games
// Define the function to retrieve all video games
// Execute the SQL query to fetch all video games from the database
// Extract the "rows" property from the result object
// Return the retrieved video games
// If an error occurs, throw a new error with a specific message
async function getAllVideoGames() {
  try {
    const { rows: videoGames } = await client.query(`
            SELECT * FROM videoGames;
        `);
    return videoGames;
  } catch (error) {
    throw new Error("Error fetching all video games.");
  }
}

// GET - /api/video-games/:id - get a single video game by id
// Define the function to retrieve a video game by ID
// Execute the SQL query to fetch a video game by its ID from the database
// Extract the first element of the "rows" array (video game) from the query result
// Return the retrieved video game
// If an error occurs, throw the error to be handled by the caller
async function getVideoGameById(id) {
  try {
    const {
      rows: [videoGame],
    } = await client.query(
      `
            SELECT * FROM videoGames
            WHERE id = $1;
        `,
      [id]
    );
    return videoGame;
  } catch (error) {
    throw error;
  }
}

// POST - /api/video-games - create a new video game
// Define the function to create a new video game
// Destructure the properties from the request body
// Execute the SQL query to insert a new video game into the database
// Extract the first element of the "rows" array (newly created video game) from the query result
// Return the newly created video game
// If an error occurs, throw the error to be handled by the caller
async function createVideoGame(body) {
  const { name, description, price, inStock, isPopular, imgUrl } = body;

  try {
    const {
      rows: [videoGame],
    } = await client.query(
      `
            INSERT INTO videogames(name, description, price, "inStock", "isPopular", "imgUrl")
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `,
      [name, description, price, inStock, isPopular, imgUrl]
    );

    return videoGame;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
  // LOGIC GOES HERE
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
  // LOGIC GOES HERE
}

module.exports = {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
};
