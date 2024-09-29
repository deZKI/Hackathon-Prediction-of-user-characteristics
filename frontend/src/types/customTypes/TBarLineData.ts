type TBarLineDataset = {
  data: (number | null)[];
  backgroundColor: string;
  hoverBackgroundColor: string;
  categoryPercentage: number;
  yAxisID: string;
}

export type TBarLineData = {
  labels: string[];
  datasets: TBarLineDataset[];
}