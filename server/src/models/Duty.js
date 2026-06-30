import mongoose from 'mongoose';

const dutySchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      trim: true,
    },

    rosterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roster',
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    dutyText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

dutySchema.index({ employeeId: 1, date: 1 });

dutySchema.index({ rosterId: 1 });

const Duty = mongoose.model('Duty', dutySchema);

export default Duty;
