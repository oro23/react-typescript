// import axios from "axios";

// // Function to refresh the user data based on the current token
// const refreshUserData = async (token: string) => {
//   try {
//     const response = await axios.get("/api/user", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     // Update user context with new data
//     setUser(response.data.user);
//     setRoles(response.data.roles);
//   } catch (error) {
//     console.error("Failed to refresh user data", error);
//   }
// };
