const Message = ({ message }) => {
    return (
      <div className="bg-red-400 p-4 mt-6 text-center">
        <h2 className="text-2xl font-semibold text-white">Message to Sustainable Heroes</h2>
        <p className="text-white mt-1">{message}</p>
      </div>
    );
  };
  
  export default Message;