import mongoose from 'mongoose';
const {Schema} = mongoose;

const animSchema = new Schema({
    bigCircleColor: String,
    closeBtnText: String,
    reloadBtnText: String,
    smallCircleColor: String,
    startBtnText: String,
    stopBtnText: String,
    textureUrl: String,
    bigCircleRadius: String,
    smallCircleRadius: String
});

const animation = mongoose.model('animation', animSchema);

export default animation;
