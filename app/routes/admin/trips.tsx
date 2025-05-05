import { Header } from "components";

const Trips = () => {
  return (
    <main>
      <Header
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a Trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default Trips;
