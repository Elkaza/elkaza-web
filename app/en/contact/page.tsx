export default function ContactEn() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Book a free 30‑minute strategy analysis</h1>
      <p className="text-gray-700 mb-8">We will get back within 24 hours.</p>

      <form className="space-y-4" method="post" action="#">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input className="w-full border rounded-lg px-4 py-2" name="name" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border rounded-lg px-4 py-2" name="email" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea className="w-full border rounded-lg px-4 py-2" name="message" rows={5} />
        </div>
        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Send</button>
      </form>
    </main>
  );
}

