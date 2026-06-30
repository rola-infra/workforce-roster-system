import mongoose from 'mongoose';

const emailVerificationTokenSchema = new mongoose.Schema({
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

const EmailVerificationToken = mongoose.model(
  'EmailVerificationToken',
  emailVerificationTokenSchema,
);
export default EmailVerificationToken;
