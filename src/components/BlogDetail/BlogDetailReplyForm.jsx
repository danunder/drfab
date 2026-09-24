export default function BlogDetailReplyForm() {
  return (
    <section className="mt-10">
      <h3 className="text-xl font-extrabold text-[#1F2A30]">Leave a Reply</h3>

      <div className="mt-4 rounded-2xl bg-[#F5F7F9] p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="reply-name" className="sr-only">
              Your Name
            </label>
            <input
              id="reply-name"
              name="name"
              autoComplete="name"
              placeholder="Your Name"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
            />
          </div>
          <div>
            <label htmlFor="reply-email" className="sr-only">
              Your Email
            </label>
            <input
              id="reply-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your Email"
              className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
            />
          </div>
        </div>

        <label htmlFor="reply-topic" className="sr-only">
          Select Topic
        </label>
        <input
          id="reply-topic"
          name="topic"
          placeholder="Select Topic"
          className="mt-4 h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#1F2A30]"
        />

        <label htmlFor="reply-message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="reply-message"
          name="message"
          rows={5}
          placeholder="Your Message"
          className="mt-4 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#1F2A30]"
        />

        <button className="nes-btn is-primary mt-5 rounded-2xl bg-[#1F2A30] px-7 py-3 text-sm font-semibold text-white hover:bg-black">
          Submit Message
        </button>
      </div>
    </section>
  );
}
