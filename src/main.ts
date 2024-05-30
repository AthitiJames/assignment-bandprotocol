import checkBossBaby from "./BossBabyRevenge";
import transactionStatusMonitoring from "./TransactionBroadcastingAndMonitoringClient";
import findChickenRescue from "./SupermanIsChickenRescue";

function main() {
  const result: string = checkBossBaby("SSRSRRRS");
  console.log(result);

  try {
    const result = findChickenRescue(6, 10, [1, 11, 30, 34, 35, 1000000001]);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

// call main function
main();
// const result = findChickenRescue(5, 5, [2, 5, 10, 12, 15]);
// transactionStatusMonitoring();
