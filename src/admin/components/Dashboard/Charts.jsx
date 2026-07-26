import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReactLib from 'highcharts-react-official';
const HighchartsReact = HighchartsReactLib.default || HighchartsReactLib;
import './Charts.css';

const barOptions = {
  chart: { type: 'column', backgroundColor: 'transparent' },
  title: { text: '' },
  xAxis: { 
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    lineColor: '#e2e8f0',
    tickColor: '#e2e8f0',
  },
  yAxis: { 
    title: { text: '' },
    gridLineDashStyle: 'dash',
    gridLineColor: '#e2e8f0'
  },
  series: [{ 
    name: 'Orders', 
    data: [0, 4.0, 1.0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    color: '#8884d8',
    borderRadius: 4
  }],
  credits: { enabled: false },
  legend: { enabled: false }
};

const areaOptions = {
  chart: { type: 'area', backgroundColor: 'transparent' },
  title: { text: '' },
  xAxis: { 
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    lineColor: '#e2e8f0',
    tickColor: '#e2e8f0',
  },
  yAxis: { 
    title: { text: '' },
    gridLineDashStyle: 'dash',
    gridLineColor: '#e2e8f0'
  },
  series: [{ 
    name: 'Revenue', 
    data: [0, 1000, 767342, 500, 0, 0, 0, 0, 0, 0, 0, 0], 
    color: '#00C49F', 
    fillColor: { 
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 }, 
      stops: [ [0, 'rgba(0,196,159,0.3)'], [1, 'rgba(0,196,159,0)'] ] 
    } 
  }],
  credits: { enabled: false },
  legend: { enabled: false }
};

const pieOptions = {
  chart: { type: 'pie', backgroundColor: 'transparent' },
  title: { text: '' },
  plotOptions: { 
    pie: { 
      innerRadius: '0%', 
      colors: ['#8884d8', '#00C49F', '#FFBB28', '#FF8042', '#2c3e50'],
      dataLabels: { enabled: false },
      showInLegend: true
    } 
  },
  series: [{ 
    name: 'Balance', 
    data: [
      ['Handcrafted Wooden Products', 400], 
      ['Handcrafted Stone Products', 300], 
      ['Handcrafted Metal Products', 300], 
      ['Handcrafted Blue Pottery', 200], 
      ['Luxury clock', 100]
    ] 
  }],
  credits: { enabled: false },
  legend: { align: 'center', verticalAlign: 'bottom', layout: 'horizontal' }
};

const donutOptions = {
  chart: { type: 'pie', backgroundColor: 'transparent' },
  title: { text: '' },
  plotOptions: { 
    pie: { 
      innerRadius: '70%', 
      colors: ['#ff4b2b', '#00C49F', '#f2994a'],
      dataLabels: { enabled: false },
      showInLegend: true
    } 
  },
  series: [{ 
    name: 'Fulfillment', 
    data: [['Processing', 30], ['Shipped', 50], ['Completed', 20]] 
  }],
  credits: { enabled: false },
  legend: { align: 'center', verticalAlign: 'bottom', layout: 'horizontal' }
};

const Charts = () => {
  return (
    <div className="charts-container">
      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Monthly Order Distribution (2026)</h3>
        <div className="chart-inner">
          <HighchartsReact highcharts={Highcharts} options={barOptions} />
        </div>
      </div>

      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Revenue Growth Trend (?)</h3>
        <div className="revenue-summary">
          <h2>$767,342 <span>Year to Date</span></h2>
        </div>
        <div className="chart-inner">
          <HighchartsReact highcharts={Highcharts} options={areaOptions} />
        </div>
      </div>

      <div className="chart-row">
        <div className="chart-wrapper half-width">
          <h3 className="chart-title">Product Cat-Wise Balance</h3>
          <div className="chart-inner flex-center" style={{display: 'block'}}>
            <HighchartsReact highcharts={Highcharts} options={pieOptions} />
          </div>
        </div>

        <div className="chart-wrapper half-width">
          <h3 className="chart-title">Fulfillment Status</h3>
          <div className="chart-inner flex-center" style={{display: 'block'}}>
            <HighchartsReact highcharts={Highcharts} options={donutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
