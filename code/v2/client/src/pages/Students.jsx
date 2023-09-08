import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { axiosGet } from "../axiosServices";
import EmployeeCard from "../components/Cards/EmployeeCard";
import EditStudentModal from "../components/ModelPopup/EditStudentModal";
import AddStudentModal from "../components/ModelPopup/AddStudentModal";
import "./Employees.css";

const Students = ({ setStudentId }) => {
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [students, setStudents] = useState([]);
    const [stuById, setStuById] = useState([]);
    const [reRender, setReRender] = useState(false);

    const getAllStudents = async () => {
        try {
            const res = await axiosGet('/student')
            setStudents(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const getStudentById = async (id) => {
        try {
            const res = await axiosGet(`/student/${id}`);
            setStuById(res.data);
            setEditModal(true);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleEdit = async (id) => {
        getStudentById(id);        
    }

    const handleReRender = () => {
        setReRender(true);
    }

    useEffect(() => {
        getAllStudents();
    }, [showModal, editModal, reRender])
    return (
        <>
            {
                showModal && <AddStudentModal setShowModal={setShowModal} />
            }
            {
                editModal && <EditStudentModal setEditModal={setEditModal} stuById={stuById} />
            }

            <main className="mainContainer">
                <div className="mainWrapper">
                    <h1>
                        Students <span className="emp-count">{students.length}</span>
                    </h1>
                    <div className="employeeHeader">
                        <div className="searchBox">
                        </div>
                        <button className="add-btn"
                            onClick={() => setShowModal(true)}
                        ><IoMdAdd size="20" color="#fffff" />Add Student</button>
                    </div>
                    <div className="employees">
                        {
                            students && students.map((emp) => {
                                return <div key={emp._id}>
                                    <EmployeeCard
                                        empData={emp}
                                        handleEdit={handleEdit}
                                        handleReRender={handleReRender} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Students;