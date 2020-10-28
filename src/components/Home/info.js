import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
             Every book is filled with adventures. We love animals, so most of the books have animals in them. In the space story, you get to meet a space boy and his adventures to earth to meet kids on earth.about-background
            </p>
            <Link to="/about/">
                +
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}