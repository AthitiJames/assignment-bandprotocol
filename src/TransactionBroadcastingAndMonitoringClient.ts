/**
 *
 * @param symbol
 * @param price
 * @param timestamp
 * @return tx_hash
 */
export async function broadcastTransaction(
  symbol: string,
  price: number,
  timestamp: number
) {
  // construct payload for fetching API
  const payload = {
    symbol: symbol,
    price: price,
    timestamp: timestamp,
  };

  try {
    // fetch API with URL and body and use the method POST
    const response = await fetch(
      "https://mock-node-wgqbnxruha-as.a.run.app/broadcast",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // check if status is not ok
    if (!response.ok) {
      // will throw error network
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // if the status of fetch is ok, will convert data from response to JSON object
    const data = await response.json();

    // then return tx_hash
    return data.tx_hash;

    // if have error between try
  } catch (err) {
    // will log error
    console.error(`There has been a problem with your fetch operation: ${err}`);
  }
}

/**
 *
 * @param txHash
 * @return transaction status
 */
export async function checkTransactionStatus(txHash: string) {
  try {
    // fetch API with URL and txHash and use the method GET
    const response = await fetch(
      `https://mock-node-wgqbnxruha-as.a.run.app/check/${txHash}`
    );

    // convert data from response to JSON object
    const status = await response.json();

    // then return status
    return status.tx_status;

    // if have error between try
  } catch (err) {
    // will log error
    console.error(`Broadcasting Transaction: ${err}`);
  }
}

/**
 *
 * @param symbol
 * @param price
 * @param timestamp
 */
export default async function monitorTransaction(
  symbol: string,
  price: number,
  timestamp: number
) {
  try {
    // call function broadcastTransaction to get txHash
    const txHash = await broadcastTransaction(symbol, price, timestamp);
    console.log("Transaction hash:", txHash);

    // construct status of transaction
    let status = "";

    // loop until the status is CONFIRMED or FAILED
    while (status != "CONFIRMED" && status != "FAILED") {
      // set status of transaction
      status = await checkTransactionStatus(txHash);
      console.log("Transaction status:", status);

      // check if status is PENDING
      if (status == "PENDING") {
        // then set timeout 5 seconds
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // if not, will stop this loop
      } else break;
    }

    // check status is CONFIRMED
    if (status === "CONFIRMED") {
      // then log transaction confirmed!
      console.log("Transaction Confirmed!");
      // if not, then check status is failed
    } else if (status === "FAILED") {
      // then log transaction failed!
      console.log("Transaction Failed!");
      // if not, will log status of transaction
    } else {
      console.log("Transaction Status:", status);
    }

    // if have error between try
  } catch (err) {
    // then loging error
    console.error(`Error During Transaction Monitoring: ${err}`);
  }
}

async function callMonitorTransaction() {
  console.log("Problem 3: Transaction Broadcasting and Monitoring Client");
  console.log("IN");
  await monitorTransaction("ETH", 4500, 1678912345);
  await monitorTransaction("BTC", 100000, 1678912345);
}

callMonitorTransaction();
