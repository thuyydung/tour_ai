import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  Star,
  MapPin,
  Search,
  Coffee,
  Wifi,
  Waves,
} from "lucide-react";

const Hotel = () => {
  const navigate = useNavigate();

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const hotels = [
    {
      id: 1,
      name: "Vinpearl Resort Hạ Long",
      location: "Hạ Long",
      price: 320,
      rating: 4.9,
      reviews: 1240,
      stars: 5,
      tags: ["Vịnh biển", "Buffet sáng"],
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },

    {
      id: 2,
      name: "Lotte Hotel Hà Nội",
      location: "Hà Nội",
      price: 280,
      rating: 4.8,
      reviews: 980,
      stars: 5,
      tags: ["View thành phố", "Spa"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },

    {
      id: 3,
      name: "Rex Hotel Sài Gòn",
      location: "Hồ Chí Minh",
      price: 250,
      rating: 4.7,
      reviews: 1400,
      stars: 5,
      tags: ["Trung tâm", "Hồ bơi"],
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },

    {
      id: 4,
      name: "JW Marriott Phú Quốc",
      location: "Phú Quốc",
      price: 450,
      rating: 4.9,
      reviews: 1800,
      stars: 5,
      tags: ["Biển riêng", "Resort"],
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },

    {
      id: 5,
      name: "Mercure Bana Hills",
      location: "Bà Nà Hills",
      price: 300,
      rating: 4.6,
      reviews: 760,
      stars: 4,
      tags: ["Núi", "Cáp treo"],
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    },

    {
      id: 6,
      name: "Hotel de la Coupole",
      location: "Fansipan",
      price: 340,
      rating: 4.8,
      reviews: 920,
      stars: 5,
      tags: ["Sapa", "View núi"],
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },

    {
      id: 7,
      name: "Hoi An Ancient Hotel",
      location: "Hội An",
      price: 190,
      rating: 4.7,
      reviews: 860,
      stars: 4,
      tags: ["Phố cổ", "Đèn lồng"],
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
  ];

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const matchLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(hotel.location);

      const matchStars =
        selectedStars.length === 0 ||
        selectedStars.includes(hotel.stars);

      const matchSearch = hotel.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchLocation && matchStars && matchSearch;
    });
  }, [selectedLocations, selectedStars, searchQuery]);

  const handleToggle = (item, state, setState) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] px-20 2xl:px-32 py-12 font-sans">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Tìm khách sạn yêu thích của bạn
        </h1>

        <p className="text-gray-500 font-medium">
          {filteredHotels.length} KHÁCH SẠN
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[300px,1fr] gap-8 items-start">
        
        {/* SIDEBAR */}
        <aside className="sticky top-24 bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm">
          
          {/* TITLE */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Filters
            </h2>
          </div>

          {/* LOCATION */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-5">
              Destination
            </h3>

            <div className="space-y-4">
              {[
                "Hạ Long",
                "Hà Nội",
                "Hồ Chí Minh",
                "Phú Quốc",
                "Bà Nà Hills",
                "Fansipan",
                "Hội An",
              ].map((loc) => (
                <label
                  key={loc}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={() =>
                      handleToggle(
                        loc,
                        selectedLocations,
                        setSelectedLocations
                      )
                    }
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />

                  <span
                    className={`text-[15px] font-medium ${
                      selectedLocations.includes(loc)
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {loc}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* STARS */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">
              Hotel Rating
            </h3>

            <div className="space-y-4">
              {[5, 4, 3].map((star) => (
                <label
                  key={star}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(star)}
                    onChange={() =>
                      handleToggle(
                        star,
                        selectedStars,
                        setSelectedStars
                      )
                    }
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />

                  <div className="flex items-center gap-2">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-current"
                    />

                    <span className="text-[15px] font-semibold text-gray-700">
                      {star} Stars
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div>

          {/* SEARCH */}
          <div className="relative mb-8">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search hotel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-3xl py-4 pl-14 pr-5 text-base font-medium outline-none focus:border-blue-200 shadow-sm"
            />
          </div>

          {/* HOTEL CARDS */}
          <div className="flex flex-col gap-6">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col xl:flex-row"
                >

                  {/* IMAGE */}
                  <div className="relative xl:w-[300px] h-[220px] overflow-hidden shrink-0">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                      <Star
                        size={16}
                        className="text-yellow-400 fill-current"
                      />

                      <span className="font-bold text-sm">
                        {hotel.rating}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 p-6 flex flex-col justify-between">

                    <div>

                      {/* LOCATION */}
                      <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-wider text-[11px] mb-3">
                        <MapPin size={13} className="text-blue-600" />
                        {hotel.location}, Vietnam
                      </div>

                      {/* NAME */}
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
                        {hotel.name}
                      </h3>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {hotel.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* AMENITIES */}
                      <div className="flex flex-wrap gap-5 text-gray-500 text-sm">

                        <div className="flex items-center gap-2 font-medium">
                          <Wifi size={16} />
                          Wifi
                        </div>

                        <div className="flex items-center gap-2 font-medium">
                          <Coffee size={16} />
                          Breakfast
                        </div>

                        <div className="flex items-center gap-2 font-medium">
                          <Waves size={16} />
                          Pool
                        </div>
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">

                      <div>
                        <span className="text-2xl font-bold text-blue-600 tracking-tight">
                          ${hotel.price}
                        </span>

                        <span className="text-gray-400 font-semibold text-sm">
                          {" "} / night
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          navigate(`/booking/hotels/${hotel.id}`)
                        }
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:scale-105 active:scale-95 transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-[32px] border border-dashed border-gray-200 py-24 text-center">
                <p className="text-xl font-bold text-gray-400">
                  No hotels found.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;