import { useState } from "react";
import "./ProfilePage.css";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import useProfilePage from "../hooks/useProfilePage";

export default function ProfilePage({ ticketCount = 2 }) {
  const {activeTab, setActiveTab, form, setForm} = useProfilePage(); 

  return (
    <div className="profile-page">
      <Header />
    <main className="profile">
      <h1 className="profile__title">My Profile</h1>

      {/* Will slowly add each component */}
      <ProfileTab />

      <infoTab 
      active={activeTab}
      />

      <ticketsTab 
      active={activeTab}
      />
    </main>
    <Footer />
    </div>
  );
}