import {useState} from "react"


export default function useProfilePage() {
   const [activeTab, setActiveTab] = useState("info");
   const [form, setForm] = useState({
     fullName: "",
     email: "",
     mobile: "",
     dob: "",
     venue: "",
   });
   return {activeTab, setActiveTab, form, setForm};
}