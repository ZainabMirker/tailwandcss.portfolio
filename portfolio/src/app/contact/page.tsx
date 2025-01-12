export default function Contact() {
    return (
      <section>
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <form className="flex flex-col gap-4 max-w-md mb-[-90px]">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 border border-gray-300 rounded"
            rows={5}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }