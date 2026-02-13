import { adminDB } from "@/firebase/admin";
import { NextResponse } from "next/server";

// Force this route to be dynamic (not pre-rendered at build time)
export const dynamic = "force-dynamic";

// Sample interview data
const sampleInterviews = [
  {
    interviewType: "Mixed (Behavioral & Technical)",
    jobRole: "Frontend Developer",
    experienceLevel: "Entry Level",
    techStack: ["react", "javascript", "html5", "css3", "git"],
    questionCount: 8,
    questions: [
      "Can you tell me about yourself and your background in frontend development?",
      "What motivated you to pursue a career in frontend development?",
      "Explain the difference between let, const, and var in JavaScript.",
      "What is the Virtual DOM in React and how does it work?",
      "Describe a challenging project you worked on. What was your role and how did you overcome obstacles?",
      "How do you ensure your web applications are responsive and accessible?",
      "What are React Hooks and why are they useful?",
      "Where do you see yourself in the next 2-3 years as a frontend developer?",
    ],
    userId: "system",
    coverImageURL: "/amazon.png",
    finalized: true,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    interviewType: "Technical",
    jobRole: "Full Stack Developer",
    experienceLevel: "Mid Level",
    techStack: ["nodejs", "express", "mongodb", "react", "typescript"],
    questionCount: 10,
    questions: [
      "Explain the event loop in Node.js and how it handles asynchronous operations.",
      "What is the difference between SQL and NoSQL databases? When would you use each?",
      "How do you handle authentication and authorization in a Node.js application?",
      "Explain the concept of middleware in Express.js with examples.",
      "What are the benefits of using TypeScript over JavaScript?",
      "How do you optimize the performance of a React application?",
      "Describe the RESTful API design principles you follow.",
      "What is CORS and how do you handle it in your applications?",
      "Explain the difference between JWT and session-based authentication.",
      "How do you handle error handling and logging in production applications?",
    ],
    userId: "system",
    coverImageURL: "/facebook.png",
    finalized: true,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    interviewType: "Behavioral",
    jobRole: "Software Engineer",
    experienceLevel: "Entry Level",
    techStack: ["python", "git", "docker"],
    questionCount: 7,
    questions: [
      "Tell me about a time when you had to learn a new technology quickly. How did you approach it?",
      "Describe a situation where you disagreed with a team member. How did you resolve it?",
      "Can you share an example of a project that didn't go as planned? What did you learn?",
      "How do you prioritize tasks when working on multiple projects simultaneously?",
      "Tell me about a time when you received constructive criticism. How did you respond?",
      "Describe your ideal work environment and team culture.",
      "What are your strengths and weaknesses as a software engineer?",
    ],
    userId: "system",
    coverImageURL: "/spotify.png",
    finalized: true,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    interviewType: "Technical",
    jobRole: "Backend Developer",
    experienceLevel: "Mid Level",
    techStack: ["nodejs", "postgresql", "redis", "docker", "aws"],
    questionCount: 9,
    questions: [
      "Explain the difference between SQL JOIN types (INNER, LEFT, RIGHT, FULL).",
      "How do you implement caching strategies in a backend application?",
      "What is database indexing and when should you use it?",
      "Describe your experience with microservices architecture.",
      "How do you handle database migrations in production?",
      "Explain the concept of connection pooling in databases.",
      "What are the best practices for API versioning?",
      "How do you ensure data consistency in distributed systems?",
      "Describe your approach to writing unit tests for backend code.",
    ],
    userId: "system",
    coverImageURL: "/reddit.png",
    finalized: true,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    interviewType: "Mixed (Behavioral & Technical)",
    jobRole: "DevOps Engineer",
    experienceLevel: "Senior Level",
    techStack: ["docker", "kubernetes", "aws", "terraform", "jenkins"],
    questionCount: 8,
    questions: [
      "Describe your experience with CI/CD pipelines. What tools have you used?",
      "How do you approach infrastructure as code? What are the benefits?",
      "Explain the difference between Docker containers and virtual machines.",
      "Tell me about a time when you had to troubleshoot a production outage. What was your process?",
      "How do you implement monitoring and alerting in cloud environments?",
      "What is Kubernetes and what problems does it solve?",
      "Describe your experience with cloud platforms (AWS, Azure, GCP).",
      "How do you ensure security in DevOps practices?",
    ],
    userId: "system",
    coverImageURL: "/pinterest.png",
    finalized: true,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    interviewType: "Technical",
    jobRole: "Data Scientist",
    experienceLevel: "Entry Level",
    techStack: ["python", "pandas", "numpy", "scikit-learn", "jupyter"],
    questionCount: 8,
    questions: [
      "Explain the difference between supervised and unsupervised learning.",
      "What is overfitting and how do you prevent it?",
      "Describe the steps in a typical data science project workflow.",
      "What is the difference between classification and regression?",
      "Explain what a confusion matrix is and how to interpret it.",
      "What are some common data preprocessing techniques you use?",
      "How do you handle missing data in a dataset?",
      "What evaluation metrics do you use for classification problems?",
    ],
    userId: "system",
    coverImageURL: "/quora.png",
    finalized: true,
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export async function GET() {
  try {
    console.log("🌱 Starting to seed interviews...");

    // Check if interviews already exist
    const existingInterviews = await adminDB
      .collection("interviews")
      .where("userId", "==", "system")
      .limit(1)
      .get();

    if (!existingInterviews.empty) {
      return NextResponse.json(
        {
          success: false,
          message: "Sample interviews already exist. Delete them first if you want to re-seed.",
        },
        { status: 400 }
      );
    }

    // Add all sample interviews
    const promises = sampleInterviews.map((interview) =>
      adminDB.collection("interviews").add(interview)
    );

    await Promise.all(promises);

    console.log(`✅ Successfully seeded ${sampleInterviews.length} interviews`);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${sampleInterviews.length} sample interviews!`,
      count: sampleInterviews.length,
    });
  } catch (error) {
    console.error("❌ Error seeding interviews:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to seed interviews",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
