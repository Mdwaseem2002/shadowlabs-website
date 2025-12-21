export default function ShadowLabsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold tracking-tight">SHADOWLABS</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-black transition-colors">Features</a>
            <a href="#teams" className="text-sm text-gray-600 hover:text-black transition-colors">Teams</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">About</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold tracking-tight leading-tight mb-4 text-neutral-900">
            Your Wingman for<br />High Stakes Conversations
          </h1>

          <p className="text-gray-500 text-base mb-8">
            The grid stage in every conversation
          </p>
          <button className="bg-[#1a1f3a] text-white px-8 py-3 text-sm rounded-lg hover:bg-[#252b4a] transition-colors font-medium">
            Request Beta
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-16 px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img src="./images/dashboard1.png" alt="Dashboard Preview" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Features</p>
          <h2 className="text-5xl font-bold tracking-tight leading-tight text-neutral-900">
            Scale great conversations,<br />not just teams.
          </h2>
        </div>
      </section>

      {/* For Business Owners */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6 text-neutral-900">For Business Owners</h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
            Drive higher conversions with real-time deal coaching, pitch personalization, and team-wide performance consistency across regions and languages.
          </p>
        </div>
      </section>

      {/* 4-Box Grid Section */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6 items-start">
            
            {/* Card 1 - Top Left (Tall) */}
            <div className="bg-white rounded-3xl shadow-sm h-[600px] flex flex-col">
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Higher Sales Conversions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Help your reps run focused conversations that uncover real needs and move deals to close.
                </p>
              </div>
              <div className="flex-1 px-10 pb-10 flex flex-col justify-end">
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <img src="./images/feature1.png" alt="Higher Sales Conversions" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Card 2 - Top Right (Short) */}
            <div className="bg-white rounded-3xl shadow-sm h-[420px] flex flex-col overflow-hidden">
              <div className="flex items-center justify-center h-48">
                <img src="./images/feature2.png" alt="Personalised Sales Pitch" className="w-full h-full object-cover" />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Personalised Sales Pitch
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shadow listens for intent and willingness to pay in real time, and nudges reps to the right offer.
                </p>
              </div>
            </div>

            {/* Card 3 - Bottom Left (Short) */}
            <div className="bg-white rounded-3xl shadow-sm h-[420px] flex flex-col overflow-hidden">
              <div className="flex items-center justify-center h-48">
                <img src="./images/team.png" alt="Make Your Team Global" className="w-full h-full object-cover" />
              </div>
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Make Your Team Global
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Help reps sell across regions and industries by bridging language and cultural gaps.
                </p>
              </div>
            </div>

            {/* Card 4 - Bottom Right (Tall) */}
            <div className="bg-white rounded-3xl shadow-sm h-[600px] flex flex-col">
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Performance Equity Across<br />the Team
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Turn what your best reps do—questions, phrasing, timing—into live guidance for everyone on the team.
                </p>
              </div>
              <div className="flex-1 px-10 pb-10 flex flex-col justify-end">
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <img src="./images/performance.png" alt="Performance Equity" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Sales Professionals */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-semibold mb-6 text-neutral-900">For Sales Professionals</h3>
          <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
            Access instant facts, handle objections confidently, adapt your storytelling and tone, and communicate clearly—even in mixed language scenarios.
          </p>
        </div>
      </section>

      {/* 5-Box Grid Section - Sales Professionals */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6 items-start">
            
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-3xl shadow-sm h-[600px] flex flex-col">
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Higher Sales Facts on Tap
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  See key product, pricing and customer details on screen the moment you need them.
                </p>
              </div>
              <div className="flex-1 px-10 pb-10 flex flex-col justify-end">
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <img src="./images/image 3.png" alt="Higher Sales Facts on Tap" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-3xl shadow-sm h-[444px] flex flex-col overflow-hidden">
              <div className="flex items-center justify-center flex-1 relative">
                <img src="./images/sales-facts.jpg" alt="Objection Handling" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  Objection Handling
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  When a customer pushes back, get simple, targeted replies and follow-up questions right in the flow of the call.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-3xl shadow-sm h-[444px] flex flex-col overflow-hidden">
              <div className="flex items-center justify-center flex-1 relative">
                <img src="./images/image 4.png" alt="Sharper Story Telling" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  Sharper Story Telling
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get timely nudges to use the right examples, numbers and customer stories for this specific prospect.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-3xl shadow-sm h-[444px] flex flex-col">
              <div className="p-10 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Multi-Lingual Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Speak naturally—English, Hinglish or a mix—while Shadow keeps your message clear and culturally on point.
                </p>
              </div>
              <div className="flex-1 px-10 pb-10 flex flex-col justify-end">
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <img src="./images/image 7.png" alt="Multi-Lingual Support" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-3xl shadow-sm h-[280px] col-span-2 flex flex-row overflow-hidden">
              <div className="flex-1 flex items-center justify-center relative">
                <img src="./images/image 6.png" alt="Personality Intelligence" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-4 text-gray-900">
                  Personality Intelligence
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shadow picks up how the customer talks and suggests how to match their tone, pace and directness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-8 bg-white">
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex items-center gap-4 px-20">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-black">Build with Privacy in Mind</h3>
            </div>
            <div className="px-20">
              <p className="text-gray-500 text-sm leading-relaxed">
                Shadow records only with consent, encrypts everything, and lets you control what&apos;s stored, shared and deleted.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex items-center gap-4 px-20">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-black">Enterprise First</h3>
            </div>
            <div className="px-20">
              <p className="text-gray-500 text-sm leading-relaxed">
                SSO, RBAC, audit logs and scalable infrastructure so your security and IT teams can say yes with confidence.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex items-center gap-4 px-20">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-black">Built on behavioral insights</h3>
            </div>
            <div className="px-20">
              <p className="text-gray-500 text-sm leading-relaxed">
                Designed from real call patterns, what top reps actually say and do, not just generic sales advice.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex items-center gap-4 px-20">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-black">Deep Research Algorithm</h3>
            </div>
            <div className="px-20">
              <p className="text-gray-500 text-sm leading-relaxed">
                Surfaces the right facts, proof points and references in real time, backed by your own content and data.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex items-center gap-4 px-20">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-black">Personalized</h3>
            </div>
            <div className="px-20">
              <p className="text-gray-500 text-sm leading-relaxed">
                Learns your playbooks, language and market over time so guidance feels tailored to your team, not templated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-semibold tracking-tight">SHADOWLABS</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 ShadowLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}