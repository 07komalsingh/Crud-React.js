import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, email, work, add, mobile, desc, age } = inpval;
         console.log(name, email, work, add, mobile, desc, age);

        if (name === "") {
            alert("name is required")
        } else if (email === "") {
            alert("email is required")
        } else if (!email.includes("@")) {
            alert("enter valid email")
        } else if (work === "") {
            alert("work is required")
        } else if (add === "") {
            alert("add is required")
        } else if (mobile === "") {
            alert("mobile is required")
        } else if (age === "") {
            alert("age is required")
        } else {

            
            const res = await fetch("http://localhost:8001/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, work, add, mobile, desc, age
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("error ");
                alert("error");

            } else {
                history.push("/")
                setUdata(data)
                console.log("data added");

            }
        }

    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;







//hjjkkkkknnbb








// import React, { useContext, useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
// import { adddata } from './context/ContextProvider';

// const Register = () => {
//     const { udata, setUdata } = useContext(adddata);
//     const history = useHistory();

//     const [inpval, setINP] = useState({
//         name: "",
//         email: "",
//         age: "",
//         mobile: "",
//         work: "",
//         add: "",
//         desc: ""
//     });

//     const setdata = (e) => {
//         const { name, value } = e.target;
//         setINP((preval) => ({
//             ...preval,
//             [name]: value
//         }));
//     };

//     const addinpdata = async (e) => {
//         e.preventDefault();
//         const { name, email, work, add, mobile, desc, age } = inpval;

//         if (!name) {
//             alert("Name is required");
//             return;
//         } else if (!email) {
//             alert("Email is required");
//             return;
//         } else if (!email.includes("@")) {
//             alert("Enter a valid email");
//             return;
//         } else if (!work) {
//             alert("Work is required");
//             return;
//         } else if (!add) {
//             alert("Address is required");
//             return;
//         } else if (!mobile) {
//             alert("Mobile is required");
//             return;
//         } else if (!age) {
//             alert("Age is required");
//             return;
//         }

//         try {
//             const res = await fetch("http://localhost:8001/create", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ name, email, work, add, mobile, desc, age })
//             });

//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }

//             const data = await res.json();
//             setUdata(data);
//             history.push("/");
//             console.log("Data added: ", data);
//         } catch (error) {
//             console.error("Request failed: ", error);
//             alert(`An error occurred: ${error.message}`);
//         }
//     };

//     return (
//         <div className="container">
//             <NavLink to="/">Home</NavLink>
//             <form className="mt-4" onSubmit={addinpdata}>
//                 <div className="row">
//                     {Object.keys(inpval).map((key) => (
//                         <div className={`mb-3 col-lg-6 col-md-6 col-12`} key={key}>
//                             <label htmlFor={`input-${key}`} className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                             {key === "desc" ? (
//                                 <textarea
//                                     name={key}
//                                     value={inpval[key]}
//                                     onChange={setdata}
//                                     className="form-control"
//                                     id={`input-${key}`}
//                                     cols="30"
//                                     rows="5"
//                                 ></textarea>
//                             ) : (
//                                 <input
//                                     type={key === "email" ? "email" : key === "mobile" || key === "age" ? "number" : "text"}
//                                     name={key}
//                                     value={inpval[key]}
//                                     onChange={setdata}
//                                     className="form-control"
//                                     id={`input-${key}`}
//                                 />
//                             )}
//                         </div>
//                     ))}
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register;
