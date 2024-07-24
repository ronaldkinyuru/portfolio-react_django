import React, { useState, useEffect, Fragment } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const mockPatientData = [
  { id: 1, image: 'https://via.placeholder.com/50', name: 'John Doe' },
  { id: 2, image: 'https://via.placeholder.com/50', name: 'Jane Smith' },
  { id: 3, image: 'https://via.placeholder.com/50', name: 'Sam Johnson' },
  { id: 4, image: 'https://via.placeholder.com/50', name: 'Chris Lee' },
  { id: 5, image: 'https://via.placeholder.com/50', name: 'Patricia Brown' },
  { id: 6, image: 'https://via.placeholder.com/50', name: 'Michael Davis' },
  { id: 7, image: 'https://via.placeholder.com/50', name: 'Jessica Wilson' },
  { id: 8, image: 'https://via.placeholder.com/50', name: 'David Harris' },
  { id: 9, image: 'https://via.placeholder.com/50', name: 'Sarah Clark' },
  { id: 10, image: 'https://via.placeholder.com/50', name: 'Daniel Martinez' },
];

const mockTrendsData = [
  { date: '2024-04-27', count: 3 },
  { date: '2024-04-28', count: 4 },
  { date: '2024-04-29', count: 2 },
  { date: '2024-04-30', count: 5 },
  { date: '2024-05-01', count: 6 },
  { date: '2024-05-02', count: 4 },
  { date: '2024-05-03', count: 5 },
  { date: '2024-05-04', count: 3 },
  { date: '2024-05-05', count: 4 },
  { date: '2024-05-06', count: 6 },
  { date: '2024-05-07', count: 7 },
  { date: '2024-05-08', count: 5 },
  { date: '2024-05-09', count: 4 },
  { date: '2024-05-10', count: 6 },
  { date: '2024-05-11', count: 5 },
  { date: '2024-05-12', count: 4 },
  { date: '2024-05-13', count: 3 },
  { date: '2024-05-14', count: 4 },
  { date: '2024-05-15', count: 6 },
  { date: '2024-05-16', count: 7 },
  { date: '2024-05-17', count: 6 },
  { date: '2024-05-18', count: 5 },
  { date: '2024-05-19', count: 4 },
  { date: '2024-05-20', count: 5 },
  { date: '2024-05-21', count: 6 },
  { date: '2024-05-22', count: 4 },
  { date: '2024-05-23', count: 3 },
  { date: '2024-05-24', count: 5 },
  { date: '2024-05-25', count: 6 },
  { date: '2024-05-26', count: 7 },
];

function ReviewedPatients() {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;

  useEffect(() => {
    // Fetch list of reviewed patients when the component mounts
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    // Simulate fetching data from backend
    setPatients(mockPatientData);
  };

  // Calculate the number of pages
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  // Get the patients for the current page
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

  // Navigate to a specific page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      <h2 style={{ marginBottom: "1vw", color: "#c00100" }}>Reviewed Patients</h2>
      <div style={{ width: "100%", marginBottom: "2vw" }}>
        <ResponsiveContainer width="90%" height={250}>
          <LineChart data={mockTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#0f0" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  
      <div style={{ display: "flex", flexDirection: "row", width: "100%", gap: "1vw" }}>
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "2vw",
            boxShadow: "0px 0px 2vw 0px rgba(0, 0, 0, 0.75)",
            margin: "1vw",
            padding: "1vw",
          }}
        >
         
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: "1vh" }}>Image</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "1vh" }}>Name</th>
                <th style={{ borderBottom: "1px solid #ccc", padding: "1vh" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((patient) => (
                <tr key={patient.id}>
                  <td style={{ padding: "1vh", textAlign: "center" }}>
                    <img src={patient.image} alt={patient.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                  </td>
                  <td style={{ padding: "1vh", textAlign: "center" }}>{patient.name}</td>
                  <td style={{ padding: "1vh", textAlign: "center" }}>
                    <button
                      style={{
                        padding: "0.5vh 1vw",
                        backgroundColor: "#c00100",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      View Patient Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "2vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  margin: "0 0.5vw",
                  padding: "0.5vh 1vw",
                  backgroundColor: currentPage === index + 1 ? "#c00100" : "#ccc",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "2vw",
            boxShadow: "0px 0px 2vw 0px rgba(0, 0, 0, 0.75)",
            margin: "1vw",
            padding: "2vw",
            width: "25vw", // Adjusted width
            height: "70vh",
          }}
        >
          <h3
            style={{
              marginBottom: "1vw",
              backgroundColor: "#c00100",
              color: "#fff",
              width: "100%",
              height: "100%",
              textAlign: "center",
              padding: "1vh",
              borderRadius: "2vw",
            }}
          >
            Calendar
          </h3>
          <Calendar />
        </div>
      </div>
    </Fragment>
  );
}

export default ReviewedPatients;

