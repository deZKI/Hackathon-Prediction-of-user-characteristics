const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart: any) {
    const { ctx, chartArea: { top, bottom, left, right } } = chart;

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#444444';
    ctx.moveTo(left + 1, top);
    ctx.lineTo(right, top);
    ctx.lineTo(right, bottom);
    ctx.lineTo(left + 1, bottom);
    ctx.closePath();
    ctx.stroke();
  }
};

const chartTicksStyles = {
  id: 'ticksStyles',
  afterDraw: function(chart: any) {
    const { ctx, scales: { x, y } } = chart;
    const yMinTickValue = y.ticks[0].value;
    const yMaxTickValue = y.ticks[y.ticks.length - 1].value;
    const xPos = y.right;
    const yMinPos = y.getPixelForTick(0);
    const yMaxPos = y.getPixelForTick(y.ticks.length - 1);
    const xOffset = xPos + 20;

    ctx.save();
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.font = "500 16px 'Work Sans', sans-serif";
    ctx.strokeStyle = '#828282';
    ctx.fillText(yMinTickValue, xOffset, yMinPos - 10 );
    ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10 );
    x.ticks.forEach((tick: any, index: any, ticks: any) => {
      const value = tick.label;
      const xPos = x.getPixelForTick(index);
      const yPos = y.bottom;

      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'center';
      ctx.font = "700 16px 'Work Sans', sans-serif";
      ctx.strokeStyle = '#828282';
      ctx.fillText(value, xPos, yPos + 30);
    })
    ctx.restore();
  }
}

const chartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      drawBorder: false,
      offset: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      position: 'left',
      drawBorder: false,
      offset: false,
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false,
      },
      afterFit: function(axis: any) {
        axis.paddingTop = 2;
        axis.paddingBottom = 35;
        axis.paddingLeft = 105;
      },
    },
  }
}

export {
  chartAreaBorder,
  chartTicksStyles,
  chartOptions
}