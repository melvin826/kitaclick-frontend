export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-blue-700">KitaClick — Empowering Every Filipino to Earn Anywhere</h1>
        <p className="mt-4 text-lg">Training. Tools. Technology. Together, we make digital entrepreneurship simple, profitable, and borderless.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/join/dropshipper" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Join as Dropshipper</a>
          <a href="/invest" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">Invest in KitaClick</a>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-3">From Learning to Earning — All in One Platform</h2>
          <p className="text-gray-600 mb-4">KitaClick combines education, e-commerce, and employment in one seamless ecosystem. Our goal: to turn 1 million Filipinos into digital entrepreneurs by 2030.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>🎓 Learn with KitaClick Academy</li>
            <li>🛒 Sell Instantly with Marketplace Integration</li>
            <li>💼 Earn Securely with PadalaX Wallet</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/hero.png" alt="KitaClick platform preview" className="rounded-2xl shadow-lg"/>
        </div>
      </section>
    </main>
  );
}
