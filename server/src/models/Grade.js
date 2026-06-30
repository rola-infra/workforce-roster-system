import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema(
  {
    gradeCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
  },
  { timestamps: true },
);

const Grade = mongoose.model('Grade', gradeSchema);
export default Grade;
