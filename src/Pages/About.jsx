import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Quality',
    description: 'We partner with top brands to bring you premium fabrics and craftsmanship that stand the test of time.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Style',
    description: 'From timeless ethnic wear to contemporary western outfits, we cater to every fashion-forward individual.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Affordability',
    description: "Great fashion shouldn't break the bank. Enjoy competitive prices and amazing deals every day.",
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About NSFashion</h1>
          <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto">
            Your trusted destination for quality Khmer fashion
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NSFashion is a fashion brand inspired by the beauty, creativity, and cultural heritage of Cambodia.and modern fashion to create unique styles that help you express your identity with confidence.
            </p>
            <p className="text-gray-600 leading-relaxed">
             From elegant Khmer-inspired designs to contemporary everyday looks, every piece is carefully selected to celebrate Khmer culture, timeless beauty, and modern 
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl h-80 flex items-center justify-center">
            <span className="text-6xl">👗</span>
          </div>
        </div>
      </section>

      {/* Features / Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Our mission is to deliver fashion that empowers, at prices that respect your wallet.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Priya Sharma', 'Rahul Verma', 'Ananya Singh', 'Vikram Patel'].map((name, i) => (
            <div key={name} className="text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-indigo-600">{name.charAt(0)}</span>
              </div>
              <h4 className="font-semibold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-500">
                {['Founder & CEO', 'Head of Design', 'Marketing Lead', 'Tech Lead'][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Come, Be a Part of Our Story</h2>
        <p className="mt-4 text-indigo-200">Shop the latest trends and express your unique style.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
        >
          Start Shopping
        </Link>
      </section>
    </div>
  );
}
