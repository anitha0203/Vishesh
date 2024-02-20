import React from "react";
import "./WorkFlows.css";

export default function WorkFlows() {
  return (
    <>
     
      <section className="accordion">
     
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4>Discover</h4>
            </div>
            <div>
              <h4>01</h4>
            </div>
          </div>

          <div>
            <p className="accordion-item-content">Content for section 1</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4>Design</h4>
            </div>
            <div>
              <h4>02</h4>
            </div>
          </div>

          <div>
            <p className="accordion-item-content">Content for section 2</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4>Develop</h4>
            </div>
            <div>
              <h4>03</h4>
            </div>
          </div>

          <div>
            <p className="accordion-item-content">Content for section 3</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4>Deliver</h4>
            </div>
            <div>
              <h4>04</h4>
            </div>
          </div>

          <div>
            <p className="accordion-item-content">Content for section 4</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4>Support</h4>
            </div>
            <div>
              <h4>05</h4>
            </div>
          </div>

          <div>
            <p className="accordion-item-content">Content for section 5</p>
          </div>
        </section>
      </section>
    </>
  );
}
