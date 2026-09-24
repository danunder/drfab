export default function DownloadCard() {
  return (
    <div className="rounded-2xl bg-[#F5F7F9] p-6">
      <h4 className="text-lg font-extrabold text-[#1F2A30]">Download</h4>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm shadow">
          Material & Print Guide
          <span>→</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm shadow">
          Company Profile
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
