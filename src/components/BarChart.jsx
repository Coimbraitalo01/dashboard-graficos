import { 
  BarChart as BChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Label
} from 'recharts';

const data = [
  { name: 'Jan', vendas: 4000, meta: 3000 },
  { name: 'Fev', vendas: 6800, meta: 5000 },
  { name: 'Mar', vendas: 3500, meta: 4000 },
  { name: 'Abr', vendas: 7200, meta: 6000 },
  { name: 'Mai', vendas: 4800, meta: 4500 },
];

const COLORS = {
  vendas: '#4361ee',
  meta: '#4cc9f0'
};

export default function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        
        <XAxis 
          dataKey="name" 
          tick={{ fill: '#555' }}
          tickMargin={10}
        >
          <Label 
            value="Meses" 
            offset={-10} 
            position="insideBottom" 
            fill="#666" 
          />
        </XAxis>
        
        <YAxis 
          tick={{ fill: '#555' }}
          tickFormatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`}
          width={90}
        >
          <Label 
            angle={-90} 
            value="Valores" 
            position="insideLeft" 
            fill="#666"
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
        
        <Tooltip 
          formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, value === value ? 'Vendas' : 'Meta']}
          labelFormatter={(label) => `Mês: ${label}`}
          contentStyle={{
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        />
        
        <Legend 
          verticalAlign="top"
          height={40}
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ paddingBottom: '20px' }}
        />
        
        <Bar 
          dataKey="vendas" 
          name="Vendas Reais"
          fill={COLORS.vendas}
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
        />
        
        <Bar 
          dataKey="meta" 
          name="Meta"
          fill={COLORS.meta}
          radius={[4, 4, 0, 0]}
          opacity={0.7}
          animationDuration={1800}
        />
      </BChart>
    </ResponsiveContainer>
  );
}