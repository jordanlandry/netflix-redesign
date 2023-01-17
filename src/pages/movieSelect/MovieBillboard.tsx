import React, { useEffect, useRef, useState } from "react";
import useWidth from "../../hooks/useWidth";

interface BillboardType {
  id: string;
  title: string;
  poster: string;
  aspectRatio: number;
  titleImg: string;
  movieId: string;
}

// Would fetch from backend, but for this demo I'll just use a static list
export default function MovieBillboard() {
  const possibleBillboards: BillboardType[] = [
    {
      id: "1",
      title: "Django Unchained",
      poster:
        "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTIoyXxE4_-Ir7AeJ4xyRKaVTxxx6nMzojTDt75yhXm2R-Fm2y4AFp5B_EGpgV8oDqYWYFpkblZUfOs77oxgIIYie29eZNMauT8s.webp?r=5a2",
      aspectRatio: 16 / 9,
      titleImg:
        "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTeAfyLN5Fj8I2P8Ed0fHipOKJeHDu-i2NtTZJKGJV96fMgjSdUML70Evqjxj18OL2_MgmkcOhDnfKdz6n8FiCWIdde8hTOHh02xAEMm-kxj.webp?r=271",
      movieId: "18",
    },
  ];

  const width = useWidth();
  const outsidePadding = getComputedStyle(document.body).getPropertyValue("--outside-padding");
  const [billboard, setBillboard] = useState<BillboardType | null>(null);

  // Just pretend this is a fetch from the backend :)
  function getTodaysBillboard() {
    setBillboard(possibleBillboards[Math.floor(Math.random() * possibleBillboards.length)]);
  }

  useEffect(() => {
    getTodaysBillboard();
  }, []);

  return (
    <div>
      {billboard ? (
        <>
          <div
            style={{
              display: "flex",
              backgroundImage: `url(${billboard.poster})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100vw",
              height: `${width / billboard.aspectRatio}px`,
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginLeft: outsidePadding,
              }}
            >
              <img alt={billboard.title} src={billboard.titleImg} style={{ width: "35vw" }} />
              <div>
                <button>Play</button>
                <button>( i ) More Info</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{ width: "100vw" }}>loading...</div>
      )}
    </div>
  );
}
