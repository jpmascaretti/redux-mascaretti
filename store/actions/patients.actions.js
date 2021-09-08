export const SAVE_PATIENT = "SAVE_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

export const savePatient = (inputPatientRecord) => ({
  type: SAVE_PATIENT,
  record: inputPatientRecord,
});

export const deletePatient = (todeleteRecord) => ({
  type: DELETE_PATIENT,
  record: todeleteRecord,
});
