const client = require("./client");
const util = require("util");

const REPLACE_ME = "SELECT * FROM videoGames ORDER BY id ASC";

// GET - /api/video-games - get all video games
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
// Define the function to retrieve all video games
// Execute the SQL query to fetch all video games from the database
// Extract the "rows" property from the result object
// Return the retrieved video games
// If an error occurs, throw a new error with a specific message
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
async function createVideoGame(body) {
  // LOGIC GOES HERE
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
