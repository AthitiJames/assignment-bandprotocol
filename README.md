# ASSIGNMENT BAND PROTOCOL

# Installation

- Install [Node.js](https://nodejs.org/en/) version 20.8.0

# Getting started

- Clone the repository

```
git clone https://github.com/AthitiJames/assignment-bandprotocol.git
```

- Install dependencies

```
cd assignment-bandprotocol
npm install
```

- Run all the project

```
npm run dev
```

# Problem 1: Boss Baby's Revenge

### Usage

```
import checkBossBaby from "./BossBabyRevenge";

const result: string = checkBossBaby("SRSSRRR"); //  Good boy
const result: string = checkBossBaby("RSSRR"); // Bad boy
const result: string = checkBossBaby("SSSRRRRS"); // Bad boy
const result: string = checkBossBaby("SRRSSR"); // Bad boy
const result: string = checkBossBaby("SSRSRRR"); // Good boy
const result: string = checkBossBaby("sSRsRrR"); // Good boy 
const result: string = checkBossBaby("   sSRsRrR   "); // Good boy
const result: string = checkBossBaby(" rS12SS ") // error
```

### Run script

```
ts-node src\BossBabyRevenge.ts
```

# Problem 2: Superman's Chicken Rescue

### Usage

```
import findChickenRescue from "./SupermanIsChickenRescue";

const result = findChickenRescue(5, 5, [2, 5, 10, 12, 15]); // 2
const result = findChickenRescue(6, 10, [1, 11, 30, 34, 35, 37]); // 4
const result = findChickenRescue(10, 5, [9, 7, 2, 6, 5, 2, 6, 5, 4, 3]); // 8
const result = findChickenRescue(6, 10, [1, 11, 30, 34, 35, 1000000001]); // error
```

### Run script

```
ts-node src\SupermanIsChickenRescue.ts
```

# Problem 3: Transaction Broadcasting and Monitoring Client

### Run script

```
ts-node src\TransactionBroadcastingAndMonitoringClient.ts
```
### Usage

```
import monitorTransaction, {
  broadcastTransaction,
  checkTransactionStatus,
} from "./TransactionBroadcastingAndMonitoringClient";

await monitorTransaction("ETH", 4500, 1678912345);
await monitorTransaction("BTC", 100000, 1678912345);
```
## Documentation

เป็น function ที่จะทำการ monitoring การ broadcast transaction โดยถ้าหาก status ไม่ใช้ CONFIRMED หรือ FAILED จะ monitor ต่อไปเลื่อย ๆ และถ้าหากมี error เกิดขึ้นจะมีการ log error เพื่อแสดงให้เห็นว่าเกิด error อะไรขึ้น โดยจะมีการแยก function ออกเป็น 3 function ได้แก่

- ### broadcastTransaction
  เป็น function ที่จะรับ symbol, price, timestamp และสร้าง body เพื่อ fetch api ด้วย url `https://mock-node-wgqbnxruha-as.a.run.app/broadcast` และจะ return ออกมาเป็น tx_hash
- ### checkTransactionStatus
  เป็น function ที่จะรับ tx_hash และ fetch api ด้วย url `https://mock-node-wgqbnxruha-as.a.run.app/check/${txHash}` และจะ return ออกมาเป็น status ของ tx_hash นั้น ๆ
- ### monitorTransaction
  เป็น function ที่จะเรียกทั้ง 2 function เพื่อ broadcast transaction และวน checkTransactionStatus จนกว่า status จะขึ้น CONFIRMED หรือ FAILED
