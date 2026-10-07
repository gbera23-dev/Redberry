import "./SeatSelectionModal.css";
import useSeatSelections from "../hooks/useSeatSelections";
import SeatHeader from "../components/seatSelectionComponents/SeatHeader";
import SeatGrid from "../components/seatSelectionComponents/SeatGrid";
import SeatLegend from "../components/seatSelectionComponents/SeatLegend";
import SeatSidebar from "../components/seatSelectionComponents/SeatSidebar";
import CheckoutFields from "../components/seatSelectionComponents/CheckoutFields"


const POSSIBLE_TABS = {Seats : "SEATS", Checkout : "CHECKOUT"} 


export default function SeatSelectionModal({ movieDetails, onPay, onClose = () => console.log("closing")
 } ) {
  const {
    activeTab,
    setActiveTab,
    selectedSeats,
    toggleSeat,
    removeSeat,
    isSeatSold,
    isSeatHeldByOther,
    maxSeats,
    subTotal,
    canProceed,
    handleFormDataChange, 
  } = useSeatSelections();

  const title = movieDetails?.title || "THE ODYSSEY";
  const subtitle =
    movieDetails?.subtitle ||
    "Galleria Tbilisi · Hall B · Tuesday 15 September · 16:30 · Standard · Original + Subtitles";

  //temporary place for functions not written yet, will be later moved onto hooks calling service methods(which in turn send api calls)
  const canPay = true
  
  return (
    <div className="seat-overlay" onClick={onClose}>
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
              className={`seat-tab ${activeTab === POSSIBLE_TABS.Seats ? "seat-tab--active" : ""}`}
              onClick={() => setActiveTab(POSSIBLE_TABS.Seats )}
            >
              SEATS
            </button>
            <button
              type="button"
              className={`seat-tab ${activeTab === POSSIBLE_TABS.Checkout ? "seat-tab--active" : ""}`}
              onClick={() => setActiveTab(POSSIBLE_TABS.Checkout)}
            >
              CHECKOUT
            </button>
          </div>

          <div className="seat-screen">SCREEN</div>
          {activeTab==POSSIBLE_TABS.Seats && <SeatGrid
            selectedSeats={selectedSeats}
            toggleSeat={toggleSeat}
            isSeatSold={isSeatSold}
            isSeatHeldByOther={isSeatHeldByOther}
          />
          }
          {activeTab==POSSIBLE_TABS.Seats && <SeatLegend />
          }
          
          {activeTab==POSSIBLE_TABS.Checkout && <CheckoutFields
            onFormDataChange={handleFormDataChange}
          />
          }
          </div>
        <SeatSidebar
          selectedSeats={selectedSeats}
          maxSeats={maxSeats}
          subtotal={subTotal}
          canProceed={canProceed}
          onProceed={() => setActiveTab(POSSIBLE_TABS.Checkout)}
          canPay={canPay}
          onPay={onPay}
          onRemoveSeat={removeSeat}
          activeTab={activeTab}
          movieDetails={movieDetails}
        />
      </div>
    </div>
  );
}