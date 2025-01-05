import Login from './Login';

interface IModalProps {
  isOpen: boolean;
  closeModal: () => void
}

export const Modal = (props: IModalProps) => {
  return (
    <div>
      {props.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 drop-shadow-lg border-gray-200">
          <div className="bg-lm-secondary dark:bg-dm-secondary w-1/2 p-6 rounded shadow relative py-20">
            <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
              <Login />
            <button onClick={props.closeModal} className="mt-4 bg-indigo-800 hover:bg-red-500 text-white font-bold py-2 rounded absolute top-0 right-5 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
