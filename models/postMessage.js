import mongoose from 'mongoose';
const {Schema} = mongoose;

const postSchema = new Schema({
    author: String,
    title: String,
    post: String,
    file: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
