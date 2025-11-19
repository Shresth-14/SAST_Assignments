import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartBox({ planets, property }) {
  const labels = planets.map((p) => p.name);
  const values = planets.map((p) => p[property]);

  const colors = [
    "rgba(255, 183, 197, 0.8)",  
    "rgba(186, 230, 253, 0.8)",  
    "rgba(204, 213, 255, 0.8)",  
    "rgba(167, 243, 208, 0.8)", 
    "rgba(254, 249, 195, 0.8)",  
    "rgba(221, 214, 254, 0.8)",  
    "rgba(196, 181, 253, 0.8)", 
    "rgba(191, 219, 254, 0.8)", 
    "rgba(252, 207, 207, 0.8)", 
  ];

  const data = {
    labels,
    datasets: [
      {
        label: property.toUpperCase(),
        data: values,
        backgroundColor: colors.slice(0, planets.length),
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white", 
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "white" },
      },
      tooltip: {
        backgroundColor: "rgba(20,20,30,0.8)",
        bodyColor: "white",
        titleColor: "#d9d9ff",
        borderColor: "white",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Bar data={data} options={options} />
    </div>
  );
}
