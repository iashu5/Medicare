import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["Cancer", "Diabetes", "Hypertension", "Asthma", "Arthritis", "Alzheimer's"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "disease", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;

export const mockBarData = [
  {
    country: "AD",
    Cancer: 137,
    Diabetes: 96,
    Hypertension: 72,
    Asthma: 140,
    Arthritis: 88,
    "Alzheimer's": 50,
  },
  {
    country: "AE",
    Cancer: 55,
    Diabetes: 28,
    Hypertension: 58,
    Asthma: 29,
    Arthritis: 123,
    "Alzheimer's": 44,
  },
  {
    country: "AF",
    Cancer: 109,
    Diabetes: 23,
    Hypertension: 34,
    Asthma: 152,
    Arthritis: 76,
    "Alzheimer's": 90,
  },
  {
    country: "AG",
    Cancer: 133,
    Diabetes: 52,
    Hypertension: 43,
    Asthma: 83,
    Arthritis: 66,
    "Alzheimer's": 23,
  },
  {
    country: "AI",
    Cancer: 81,
    Diabetes: 80,
    Hypertension: 112,
    Asthma: 35,
    Arthritis: 56,
    "Alzheimer's": 78,
  },
  {
    country: "AL",
    Cancer: 66,
    Diabetes: 111,
    Hypertension: 167,
    Asthma: 18,
    Arthritis: 44,
    "Alzheimer's": 33,
  },
  {
    country: "AM",
    Cancer: 80,
    Diabetes: 47,
    Hypertension: 158,
    Asthma: 49,
    Arthritis: 98,
    "Alzheimer's": 22,
  },
];
