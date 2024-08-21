// TA 1: Repetir cadena
document.getElementById('repeatButton').addEventListener('click', function() {
    const texto = document.getElementById('repeatText').value;
    const repeticiones = parseInt(document.getElementById('repeatCount').value);
    let result = '';
    for (let i = 0; i < repeticiones; i++) {
        result += `<p>${texto}</p>`;
    }
    document.getElementById('repeatOutput').innerHTML = result;
});

// TA 2: Invertir cadena
document.getElementById('reverseButton').addEventListener('click', function() {
    const texto = document.getElementById('reverseText').value;
    let reversedText = texto.split('').reverse().join('');
    document.getElementById('reverseOutput').innerHTML = `<p>${reversedText}</p>`;
});

// TA 3: Eliminar de arreglo
document.getElementById('removeButton').addEventListener('click', function() {
    let arreglo = document.getElementById('arrayItems').value.split(',');
    const item = document.getElementById('itemToRemove').value;
    const index = arreglo.indexOf(item);
    if (index > -1) {
        arreglo.splice(index, 1);
    }
    document.getElementById('arrayOutput').innerHTML = `<p>${arreglo.join(', ')}</p>`;
});

// TA 4: Mostrar títulos de libros
document.getElementById('titlesButton').addEventListener('click', function() {
    const books = document.getElementById('booksInput').value.split(',').map(book => ({ title: book.trim() }));
    const titles = books.map(book => book.title);
    let result = '';
    titles.forEach(title => {
        result += `<h1>${title}</h1>`;
    });
    document.getElementById('titlesOutput').innerHTML = result;
});

// TA 5: Filtrar números impares
document.getElementById('oddsButton').addEventListener('click', function() {
    let nums = document.getElementById('numbers').value.split(',').map(Number);
    const odds = nums.filter(num => num % 2 !== 0);
    let result = '';
    odds.forEach(num => {
        result += `<p style="color: violet; font-size: 16px;">${num}</p>`;
    });
    document.getElementById('oddsOutput').innerHTML = result;
});

// TA 6: Contar duplicados
document.getElementById('duplicatesButton').addEventListener('click', function() {
    let nums = document.getElementById('duplicatesNumbers').value.split(',').map(Number);
    const counts = {};
    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    let result = '';
    for (let num in counts) {
        if (counts[num] > 1) {
            result += `<h4>${num}</h4><p>Duplicado ${counts[num]} veces</p>`;
        }
    }
    document.getElementById('duplicatesOutput').innerHTML = result;
});

// TA 7: Suma de rango
document.getElementById('sumButton').addEventListener('click', function() {
    const a = parseInt(document.getElementById('rangeStart').value);
    const b = parseInt(document.getElementById('rangeEnd').value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    document.getElementById('sumOutput').innerHTML = `<p>La suma total es: ${sum}</p>`;
});

// TA 8: Conversión de temperatura
document.getElementById('toCelsiusButton').addEventListener('click', function() {
    const temp = parseInt(document.getElementById('temperature').value);
    let celsius = (temp - 32) * 5 / 9;
    document.getElementById('tempOutput').innerHTML = `<p>Celsius: ${celsius.toFixed(1)}°C</p>`;
});

document.getElementById('toFahrenheitButton').addEventListener('click', function() {
    const temp = parseInt(document.getElementById('temperature').value);
    let fahrenheit = (temp * 9 / 5) + 32;
    document.getElementById('tempOutput').innerHTML = `<p>Fahrenheit: ${fahrenheit.toFixed(1)}°F</p>`;
});

// TA 9: Año bisiesto
document.getElementById('leapYearButton').addEventListener('click', function() {
    const year = parseInt(document.getElementById('year').value);
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    document.getElementById('leapYearOutput').innerHTML = `<p>${isLeapYear ? 'Es un año bisiesto' : 'No es un año bisiesto'}</p>`;
});

// TA 10: Generar Contraseña
document.getElementById('passwordButton').addEventListener('click', function() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('passwordOutput').innerHTML = `<p>Contraseña generada: ${password}</p>`;
});

// TA 11: Persona más vieja
const people = [
    { name: "Juan", birthYear: 1985 },
    { name: "Lucía", birthYear: 1993 },
    { name: "Pedro", birthYear: 1975 }
];

document.getElementById('oldestButton').addEventListener('click', function() {
    let oldest = people.reduce((max, person) => (person.birthYear < max.birthYear ? person : max), people[0]);
    document.getElementById('oldestOutput').innerHTML = `<p>${oldest.name} es la persona más vieja</p>`;
});


