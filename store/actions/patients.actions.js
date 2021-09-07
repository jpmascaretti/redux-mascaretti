export const SAVE_PATIENT = 'SAVE_PATIENT';

export const savePatient = (inputPatientRecord) => ({
    type: SAVE_PATIENT,
    record: inputPatientRecord,
})
