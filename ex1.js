function f1() {
    var ld = document.createElement('select');

    var ele1 = document.createElement('option');
    ele1.value = 'mademoiselle';
    ele1.innerText = 'Mademoiselle';

    var ele2 = document.createElement('option');
    ele2.value = 'madame';
    ele2.innerText = 'Madame';

    ld.appendChild(ele1);
    ld.appendChild(ele2);

    var bd = document.getElementById('genre');
    bd.appendChild(ld);
} 