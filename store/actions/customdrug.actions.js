import * as FileSystem from 'expo-file-system'

export const ADD_IMAGE = 'ADD_IMAGE'

export const addCustomDrug = (drugInfo, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })
        } catch (err) {
            console.log(err);
            throw err
        }

        dispatch({type: ADD_IMAGE, payload: {

        }})
    }
}