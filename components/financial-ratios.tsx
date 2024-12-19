import { Card } from "@/components/ui/card";

export default function FinancialRatios() {
  const financialData = [
    {
      id: 1,
      title: "P/E Ratio",
      value: "45",
      trend: "up",
      change: "12%",
      period: "This Month",
      icon: "📊",
    },
    {
      id: 2,
      title: "ROE",
      value: "23.8%",
      trend: "up",
      change: "21%",
      period: "First Quarter",
      icon: "📈",
    },
    {
      id: 3,
      title: "Debt to equity",
      value: "2.3",
      trend: "down",
      change: "10%",
      period: "This Month",
      icon: "⏳",
    },
    {
      id: 4,
      title: "Gross Margin",
      value: "49.1%",
      trend: "up",
      change: "37%",
      period: "This Quarter",
      icon: "📊",
    },
    {
      id: 5,
      title: "Net-Profit",
      value: "15%",
      trend: "up",
      change: "19%",
      period: "This Quarter",
      icon: "💰",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-6">Financial ratios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {financialData.map((item) => (
          <Card
            key={item.id}
            className="bg-zinc-900 text-white rounded-lg p-4 flex flex-col gap-2 border border-zinc-800"
          >
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-300 text-black">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium">{item.title}</h3>
            </div>
            <div className="text-3xl font-bold">{item.value}</div>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <div
                className={`text-sm ${
                  item.trend === "up" ? "text-lime-400" : "text-red-400"
                }`}
              >
                {item.trend === "up" ? "▲" : "▼"} {item.change}
              </div>
              <span>{item.period}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
