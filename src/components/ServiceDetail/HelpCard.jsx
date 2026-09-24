import { Link } from "react-router-dom";

export default function HelpCard() {
  return (
    <div className="rounded-2xl bg-[#0F1A24] p-6 text-white">
      <h4 className="text-lg font-extrabold">
        Need Help? We Are Here To Help You
      </h4>

      <Link
        to="/#get-in-touch"
        className="nes-btn mt-6 block w-full rounded-xl bg-white py-3 text-center text-sm font-semibold text-[#0F1A24]"
      >
        Contact Us
      </Link>
    </div>
  );
}