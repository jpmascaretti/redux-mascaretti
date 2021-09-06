import React from 'react'
import { SafeAreaView } from 'react-native'
import RecordSearch from '../RecordSearch/RecordSearch'
import PatientRecords  from '../PatientRecords/PatientRecords'

export default function Records () {
    return (
        <SafeAreaView>
          <RecordSearch/>
          <PatientRecords />
        </SafeAreaView>
    )
}
