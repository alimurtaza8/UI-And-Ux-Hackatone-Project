import React from 'react';

const ComplaintsPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-10 text-6xl font-bold text-[#b9d765] mb-4 tracking-tight">
            COMPLAINTS
          </h1>
          <h1 className="text-6xl font-bold text-[#b9d765] tracking-tight">
            POLICY
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Introduction</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Journey Health is committed to providing a high-quality service to all our customers. We value your feedback and take all complaints seriously. This policy outlines our procedure for handling customer complaints.
            </p>
          </div>
        </div>

        {/* 1. Acknowledgment and Initial Response */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">1. Acknowledgment and Initial Response</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We aim to acknowledge receipt of all formal written complaints within two business days.
            </p>
            <p>
              We aim to provide a full response to all formal written complaints within five business days of receipt.
            </p>
          </div>
        </div>

        {/* 2. Lodging a Formal Complaint */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">2. Lodging a Formal Complaint</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              To lodge a formal complaint, please submit the details via our Contact Form.
            </p>
            <p>Please provide as much detail as possible, including:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Your name and contact information</li>
              <li>Your order number (if applicable)</li>
              <li>A clear and concise description of your complaint</li>
              <li>The desired outcome</li>
            </ul>
          </div>
        </div>

        {/* 3. Complaint Investigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">3. Complaint Investigation</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We will investigate your complaint promptly and fairly.
            </p>
            <p>
              We may need to contact you to gather further information.
            </p>
          </div>
        </div>

        {/* 4. Response and Resolution */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">4. Response and Resolution</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We will provide a written response to your complaint, outlining the steps taken to investigate and resolve the issue.
            </p>
            <p>
              We will endeavor to resolve your complaint to your satisfaction.
            </p>
          </div>
        </div>

        {/* 5. Review and Improvement */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">5. Review and Improvement</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We regularly review our complaints handling procedures to identify areas for improvement.
            </p>
            <p>
              Your feedback is valuable in helping us continually enhance our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPolicy;
