import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Hire-Wise, an AI-powered mock interview platform developed by students of Poornima Institute of Engineering & Technology.",
};

export default function AboutPage() {
  return (
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="Hire-Wise Logo"
              width={48}
              height={40}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-100">
              Hire-Wise
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            AI-Powered Mock Interview Platform
          </p>
        </section>

        {/* Project Overview */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-100">
              About the Project
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hire-Wise is part of a comprehensive placement preparation
              ecosystem that combines AI-powered mock interviews with
              competitive coding practice. This platform leverages artificial
              intelligence to generate adaptive interview questions tailored to
              candidates' resumes and job descriptions, conducting interviews
              through AI avatars and delivering instant performance feedback.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The system closely simulates real interview conditions, enabling
              students and job seekers to build confidence and communication
              skills while receiving personalized guidance. By merging adaptive
              interviews with competitive coding, the platform encourages
              continuous learning and simulates real-world pressure.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-100">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  AI-powered adaptive interview questions based on resume and
                  job description
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Real-time voice interaction with AI interviewer avatars
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Instant performance feedback with detailed analytics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Progress tracking dashboard to monitor improvement over time
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Secure authentication and personalized user experience
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Members */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-primary-100">
              Development Team
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AG</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Abhishree Gahlot</h3>
                <p className="text-sm text-primary mb-2">Team Leader</p>
                <p className="text-xs text-gray-400 mb-2">PIET22CS003</p>
                <p className="text-sm text-gray-300">
                  Backend Development, UI/UX Design
                </p>
                <a
                  href="mailto:2022pietcsabhishree003@poornima.org"
                  className="text-xs text-primary hover:underline mt-2 inline-block"
                >
                  Contact
                </a>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">PS</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Prateek Kumar Singh</h3>
                <p className="text-sm text-primary mb-2">Frontend Developer</p>
                <p className="text-xs text-gray-400 mb-2">PIET22CS126</p>
                <p className="text-sm text-gray-300">
                  Frontend Development, Testing & Deployment
                </p>
                <a
                  href="mailto:2022pietcsprateek126@poornima.org"
                  className="text-xs text-primary hover:underline mt-2 inline-block"
                >
                  Contact
                </a>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">NB</span>
                </div>
                <h3 className="font-bold text-lg mb-1">Nitin Bairwa</h3>
                <p className="text-sm text-primary mb-2">
                  Database & Security
                </p>
                <p className="text-xs text-gray-400 mb-2">PIET22CS119</p>
                <p className="text-sm text-gray-300">
                  Database Management, Security & Authentication
                </p>
                <a
                  href="mailto:2022pietcsnitin119@poornima.org"
                  className="text-xs text-primary hover:underline mt-2 inline-block"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Institution Details */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-100">
              Academic Details
            </h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-primary-100 min-w-[180px]">
                  Institution:
                </span>
                <span>
                  Poornima Institute of Engineering & Technology, Jaipur
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-primary-100 min-w-[180px]">
                  University:
                </span>
                <span>Rajasthan Technical University, Kota</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-primary-100 min-w-[180px]">
                  Department:
                </span>
                <span>Computer Science & Engineering</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-primary-100 min-w-[180px]">
                  Team ID:
                </span>
                <span>PIET/CS/2025-26/4</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-primary-100 min-w-[180px]">
                  Academic Year:
                </span>
                <span>2025-26</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Guidance */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-100">
              Project Guidance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary-100 mb-1">
                  Project Guide
                </h3>
                <p className="text-gray-300">Mr. Vivek Saxena</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100 mb-1">
                  HOD, CSE Department
                </h3>
                <p className="text-gray-300">Dr. Anil Kumar</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100 mb-1">
                  Project Coordinator
                </h3>
                <p className="text-gray-300">Mr. Indra Kishor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="card-border mb-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-primary-100">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-primary-100 mb-2">
                  Frontend
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Next.js 15 (React 19)</li>
                  <li>• TailwindCSS 4</li>
                  <li>• TypeScript</li>
                  <li>• shadcn/ui Components</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary-100 mb-2">
                  Backend & Services
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Firebase (Auth & Firestore)</li>
                  <li>• Next.js API Routes</li>
                  <li>• Google Gemini AI</li>
                  <li>• Vapi AI (Voice Assistant)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link
            href="/"
            className="btn inline-flex items-center gap-2 px-8 py-3"
          >
            <span>Start Practicing</span>
            <span>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
