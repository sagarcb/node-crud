import mongoose from "mongoose";

const busSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter bus name"]
        },
        time: {
            type: String,
            required: [true, "Please select departure time"]
        },
        route: {
            type: String,
            required: [true, "Route is required"]
        }
    },
    {
        timestamps: true
    }
)

const Bus = mongoose.model('Bus', busSchema)

export default Bus
