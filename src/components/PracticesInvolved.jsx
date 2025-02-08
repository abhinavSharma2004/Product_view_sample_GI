const PracticesInvolved = ({ description }) => {
  return (
    <div className="bg-[#1DA5B1] p-4 flex flex-col sm:flex-row items-center">
      <img
        src="https://via.placeholder.com/300"
        alt="Sustainable farming"
        className="w-200 h-50 object-cover mb-4 sm:mb-0 sm:mr-6"
      />
      <div>
        <h2 className="text-2xl font-bold text-white">Practices Involved</h2>
        <p className="mt-2 text-white">
          Practices like crop rotation, reduced pesticide use, water-efficient
          irrigation, regenerative farming, soil conservation, and fair trade
          sourcing to ensure environmental and economic resilience.
        </p>
      </div>
    </div>
  );
};

export default PracticesInvolved;
