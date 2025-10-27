export default function InvestPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 bg-red-50">
        <h1 className="text-4xl font-bold text-red-700">Invest in the Future of Filipino E-Commerce</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Join us in building the Philippines’ first unified digital earning ecosystem. KitaClick integrates training, commerce, and fintech into one scalable platform.</p>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Investor Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Proven market fit — 20M+ potential Filipino sellers.</li>
          <li>Diverse monetization: LMS, ads, fintech, and more.</li>
          <li>Scalable architecture built with Next.js and cloud APIs.</li>
          <li>Franchise and partnership opportunities available.</li>
        </ul>
        <div className="mt-8 text-center">
          <a href="/contact?type=investor" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">Book a Strategy Call</a>
        </div>
      </section>
    </main>
  );
}
