import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  actorId: {
    type: String,
    required: true,
  },
  actorType: {
    type: String,
    enum: ['employee', 'admin'],
    required: true,
  },
  action: {
    type: String,
    enum: [
      'DUTY_EDIT',
      'ROSTER_UPLOAD',
      'ROSTER_DELETE',
      'ROSTER_RESTORE',
      'EMPLOYEE_GRADE_CHANGE',
    ],
    required: true,
  },
  targetType: {
    type: String,
    enum: ['Duty', 'Roster', 'Employee'],
    required: true,
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  employeeIdAffected: {
    type: String,
    default: null,
  },
  oldValue: {
    type: String,
    default: null,
  },
  newValue: {
    type: String,
    default: null,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
export default AuditLog;
