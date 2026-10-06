import "./SeatSelectionModal.css";
import useSeatSelections from "../hooks/useSeatSelections";
import SeatHeader from "../components/SeatHeader";
import SeatGrid from "../components/SeatGrid";
import SeatLegend from "../components/SeatLegend";
import SeatSidebar from "../components/SeatSidebar";
import CheckoutFields from "../components/CheckoutFields"


const POSSIBLE_TABS = {"Seats" : "SEATS", "Checkout" : "CHECKOUT"} 

export default function SeatSelectionModal({ movieDetails }) {
  const {
    activeTab,
    setActiveTab,
    selectedSeats,
    toggleSeat,
    removeSeat,
    isSeatSold,
    isSeatHeldByOther,
    maxSeats,
    subtotal,
    canProceed,
    handleFormDataChange, 
  } = useSeatSelections();


  const title = movieDetails?.title || "THE ODYSSEY";
  const subtitle =
    movieDetails?.subtitle ||
    "Galleria Tbilisi · Hall B · Tuesday 15 September · 16:30 · Standard · Original + Subtitles";

  const closeModal = () => {console.log("Closing modal")}

  return (
    <div className="seat-overlay" onClick={closeModal}>
      <div
        className="seat-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="seat-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="seat-modal__main">
          <SeatHeader title={title} subtitle={subtitle} />

          <div className="seat-tabs">
            <button
              type="button"
              className={`seat-tab ${activeTab === "SEATS" ? "seat-tab--active" : ""}`}
              onClick={() => setActiveTab("SEATS")}
            >
              SEATS
            </button>
            <button
              type="button"
              className={`seat-tab ${activeTab === "CHECKOUT" ? "seat-tab--active" : ""}`}
              onClick={() => setActiveTab("CHECKOUT")}
            >
              CHECKOUT
            </button>
          </div>

          <div className="seat-screen">SCREEN</div>
          {activeTab=="SEATS" && <SeatGrid
            selectedSeats={selectedSeats}
            toggleSeat={toggleSeat}
            isSeatSold={isSeatSold}
            isSeatHeldByOther={isSeatHeldByOther}
          />
          }
          {activeTab=="SEATS" && <SeatLegend />
          }
          
          {activeTab=="CHECKOUT" && <CheckoutFields
            handleFormDataChange
          />
          }
          </div>

        <SeatSidebar
          selectedSeats={selectedSeats}
          maxSeats={maxSeats}
          subtotal={subtotal}
          canProceed={canProceed}
          onProceed={() => setActiveTab("CHECKOUT")}
          onRemoveSeat={removeSeat}
        />
      </div>
    </div>
  );
}