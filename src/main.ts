import checkBossBaby from "./BossBabyRevenge";
import monitorTransaction, {
  broadcastTransaction,
  checkTransactionStatus,
} from "./TransactionBroadcastingAndMonitoringClient";
import findChickenRescue from "./SupermanIsChickenRescue";

async function main() {
  console.log("Problem 1: Boss Baby's Revenge");
  console.log(checkBossBaby("SRSSRRR"));
  console.log(checkBossBaby("RSSRR"));
  console.log(checkBossBaby("SSSRRRRS"));
  console.log(checkBossBaby("SRRSSR"));
  console.log(checkBossBaby("SSRSRRR"));
  console.log(checkBossBaby("sSRsRrR"));
  console.log(checkBossBaby("   sSRsRrR   "));
  try {
    console.log(checkBossBaby(" rS12SS "));
  } catch (err) {
    console.error(err);
  }
  console.log("\n");

  console.log("Problem 2: Superman's Chicken Rescue");
  console.log(findChickenRescue(5, 5, [2, 5, 10, 12, 15]));
  console.log(findChickenRescue(6, 10, [1, 11, 30, 34, 35, 37]));

  try {
    const result = findChickenRescue(6, 10, [1, 11, 30, 34, 35, 1000000001]);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  console.log("\n");

  console.log("Problem 3: Transaction Broadcasting and Monitoring Client");
  console.log("call");
  await monitorTransaction("ETH", 4500, 1678912345);
  await monitorTransaction("BTC", 100000, 1678912345);
}

// call main function
main();
