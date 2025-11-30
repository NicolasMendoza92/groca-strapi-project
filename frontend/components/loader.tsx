
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
      <img
        src="/logo.png"
        alt="loading"
        className="w-75 animate-bounce"
      />
    </div>
  );
}