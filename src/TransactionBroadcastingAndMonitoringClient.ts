export default async function transactionStatusMonitoring() {
  const a = await fetch("https://mock-node-wqgbnxruha-as.a.run.app/broadcast", {
    method: "POST",
    body: JSON.stringify({
      symbol: "ETH",
      price: 4500,
      timestamp: 1678912345,
    }),
  });

  console.log(a);
}
