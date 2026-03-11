let screen = document.getElementById('screen');

// إضافة الأرقام والعمليات للشاشة
function appendToScreen(value) {
    if (screen.value === 'Error') screen.value = '';
    screen.value += value;
}

// مسح الشاشة بالكامل
function clearScreen() {
    screen.value = '';
}

// حذف آخر رقم
function deleteChar() {
    screen.value = screen.value.slice(0, -1);
}

// حساب النتيجة
function calculate() {
    try {
        // eval تقوم بحساب المعادلة المكتوبة كنص
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}
