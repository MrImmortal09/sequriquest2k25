"use client";

interface LeaderboardCardProps {
  rank: number;
  username: string;
  solved: number;
  score: number;
  time: string;
}

export default function LeaderboardCard({rank, username, solved, score, time }: LeaderboardCardProps) {
  return (
    <div className="bg-black border border-green-600 shadow-md p-6 rounded-lg text-green-400 font-mono text-lg flex justify-between">
      <span className="text-green-300">#{rank}</span>
      <span className="text-green-400">{username}</span>
      <span className="text-green-500">{solved} </span>
      <span className="text-green-500">{score} </span>
      <span className="text-green-600">{time}</span>
    </div>
  );
}
