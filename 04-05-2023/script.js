function generatedArray(length, isRandom) {
  let array = [];

  if (isRandom) {
    for (let index = 0; index < length; index++) {
      array.push(Math.floor(Math.random() * 40));
    }
  } else {
    for (let index = 0; index < length; index++) {
      array.push(index);
    }
  }

  return array;
}

// --------- ES 1 ----------
/**
 * Scrivere un piccolo script javascript che
 * inverta un array senza utilizzare il metodo
 * reverse():
 */

const esercizio1 = {
  mtd1: function (array) {
    let auxArray = [];
    array.forEach((element) => {
      auxArray.unshift(element);
    });
    return auxArray;
  },
  mtd2: function (array) {
    let auxArray = [];
    let arrLengthFormalizzed = array.length - 1; //Perchè il return di .length è di interpretazione umana.

    for (let index = arrLengthFormalizzed; index >= 0; index--) {
      auxArray.push(array[index]);
    }
    return auxArray;
  },
  mtd3: function (array) {
    let auxArray = [];

    for (let index = 0; index < array.length; index++) {
      auxArray.unshift(array[index]);
    }
    return auxArray;
  },
  mtd4: function (array) {
    let auxArray = [];

    array.map((element) => {
      auxArray.unshift(element);
    });

    return auxArray;
  },
  mtd5: function (array) {
    let auxArray = [];

    let arrLengthFormalizzed = array.length - 1; //Perchè il return di .length è di interpretazione umana.

    for (let index = 0; index < array.length; index++) {
      auxArray[arrLengthFormalizzed - index] = array[index];
    }

    return auxArray;
  },
  mtd6: function (array) {
    let auxArray = [];
    for (let index = 0; index < array.length; index++) {
      auxArray.unshift(array[index]);
    }
    return auxArray;
  },
  mtd7: function (array) {
    let arrayCopy = [...array]; //Serve fare una deep copy in quanto array.shift() modifica l'array di partenza.
    let auxArray = [];
    while (arrayCopy.length > 0) {
      auxArray.unshift(arrayCopy.shift());
    }
    return auxArray;
  },
  mtd8: function (array) {
    let arrayCopy = [...array]; //Serve fare una deep copy in quanto array.shift() modifica l'array di partenza.
    let auxArray = [];
    array.forEach(() => {
      auxArray.push(arrayCopy.pop());
    });
    return auxArray;
  },
};

function es1() {
  const array = generatedArray(20);
  console.log("ORIGINAL ARRAY : ", array);
  console.log("reverseMeth1 : ", esercizio1.mtd1(array));
  console.log("reverseMeth2 : ", esercizio1.mtd2(array));
  console.log("reverseMeth3 : ", esercizio1.mtd3(array));
  console.log("reverseMeth4 : ", esercizio1.mtd4(array));
  console.log("reverseMeth5 : ", esercizio1.mtd5(array));
  console.log("reverseMeth6 : ", esercizio1.mtd6(array));
  console.log("reverseMeth7 : ", esercizio1.mtd7(array));
  console.log("reverseMeth8 : ", esercizio1.mtd8(array));
  //   NOTA: la combinazione del loop e del metodo di estrazione ed
  //   inserimento del valore può generare altri metodi più o meno efficienti.
  //   Mi fermo a 8 metodi, siccuramente ce ne sono altri.
}

// --------- ES 2 ---------
/**
 * Dato un array di numeri, stampare il
 * valore minimo e massimo:
 */

const esercizio2 = {
  mtd1: function (array) {
    let minVal = array[0];
    let maxVal = array[0];

    array.forEach((element) => {
      element > maxVal ? (maxVal = element) : (maxVal = maxVal);
      element < minVal ? (minVal = element) : (minVal = minVal);
    });
    return {
      minVal: minVal,
      maxVal: maxVal,
    };
  },
  mtd2: function (array) {
    return {
      minVal: Math.min(...array),
      maxVal: Math.max(...array),
    };
  },
  mtd3: function (array) {
    return {
      minVal: Math.min.apply(null, array),
      maxVal: Math.max.apply(null, array),
    };
  },
  mtd4: function (array) {
    let arrLegth = array.length;
    let minVal = array[0];
    let maxVal = array[0];
    while (arrLegth--) {
      array[arrLegth] > maxVal ? (maxVal = array[arrLegth]) : (maxVal = maxVal);
      array[arrLegth] < minVal ? (minVal = array[arrLegth]) : (minVal = minVal);
    }
    return {
      minVal: minVal,
      maxVal: maxVal,
    };
  },
};

function es2() {
  const array = generatedArray(20, true);
  console.log("ORIGINAL ARRAY : ", array);
  console.log("MinMaxMethod1 : ", esercizio2.mtd1(array));
  console.log("MinMaxMethod2 : ", esercizio2.mtd2(array));
  console.log("MinMaxMethod3 : ", esercizio2.mtd3(array));
  console.log("MinMaxMethod4 : ", esercizio2.mtd4(array));
}

// -------- esecuzione --------
es1();
es2();
