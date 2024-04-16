import React from "react";
import { RiLockUnlockFill, RiDeleteBin5Fill } from "react-icons/ri";

const Toolbar = ({ onBlock, onUnblock, onDelete }) => {
  return (
    <div className="flex ml-4 mt-4 mb-4">
      <div className="flex">
        <button
          onClick={onBlock}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Block
        </button>
        <button
          onClick={onUnblock}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 flex items-center"
        >
          <RiLockUnlockFill className="text-2xl" />
        </button>
      </div>
      <div>
        <button
          onClick={onDelete}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <RiDeleteBin5Fill className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
