document.getElementById('repeatButton').addEventListener('click', function() {
    const texto = document.getElementById('repeatText').value;
    const repeticiones = parseInt(document.getElementById('repeatCount').value);
    let result = '';
    for (let i = 0; i < repeticiones; i++) {
        result += `<p>${texto}</p>`;
    }
    document.getElementById('repeatOutput').innerHTML = result;
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const texto = document.getElementById('reverseText').value;
    let reversedText = texto.split('').reverse().join('');
    document.getElementById('reverseOutput').innerHTML = `<p>${reversedText}</p>`;
});

document.getElementById('removeButton').addEventListener('click', function() {
    let arreglo = document.getElementById('arrayItems').value.split(',');
    const item = document.getElementById('itemToRemove').value;
    const index = arreglo.indexOf(item);
    if (index > -1) {
        arreglo.splice(index, 1);
    }
    document.getElementById('arrayOutput').innerHTML = `<p>${arreglo.join(', ')}</p>`;
});

document.getElementById('titlesButton').addEventListener('click', function() {
    const books = document.getElementById('booksInput').value.split(',').map(book => ({ title: book.trim() }));
    const titles = books.map(book => book.title);
    let result = '';
    titles.forEach(title => {
        result += `<h1>${title}</h1>`;
    });
    document.getElementById('titlesOutput').innerHTML = result;
});

document.getElementById('oddsButton').addEventListener('click', function() {
    let nums = document.getElementById('numbers').value.split(',').map(Number);
    const odds = nums.filter(num => num % 2 !== 0);
    let result = '';
    odds.forEach(num => {
        result += `<p style="color: violet; font-size: 16px;">${num}</p>`;
    });
    document.getElementById('oddsOutput').innerHTML = result;
});

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

document.getElementById('sumButton').addEventListener('click', function() {
    const a = parseInt(document.getElementById('rangeStart').value);
    const b = parseInt(document.getElementById('rangeEnd').value);
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    document.getElementById('sumOutput').innerHTML = `<p>La suma total es: ${sum}</p>`;
});

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

document.getElementById('leapYearButton').addEventListener('click', function() {
    const año = parseInt(document.getElementById('year').value);
    let isLeap = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    document.getElementById('leapYearOutput').innerHTML = `<p>${año} es año bisiesto: ${isLeap}</p>`;
});

document.getElementById('passwordButton').addEventListener('click', function() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    document.getElementById('passwordOutput').innerHTML = `<p>Contraseña generada: ${password}</p>`;
});

document.getElementById('oldestButton').addEventListener('click', function() {
    const people = [
        { name: 'Juan', age: 30 },
        { name: 'María', age: 50 },
        { name: 'Pedro', age: 40 }
    ];
    let oldest = people[0];
    people.forEach(person => {
        if (person.age > oldest.age) {
            oldest = person;
        }
    });
    document.getElementById('oldestOutput').innerHTML = `<p>La persona más vieja es ${oldest.name} con ${oldest.age} años.</p>`;
});
