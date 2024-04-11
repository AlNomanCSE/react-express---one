import { Link } from "react-router-dom";
import cars from "../carsData";
const Cars = () => {
  return (
    <section
      className="p-8 flex flex-wrap justify-around"
      style={{ minHeight: "calc(100vh - 116px)" }}
    >
      <Link to=".." relative="path">Back</Link>
      {cars.map((car, index) => (
        <div key={index} className="flex flex-col gap-4 m-4">
          <img
            src={car.imageUrl}
            alt="car image"
            className="w-[300px] h-[300px] object-cover rounded-md"
          />
          <div className="flex flex-col gap-2 relative p-4">
            <Link to={`/cars/${car.id}`}>
              <h2 className="text-lime-950 text-xl font-medium">{car.name}</h2>
            </Link>
            <p className="text-gray-700">Price : ${car.price}</p>
            <p className="absolute top-8 right-4">{car.type}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cars;
