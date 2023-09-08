import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { axiosGet } from "../axiosServices";
import EmployeeCard from "../components/Cards/EmployeeCard";
import EditEmployeeModal from "../components/ModelPopup/EditEmployeeModal";
import AddEmployeeModal from "../components/ModelPopup/AddEmployeeModal";
import "./Employees.css";

const Employees = ({ setEmployeeId }) => {
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [empById, setEmpById] = useState([]);
    const [reRender, setReRender] = useState(false);

    const getAllEmployee = async () => {
        try {
            const res = await axiosGet('/employee')
            setEmployees(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const getEmployeeById = async (id) => {
        try {
            const res = await axiosGet(`/employee/${id}`);
            setEmpById(res.data);
            setEditModal(true);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleEdit = async (id) => {
        getEmployeeById(id);        
    }

    const handleReRender = () => {
        setReRender(true);
    }

    useEffect(() => {
        getAllEmployee();
    }, [showModal, editModal, reRender])
    return (
        <>
            {
                showModal && <AddEmployeeModal setShowModal={setShowModal} />
            }
            {
                editModal && <EditEmployeeModal setEditModal={setEditModal} empById={empById} />
            }

            <main className="mainContainer">
                <div className="mainWrapper">
                    <h1>
                        Employees <span className="emp-count">{employees.length}</span>
                    </h1>
                    <div className="employeeHeader">
                        <div className="searchBox">
                        </div>
                        <button className="add-btn"
                            onClick={() => setShowModal(true)}
                        ><IoMdAdd size="20" color="#fffff" />Add Employee</button>
                    </div>
                    <div className="employees">
                        {
                            employees && employees.map((emp) => {
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

export default Employees;