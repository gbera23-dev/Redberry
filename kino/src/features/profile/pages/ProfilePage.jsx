import "./ProfilePage.css";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import useProfilePage from "../hooks/useProfilePage";
import ProfileTab from "../components/ProfileTab"
import InfoTab from "../components/InfoTab"
import TicketsTab from "../components/TicketsTab"

export default function ProfilePage() {
  const {activeTab, setActiveTab, form, setForm, ticketsData} = useProfilePage(); 

  return (
    <div className="profile-page">
      <Header />
    <main className="profile">
      <h1 className="profile__title">My Profile</h1>

      <ProfileTab 
      activate={setActiveTab}
      active={activeTab}
      count={ticketsData.length}
      />

      <InfoTab 
      form={form}
      setForm={setForm}
      active={activeTab}
      />

      <TicketsTab 
      active={activeTab}
      tickets={ticketsData}
      />
    </main>
    <Footer />
    </div>
  );
}