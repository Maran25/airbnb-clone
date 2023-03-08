import { infoCard } from "@/assets/Datas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import Maps from "@/components/Maps";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

function search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfUsers } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfUsers}`} />

      <main className="flex">
        <section className="flex-grow px-6 py-14">
          <p>
            300+ stays {range} for {noOfUsers} number of guests
          </p>
          <h1 className="text-4xl font-semibold mt-4">Stay in {location}</h1>

          <div className="hidden lg:inline-flex space-x-3 whitespace-nowrap text-gray-800">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div>
            {infoCard.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
                star={item.star}
                long={item.long}
                total={item.total}
                lat={item.lat}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
