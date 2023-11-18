import { useRouter } from "next/router"
const steps = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Summary", url: "/summary" },
  { step: 3, name: "Data & Total", url: "/total" },
];

export const Steps = () => {
  const route = useRouter()
  return (
    <div className="flex justify-between mb-5">
      {steps.map((step) => (
        <button 
        onClick={()=>{
          route.push(step.url)
        }}
        className="text-3xl font-bold" key={step.step}>{step.name}</button>
      ))}
    </div>
  );
};
