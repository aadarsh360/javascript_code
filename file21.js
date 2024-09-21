// object destructuring

const band={
    bandName : "led zepplin",
    famousSong : "Stairway to heaven",
    year : 1968,
    anotherFamousSong : "kashmir"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

// let {bandName ,famousSong} = band;
// console.log(bandName, famousSong);

// let{bandName: v1, famousSong: v2} = band;
// console.log(v1, v2);

let{bandName, famousSong, ...rest} = band;
console.log(bandName);
console.log(famousSong);
console.log(rest);