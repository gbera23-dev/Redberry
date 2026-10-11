import { useState, useEffect } from "react"
import { userProfileRes } from "../../../shared/services/authService";
import { getTickets } from "../../../shared/services/ticketsService";
import { useNavbar } from "../../../shared/navigation/Navbar"


export default function useProfilePage({ whichTab }) {
   const [activeTab, setActiveTab] = useState(whichTab);
   const [ticketsData, setTicketsData] = useState(""); 

   const { goToProfilePage } = useNavbar() 

     useEffect(() => {
       async function fetchTicketsData() {
         try {
           const res = await getTickets();
           setTicketsData(res)

         } catch (err) {
          console.log("err")
          console.log(err)
         }
       }
   
       fetchTicketsData();
     }, [activeTab]);

   const [form, setForm] = useState({
     fullName: "",
     email: userProfileRes?.data?.email ?? "no email",
     mobile: "",
     dob: "",
     venue: "",
   });
   return {activeTab, setActiveTab, form, setForm, ticketsData, goToProfilePage};
}