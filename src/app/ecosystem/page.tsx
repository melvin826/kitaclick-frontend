export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-blue-700">The KitaClick Ecosystem</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">An interconnected network that bridges learning, commerce, and financial growth for every Filipino.</p>
      </section>
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-12 px-6">
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">📘 LMS — Learning</h3>
          <p>Interactive lessons, certification, and practical skill development.</p>
        </div>
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">🛍️ Marketplace — Selling</h3>
          <p>Seamless product listing, supplier integration, and logistics automation.</p>
        </div>
        <div className="border p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">💸 PadalaX — Earning</h3>
          <p>Secure wallet and payout system enabling instant income transfers.</p>
        </div>
      </section>
    </main>
  );
}
