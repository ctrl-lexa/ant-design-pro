import { GridContent, PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Statistic } from 'antd';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ShopOutlined,
  BankOutlined,
  TeamOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { Column, Pie, Line, Area } from '@ant-design/plots';
import React from 'react';

const Dashboard: React.FC = () => {
  // Data untuk chart penjualan
  const salesData = [
    { month: 'Jan', value: 12500000 },
    { month: 'Feb', value: 15200000 },
    { month: 'Mar', value: 18300000 },
    { month: 'Apr', value: 16800000 },
    { month: 'May', value: 21400000 },
    { month: 'Jun', value: 25600000 },
    { month: 'Jul', value: 23100000 },
    { month: 'Aug', value: 27500000 },
    { month: 'Sep', value: 29800000 },
    { month: 'Okt', value: 31200000 },
    { month: 'Nov', value: 28900000 },
    { month: 'Des', value: 35400000 },
  ];

  // Data untuk pie chart kategori produk
  const categoryData = [
    { type: 'Makanan', value: 35 },
    { type: 'Minuman', value: 25 },
    { type: 'Kebutuhan Rumah', value: 20 },
    { type: 'Elektronik', value: 12 },
    { type: 'Lainnya', value: 8 },
  ];

  // Data untuk line chart pinjaman
  const loanData = [
    { month: 'Jan', value: 42 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 48 },
    { month: 'Apr', value: 52 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 58 },
    { month: 'Jul', value: 62 },
    { month: 'Aug', value: 65 },
    { month: 'Sep', value: 68 },
    { month: 'Okt', value: 71 },
    { month: 'Nov', value: 74 },
    { month: 'Des', value: 78 },
  ];

  // Data untuk area chart anggota
  const memberData = [
    { month: 'Jan', value: 180 },
    { month: 'Feb', value: 195 },
    { month: 'Mar', value: 205 },
    { month: 'Apr', value: 215 },
    { month: 'May', value: 225 },
    { month: 'Jun', value: 230 },
    { month: 'Jul', value: 238 },
    { month: 'Aug', value: 242 },
    { month: 'Sep', value: 248 },
    { month: 'Okt', value: 255 },
    { month: 'Nov', value: 262 },
    { month: 'Des', value: 270 },
  ];

  // Config untuk Column Chart (Penjualan)
  const salesConfig = {
    data: salesData,
    xField: 'month',
    yField: 'value',
    label: {
      position: 'top' as const,
      style: {
        fill: '#000000',
        opacity: 0.6,
      },
      formatter: (datum: any) => {
        return `${(datum.value / 1000000).toFixed(1)}M`;
      },
    },
    meta: {
      value: {
        alias: 'Penjualan (Rp)',
      },
    },
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    yAxis: {
      label: {
        formatter: (v: string) => `${parseInt(v) / 1000000}M`,
      },
    },
  };

  // Config untuk Pie Chart (Kategori)
  const categoryConfig = {
    appendPadding: 10,
    data: categoryData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  // Config untuk Line Chart (Pinjaman)
  const loanConfig = {
    data: loanData,
    xField: 'month',
    yField: 'value',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  // Config untuk Area Chart (Anggota)
  const memberConfig = {
    data: memberData,
    xField: 'month',
    yField: 'value',
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
    },
  };

  return (
    <PageContainer>
      <GridContent>
        {/* Statistik Cards */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total Anggota"
                value={270}
                prefix={<TeamOutlined />}
                suffix="orang"
                valueStyle={{ color: '#1890ff' }}
              />
              <div style={{ marginTop: 8 }}>
                <ArrowUpOutlined style={{ color: '#3f8600' }} /> 12%{' '}
                <span style={{ fontSize: 12, color: '#999' }}>vs bulan lalu</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Penjualan Bulan Ini"
                value={35400000}
                prefix={<ShopOutlined />}
                valueStyle={{ color: '#52c41a' }}
                precision={0}
              />
              <div style={{ marginTop: 8 }}>
                <ArrowUpOutlined style={{ color: '#3f8600' }} /> 23%{' '}
                <span style={{ fontSize: 12, color: '#999' }}>vs bulan lalu</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Pinjaman Aktif"
                value={78}
                prefix={<BankOutlined />}
                suffix="pinjaman"
                valueStyle={{ color: '#faad14' }}
              />
              <div style={{ marginTop: 8 }}>
                <ArrowUpOutlined style={{ color: '#3f8600' }} /> 5%{' '}
                <span style={{ fontSize: 12, color: '#999' }}>vs bulan lalu</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total Pinjaman"
                value={850000000}
                prefix={<DollarOutlined />}
                valueStyle={{ color: '#f5222d' }}
                precision={0}
              />
              <div style={{ marginTop: 8 }}>
                <ArrowDownOutlined style={{ color: '#cf1322' }} /> 8%{' '}
                <span style={{ fontSize: 12, color: '#999' }}>vs bulan lalu</span>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Charts Row 1 */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col xs={24} lg={16}>
            <Card title="Grafik Penjualan Tahunan" bordered={false}>
              <Column {...salesConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Kategori Produk Terlaris" bordered={false}>
              <Pie {...categoryConfig} />
            </Card>
          </Col>
        </Row>

        {/* Charts Row 2 */}
        <Row gutter={16}>
          <Col xs={24} lg={12}>
            <Card title="Pertumbuhan Pinjaman" bordered={false}>
              <Line {...loanConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card title="Pertumbuhan Anggota" bordered={false}>
              <Area {...memberConfig} />
            </Card>
          </Col>
        </Row>
      </GridContent>
    </PageContainer>
  );
};

export default Dashboard;
