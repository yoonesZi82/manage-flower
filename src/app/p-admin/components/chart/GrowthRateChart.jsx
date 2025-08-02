"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت ماژول‌های Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  datasets: [
    {
      label: "فروش 2023",
      data: [65000, 59000, 80000, 81000, 56000, 55000, 70000],
      backgroundColor: "#e2dce5",
    },
    {
      label: "فروش 2024",
      data: [70000, 60000, 85000, 90000, 58000, 57000, 72000],
      backgroundColor: "#513d4d",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "مقایسه فروش سالانه",
      color: "#513d4d",
      font: {
        size: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${
            tooltipItem.dataset.label
          }: ${tooltipItem.raw.toLocaleString()} تومان`,
      },
    },
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      grid: {
        color: "#513d4d",
      },
      ticks: {
        font: {
          size: 14,
        },
        color: "#513d4d",
      },
    },
    y: {
      grid: {
        color: "#513d4d",
      },
      title: {
        display: true,
        text: "میزان فروش (تومان)",
        color: "#513d4d",
        font: {
          size: 16,
        },
      },
      ticks: {
        font: {
          size: 14,
        },
        color: "#513d4d",
        callback: (value) => `${value.toLocaleString()} تومان`,
      },
    },
  },
};

const GrowthRateChart = () => {
  return <Bar data={data} options={options} />;
};

export default GrowthRateChart;
