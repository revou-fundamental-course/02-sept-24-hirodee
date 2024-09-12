function calculatePerimeter() {
    // Get input values
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);

    // Validate inputs
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert('Silakan masukkan angka positif yang valid untuk semua sisi.');
        return;
    }

    // Check if the sides form a valid triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
        alert('Nilai yang dimasukkan tidak membentuk segitiga yang valid.');
        return;
    }

    // Calculate perimeter
    const perimeter = a + b + c;

    // Display result
    document.getElementById('perimeter').textContent = `Keliling Segitiga: ${perimeter.toFixed(2)}`;

    // Display process
    const process = `
        Sisi: a = ${a}, b = ${b}, c = ${c} <br>
        Keliling = a + b + c = ${a} + ${b} + ${c} = ${perimeter.toFixed(2)}
    `;
    document.getElementById('perimeter-process').innerHTML = process;
}

function calculateArea() {
    // Get input values
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Silakan masukkan angka positif yang valid untuk alas dan tinggi.');
        return;
    }

    // Calculate area
    const area = 0.5 * base * height;

    // Display result
    document.getElementById('area').textContent = `Luas Segitiga: ${area.toFixed(2)}`;

    // Display process
    const process = `
        Alas = ${base}, Tinggi = ${height} <br>
        Luas = ½ × alas × tinggi = ½ × ${base} × ${height} = ${area.toFixed(2)}
    `;
    document.getElementById('area-process').innerHTML = process;
}
