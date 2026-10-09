import { useState, useEffect } from "react"
import { userProfileRes } from "../../../shared/services/authService";
import { getTickets } from "../../../shared/services/ticketsService";

export default function useProfilePage({ whichTab }) {
   const [activeTab, setActiveTab] = useState(whichTab);
   const [ticketsData, setTicketsData] = useState(""); 

     useEffect(() => {
       async function fetchTicketsData() {
         try {
           const res = await getTickets();
           console.log("res???")
           console.log(res)
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
   return {activeTab, setActiveTab, form, setForm, ticketsData};
}