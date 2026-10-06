import { useState } from "react";


export default function useMoviePage() {
      const [selectedSession, setSelectedSession] = useState(null);
    
      const handleOpenModal = (sessionInfo) => {
        setSelectedSession(sessionInfo);
      };
    
      const handleCloseModal = () => {
        setSelectedSession(null);
      };
      
      return {
        selectedSession, handleOpenModal, handleCloseModal
      }
}