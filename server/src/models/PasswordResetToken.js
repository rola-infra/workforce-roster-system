import mongoose from 'mongoose';

const passwordResetTokenSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  tokenHash: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  usedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PasswordResetToken = mongoose.model(
  'PasswordResetToken',
  passwordResetTokenSchema,
);
export default PasswordResetToken;
