import React from "react";

export default function PresidentCard({ name, image, details }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl text-white rounded-3xl border border-white/20 p-6 w-full md:w-[40%] shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-[1.03] transition duration-500">
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-lg h-60 w-auto object-contain drop-shadow-md"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-center text-white">{name}</h2>
      <ul className="list-disc pl-4 space-y-2 text-base text-white/90">
        <li><strong>Became President:</strong> {details.becamePresident}</li>
        <li><strong>Civil Rights:</strong> {details.civilRights}</li>
        <li><strong>Economy:</strong> {details.economy}</li>
        <li><strong>Workers' Rights:</strong> {details.workersRights}</li>
        <li><strong>Healthcare:</strong> {details.healthcare}</li>
        <li><strong>Education:</strong> {details.education}</li>
        <li><strong>Domestic Achievements:</strong> {details.domesticAchievements}</li>
        <li><strong>Foreign Policy:</strong> {details.foreignPolicy}</li>
        <li><strong>Leadership Style:</strong> {details.leadershipStyle}</li>
        <li><strong>Legacy & Impact:</strong> {details.legacy}</li>
        <li><strong>Quote:</strong> <em className="text-white/80">{details.quote}</em></li>
      </ul>
    </div>
  );
}
