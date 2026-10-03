import "./ProfilePage.css";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import useProfilePage from "../hooks/useProfilePage";
import ProfileTab from "../components/ProfileTab"
import InfoTab from "../components/InfoTab"
import TicketsTab from "../components/TicketsTab"

export default function ProfilePage({ ticketCount = 2 }) {
  const {activeTab, setActiveTab, form, setForm} = useProfilePage(); 

  return (
    <div className="profile-page">
      <Header />
    <main className="profile">
      <h1 className="profile__title">My Profile</h1>

      <ProfileTab 
      activate={setActiveTab}
      active={activeTab}
      count={ticketCount}
      />

      <InfoTab 
      form={form}
      setForm={setForm}
      active={activeTab}
      />

      <TicketsTab 
      active={activeTab}
      />
    </main>
    <Footer />
    </div>
  );
}