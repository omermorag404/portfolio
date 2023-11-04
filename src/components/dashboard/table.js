import { ArrowUpIcon } from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { tableData } from "./dataDashboard";

export const TableChart = () => (
  <Card>
    <Title>List of Swiss Federal Councillours</Title>
    <Table className="max-w-xxl mx-auto mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Units Sold</TableHeaderCell>
          <TableHeaderCell>Revenue</TableHeaderCell>
          <TableHeaderCell>Profit Margin</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((item) => (
          <TableRow key={item.product}>
            <TableCell>{item.product}</TableCell>
            <TableCell>
              <Text>{item.units}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.Revenue}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={ArrowUpIcon}>
                {item.profit}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);
