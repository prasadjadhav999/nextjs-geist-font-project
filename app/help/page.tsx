export default function HelpPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
        <div className="prose max-w-none">
          <p>
            Welcome to the HOMESTAY.Network Help Center. Here you can find answers to frequently asked questions, guides, and support resources to help you make the most of our platform.
          </p>
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><strong>How do I book a property?</strong> Browse available properties, select your preferred option, and follow the booking instructions.</li>
            <li><strong>How do I list my property?</strong> Create an account, navigate to the List Your Property page, and submit your property details.</li>
            <li><strong>What payment methods are accepted?</strong> We accept major credit cards and secure online payments.</li>
            <li><strong>How do I contact support?</strong> Use the Contact Us page or email support@homestay.network.</li>
          </ul>
          <h2>Additional Resources</h2>
          <p>
            For further assistance, please reach out to our support team via the Contact Us page.
          </p>
        </div>
      </div>
    </div>
  );
}
