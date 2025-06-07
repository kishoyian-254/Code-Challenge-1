function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}

const distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distanceInKm);