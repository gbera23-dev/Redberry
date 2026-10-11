import "./ProfilePage.css";
import Header from "../../home/components/Header"
import Footer from "../../home/components/Footer"
import useProfilePage from "../hooks/useProfilePage";
import ProfileTab from "../components/ProfileTab"
import InfoTab from "../components/InfoTab"
import TicketsTab from "../components/TicketsTab"


export default function ProfilePage({ whichTab }) {
  const tab = whichTab ? whichTab : (window.location.pathname.endsWith("tickets") ? "tickets" : "info");
  const {activeTab, setActiveTab, form, setForm, ticketsData, goToProfilePage} = useProfilePage({ whichTab:tab }); 

  return (
    <div className="profile-page">
      <Header />
    <main className="profile">
      <h1 className="profile__title">My Profile</h1>

      <ProfileTab 
      activate={(tab) => {setActiveTab(tab); goToProfilePage(tab);}}
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