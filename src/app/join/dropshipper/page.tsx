export default function DropshipperPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-700">Become a KitaClick Dropshipper</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Build your business with zero inventory. KitaClick handles products, shipping, and payments — you focus on selling and growing.</p>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Sign up for a free seller account.</li>
          <li>Select products from verified suppliers.</li>
          <li>Promote your listings and make sales.</li>
          <li>Get paid weekly via PadalaX Wallet.</li>
        </ol>
        <div className="mt-8 text-center">
          <a href="/auth/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Start Dropshipping Now</a>
        </div>
      </section>
    </main>
  );
}
