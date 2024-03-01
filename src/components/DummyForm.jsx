import React, { useState, useEffect } from "react";

function DummyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append("username", username);
  //     formData.append("password", password);

  //     console.log("Data:", formData.toString()); // Logging FormData object

  //     // fetch("http://192.168.1.247:7002/api/auth/login", {
  //     //   method: "POST",
  //     //   body: formData,
  //     // })
  //     //   .then((response) => {
  //     //     if (!response.ok) {
  //     //       throw new Error("Network response was not ok");
  //     //     }
  //     //     return response.json();
  //     //   })
  //     //   .then((data) => {
  //     //     console.log("Response:", data);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error("Error:", error);
  //     //   });
  //   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(username);
  //   // fetch("http://192.168.1.247:7002/api/auth/login", {
  //   //   method: "POST",
  //   //   body: username,
  //   // })
  //   //   .then((response) => {
  //   //     if (!response.ok) {
  //   //       throw new Error("Network response was not ok");
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => {
  //   //     console.log("Response hapa:", data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error hapa:", error);
  //   //   });
  //   fetch("http://192.168.1.247:7002/latest-news", {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       console.log(res.body);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.247:7002/latest-news", {
      method: "GET",
    })
      .then((res) => {
        // Check if the response is successful
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response body as JSON
        return res.json();
      })
      .then((data) => {
        const jsonResponse = data.data;
        console.log("Data received:", jsonResponse);
      })
      .catch((err) => {
        // Log any errors that occur during the request
        console.error("Error:", err);
      });
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();

    const url = "http://192.168.1.247:7002/api/auth/register";
    const userData = {
      username: "john doe",
    };
    console.log(userData);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(userData), // Convert data to JSON string
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div>
      <form
        className="flex border border-slate-200 rounded-xl w-[400px]"
        aria-label="simple-form"
        // onSubmit={handleSubmit}
        // method="POST"
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 bg-transparent outline-none text-white"
            value={username}
            //   onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 bg-transparent outline-none text-white"
            value={password}
            //   onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="flex-shrink-0 p-3 font-bold text-white bg-blue-500 rounded-xl"
          onClick={handleSubmitPost}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DummyForm;

// import React, { useState } from "react";
// import axios from "axios";
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://192.168.1.247:7002/api/auth/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         // Handle successful registration
//         console.log("Registration successful!");
//       } else {
//         // Handle registration failure
//         console.error("Registration failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const postData = async (e) => {
//     e.preventDefault();
//     const userData = {
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       age: 30,
//     };

//     try {
//         const response = await axios.post("http://localhost:3000/api/data", userData);
//         console.log("Response:", response.data);
//     //   const res = await axios.get("http://localhost:3000/");
//     //   console.log(res.data);
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <form onSubmit={postData}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit" className="bg-red-400">
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
