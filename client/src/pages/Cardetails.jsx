import { useParams, Link } from "react-router-dom";
import cars from "../carsData";
const Cardetails = () => {
  const { id } = useParams();
  const car = cars.filter((car) => car.id === id);
  const Car = { ...car[0] };

  return (
    <section className="flex items-center justify-center h-screen">
      <Link to="..">Back</Link>
      <div className="flex flex-col gap-4 m-4 w-[500px]">
        <img
          src={Car.imageUrl}
          alt="car image"
          className="w-[100%] h-[300px] object-cover object-center rounded-md"
        />
        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-lime-950 text-xl font-medium">{Car.name}</h2>
          <p className="w-full text-justify">{Car.description}</p>
          <p className="text-gray-700">Price : ${Car.price}/day </p>
          <p className="top-8 right-4">{}</p>
        </div>
      </div>
    </section>
  );
};

export default Cardetails;
