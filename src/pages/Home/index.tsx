import { useMemo } from "react";
import Header from "../../components/Header";
import rentalService from "../../services/rental";
import PageContainer from "../../components/PageContainer";
import RentalRow from "../../components/RentalRow";
import MobileNavbar from "../../components/MobileNavbar";

export default function HomePage() {
  const rentalsData = useMemo(() => rentalService.getAvailableRentals(), []);

  return (
    <>
      <Header />

      <PageContainer>
        <RentalRow.Root data={rentalsData} />
      </PageContainer>

      <MobileNavbar />
    </>
  );
}
