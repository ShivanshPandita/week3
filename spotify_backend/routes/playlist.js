const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

const router = express.Router();

// Route 1: Create a playlist
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const currentUser = req.user;
      const { name, thumbnail, songs } = req.body;

      if (!name || !thumbnail || !songs) {
        return res.status(400).json({ err: "Insufficient Data" });
      }

      // Check for duplicate playlist name
      const existingPlaylist = await Playlist.findOne({ name, owner: currentUser._id });
      if (existingPlaylist) {
        return res.status(400).json({ err: "Playlist with this name already exists" });
      }

      const playlistData = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collaborators: [],
      };
      const playlist = await Playlist.create(playlistData);
      return res.status(200).json(playlist);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

// Route 2: Get a playlist by ID
router.get(
  "/get/playlist/:playlistID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const playlistID = req.params.playlistID;
      const playlist = await Playlist.findOne({ _id: playlistID });
      if (!playlist) {
        return res.status(404).json({ err: "Playlist not found" });
      }

      return res.status(200).json(playlist);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

// Route 3: Get all playlists by an artist
router.get(
  "/get/artist/:artistID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const artistID = req.params.artistID;

      const artist = await User.findOne({ _id: artistID });
      if (!artist) {
        return res.status(404).json({ err: "Invalid Artist ID" });
      }

      const playlists = await Playlist.find({ owner: artistID });
      return res.status(200).json({ data: playlists });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

// Route 4: Add a song to a playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const currentUser = req.user;
      const { playlistID, songID } = req.body;

      // Check if the playlist exists
      const playlist = await Playlist.findOne({ _id: playlistID });
      if (!playlist) {
        return res.status(404).json({ err: "Playlist does not exist" });
      }

      // Check if the current user is allowed to modify the playlist
      if (
        !playlist.owner.equals(currentUser._id) &&
        !playlist.collaborators.includes(currentUser._id)
      ) {
        return res.status(403).json({ err: "Not allowed" });
      }

      // Check if the song exists
      const song = await Song.findOne({ _id: songID });
      if (!song) {
        return res.status(404).json({ err: "Song does not exist" });
      }

      // Add the song to the playlist
      playlist.songs.push(songID);
      await playlist.save();

      return res.status(200).json(playlist);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ err: "Internal Server Error" });
    }
  }
);

module.exports = router;
