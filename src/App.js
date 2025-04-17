import React from "react";
import PresidentCard from "./components/PresidentCard";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/images/flag.jpg')",
      }}
    >
      <div className="min-h-screen">
        <h1 className="text-center text-5xl font-extrabold pt-12 drop-shadow-lg">
          🇺🇸 Kennedy vs. Johnson Reforms
        </h1>
        <p className="text-center text-xl pb-8 text-white/80">
          A Legacy of Leadership, Vision, and Reform
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 py-8">
          <PresidentCard
            name="John F. Kennedy"
            image="/images/kennedy.jpg"
            details={{
              becamePresident: "Elected in 1960 after defeating Nixon.",
              civilRights: "Proposed civil rights legislation but faced resistance.",
              economy: "Pushed for economic growth through tax cuts.",
              workersRights: "Supported minimum wage increases.",
              healthcare: "Introduced Medicare proposal, but not passed.",
              education: "Increased federal aid to education.",
              domesticAchievements:
                "Established the Peace Corps, supported NASA's Apollo program, and encouraged innovation.",
              foreignPolicy:
                "Managed the Cuban Missile Crisis, supported containment of communism, and began U.S. involvement in Vietnam.",
              leadershipStyle:
                "Charismatic, inspirational, and visionary; appealed to youth and national pride.",
              legacy:
                "Inspired a generation with 'New Frontier' vision and commitment to space exploration.",
              quote: `"Ask not what your country can do for you — ask what you can do for your country."`,
            }}
          />

          <PresidentCard
            name="Lyndon B. Johnson"
            image="/images/johnson.jpg"
            details={{
              becamePresident: "Became president after JFK’s assassination in 1963.",
              civilRights: "Signed Civil Rights Act of 1964.",
              economy: "Launched War on Poverty, strong growth.",
              workersRights: "Strengthened labor laws.",
              healthcare: "Passed Medicare and Medicaid.",
              education: "Passed Elementary and Secondary Education Act.",
              domesticAchievements:
                "Passed the Voting Rights Act, created HUD, and introduced the Head Start program.",
              foreignPolicy:
                "Escalated the Vietnam War, leading to widespread protest and national division.",
              leadershipStyle:
                "Strong-willed, persuasive, and politically experienced; used 'The Johnson Treatment' to influence Congress.",
              legacy:
                "Transformed society through Great Society programs, though Vietnam policy remains controversial.",
              quote: `"We have talked long enough in this country about equal rights. It is time now to write the next chapter — and to write it in the books of law."`,
            }}
          />
        </div>

        <Footer name="Aria" partner="Dat" />
      </div>
    </div>
  );
}

export default App;
