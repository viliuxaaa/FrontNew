import React from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlusCircle } from 'react-icons/ai';

function PosterMenu() {
  return (
    <div className="flex items-center space-x-4">
      {/* add poster button */}
      <div>
        <button
          className="p-2 border border-green-500 rounded-lg hover:bg-green-100"
          title="Add Poster"
        >
          <AiOutlinePlusCircle size={26} />
        </button>
      </div>
      {/* Edit Button */}
      <button
        className="p-2 border border-gray-500 rounded-lg hover:bg-gray-100"
        onClick={() => {
          // Handle edit action
        }}
        title="Edit Poster"
      >
        <AiOutlineEdit size={26} />
      </button>

      {/* change state Button - need to make this drop down at some point */}
      <button
        className="p-2 h-12 border border-purple-500 rounded-lg hover:bg-purple-100"
        onClick={() => {
          // Handle chnage action
        }}
        title="Change Poster Status"
      >
        Change Status
      </button>

      {/* Delete Button */}
      <button
        className="p-2 border border-red-500 rounded-lg hover:bg-red-100"
        onClick={() => {
          // Handle delete action
        }}
        title="Delete Poster"
      >
        <AiOutlineDelete size={26} />
      </button>
    </div>
  );
}

export default PosterMenu;
