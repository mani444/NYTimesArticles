import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-full h-screen flex  flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">404 Not Found</h1>
      <Link to="/">
        <button className="bg-black text-white p-3 rounded-xl hover:bg-white  hover:text-black ">
          Back to home
        </button>
      </Link>
    </div>
  );
}
