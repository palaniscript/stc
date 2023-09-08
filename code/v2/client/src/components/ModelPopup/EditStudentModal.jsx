import React, { useState } from 'react'
import { useFormik } from 'formik'
import "./ModelPopup.css";
import { axiosPut } from "../../axiosServices";

const EditStudentModal = ({ stuById, setEditModal }) => {
    const { firstname, lastname, email, phone } = stuById;
    const [loading, setLoading] = useState(false);
    const handleEdit = async (values) => {
        setLoading(true);
        try {
            const res = await axiosPut(`/student/${stuById._id}`, values);
            setLoading(false);
            setEditModal(false);
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    const formik = useFormik({
        initialValues: {
            firstname,
            lastname,
            email,
            phone
        },
        onSubmit: values => {
            handleEdit(values)

        }
    })

    return (
        <div className="modalContainer">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="modalBox">
                    <div className="modalHeader">
                        <h2>Edit Student Details</h2>
                    </div>
                    <div className="modalInner"

                    >
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">First Name</label>
                                <input type="text" name="firstname"
                                    required
                                    defaultValue={firstname}
                                    onChange={formik.handleChange}
                                    values={formik.values.firstname}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="lastname"
                                    required
                                    defaultValue={lastname}
                                    onChange={formik.handleChange}
                                    values={formik.values.lastname}
                                />
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="input-box">
                                <label htmlFor="">Email Address</label>
                                <input type="email" name="email"
                                    required
                                    defaultValue={email}
                                    onChange={formik.handleChange}
                                    values={formik.values.email}
                                />
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Phone</label>
                                <input type="text" name="phone"
                                    required
                                    defaultValue={phone}
                                    onChange={formik.handleChange}
                                    values={formik.values.phone}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modalFooter">
                        <button className="add-btn" type="submit">{loading ? 'Editing' : 'Edit and Save'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditStudentModal;