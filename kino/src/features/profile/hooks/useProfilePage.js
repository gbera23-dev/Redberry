import {useState} from "react"
import { userProfileRes } from "../../../shared/services/authService";

export default function useProfilePage() {
   const [activeTab, setActiveTab] = useState("info");

   const [form, setForm] = useState({
     fullName: "",
     email: userProfileRes?.data?.email ?? "no email",
     mobile: "",
     dob: "",
     venue: "",
   });
   return {activeTab, setActiveTab, form, setForm};
}