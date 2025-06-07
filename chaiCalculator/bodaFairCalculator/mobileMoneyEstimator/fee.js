function estimateTransactionFee(amountToSend) {
    const fee = Math.min(Math.max(amountToSend * 0.015, 10), 70);
    const totalDebited = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log(`Send Money Securely!`);
}

const amountToSend = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amountToSend);