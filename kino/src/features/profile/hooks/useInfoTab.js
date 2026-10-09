
import { userProfileRes } from "../../../shared/services/authService";
import { updateProfile } from "../../../shared/services/profileService";

export default function useInfoTab({form, setForm}) {
    
    const clearForm = () => {
        setForm({
          fullName: "",
          email: userProfileRes?.data?.email ?? "no email",
          mobile: "",
          dob: "",
          venue: ""
        })
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    const saveChanges = async () => {
      try {
        await updateProfile(form);
      } catch(err) {
        console.log("error message placeholder")
        console.log(err)
      } 
      finally {
        clearForm()
      }
    }
    return {handleChange, handleSubmit, saveChanges, clearForm}
}