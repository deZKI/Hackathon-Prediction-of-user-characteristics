type TDoughnutDataset = {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
  borderWidth: number;
  cutout: string;
}

export type TDoughnutData = {
  datasets: TDoughnutDataset[];
}