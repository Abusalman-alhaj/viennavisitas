import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true },
    project_type: { type: String, required: true, minlength: 2, maxlength: 120 },
    message: { type: String, required: true, minlength: 10, maxlength: 2000 },
    created_at: { type: Date, default: () => new Date() },
  },
  { _id: false }
);

export default mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", ContactMessageSchema);
