import React, { useState } from "react";
import RecordSearch from "../RecordSearch/RecordSearch";
import PatientRecords from "../PatientRecords/PatientRecords";
import TabBar from "../BottomNavigation/TabBar";
import HeaderBar from "../HeaderBar/HeaderBar";

const Navigation = () => {
  const [navPage, setNavPage] = useState({
    recordsPage: true,
    dosesPage: false,
    testsPage: false,
  });

  return (
    <>
      <HeaderBar page={navPage} />
      {navPage.recordsPage && 
        <>
          <RecordSearch page={navPage}/>
          <PatientRecords/>
        </>
      }
      <TabBar page={navPage} setPage={setNavPage}/>

    </>
  );
};

export default Navigation;

//   const renderPages = () => {
//     if (navPage.recordsPage) {
//       return (
//         <>
//           <HeaderBar />

//           <TabBar></TabBar>
//         </>
//       );
//     } else if (navPage.dosesPage) {
//       return (
//         <>
//           <HeaderBar />
//           <RecordSearch></RecordSearch>
//           <PatientRecords></PatientRecords>
//           <TabBar></TabBar>
//         </>
//       );
//     } else if (navPage.testsPage) {
//       return (
//         <>
//           <HeaderBar />
//           <RecordSearch></RecordSearch>
//           <PatientRecords></PatientRecords>
//           <TabBar></TabBar>
//         </>
//       );
//     }
//   };
