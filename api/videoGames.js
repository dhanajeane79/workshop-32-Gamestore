const express = require("express");
const router = express.Router();

const {
  getAllVideoGames,
  getVideoGameById,
  createVideoGame,
  updateVideoGame,
  deleteVideoGame,
} = require("../db/videoGames");

// GET - /api/video-games - get all video games
// Define the route handler for GET /api/video-games
// Call the function to retrieve all video games
// Send the retrieved video games as a response
// Handle errors by passing them to the next middleware
router.get("/", async (req, res, next) => {
  try {
    const videoGames = await getAllVideoGames();

    res.send(videoGames);
  } catch (error) {
    next(error);
  }
});

// GET - /api/video-games/:id - get a single video game by id
// Define the route handler for GET /api/video-games/:id
// Call the function to retrieve a video game by its ID
// Send the retrieved video game as a response
// Handle errors by passing them to the next middleware
router.get("/:id", async (req, res, next) => {
  try {
    const videoGame = await getVideoGameById(req.params.id);

    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// POST - /api/video-games - create a new video game
// Define the route handler for PATCH /api/video-games
// Call the function to create a new video game using the request body
// Send the newly created video game as a response
// Handle errors by passing them to the next middleware
router.patch("/", async (req, res, next) => {
  try {
    const videoGame = await createVideoGame(req.body);

    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// PUT - /api/video-games/:id - update a single video game by id
// Define the route handler for PUT /api/video-games/:id
// Call the function to update the video game using the provided ID and request body
// Send the updated video game as a response
// Handle errors by passing them to the next middleware
router.put("/:id", async (req, res, next) => {
  try {
    const videoGame = await updateVideoGame(req.params.id, req.body);

    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

// DELETE - /api/video-games/:id - delete a single video game by id
// Define the route handler for DELETE/api/video-games/:id
// Call the deleteVideoGame function to delete the video game
// Send the deleted video game as the response
// Pass the error to the error-handling middleware
router.delete("/:id", async (req, res, next) => {
  try {
    const videoGame = await deleteVideoGame(req.params.id);

    res.send(videoGame);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
