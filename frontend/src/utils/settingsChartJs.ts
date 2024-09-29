const barLineChartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart: any) {
    const { ctx, chartArea: { top, bottom, left, right } } = chart;

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#888888';
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.moveTo(left + 1, top);
    ctx.lineTo(right, top);
    ctx.lineTo(right, bottom);
    ctx.lineTo(left + 1, bottom);
    ctx.closePath();
    ctx.stroke();
  }
};

const barLineChartTicksStyles = {
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
    ctx.font = "500 14px 'Work Sans', sans-serif";
    ctx.fillStyle = '#999999';
    ctx.fillText(yMinTickValue, xOffset, yMinPos - 10 );
    ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10 );

    x.ticks.forEach((tick: any, index: any) => {
      const value = tick.label;
      const xPos = x.getPixelForTick(index);
      const yPos = y.bottom;

      ctx.textBaseline = 'bottom';
      ctx.textAlign = 'center';
      ctx.font = "600 14px 'Work Sans', sans-serif";
      ctx.fillStyle = '#999999';
      ctx.fillText(value, xPos, yPos + 30);
    });
    ctx.restore();
  }
};

const doughnutTextInCenter: any = {
  id: 'textInCenter',
  beforeDraw: function(chart: any) {
    const { width, height, ctx } = chart;

    const text = '1056 зрителей';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.save();
    ctx.font = "400 14px 'Open Sans', sans-serif";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, textX, textY);
    ctx.restore();
  },
}

const barLineChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 10,
      bottom: 10,
    }
  },
  scales: {
    x: {
      drawBorder: false,
      offset: false,
      grid: {
        display: true,
        color: '#444444',
        lineWidth: 0.5,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        display: false
      },
      barPercentage: 0.8,
      categoryPercentage: 0.9,
    },
    y: {
      position: 'right',
      drawBorder: false,
      offset: false,
      grid: {
        color: '#444444',
        lineWidth: 0.5,
        drawBorder: false,
        drawTicks: false
      },
      ticks: {
        padding: 10
      },
      afterFit: function(axis: any) {
        axis.paddingTop = 10;
        axis.paddingBottom = 30;
      },
    },
  },
  elements: {
    line: {
      borderColor: '#4A90E2',
      borderWidth: 2,
      tension: 0.4,
    },
    point: {
      backgroundColor: '#4A90E2',
      radius: 5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, .5)',
      titleFont: {
        family: "'Work Sans', sans-serif",
        size: 14,
        weight: 'bold',
      },
      bodyFont: {
        family: "'Work Sans', sans-serif",
        size: 12,
      },
      padding: 10,
      cornerRadius: 12,
    }
  }
}

const doughnutChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
      hoverBorderWidth: 0,
      hoverOffset: 5,
    },
  },
};

export {
  barLineChartAreaBorder,
  barLineChartTicksStyles,
  doughnutTextInCenter,
  barLineChartOptions,
  doughnutChartOptions,
}