import React, { useEffect } from "react";

import Cloud from "../../components/shared/Cloud";

import styles from "../../styles/learn/the-solution.module.css";

function TheSolution(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <section className={styles["solution-section"]}>
      <h1 className={styles["title"]}>The Solutions</h1>
      <div className={styles["grid"]}>
        <div>
          <h2>
            1. No New Fossil Fuel Projects. <br />
            Anywhere
          </h2>
          <p>
            Tell leaders to stop all oil, coal, and gas projects. <br />
            Take The Florida Climate Pledge.
          </p>
        </div>
        <div>
          <h2>
            2. A Fast and Just Transition to 100% Renewable Energy. <br />
            Deadline: 2030.
          </h2>
          <p>
            We need to economically incentivize and legally enforce a complete
            and just transition away from fossil fuels to a new clean energy
            economy. We can do our part by buying electric, taking mass transit,
            riding together, and turning off lights. Going car-free is the
            number one energy saver individuals can take.
          </p>
        </div>
        <div>
          <h2>3. No Continued Deforestation Anywhere. Deadline: 2025.</h2>
          <p>
            {`We need to economically incentivize landowners and farmers to
            produce alternate food sources that don't require cutting down any
            more of our trees. Beef, soy, palm oil, and wood products drive the
            majority of global deforestation. We can do our part by buying
            products and eating only foods that don’t deforest our planet.`}
          </p>
        </div>
        <div>
          <h2>4. Reforestation.</h2>
          <p>
            Reforest our communities. We can do our part by planting trees. By
            planting more than a half-trillion trees, we can capture about 205
            gigatons of carbon, reducing atmospheric carbon by 25 percent,
            enough to negate about 20 years of human-produced carbon emissions
            at the current rate. That’s about 6 trees apiece for the world
            population. While we still need to cut carbon, it’s a start.
          </p>
        </div>
        <div>
          <h2>5. Education.</h2>
          <p>
            {`Americans have a greater carbon footprint, per capita than anywhere
            else in the world. But we can learn from developed countries that
            have carbon footprints a third of ours, and from entrepreneurial
            businesses that have already developed the technology to bring about
            necessary change here in the US. Let's get the conversation
            started-everywhere. Ask your school to make climate education a
            fundamental part of the curriculum.`}
          </p>
        </div>
        <div>
          <h2>6. Switch to a healthier diet.</h2>
          <p>
            Switch to alternate food sources to make deforestation for
            agriculture purposes unnecessary. Change what you eat; change how
            much you eat; change how much you waste, and avoid single-use
            plastics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TheSolution;
