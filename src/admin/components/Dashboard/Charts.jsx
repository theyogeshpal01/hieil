import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReactLib from 'highcharts-react-official';
const HighchartsReact = HighchartsReactLib.default || HighchartsReactLib;
import api from '../../config/api';
import './Charts.css';

const Charts = () => {
  const [data, setData] = useState({
    monthlyOrders: [0,0,0,0,0,0,0,0,0,0,0,0],
    monthlyRevenue: [0,0,0,0,0,0,0,0,0,0,0,0],
    totalYearRevenue: 0,
    categoryDistribution: [['No Data', 1]],
    fulfillmentDistribution: [['No Data', 1]]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/dashboard/charts')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
      data: data.monthlyOrders, 
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
      data: data.monthlyRevenue, 
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
      name: 'Products', 
      data: data.categoryDistribution
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
        colors: ['#ff4b2b', '#00C49F', '#f2994a', '#8884d8'],
        dataLabels: { enabled: false },
        showInLegend: true
      } 
    },
    series: [{ 
      name: 'Orders', 
      data: data.fulfillmentDistribution
    }],
    credits: { enabled: false },
    legend: { align: 'center', verticalAlign: 'bottom', layout: 'horizontal' }
  };

  if (loading) return <div style={{textAlign: 'center', padding: '20px', color: '#666'}}>Loading charts...</div>;

  return (
    <div className="charts-container">
      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Monthly Order Distribution ({new Date().getFullYear()})</h3>
        <div className="chart-inner">
          <HighchartsReact highcharts={Highcharts} options={barOptions} />
        </div>
      </div>

      <div className="chart-wrapper full-width">
        <h3 className="chart-title">Revenue Growth Trend ({new Date().getFullYear()})</h3>
        <div className="revenue-summary">
          <h2>${data.totalYearRevenue.toLocaleString()} <span>Year to Date</span></h2>
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
