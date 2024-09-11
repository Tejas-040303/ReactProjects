import { useState } from "react"
import {useFormik} from 'formik'

// const validate = values => {
//   const errors = {};
//   if (!values.userName) {
//     errors.userName = 'user name required';
//   } 
  // else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less';
  // }

  // if (!values.lastName) {
  //   errors.lastName = 'Required';
  // } else if (values.lastName.length > 20) {
  //   errors.lastName = 'Must be 20 characters or less';
  // }

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

//   return errors;
// };

  // const formik = useFormik({
  //   initialValues: {
  //     userName: '',
  //     remarks: '',
  //     ratings: 5,
  //   },
  //   validate,
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    userName: "",
    remarks: "",
    ratings: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
    setFormData({
      userName: "",
      remarks: "",
      ratings: 5,
    });
  };
  return (
    <div>
      <h4>Write a Comment!</h4>
      {/* below is for validation */}
      {/* <form onSubmit={formik.handleSubmit}> */}
        {/* <label htmlFor="userName">UserName</label>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          id="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        {formik.errors.userName ? <div>{formik.errors.userName}</div> : null} */}
        {/* <label htmlFor="remarks">Remark</label>
        <textarea
          placeholder="add a few remarks"
          name="remarks"
          id="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        ></textarea> */}
        {/* <label htmlFor="ratings">Rating</label>
        <input
          type="number"
          placeholder="rating"
          name="ratings"
          id="ratings"
          min={1}
          max={5}
          value={formik.values.ratings}
          onChange={formik.handleChange}
        /> */}
        {/* below is without validation */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          id="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remark</label>
        <textarea
          placeholder="add a few remarks"
          name="remarks"
          id="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="ratings">Rating</label>
        <input
          type="number"
          placeholder="rating"
          name="ratings"
          id="ratings"
          min={1}
          max={5}
          value={formData.ratings}
          onChange={handleInputChange}
        />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
