import { setLoading } from "../../redux/slices/authSlice";
import { apiConnector } from "../apiConnector"
import toast from "react-hot-toast";



export const getAllUsers = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {

    const response = await apiConnector("GET", "http://localhost:4000/users/getAllUsers")

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }

    console.log("Get ALL Users API response......",response);

    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const updateUserDetails = async (id, firstName, lastName, email) => {
    const toastId = toast.loading("Loading...");
    setLoading(true);

    try {
        // console.log(firstName, lastName, email);
        const response = await apiConnector(
            "PUT",
            "http://localhost:4000/users/updateUser",
            {
                id,firstName,lastName,email
            }
        )

        if (!response?.data?.success) {
            throw new Error("Could Not Update user details")
        }
      
        console.log("Update User Details API response......",response);
    }
    catch(error) {
        console.log("Update User API ERROR............", error)
        toast.error(error.message)
    }

    toast.dismiss(toastId);
    setLoading(false);
}

export const deleteProfile = async (id) => {
    const toastId = toast.loading("Loading...");
    setLoading(true);

    try {
        const response = await apiConnector(
          "PUT",
          "http://localhost:4000/users/deleteUser",
          {
              id
          }
        )

        if (!response?.data?.success) {
            throw new Error("Could Not Delete user")
        }

        console.log("Delete User API response......",response);
    }
    catch(error) {
      console.log("Delete User API ERROR............", error)
      toast.error(error.message)
    }

    toast.dismiss(toastId);
    setLoading(false);
}