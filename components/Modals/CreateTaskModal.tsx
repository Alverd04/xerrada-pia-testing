import { AiOutlineClose } from "react-icons/ai";

interface CreateTaskModalProps {
  handleCreateTask: (e: React.FormEvent<HTMLFormElement>) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export default function CreateTaskModal({
  handleCreateTask,
  showModal = false,
  setShowModal,
}: CreateTaskModalProps) {
  return (
    showModal && (
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        role="dialog"
        onClick={() => setShowModal(false)}
      >
        <div
          className="bg-gray-800 p-8 rounded-lg w-96"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Add Task</h2>
            <button title="Close button" onClick={() => setShowModal(false)}>
              <AiOutlineClose className="text-2xl cursor-pointer" />
            </button>
          </div>
          <form onSubmit={handleCreateTask}>
            <div className="mb-4">
              <label
                htmlFor="task"
                className="block text-gray-300 font-semibold mb-2"
              >
                Task
              </label>
              <input
                type="text"
                id="task"
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-300 font-semibold mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
            </div>
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    )
  );
}
