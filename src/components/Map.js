export default function Map() {
    return (
      <div className="map-container flex justify-center">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=DKTE%20Society's%20Textile%20&amp;%20Engineering%20Institute%20(An%20Empowered%20Autonomous%20Institute)+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="w-100 h-100"
          style={{ border: 0 }}
        ></iframe>
      </div>
    );
  }
  