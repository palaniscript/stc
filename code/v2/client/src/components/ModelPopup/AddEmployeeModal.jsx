import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from 'formik'
import { axiosPost } from "../../axiosServices";

const AddEmployeeModal = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false)

  const createEmployee = async (values) => {
    setLoading(true);
    try {
      await axiosPost('/employee', values);
      setLoading(false);
      setShowModal(false);
    }
    catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      job: '',
      dateofjoining: '',
      image: ''
    },
    onSubmit: values => {
      createEmployee(values)

    },
  })
  return (
    <div className="modalContainer">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modalBox">
          <div className="modalHeader">
            <h2>New Employee Details</h2>
          </div>
          <div className="modalInner"

          >
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.firstname}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.lastname}
                />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">image</label>
              <input type="text" name="image"
                required
                onChange={formik.handleChange}
                values={formik.values.image}
              />
            </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.email}
                />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input type="text" name="phone"
                  required
                  onChange={formik.handleChange}
                  values={formik.values.phone}
                />
              </div>

            </div>
            <div className="input-box">
              <label htmlFor="">Job-position</label>
              <input type="text" name="job"
                required
                onChange={formik.handleChange}
                values={formik.values.job}
              />
            </div>
            <div className="input-box">
              <label htmlFor="">Date of Joining</label>
              <input type="date" name="dateofjoining"
                required
                onChange={formik.handleChange}
                values={formik.values.dateofjoining}
              />
            </div>
            <div className="modalFooter" style={{ display: 'inline-flex' }}>
              <button className="add-btn" type="submit">{loading ? 'Saving...' : 'Save Details'}</button>
              &nbsp;&nbsp;
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeModal;
