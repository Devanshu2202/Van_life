const Reviews = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your reviews</h1>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold">⭐ 5.0 overall rating</h2>
        <p className="text-gray-500">based on 12 reviews</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold">John Doe</p>
          <p className="text-yellow-500">★★★★★</p>
          <p className="text-gray-600 mt-2">
            Amazing van! Had a great trip.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold">Jane Smith</p>
          <p className="text-yellow-500">★★★★☆</p>
          <p className="text-gray-600 mt-2">
            Very comfortable and clean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;