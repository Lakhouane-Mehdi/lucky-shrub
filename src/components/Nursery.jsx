import nursery from "../assets/images/nursery.jpg";

const hours = [
  { day: "Monday – Friday", time: "8:00 – 17:30" },
  { day: "Saturday", time: "8:00 – 16:00" },
  { day: "Sunday", time: "10:00 – 14:00" },
];

export default function Nursery() {
  return (
    <section className="nursery reveal" id="nursery" aria-labelledby="nursery-title">
      <div className="nursery-text">
        <h2 id="nursery-title">Visit the nursery</h2>
        <p>
          Everything we plant is grown on site, so you can see a plant in the
          ground before it goes in yours. Come and walk the beds, ask the people
          who raised them, and take something home the same day.
        </p>
        <p className="address">
          1204 East Grant Road
          <br />
          Tucson, AZ 85719
        </p>

        <table className="hours">
          <caption>Opening hours</caption>
          <tbody>
            {hours.map((row) => (
              <tr key={row.day}>
                <th scope="row">{row.day}</th>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <img
        className="nursery-image"
        src={nursery}
        alt="A pale green and pink succulent rosette growing among gravel"
        width="800"
        height="600"
        loading="lazy"
      />
    </section>
  );
}
