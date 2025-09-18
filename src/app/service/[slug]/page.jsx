"use client";
import { use } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const serviceDetails = {
  "legal-matters": {
    title: "Legal Matters",
    description:
      "We address all the legal risks and issues with the right knowledge base and a careful analysis of law and facts.",
    sections: [
      {
        heading: "Drafting and Review",
        text: "Drafting and review of legal agreements, documents, deeds.",
        points: [
          "Employment contracts",
          "Shareholder agreements",
          "Purchase agreements",
          "Leases",
          "Intellectual property licenses",
          "Non-disclosure agreements",
        ],
        image: "/images/services/service-3.jpg",
      },
      {
        heading: "Best Accounting Service",
        text: "Providing reliable and transparent asset valuation services.",
        points: [
          "Comparable transaction analysis (CTA)",
          "Discounted cash flow (DCF) analysis",
          "Asset-based valuation",
          "Earnings-based valuation",
          "Market-based valuation",
          "Real option analysis",
        ],
        image: "/images/services/ca-2.jpg",
      },
      {
        heading: "Legal Opinions",
        text: "Expert legal opinions to make informed decisions on complex matters.",
        points: [
          "Representation before authorities for appeals, assessments, search, seizure cases",
          "Preparing and submitting legal documents",
          "Representing clients in negotiations and mediation",
          "Advising clients on their rights and obligations under the law",
        ],
        image: "/images/services/service-4.jpeg",
      },
    ],
  },

  //   valuation: {
  //     title: "Valuation",
  //     description:
  //       "The process of determining the worth or value of an asset, such as a business, real estate, or securities.",
  //     sections: [
  //       {
  //         heading: "Best Accounting Service",
  //         text: "Providing reliable and transparent asset valuation services.",
  //         points: [
  //           "Comparable transaction analysis (CTA)",
  //           "Discounted cash flow (DCF) analysis",
  //           "Asset-based valuation",
  //           "Earnings-based valuation",
  //           "Market-based valuation",
  //           "Real option analysis",
  //         ],
  //         image: "/images/services/valuation.jpg", // add this file
  //       },
  //     ],
  //   },

  "roc-compliances": {
    title: "ROC Compliances",
    description:
      "All companies and LLPs incorporated in India are required to submit specific documents and information to the Registrar of Companies (ROC) every financial year. We ensure your business remains compliant by managing all statutory filings, returns, and advisory services.",
    banner: "/images/services/ROC-1.png",
    sections: [
      {
        heading: "Annual Returns",
        text: "We assist in preparing and filing annual returns with ROC to avoid penalties and ensure compliance with the Companies Act.",
        points: [
          "Preparation of Form MGT-7 for companies",
          "Preparation of Form LLP-11 for LLPs",
          "Certification from a practicing professional",
          "Timely filing before the due date",
        ],
        image: "/images/services/annual.jpg",
      },
      {
        heading: "Share Allotment",
        text: "Our experts handle filings related to issue and allotment of company shares, ensuring accuracy and compliance.",
        points: [
          "Drafting of Board resolutions",
          "Preparation of Form PAS-3 for allotment",
          "Maintaining statutory registers",
          "Filing with ROC within prescribed timelines",
        ],
        image: "/images/services/share.jpg",
      },
      {
        heading: "Transfer of Shares",
        text: "We provide end-to-end support in documenting and filing share transfer details with ROC.",
        points: [
          "Drafting of share transfer deeds",
          "Stamp duty compliance",
          "Updating of member registers",
          "ROC filing of changes in shareholding",
        ],
        image: "/images/services/compliance.jpg",
      },
      {
        heading: "Incorporation of Company/LLP",
        text: "Get complete guidance and filing services for incorporation of new companies and LLPs with ROC.",
        points: [
          "Name approval and reservation",
          "Drafting of MOA & AOA",
          "Filing of SPICe+ forms",
          "Obtaining CIN/LLPIN and incorporation certificate",
        ],
        image: "/images/services/ROC-4.jpeg",
      },
      {
        heading: "Half Yearly Returns",
        text: "We manage filing of half-yearly returns required under MCA rules to ensure ongoing compliance.",
        points: [
          "Filing of LLP Form 8 (Statement of Accounts & Solvency)",
          "Maintaining statutory registers",
          "Compliance for small & private companies",
          "Timely reminders to avoid defaults",
        ],
        image: "/images/services/roc-halfyear.jpeg", // add this image in your folder
      },
      {
        heading: "General Advisory",
        text: "We provide continuous ROC compliance advisory services to help businesses stay legally compliant at all times.",
        points: [
          "Advisory on statutory due dates",
          "Corporate governance support",
          "Compliance with Companies Act, 2013",
          "End-to-end ROC documentation and filing",
        ],
        image: "/images/services/roc-advisory.jpg", // add this image in your folder
      },
    ],
  },

  "business-advisory": {
    title: "Business Advisory",
    banner: "/images/services/business.jpg",
    sections: [
      {
        heading: "Registration and Incorporation",
        text: "We provide complete incorporation and registration services as required under various statutes for different business entities.",
        points: [
          "Company Incorporation",
          "LLP Registration",
          "Partnership Firm / Association / Trust Registration",
          "GST Registration",
          "Import Export Code Registration",
          "PF and ESI Registration",
          "Shops and Establishment & Labour License Registration",
          "Professional Tax Registration",
          "B.M.P Trade License",
          "S.M.E Registration",
          "S.S.A.I Registration",
          "Intellectual Property Registration",
        ],
        image: "/images/services/operations.jpeg", // add this image
      },
      {
        heading: "Setting up Operations",
        text: "We assist businesses in creating operational frameworks, policies, and procedures to ensure efficiency, integrity, and compliance.",
        points: [
          "Operating agreement or bylaws",
          "Employment agreements",
          "Non-disclosure agreements",
          "Service agreements",
          "Contracts and agreements",
          "Policies and procedures",
        ],
        image: "/images/services/operations1.jpeg", // add this image
      },
      {
        heading: "Statutory Compliances",
        text: "We help businesses stay compliant with all statutory requirements by providing monthly, quarterly, half-yearly, and annual compliance support.",
        points: [
          "Goods and Service Tax (GST)",
          "TDS and TCS",
          "Professional Tax",
          "Employee Provident Fund (EPF)",
          "Employees State Insurance Act (ESI)",
        ],
        image: "/images/services/compliance.jpg", // reuse existing image
      },
      {
        heading: "Secretarial Support",
        text: "Our secretarial support ensures smooth functioning of corporate governance, statutory record keeping, and compliance management.",
        points: [
          "Writing and maintaining statutory records",
          "Minutes of meetings (AGM, shareholders, board of directors)",
          "Handling appointments and resignations",
          "Increase / reduction of share capital",
          "Dividend declaration",
          "Change of registered office",
          "Closure and liquidation of entities",
        ],
        image: "/images/services/secretarial.jpeg", // add this image
      },
      {
        heading: "Certification Services",
        text: "We provide reliable certification services to meet statutory, financial, and operational requirements.",
        points: [
          "Project Report and CMA Certification",
          "15CB Certificate",
          "Fixed Asset Valuation Certificate",
          "Net Worth Certificate",
          "Royalty Computation Certificate",
          "Digital Signature Certificate (DSC)",
          "Trademark and ISO Certification",
        ],
        image: "/images/services/certification.jpeg", // add this image
      },
    ],
  },

  "management-support": {
    title: "Management Support Services",
    banner: "/images/services/management.jpeg",
    sections: [
      {
        heading: "Accounts",
        text: "Accounting is the process of recording financial transactions of a business, including summarizing, analyzing, and reporting these transactions to ensure transparency and control.",
        points: [
          "Keeps a record of business transactions",
          "Meets legal and government requirements",
          "Facilitates decision-making for management",
          "Provides viewable financial results",
          "Service 1, Service 2, Service 3",
        ],
        image: "/images/services/accounts.jpg", // add this image
      },
      {
        heading: "Managerial Accounting",
        text: "We prepare monthly and quarterly reports that help management understand the financial and operational performance of the business.",
        points: [
          "Analysis of operational costs",
          "Budgeting and forecasting",
          "Performance monitoring",
          "Strategic planning support",
        ],
        image: "/images/services/managerial.jpg", // add this image
      },
      {
        heading: "Tax Accounting",
        text: "Our tax accounting services focus on preparing and filing income tax returns for individuals and businesses while ensuring compliance with tax laws.",
        points: [
          "Income tax filing for individuals",
          "Corporate income tax compliance",
          "Tax planning and advisory",
          "TDS and GST support",
        ],
        image: "/images/services/tax-accounting.jpg", // add this image
      },
      {
        heading: "Financial Accounting",
        text: "We provide accurate financial accounting services including generation of interim and annual financial statements to evaluate business performance.",
        points: [
          "Preparation of balance sheets",
          "Profit and loss statements",
          "Cash flow statements",
          "Annual reports and disclosures",
        ],
        image: "/images/services/financial.jpeg", // add this image
      },
      {
        heading: "Payroll Services",
        text: "Our payroll services include payroll strategy, preparation, maintenance, compliance management, and reporting to ensure smooth operations.",
        points: [
          "Salary calculation and disbursement",
          "Managing deductions and taxes",
          "Compliance with labour regulations",
          "Maintaining employee records",
          "Generating payroll reports",
        ],
        image: "/images/services/payroll.jpeg", // add this image
      },
    ],
  },

  "auditing-assurance": {
    title: "Audit & Assurance Services",
    banner: "/images/services/audit.jpg",
    sections: [
      {
        heading: "Internal Audit",
        text: "Internal audit is an independent and objective assurance and consulting activity designed to add value and improve an organization’s operations.",
        points: [
          "Evaluate the effectiveness of internal controls",
          "Assess efficiency and effectiveness of operations",
          "Identify potential fraud or illegal activities",
          "Check compliance with laws, regulations, and policies",
          "Assess reliability of financial and operational information",
          "Review effectiveness of risk management processes",
        ],
        image: "/images/services/audit1.jpeg",
      },
      {
        heading: "Statutory Audit",
        text: "A statutory audit is a legally mandated examination of an organization’s financial statements to ensure accuracy, reliability, and compliance with applicable laws and regulations.",
        points: [
          "Ensure compliance with laws and regulations",
          "Verify accuracy of financial statements",
          "Detect fraud and errors",
          "Identify weaknesses in internal controls",
          "Assess effectiveness of management practices",
          "Enhance transparency and accountability",
        ],
        image: "/images/services/audit2.png",
      },
      {
        heading: "Performance Audit",
        text: "Performance audits are independent evaluations of organizational performance, ensuring resources are used efficiently, goals are achieved, and compliance is maintained.",
        points: [
          "Improve organizational performance",
          "Ensure compliance with laws and regulations",
          "Identify fraud, abuse, and inefficiencies",
          "Enhance accountability and transparency",
          "Support informed policy and management decisions",
          "Promote economic efficiency and value for money",
        ],
        image: "/images/services/audit3.jpg",
      },
      {
        heading: "Concurrent Audit",
        text: "Concurrent audit involves continuous monitoring of financial transactions and internal processes, conducted simultaneously with day-to-day operations.",
        points: [
          "Real-time monitoring of financial transactions",
          "Audit under specific laws and regulations",
          "Compliance with Companies Act, Tax, and Banking laws",
          "Ensure adherence to securities and government contract rules",
          "Industry-specific audit compliance",
          "Strengthen risk management and internal systems",
        ],
        image: "/images/services/audit4.jpeg",
      },
    ],
  },

  "tax-services": {
    title: "Tax Services",
    banner: "/images/services/tax.jpeg",
    sections: [
      {
        heading: "Tax Planning",
        text: "We design efficient tax strategies tailored to individuals and businesses to minimize tax liabilities, maximize savings, and ensure long-term financial efficiency.",
        points: [
          "Customized tax saving strategies",
          "Optimization of deductions and exemptions",
          "Corporate and individual tax planning",
          "Investment-linked tax advisory",
          "Strategic planning for long-term benefits",
        ],
        image: "/images/services/tax1.jpg", // ✅ correct
      },
      {
        heading: "Filing & Returns",
        text: "Our team manages accurate and timely tax filings, reducing compliance risks and ensuring peace of mind for individuals and businesses.",
        points: [
          "GST registration and returns filing",
          "Income tax return preparation and filing",
          "Advance tax and self-assessment support",
          "TDS and TCS compliance",
          "Timely submission to avoid penalties",
        ],
        image: "/images/services/tax2.jpg", // make sure tax2.jpg exists in the same folder
      },
      {
        heading: "Corporate Taxation",
        text: "We provide complete corporate taxation services, ensuring compliance with domestic and international regulations while minimizing tax exposure.",
        points: [
          "Corporate income tax compliance",
          "Transfer pricing advisory",
          "International taxation guidance",
          "Corporate restructuring and M&A tax planning",
          "Compliance with direct and indirect tax laws",
        ],
        image: "/images/services/tax3.jpg", // same check
      },
      {
        heading: "Dispute Resolution",
        text: "Our experts handle tax disputes, offering representation and advisory for litigation, appeals, and negotiations with tax authorities.",
        points: [
          "Handling tax notices and assessments",
          "Representation before tax authorities",
          "Appeals and litigation support",
          "Settlement negotiations and dispute resolution",
          "Advisory on complex tax compliance issues",
        ],
        image: "/images/services/tax4.jpeg", // same check
      },
    ],
  },
};

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="container py-5">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        {service.banner && (
          <Image
            src={service.banner}
            alt={service.title}
            width={1000}
            height={400}
            className="rounded-3 shadow-lg"
          />
        )}
        <h1 className="mt-4 fw-bold text-primary">{service.title}</h1>
        {service.description && (
          <p className="lead mt-3">{service.description}</p>
        )}
      </div>

      {/* Sections */}
      {service.sections.map((section, idx) => {
        const pattern = idx % 4; // cycle through 4 layouts

        return (
          <div key={idx} className="mb-5">
            {pattern === 0 && (
              // 🔹 Pattern 1: Classic row (Image Left / Text Right)
              <div className="row align-items-center g-4">
                <div className="col-md-6">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    width={600}
                    height={350}
                    className="rounded-4 shadow-lg w-100"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="fw-bold mb-3 text-secondary">
                    {section.heading}
                  </h2>
                  <p className="fs-5 text-muted">{section.text}</p>
                  <Checklist points={section.points} />
                </div>
              </div>
            )}

            {pattern === 1 && (
              // 🔹 Pattern 2: Card style with image on right
              <div className="row align-items-center g-4 flex-row-reverse">
                <div className="col-md-6">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    width={600}
                    height={350}
                    className="rounded-4 shadow-lg w-100"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-lg rounded-4 p-4 h-100">
                    <h2 className="fw-bold mb-3 text-primary">
                      {section.heading}
                    </h2>
                    <p className="fs-5 text-muted">{section.text}</p>
                    <Checklist points={section.points} />
                  </div>
                </div>
              </div>
            )}

            {pattern === 2 && (
              // 🔹 Pattern 3: Full-width image banner with overlay text
              <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={1200}
                  height={400}
                  className="w-100"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                  <div className="text-center text-white p-4">
                    <h2 className="fw-bold">{section.heading}</h2>
                    <p className="lead">{section.text}</p>
                    <Checklist points={section.points} white />
                  </div>
                </div>
              </div>
            )}

            {pattern === 3 && (
              // 🔹 Pattern 4: Split with background highlight
              <div className="row align-items-center g-4 bg-light rounded-4 shadow-sm p-4">
                <div className="col-md-6 order-2 order-md-1">
                  <h2 className="fw-bold mb-3 text-secondary">
                    {section.heading}
                  </h2>
                  <p className="fs-5 text-muted">{section.text}</p>
                  <Checklist points={section.points} />
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    width={600}
                    height={350}
                    className="rounded-4 shadow-lg w-100"
                  />
                </div>
              </div>
            )}

            <hr className="my-5 opacity-25" />
          </div>
        );
      })}
    </div>
  );
}

// ✅ Reusable Checklist component
function Checklist({ points, white }) {
  if (!points) return null;
  return (
    <ul className="list-unstyled mt-3">
      {points.map((point, i) => (
        <li key={i} className="d-flex align-items-start mb-2">
          <CheckCircle
            size={20}
            className={`me-2 mt-1 ${white ? "text-light" : "text-success"}`}
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
