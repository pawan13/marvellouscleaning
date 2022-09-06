import React from 'react'
import data from "../data.js";

export default function ServicesScreens() {
  return (
    <div>
      <main>
        <h1>Our Services</h1>
        <div className="services">
          {data.services.map((service) => (
            <div className="service" key={service.id}>
              {/* <a href={`/service/${service.id}`}> */}
                <img src={service.image} alt={service.name} />
              {/* </a> */}
              <div className="service-info">
                {/* <a href={`/service/${service.id}`}> */}
                  <strong>{service.name}</strong>
                {/* </a> */}
                <p>
                  <p>{service.description}</p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
