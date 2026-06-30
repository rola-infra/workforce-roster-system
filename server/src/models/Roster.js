import mongoose from 'mongoose';

const rosterSchema = new mongoose.Schema(
  {
    periodStart: {
      type: Date,
      required: true,
    },

    periodEnd: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ['active', 'soft_deleted'],
      default: 'active',
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true,
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
      required: true,
    },

    sourceFileName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
  },
);

rosterSchema.index({ periodStart: 1, periodEnd: 1 });
rosterSchema.index({ status: 1 });

const Roster = mongoose.model('Roster', rosterSchema);

export default Roster;
