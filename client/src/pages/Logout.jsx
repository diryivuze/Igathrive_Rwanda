// src/pages/Logout.jsx
const logout = () => {
  localStorage.removeItem("userinfo");
  window.location.href = "/login";
};
const Logout = () => (
  <div className="flex items-center justify-center h-full">
    <button
      className="bg-red-500 px-6 py-3 text-white rounded"
      onClick={() => logout()}
    >
      Logout
    </button>
  </div>
);

export default Logout;
