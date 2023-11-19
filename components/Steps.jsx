import { useRouter } from "next/router";
const steps = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Summary", url: "/summary" },
  { step: 3, name: "Data & Total", url: "/total" },
];

export const Steps = () => {
  const route = useRouter();

  const progressBar = () => {
    let value;
    if (route.pathname === "/") {
      value = 2;
    } else if (route.pathname === "/summary") {
      value = 50;
    } else {
      value = 100;
    }

    return value;
  };

  return (
    <div 
    // id="menu-progress-bar"
    >
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            onClick={() => {
              route.push(step.url);
            }}
            className="text-3xl font-bold"
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white`}
          style={{
            width: `${progressBar()}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
