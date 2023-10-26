import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { faker } from "@faker-js/faker";

const DummyTable = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Invoices</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV401</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              ${faker.commerce.price()}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV512</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-yellow-500">Pending</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV872</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-red-500">Rejected</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV531</TableCell>
            <TableCell>{faker.commerce.productName()}</TableCell>
            <TableCell className="text-emerald-500">Paid</TableCell>
            <TableCell>Cash</TableCell>
            <TableCell className="text-right">${faker.commerce.price()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DummyTable;
