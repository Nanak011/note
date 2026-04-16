import mongoose from "mongoose";

// create schema, model base of schema

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const Note =  mongoose.model("Note", notesSchema);

export default Note;