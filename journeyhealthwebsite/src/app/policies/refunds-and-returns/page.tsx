import React from 'react';

const RefundsReturns: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-10 text-6xl font-bold text-[#b9d765] mb-4 tracking-tight">
            REFUNDS &
          </h1>
          <h1 className="text-6xl font-bold text-[#b9d765] tracking-tight">
            RETURNS
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Need Help */}
        <div>
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Need Help?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Feel free to submit an enquiry via the form on our Contact Us page, and we will get back to you as soon as possible.
            </p>
            <p>
              <span className="font-semibold">Contact Us:</span><br />
              Customer Care: info@journeyhealth.uk
            </p>
          </div>
        </div>

        {/* Returns Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Returns Policy</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              We understand that situations may arise where you need to return an item. However, due to regulations and safety concerns, our return policy has specific guidelines:
            </p>

            {/* Medicines */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Medicines:</span> Due to UK legislation, we cannot accept returns of any medicines. This includes all medications we sell, such as:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Anti-malaria tablets</li>
                <li>Over-the-counter pain relief</li>
                <li>Antihistamines</li>
                <li>Medicinal creams and liquids</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p>
                <span className="font-semibold">Reasons for Non-Return of Medicines:</span>
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-semibold">Regulatory Compliance:</span> Medicines are strictly regulated, and we must adhere to strict guidelines regarding storage, handling, and sale. Accepting returns could violate these regulations.
                </li>
                <li>
                  <span className="font-semibold">Safety Concerns:</span> Returned medicines cannot be guaranteed safe or effective. Improper use poses significant health risks; therefore, we are required to destroy all returned medicinal products.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p>
                <span className="font-semibold">What to Do with Unwanted Medicines:</span>
              </p>
              <p>
                Take them to your local pharmacy for free disposal. Please do not return them to us.
              </p>
            </div>

            {/* Non-Medicine Returns */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Non-Medicine Returns:</span>
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Notify us within 7 days of receiving your parcel.</li>
                <li>
                  Once authorized by customer service, return the item within 7 days. You will be responsible for return shipping costs, even if your original order had free delivery.
                </li>
              </ul>
            </div>

            {/* Errors or Damaged Items */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Errors or Damaged Items:</span>
              </p>
              <p>
                If there&apos;s an error with your order or items arrive damaged, contact customer service to arrange a return. A return label will be emailed for your convenience.
              </p>
            </div>

            {/* Refused Deliveries */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Refused Deliveries:</span>
              </p>
              <p>
                Only refuse delivery if the parcel arrives damaged. Notify customer service within 7 days. Refusing a parcel is not an acceptable way to return an unwanted item.
              </p>
            </div>

            {/* Parcels Returned by the Courier */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Parcels Returned by the Courier:</span>
              </p>
              <p>
                If a parcel is returned without authorization, we will contact you to arrange resending.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Cancellation Policy:</span>
              </p>
              <p>
                If your order has already been processed by our team, cancellations will be subject to a £10 cancellation fee. This fee covers the administrative and logistical costs incurred during the processing of your order.
              </p>
              <p>
                Unfortunately, once the order has been processed, it is not possible to reverse or cancel it without incurring these charges.
              </p>
              <p>
                To cancel your order, please contact us at info@journeyhealth.uk as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div>
          <h2 className="text-2xl font-semibold text-[#b9d765] mb-6">Feedback</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We value your feedback and complaints as they help us improve our services.
            </p>
            <p>
              <span className="font-semibold">How to Submit Feedback:</span>
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Use the online form on our Contact Us page.</li>
              <li>Email us at infojournefeedbackgmail.com</li>
            </ul>
            <p>
              Upon receiving your feedback:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>We will promptly acknowledge it and investigate the issue.</li>
              <li>We strive for quick and effective resolution, keeping you informed throughout the process.</li>
              <li>Our dedicated team will provide a resolution or update within a specified timeframe.</li>
            </ul>
            <p>
              Your feedback is invaluable, helping us continuously improve. Thank you for helping us serve you better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundsReturns;
