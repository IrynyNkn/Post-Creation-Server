import PostMessage from "../models/postMessage.js";
import animation from "../models/animation.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try{
        const postMessages = await animation.find();
        res.status(200).json(postMessages);
    }catch (error){
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: 'Post deleted successfully' });
}
