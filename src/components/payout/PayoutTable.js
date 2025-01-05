const PayoutTable = ({ data }) => (
    <table className="border-collapse border border-gray-500 w-full">
      <thead>
        <tr>
          <th className="border border-gray-500">Author</th>
          <th className="border border-gray-500">Articles</th>
          <th className="border border-gray-500">Rate</th>
          <th className="border border-gray-500">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-gray-500">{row.author}</td>
            <td className="border border-gray-500">{row.articles}</td>
            <td className="border border-gray-500">{row.rate}</td>
            <td className="border border-gray-500">{row.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default PayoutTable;  